// Example file structure, app/[...slug]/page.tsx
// You could alternatively use src/app/[...slug]/page.tsx//**

/**
 * Quickstart snippet
 * snippets/nextjs-app-dir-client/app/[[...slug]].tsx
 * Uses @builder.io/sdk-react
 */
import {
    Content,
    fetchOneEntry,
    getBuilderSearchParams,
    isPreviewing,
  } from '@builder.io/sdk-react';
  
  interface PageProps {
    params: {
      slug: string[];
    };
    searchParams: Record<string, string>;
  }
  
  const PUBLIC_API_KEY = 'd4173130c72d466386720bb5a107ae34';
  
  export default async function Page(props: PageProps) {
    const urlPath = '/' + (props.params?.slug?.join('/') || '');

    const content = await fetchOneEntry({
      options: getBuilderSearchParams(props.searchParams),
      apiKey: PUBLIC_API_KEY,
      model: 'page',
      userAttributes: { urlPath },
    });
  
    const peopleContent = await fetchOneEntry({
      options: getBuilderSearchParams(props.searchParams),
      apiKey: PUBLIC_API_KEY,
      model: 'people',
      userAttributes: { urlPath },
    });
  
    const canShowContent = peopleContent || isPreviewing(props.searchParams);
    console.log("content is",peopleContent);
    if (!canShowContent) {
      return (
        <>
          <h1>404</h1>
          <p>Make sure you have your content published at Builder.io.</p>
        </>
      );
    }
    return <>
    <p>the content is</p>
    <pre>
      {JSON.stringify(peopleContent, null, 2)}
    </pre>

    <p>this variation is</p>
    <pre>
      {JSON.stringify(peopleContent?.data?.sku, null, 2)}
    </pre>
    <Content content={content} apiKey={PUBLIC_API_KEY} model="page" />
    </>
  }
  