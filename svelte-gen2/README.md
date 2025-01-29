# Svelte 4 Project integrated with Builder.io


To Get Started:
Add your Builder API Key to the src/routes/[...catchall]/+page.svelte and src/routes/[...catchall]/+page.server.js files
Note: The model name is 'svelte-page', a page model I created in my Builder space due to the fact that Svelte uses localhost:5173 and not localhost:3000. 
This makes it so that I don't have to change the preview URL in Builder every time I want to preview my Svelte app.
You can either make the same model in your Builder space or change the model name in the src/routes/[...catchall]/+page.server.js file to match the model name in your Builder space.

To run the app:
npm run dev