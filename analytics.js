// Vercel Web Analytics initialization
// This follows the vanilla JavaScript approach from Vercel's documentation
(function() {
  'use strict';
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Initialize the queue function
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Set development mode if on localhost
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.vam = 'development';
  }
  
  // Load the Vercel Analytics script
  var script = document.createElement('script');
  script.src = 'https://va.vercel-scripts.com/v1/script.debug.js';
  script.defer = true;
  script.setAttribute('data-sdk-n', '@vercel/analytics');
  script.setAttribute('data-sdk-v', '1.3.1');
  
  // Insert the script
  if (document.head) {
    document.head.appendChild(script);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
