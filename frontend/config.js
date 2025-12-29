// API Configuration - Automatically detects environment
(function() {
  // Get the current hostname and protocol
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  const port = window.location.port;
  
  // Determine API URL based on environment
  let API_BASE_URL;
  
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    // Development environment
    API_BASE_URL = 'http://localhost:3001';
  } else {
    // Production environment - use same origin or environment variable
    // If backend is on same domain, use relative path
    // Otherwise, you can set this via environment variable or build process
    const productionApiUrl = window.API_BASE_URL || `${protocol}//${hostname}${port ? ':' + port : ''}`;
    API_BASE_URL = productionApiUrl;
  }
  
  // Make API_BASE_URL available globally
  window.API_BASE_URL = API_BASE_URL;
  
  console.log('API Base URL:', API_BASE_URL);
})();

