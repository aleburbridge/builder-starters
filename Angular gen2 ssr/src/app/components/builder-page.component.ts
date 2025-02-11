// app/components/builder-page.component.ts
import { BuilderContent, Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-angular";
import { customComponents } from "../builder-registry";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, Input, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { environment } from "../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-builder-page",
  standalone: true,
  imports: [Content, CommonModule],
  template: `
    <ng-container *ngIf="content || isPreviewing; else notFound">
      <builder-content
        [model]="model"
        [content]="content"
        [apiKey]="apiKey"
        [customComponents]="customComponents"
      ></builder-content>
    </ng-container>
    <ng-template #notFound>
      <div>404 - Content not found</div>
    </ng-template>
  `,
})
export class BuilderPage implements OnInit {
  @Input() model = "page";
  apiKey = environment.apiKey;
  content: BuilderContent | null = null;
  isPreviewing = isPreviewing();
  customComponents = customComponents;

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    let urlPath: string;

    if (isPlatformBrowser(this.platformId)) {
      // On browser
      urlPath = window.location.pathname || "/";
    } else {
      // On server (SSR)
      urlPath = `/${this.route.snapshot.url.map(segment => segment.path).join('/')}`;
    }

    try {
      const builderContent = await fetchOneEntry({
        model: this.model,
        apiKey: this.apiKey,
        userAttributes: { urlPath },
      });

      if (builderContent) {
        this.content = builderContent;
      }
    } catch (error) {
      console.error("Error fetching content from Builder.io:", error);
    }
  }
}
