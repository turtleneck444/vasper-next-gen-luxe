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
    try {
      // Generate CSRF token
      const token = generateCSRFToken();
      setCsrfToken(token);
      
      // Store in session storage for validation
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('csrf-token', token);
      }
      
      // Check if running in secure context
      setIsSecure(window.isSecureContext || location.protocol === 'https:');
      
      // Add security event listeners
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        // Clear sensitive data on page unload
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.removeItem('csrf-token');
        }
      };
      
      const handleVisibilityChange = () => {
        // Additional security checks when page becomes visible
        if (document.visibilityState === 'visible') {
          // Verify CSRF token is still valid
          if (typeof sessionStorage !== 'undefined') {
            const storedToken = sessionStorage.getItem('csrf-token');
            if (storedToken !== token) {
              // Silent security check - no console warnings in production
              if (process.env.NODE_ENV === 'development') {
                console.warn('Security: CSRF token mismatch detected');
              }
            }
          }
        }
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } catch (error) {
      // Fallback if security features fail
      console.error('Security initialization failed:', error);
      setCsrfToken('fallback-token');
      setIsSecure(false);
    }
  }, []);

  return (
    <SecurityContext.Provider value={{ csrfToken, isSecure }}>
      {children}
    </SecurityContext.Provider>
  );
};
