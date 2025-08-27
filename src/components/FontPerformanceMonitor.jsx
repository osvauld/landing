import { useEffect, useState } from 'react';

/**
 * Font Performance Monitor Component
 * 
 * This component monitors font loading performance and displays metrics
 * to help track the effectiveness of font optimizations.
 */
export function FontPerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fontLoadTime: 0,
    fontCount: 0,
    totalSize: 0,
    performanceScore: 0
  });

  useEffect(() => {
    // Monitor font loading performance
    const startTime = performance.now();
    
    // Check if Font Loading API is available
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        
        // Count loaded fonts
        const fontCount = document.fonts.size;
        
        // Estimate font sizes (rough calculation)
        const totalSize = fontCount * 50; // Approximate KB per font
        
        // Calculate performance score (0-100)
        const performanceScore = Math.max(0, 100 - Math.floor(loadTime / 10));
        
        setMetrics({
          fontLoadTime: Math.round(loadTime),
          fontCount,
          totalSize,
          performanceScore
        });
        
        console.log('Font Performance Metrics:', {
          fontLoadTime: `${loadTime.toFixed(0)}ms`,
          fontCount,
          totalSize: `${totalSize}KB`,
          performanceScore: `${performanceScore}/100`
        });
      });
    } else {
      // Fallback for browsers without Font Loading API
      setTimeout(() => {
        setMetrics({
          fontLoadTime: 0,
          fontCount: 3, // Estimated
          totalSize: 150, // Estimated
          performanceScore: 85 // Estimated
        });
      }, 2000);
    }
  }, []);

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && !window.location.search.includes('debug=fonts')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-dark1 border border-livnotePrimary rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <h3 className="font-JetBrainsMono text-livnotePrimary mb-2">Font Performance</h3>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.fontLoadTime < 200 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.fontLoadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Font Count:</span>
          <span>{metrics.fontCount}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Size:</span>
          <span>{metrics.totalSize}KB</span>
        </div>
        <div className="flex justify-between">
          <span>Score:</span>
          <span className={
            metrics.performanceScore >= 90 ? 'text-green-400' :
            metrics.performanceScore >= 80 ? 'text-yellow-400' : 'text-red-400'
          }>
            {metrics.performanceScore}/100
          </span>
        </div>
      </div>
      
      {/* Performance Tips */}
      <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
        {metrics.fontLoadTime > 300 && (
          <p>⚠️ Consider further font optimization</p>
        )}
        {metrics.fontLoadTime < 200 && (
          <p>✅ Font performance is excellent!</p>
        )}
      </div>
    </div>
  );
}

export default FontPerformanceMonitor; 