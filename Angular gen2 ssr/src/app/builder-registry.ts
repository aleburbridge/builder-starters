// builder-registry.ts
import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { HeadingComponent } from "./components/heading.component";

export const customComponents: RegisteredComponent[] = [
  {
    component: HeadingComponent,
    name: "Heading",
    //@ts-ignore -- Required for @builder.io/sdk v5.0.0 when using meta property with Angular
    meta: {
      selector: 'app-heading',
      standalone: true
    },
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: 'I am a heading',
      },
    ],
  },
  // other custom components here ...
];