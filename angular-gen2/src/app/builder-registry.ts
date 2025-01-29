import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { Counter } from "./components/counter.component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    meta: {
      selector: "app-counter",
      standalone: true,
    },
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
];
