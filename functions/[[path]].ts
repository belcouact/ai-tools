export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // 1. Define your App Mappings
  // Map the "Subpath" on your site to the "Real Cloudflare URL"
  const appMappings = {
    "light-gantt": "https://light-gantt.pages.dev",
    "problem-solver": "https://ps-a3.pages.dev",
    "balance-of-life": "https://life-balance.pages.dev"
  };

  // 2. Check if the user is trying to visit an app
  // We look for URLs starting with /apps/
  const pathParts = url.pathname.split('/').filter(Boolean); // ["apps", "weather", "assets", "index.js"]
  
  if (pathParts[0] === 'apps') {
    const appName = pathParts[1]; // e.g., "weather"
    const targetOrigin = appMappings[appName];

    if (targetOrigin) {
      // 3. Construct the new URL to fetch from the hidden app
      // We keep the path intact so /apps/weather/assets/style.css 
      // maps correctly if the target app handles the base path.
      
      // If your sub-app has `base: '/apps/weather/'` set in Vite, 
      // we usually just want to forward the path as is, but point to the new domain.
      
      const newUrl = new URL(context.request.url);
      newUrl.protocol = "https:";
      newUrl.hostname = new URL(targetOrigin).hostname;
      newUrl.port = ""; // Ensure no port issues
      
      // Create a mutable request based on the original
      const newRequest = new Request(newUrl.toString(), {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.body,
        redirect: "manual" 
      });

      // 4. Fetch the content from the Sub-App
      const response = await fetch(newRequest);

      // 5. Return the response to the user
      // We use HTMLRewriter to ensure internal links in the sub-app don't break
      // (Optional but recommended if meta tags differ)
      return response;
    }
  }

  // 6. If it's not an app request, serve the Main Portal (React App)
  return context.env.ASSETS.fetch(context.request);
}