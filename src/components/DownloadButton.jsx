import React, { useState, useEffect } from "react";
import { Download } from "../assets/icons/Download";

const DownloadButton = () => {
  const [platform, setPlatform] = useState("unknown");
  const [showDropdown, setShowDropdown] = useState(false);

  // Download URLs for different platforms
  const downloadUrls = {
    mac: "https://github.com/osvauld/osvauld/releases/download/alpha/osvauld_0.1.0_aarch64.dmg", // Replace with actual URL
    linux: "https://github.com/osvauld/osvauld/releases/download/alpha/osvauld_0.1.0_amd64.deb", // Replace with actual URL
    fedora: "https://github.com/osvauld/osvauld/releases/download/alpha/osvauld-0.1.0-1.x86_64.rpm", // Replace with actual URL
    windows: "https://github.com/osvauld/osvauld/releases/download/alpha/osvauld_0.1.0_x64-setup.exe", // Replace with actual URL
  };

  // Platform names for display
  const platformNames = {
    mac: "Mac (Apple Silicon)",
    linux: "Linux (Debian)",
    fedora: "Linux (Fedora)",
    windows: "Windows",
  };

  useEffect(() => {
    // Detect user's platform
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    if (userAgent.includes("mac")) {
      setPlatform("mac");
    } else if (userAgent.includes("linux")) {
      // Try to detect if it's Fedora or Debian-based
      // This is a simplified detection - you might want to enhance this
      if (userAgent.includes("fedora")) {
        setPlatform("fedora");
      } else {
        setPlatform("linux");
      }
    } else if (userAgent.includes("windows")) {
      setPlatform("windows");
    } else {
      setPlatform("unknown");
    }
  }, []);

  const handleDownload = (selectedPlatform = platform) => {
    if (selectedPlatform !== "unknown" && downloadUrls[selectedPlatform]) {
      // Create a temporary anchor element to trigger download
      const downloadUrl = downloadUrls[selectedPlatform];
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = downloadUrl.split('/').pop(); // Extract filename from URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowDropdown(false);
    } else {
      // Show dropdown for manual selection
      setShowDropdown(true);
    }
  };

  const handlePlatformSelect = (selectedPlatform) => {
    handleDownload(selectedPlatform);
  };

  return (
    <div className="relative  text-livnotePrimary">
      <button
        className="px-8 py-4 flex items-center justify-center gap-6 min-w-[200px]  border-livnotePrimary border-2 rounded-lg text-xl hover:bg-dark1 transition-all duration-300"
        onClick={() => handleDownload()}
        aria-label={`Download for ${platformNames[platform] || 'your platform'}`}
      >
        <Download size={44} />
        
        <div className="flex flex-col items-start">
          <span className="text-2xl">Download</span>
          {platform !== "unknown" && (
            <span className="text-base mt-2 font-light whitespace-nowrap">
              for {platformNames[platform]}
            </span>
          )}
        </div>
      </button>


      {/* Dropdown for platform selection */}
      {showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-64 border z-50 bg-dark1 border-livnotePrimary rounded-lg">
          <div className="p-2">
            <div className="text-sm px-3 py-2 border-b border-livnotePrimary my-1">
              Choose your platform:
            </div>
            {Object.entries(platformNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => handlePlatformSelect(key)}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-dark2 transition-all duration-300"
              >
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
};

export default DownloadButton; 