import React, { useEffect } from 'react';

declare global {
  interface Window {
    tidioChatApi?: {
      display: (show: boolean) => void;
      open: () => void;
      close: () => void;
    };
  }
}

export const TidioChat: React.FC = () => {
  useEffect(() => {
    // Tidio Chat Widget Script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/your-tidio-key.js';
    script.async = true;
    document.body.appendChild(script);

    // Configure Tidio for VasperNet
    script.onload = () => {
      if (window.tidioChatApi) {
        // Customize the chat for VasperNet IT services
        console.log('Tidio chat loaded for VasperNet');
      }
    };

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // Tidio renders its own UI
};

export default TidioChat;