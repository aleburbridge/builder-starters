import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
const builderModelName = "blog-post";

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const announcementBar = "/" + ((await props.params)?.page?.join("/") || "");

  console.log("param", (await props?.params)?.page?.join("/"));

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
      // options: {
      //   noTargeting: true,
      // },
    })
    .toPromise();

  // Safely extract data from content
  const {
    seo = null,
    featuredImage = null,
    title = "Untitled",
    publishDate = null,
    categories = [],
    pageSettings = {},
  } = content?.data || {};


  console.log("content", content);

  return (
    <div>
    <RenderBuilderContent content={content} model={builderModelName} />
      this is blog-page.tsx
    </div>
  );
}

// Revalidate the page every 24 hours
export const revalidate = 86400; // 24 hours
