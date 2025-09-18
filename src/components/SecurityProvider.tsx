import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateCSRFToken } from '../utils/security';

interface SecurityContextType {
  csrfToken: string;
  isSecure: boolean;
}

const SecurityContext = createContext<SecurityContextType>({
  csrfToken: '',
  isSecure: false,
});

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [isSecure, setIsSecure] = useState<boolean>(false);

  useEffect(() => {
    // Generate CSRF token
    const token = generateCSRFToken();
    setCsrfToken(token);
    
    // Store in session storage for validation
    sessionStorage.setItem('csrf-token', token);
    
    // Check if running in secure context
    setIsSecure(window.isSecureContext || location.protocol === 'https:');
    
    // Add security event listeners
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Clear sensitive data on page unload
      sessionStorage.removeItem('csrf-token');
    };
    
    const handleVisibilityChange = () => {
      // Additional security checks when page becomes visible
      if (document.visibilityState === 'visible') {
        // Verify CSRF token is still valid
        const storedToken = sessionStorage.getItem('csrf-token');
        if (storedToken !== token) {
          console.warn('Security: CSRF token mismatch detected');
        }
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <SecurityContext.Provider value={{ csrfToken, isSecure }}>
      {children}
    </SecurityContext.Provider>
  );
};
