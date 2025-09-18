import { useEffect, useState } from 'react';

interface MobilePerformanceConfig {
  isMobile: boolean;
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  connectionType: string;
  memoryInfo: number | null;
}

export const useMobilePerformance = () => {
  const [config, setConfig] = useState<MobilePerformanceConfig>({
    isMobile: false,
    isLowEndDevice: false,
    prefersReducedMotion: false,
    connectionType: 'unknown',
    memoryInfo: null,
  });

  useEffect(() => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768;

    // Detect low-end device based on hardware concurrency
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect connection type
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const connectionType = connection ? connection.effectiveType || 'unknown' : 'unknown';

    // Get memory info if available
    const memoryInfo = (performance as any).memory ? (performance as any).memory.usedJSHeapSize : null;

    setConfig({
      isMobile,
      isLowEndDevice,
      prefersReducedMotion,
      connectionType,
      memoryInfo,
    });

    // Optimize for mobile performance
    if (isMobile) {
      // Disable complex animations on low-end devices
      if (isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        document.documentElement.style.setProperty('--transition-duration', '0.1s');
      }

      // Optimize for slow connections
      if (connectionType === 'slow-2g' || connectionType === '2g') {
        // Disable non-critical animations
        document.documentElement.style.setProperty('--enable-animations', '0');
      }

      // Add mobile-specific optimizations
      document.documentElement.classList.add('mobile-optimized');
      
      // Optimize touch scrolling
      document.body.style.webkitOverflowScrolling = 'touch';
      
      // Prevent zoom on input focus
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }

    // Cleanup
    return () => {
      document.documentElement.classList.remove('mobile-optimized');
    };
  }, []);

  // Performance optimization functions
  const optimizeForMobile = () => {
    if (config.isMobile) {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));

      // Optimize scroll performance
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Add scroll optimizations here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', optimizeScroll);
        imageObserver.disconnect();
      };
    }
    return () => {};
  };

  const shouldReduceAnimations = () => {
    return config.prefersReducedMotion || config.isLowEndDevice || config.connectionType === 'slow-2g';
  };

  const shouldLazyLoad = () => {
    return config.isMobile && (config.connectionType === 'slow-2g' || config.connectionType === '2g');
  };

  return {
    ...config,
    optimizeForMobile,
    shouldReduceAnimations,
    shouldLazyLoad,
  };
};
