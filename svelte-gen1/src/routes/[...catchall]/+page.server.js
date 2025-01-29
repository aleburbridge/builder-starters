// src/routes/[...catchall]/+page.server.js

import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';

export async function load(event) {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'svelte-page',
    apiKey: 'd4173130c72d466386720bb5a107ae34',
    query: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || '/',
    },
  });
  return { content };
}