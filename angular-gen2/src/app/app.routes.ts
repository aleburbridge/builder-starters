import { Routes } from '@angular/router';

import { BuilderPage } from "./components/builder-page.component";

export const routes: Routes = [{
  path: "**",
  component: BuilderPage
}];