// src/routes/[...catchall]/+page.server.js

import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';

export async function load(event) {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: 'YOUR_API_KEY',
    query: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || '/',
    },
  });
  return { content };
}