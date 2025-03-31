# Gatsby Project integrated with Builder.io

This project runs on localhost:3000 for easy testing in Builder. If you want to update this, change the "start" script in package.json

To Get Started:
Add your Builder API Key to src/templates/page.jsx and gatsby-config.js
Note: The model name in page.jsxis 'gatsby-page', a page model I created in my Builder space due to the fact that Gatsby uses localhost:8000 and not localhost:3000. 
This makes it so that I don't have to change the preview URL in Builder every time I want to preview my Gatsby app.

To run the app:
npm run develop