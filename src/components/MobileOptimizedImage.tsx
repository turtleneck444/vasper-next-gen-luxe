import React, { useState, useRef, useEffect } from 'react';
import { useMobilePerformance } from '../hooks/useMobilePerformance';

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export const MobileOptimizedImage: React.FC<MobileOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const mobilePerformance = useMobilePerformance();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Load images 50px before they come into view
        threshold: 0.1,
      }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to placeholder on error
    setIsLoaded(false);
  };

  // Determine if we should lazy load
  const shouldLazyLoad = !priority && mobilePerformance.shouldLazyLoad();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            width: width || '100%',
            height: height || '200px',
          }}
        >
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover opacity-0"
          />
        </div>
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={shouldLazyLoad && !isInView ? placeholder : src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          // Optimize for mobile
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          // Prevent layout shift
          aspectRatio: width && height ? `${width} / ${height}` : 'auto',
        }}
      />

      {/* Loading indicator for slow connections */}
      {!isLoaded && isInView && mobilePerformance.connectionType === 'slow-2g' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
