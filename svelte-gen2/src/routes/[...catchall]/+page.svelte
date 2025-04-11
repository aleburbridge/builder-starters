<!-- src/routes/[...catchall]/+page.svelte -->

<script lang="ts">
    import { isPreviewing, Content } from "@builder.io/sdk-svelte";
  
    const apiKey = 'YOUR_API_KEY';
    const model = 'page';
  
    // Define the type for data
    interface PageData {
        content?: {
            data?: {
                title?: string;
            };
        };
    }
    
    export let data: PageData;
  
    // this data comes from the function in `+page.server.js`, which runs on the server only
    // show unpublished content when in preview mode.
    const canShowContent = data.content || isPreviewing();
  </script>
  
  <main>
    <h1>Welcome to SvelteKit</h1>
    <h2>Below is your Builder Content:</h2>
    <!-- TO DO: Add your Public API Key in <Content/>-->
    {#if canShowContent}
      <div>page Title: {data.content?.data?.title || "Unpublished"}</div>
      <Content
        model={model}
        content={data.content}
        apiKey={apiKey} 
      />
    {:else}
      Content Not Found
    {/if}
  </main>
    