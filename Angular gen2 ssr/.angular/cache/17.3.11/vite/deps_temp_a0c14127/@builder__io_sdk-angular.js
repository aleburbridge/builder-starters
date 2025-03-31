import {
  DomSanitizer
} from "./chunk-A6RJJMOL.js";
import {
  CommonModule,
  DOCUMENT,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-XFCOUONH.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Injectable,
  Input,
  InputFlags,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  forwardRef,
  reflectComponentType,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5FUJWLSI.js";

// node_modules/@builder.io/sdk-angular/lib/browser/fesm2022/builder.io-sdk-angular.mjs
var _c0 = ["tagnameTemplate"];
var _c1 = ["*"];
var _c2 = (a0, a1) => ({
  attributes: a0,
  actionAttributes: a1
});
function DynamicRenderer_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function DynamicRenderer_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicRenderer_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DynamicRenderer_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.TagName)("ngComponentOutletInputs", ɵɵpureFunction2(3, _c2, ctx_r0.attributes, ctx_r0.actionAttributes))("ngComponentOutletContent", ctx_r0.myContent);
  }
}
function DynamicRenderer_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicRenderer_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DynamicRenderer_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.TagName)("ngComponentOutletInputs", ɵɵpureFunction2(3, _c2, ctx_r0.attributes, ctx_r0.actionAttributes))("ngComponentOutletContent", ctx_r0.myContent);
  }
}
function DynamicRenderer_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DynamicRenderer_ng_container_2_ng_container_1_Template, 2, 6, "ng-container", 1)(2, DynamicRenderer_ng_container_2_ng_container_2_Template, 2, 6, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.useTypeOf(ctx_r0.TagName) === "string");
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.useTypeOf(ctx_r0.TagName) === "string"));
  }
}
function DynamicRenderer_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicRenderer_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DynamicRenderer_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.TagName)("ngComponentOutletInputs", ɵɵpureFunction2(3, _c2, ctx_r0.attributes, ctx_r0.actionAttributes))("ngComponentOutletContent", ctx_r0.myContent);
  }
}
var _c3 = ["v"];
function BlockStyles_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "inlined-styles", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("styles", ctx_r0.css)("nonce", ctx_r0.context.nonce);
  }
}
var _c4 = ["wrapperTemplate"];
var _c5 = ["*", "*"];
function InteractiveElement_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function InteractiveElement_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "awaiter", 2);
    ɵɵprojection(2, 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("load", ctx_r0.Wrapper.load)("fallback", ctx_r0.Wrapper.fallback)("props", ctx_r0.wrapperProps)("attributes", ctx_r0.attributes);
  }
}
function InteractiveElement_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function InteractiveElement_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InteractiveElement_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.Wrapper)("ngComponentOutletInputs", ctx_r0.mergedInputs_atkjh2)("ngComponentOutletContent", ctx_r0.myContent);
  }
}
function ComponentRef_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "block", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("block", child_r1)("context", ctx_r1.context)("registeredComponents", ctx_r1.registeredComponents)("linkComponent", ctx_r1.linkComponent);
  }
}
function ComponentRef_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentRef_ng_template_0_ng_container_0_ng_container_1_Template, 2, 4, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.blockChildren)("ngForTrackBy", ctx_r1.trackByChild0);
  }
}
function ComponentRef_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ComponentRef_ng_template_0_ng_container_0_Template, 2, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.componentRef);
  }
}
function ComponentRef_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ComponentRef_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentRef_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r1.Wrapper)("ngComponentOutletInputs", ctx_r1.mergedInputs_v6przu)("ngComponentOutletContent", ctx_r1.myContent);
  }
}
function Block_ng_container_0_ng_container_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "block", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("block", child_r1)("registeredComponents", ctx_r1.registeredComponents)("linkComponent", ctx_r1.linkComponent)("context", ctx_r1.context);
  }
}
function Block_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "block-wrapper", 2);
    ɵɵelement(2, "component-ref", 3);
    ɵɵtemplate(3, Block_ng_container_0_ng_container_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("Wrapper", ctx_r1.Tag)("block", ctx_r1.processedBlock)("context", ctx_r1.context);
    ɵɵadvance();
    ɵɵproperty("componentRef", ctx_r1.componentRefProps.componentRef)("componentOptions", ctx_r1.componentRefProps.componentOptions)("blockChildren", ctx_r1.componentRefProps.blockChildren)("context", ctx_r1.componentRefProps.context)("registeredComponents", ctx_r1.componentRefProps.registeredComponents)("linkComponent", ctx_r1.componentRefProps.linkComponent)("builderBlock", ctx_r1.componentRefProps.builderBlock)("includeBlockProps", ctx_r1.componentRefProps.includeBlockProps)("isInteractive", ctx_r1.componentRefProps.isInteractive);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.childrenWithoutParentComponent)("ngForTrackBy", ctx_r1.trackByChild0);
  }
}
function Block_ng_container_0_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "repeated-block", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("repeatContext", data_r3.context)("block", data_r3.block)("registeredComponents", ctx_r1.registeredComponents)("linkComponent", ctx_r1.linkComponent);
  }
}
function Block_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Block_ng_container_0_ng_container_2_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.repeatItem)("ngForTrackBy", ctx_r1.trackByData1);
  }
}
function Block_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Block_ng_container_0_ng_container_2_ng_container_1_Template, 4, 14, "ng-container", 0)(2, Block_ng_container_0_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.repeatItem);
    ɵɵadvance();
    ɵɵproperty("ngIf", !!ctx_r1.repeatItem);
  }
}
function Block_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "component-ref", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("componentRef", ctx_r1.componentRefProps.componentRef)("componentOptions", ctx_r1.componentRefProps.componentOptions)("blockChildren", ctx_r1.componentRefProps.blockChildren)("context", ctx_r1.componentRefProps.context)("registeredComponents", ctx_r1.componentRefProps.registeredComponents)("linkComponent", ctx_r1.componentRefProps.linkComponent)("builderBlock", ctx_r1.componentRefProps.builderBlock)("includeBlockProps", ctx_r1.componentRefProps.includeBlockProps)("isInteractive", ctx_r1.componentRefProps.isInteractive);
  }
}
function Block_ng_container_0_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "repeated-block", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("repeatContext", data_r4.context)("block", data_r4.block)("registeredComponents", ctx_r1.registeredComponents)("linkComponent", ctx_r1.linkComponent);
  }
}
function Block_ng_container_0_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Block_ng_container_0_ng_container_3_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.repeatItem)("ngForTrackBy", ctx_r1.trackByData2);
  }
}
function Block_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Block_ng_container_0_ng_container_3_ng_container_1_Template, 2, 9, "ng-container", 0)(2, Block_ng_container_0_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.repeatItem);
    ɵɵadvance();
    ɵɵproperty("ngIf", !!ctx_r1.repeatItem);
  }
}
function Block_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "block-styles", 1);
    ɵɵtemplate(2, Block_ng_container_0_ng_container_2_Template, 3, 2, "ng-container", 0)(3, Block_ng_container_0_ng_container_3_Template, 3, 2, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("block", ctx_r1.processedBlock)("context", ctx_r1.context);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r1.blockComponent == null ? null : ctx_r1.blockComponent.noWrap));
    ɵɵadvance();
    ɵɵproperty("ngIf", !!(ctx_r1.blockComponent == null ? null : ctx_r1.blockComponent.noWrap));
  }
}
var _c6 = ["blocksWrapperRef"];
var _c7 = ["blockswrapperTemplate"];
function BlocksWrapper_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function BlocksWrapper_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Blocks_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "block", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const block_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("block", block_r1)("linkComponent", ctx_r1.linkComponent)("context", ctx_r1.context || ctx_r1.builderContext)("registeredComponents", ctx_r1.registeredComponents || (ctx_r1.componentsContext == null ? null : ctx_r1.componentsContext.registeredComponents));
  }
}
function Blocks_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Blocks_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.blocks)("ngForTrackBy", ctx_r1.trackByBlock0);
  }
}
var _c8 = ["elRef0"];
function Columns_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "inlined-styles", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("styles", ctx_r0.node_2_InlinedStyles)("nonce", ctx_r0.builderContext.nonce);
  }
}
function Columns_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "dynamic-renderer", 5);
    ɵɵelement(2, "blocks", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("TagName", ctx_r0.node_3_DynamicRenderer(column_r2, index_r3))("actionAttributes", ctx_r0.node_4_DynamicRenderer(column_r2, index_r3))("attributes", ctx_r0.node_5_DynamicRenderer(column_r2, index_r3));
    ɵɵadvance();
    ɵɵproperty("path", ctx_r0.node_6_Blocks(column_r2, index_r3))("parent", ctx_r0.builderBlock.id)("context", ctx_r0.builderContext)("registeredComponents", ctx_r0.builderComponents)("linkComponent", ctx_r0.builderLinkComponent)("blocks", column_r2.blocks)("styleProp", ctx_r0.node_7_Blocks(column_r2, index_r3));
  }
}
function BuilderImage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "source", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("srcset", ctx_r0.webpSrcSet);
  }
}
function BuilderImage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.node_3_div);
  }
}
function BuilderImage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function BuilderImage_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵprojection(2, 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
}
function Accordion_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelement(2, "blocks", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const item_r5 = ctx_r3.$implicit;
    const index_r2 = ctx_r3.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.node_5_div(item_r5, index_r2));
    ɵɵproperty("ngStyle", ctx_r2.accordionDetailStyles);
    ɵɵadvance();
    ɵɵproperty("blocks", item_r5.detail)("path", ctx_r2.node_6_Blocks(item_r5, index_r2))("parent", ctx_r2.builderBlock.id)("context", ctx_r2.builderContext)("registeredComponents", ctx_r2.builderComponents)("linkComponent", ctx_r2.builderLinkComponent);
  }
}
function Accordion_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0)(1);
    ɵɵelementStart(2, "div", 2);
    ɵɵlistener("click", function Accordion_ng_container_1_Template_div_click_2_listener() {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    });
    ɵɵelement(3, "blocks", 3);
    ɵɵelementEnd();
    ɵɵtemplate(4, Accordion_ng_container_1_ng_container_4_Template, 3, 9, "ng-container", 4);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r2.node_0_div(item_r5, index_r2));
    ɵɵproperty("ngStyle", ctx_r2.node_1_div(item_r5, index_r2));
    ɵɵattribute("data-index", index_r2);
    ɵɵadvance();
    ɵɵproperty("blocks", item_r5.title)("path", ctx_r2.node_3_Blocks(item_r5, index_r2))("parent", ctx_r2.builderBlock.id)("context", ctx_r2.builderContext)("registeredComponents", ctx_r2.builderComponents)("linkComponent", ctx_r2.builderLinkComponent);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.node_4_Show(item_r5, index_r2));
  }
}
var _c9 = ["rootRef"];
function PersonalizationContainer_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "template");
    ɵɵtext(2, "\n            ");
    ɵɵelement(3, "blocks", 2);
    ɵɵtext(4, "\n          ");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const variant_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("data-variant-id", ctx_r2.node_1_template(variant_r1, index_r2));
    ɵɵadvance(2);
    ɵɵproperty("blocks", variant_r1.blocks)("parent", ctx_r2.builderBlock == null ? null : ctx_r2.builderBlock.id)("path", ctx_r2.node_2_Blocks(variant_r1, index_r2));
  }
}
function PersonalizationContainer_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PersonalizationContainer_ng_container_3_ng_container_1_Template, 5, 4, "ng-container", 3);
    ɵɵelement(2, "inlined-styles", 4)(3, "inlined-script", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.variants)("ngForTrackBy", ctx_r2.trackByVariant0);
    ɵɵadvance();
    ɵɵproperty("nonce", (ctx_r2.builderContext == null ? null : ctx_r2.builderContext.nonce) || "")("styles", ctx_r2.hideVariantsStyleString)("id", ctx_r2.node_3_InlinedStyles);
    ɵɵadvance();
    ɵɵproperty("nonce", (ctx_r2.builderContext == null ? null : ctx_r2.builderContext.nonce) || "")("scriptStr", ctx_r2.scriptStr)("id", ctx_r2.node_4_InlinedScript);
  }
}
function Tabs_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 3);
    ɵɵlistener("click", function Tabs_ng_container_2_Template_span_click_1_listener() {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    });
    ɵɵelement(2, "blocks", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.node_1_span(tab_r4, index_r2));
    ɵɵproperty("ngStyle", ctx_r2.node_2_span(tab_r4, index_r2));
    ɵɵadvance();
    ɵɵproperty("parent", ctx_r2.builderBlock.id)("path", ctx_r2.node_4_Blocks(tab_r4, index_r2))("blocks", tab_r4.label)("context", ctx_r2.builderContext)("registeredComponents", ctx_r2.builderComponents)("linkComponent", ctx_r2.builderLinkComponent);
  }
}
function Tabs_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵelement(2, "blocks", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("parent", ctx_r2.builderBlock.id)("path", ctx_r2.node_6_Blocks)("blocks", ctx_r2.node_7_Blocks)("context", ctx_r2.builderContext)("registeredComponents", ctx_r2.builderComponents)("linkComponent", ctx_r2.builderLinkComponent);
  }
}
var _c10 = ["elementRef"];
var _c11 = ["elem"];
var _c12 = ["formRef"];
function FormComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "blocks", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("blocks", ctx_r1.errorMessage)("context", ctx_r1.builderContext);
  }
}
function FormComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "blocks", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("blocks", ctx_r1.sendingMessage)("context", ctx_r1.builderContext);
  }
}
function FormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "pre", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.node_4_div);
  }
}
function FormComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "blocks", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("blocks", ctx_r1.successMessage)("context", ctx_r1.builderContext);
  }
}
function SelectComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "option");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵattribute("value", option_r1.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r1.name || option_r1.value, " ");
  }
}
var _c13 = ["videoRef"];
var _c14 = ["elRef1"];
function BuilderVideo_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.node_4_div);
  }
}
function BuilderVideo_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.node_5_div);
  }
}
function BuilderVideo_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵprojection(2, 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.node_6_div);
  }
}
var _c15 = ["contentwrapperTemplate"];
function EnableEditor_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function EnableEditor_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EnableEditor_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, EnableEditor_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.ContentWrapper)("ngComponentOutletInputs", ctx_r0.mergedInputs_ekawrq)("ngComponentOutletContent", ctx_r0.myContent);
  }
}
function ContentComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "inlined-script", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("scriptStr", ctx_r0.scriptStr)("nonce", ctx_r0.nonce || "");
  }
}
function ContentComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "content-styles", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nonce", ctx_r0.nonce || "")("isNestedRender", ctx_r0.isNestedRender)("contentId", ctx_r0.builderContextSignal.content == null ? null : ctx_r0.builderContextSignal.content.id)("cssCode", ctx_r0.builderContextSignal.content == null ? null : ctx_r0.builderContextSignal.content.data == null ? null : ctx_r0.builderContextSignal.content.data.cssCode)("customFonts", ctx_r0.builderContextSignal.content == null ? null : ctx_r0.builderContextSignal.content.data == null ? null : ctx_r0.builderContextSignal.content.data.customFonts);
  }
}
function ContentVariants_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "inlined-script", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("scriptStr", ctx_r0.node_0_InlinedScript)("nonce", ctx_r0.nonce || "");
  }
}
function ContentVariants_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "content-component", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("apiHost", ctx_r0.apiHost)("isNestedRender", ctx_r0.isNestedRender)("nonce", ctx_r0.nonce)("content", variant_r2)("showContent", false)("model", ctx_r0.model)("data", ctx_r0.data)("context", ctx_r0.context)("apiKey", ctx_r0.apiKey)("apiVersion", ctx_r0.apiVersion)("customComponents", ctx_r0.customComponents)("linkComponent", ctx_r0.linkComponent)("canTrack", ctx_r0.canTrack)("locale", ctx_r0.locale)("enrich", ctx_r0.enrich)("isSsrAbTest", ctx_r0.shouldRenderVariants)("blocksWrapper", ctx_r0.blocksWrapper)("blocksWrapperProps", ctx_r0.blocksWrapperProps)("contentWrapper", ctx_r0.contentWrapper)("contentWrapperProps", ctx_r0.contentWrapperProps)("trustedHosts", ctx_r0.trustedHosts);
  }
}
function ContentVariants_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "inlined-styles", 3)(2, "inlined-script", 4);
    ɵɵtemplate(3, ContentVariants_ng_container_2_ng_container_3_Template, 2, 21, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("styles", ctx_r0.hideVariantsStyleString)("nonce", ctx_r0.nonce || "");
    ɵɵadvance();
    ɵɵproperty("scriptStr", ctx_r0.updateCookieAndStylesScriptStr)("nonce", ctx_r0.nonce || "");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.getVariants(ctx_r0.content))("ngForTrackBy", ctx_r0.trackByVariant0);
  }
}
var EMPTY_HTML_ELEMENTS = /* @__PURE__ */ new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
var isEmptyElement = (tagName) => {
  return typeof tagName === "string" && EMPTY_HTML_ELEMENTS.has(tagName.toLowerCase());
};
var DynamicRenderer = class _DynamicRenderer {
  useTypeOf(obj) {
    return typeof obj;
  }
  constructor(vcRef) {
    this.vcRef = vcRef;
    this.isEmptyElement = isEmptyElement;
  }
  ngOnInit() {
    if (typeof this.TagName === "string") {
      switch (this.TagName) {
        case "a":
          this.TagName = DynamicA;
          break;
        case "button":
          this.TagName = DynamicButton;
          break;
        case "div":
          this.TagName = DynamicDiv$1;
          break;
        case "span":
          this.TagName = DynamicSpan;
          break;
        case "p":
          this.TagName = DynamicP;
          break;
        case "img":
          this.TagName = DynamicImg;
          break;
        case "input":
          this.TagName = DynamicInput;
          break;
        case "textarea":
          this.TagName = DynamicTextarea;
          break;
        case "select":
          this.TagName = DynamicSelect;
          break;
        case "option":
          this.TagName = DynamicOption;
          break;
        case "form":
          this.TagName = DynamicForm;
          break;
        case "label":
          this.TagName = DynamicLabel;
          break;
        case "ul":
          this.TagName = DynamicUl;
          break;
        case "li":
          this.TagName = DynamicLi;
          break;
        case "table":
          this.TagName = DynamicTable;
          break;
        case "tr":
          this.TagName = DynamicTr;
          break;
        case "td":
          this.TagName = DynamicTd;
          break;
        case "th":
          this.TagName = DynamicTh;
          break;
        case "thead":
          this.TagName = DynamicThead;
          break;
        case "tbody":
          this.TagName = DynamicTbody;
          break;
        case "footer":
          this.TagName = DynamicFooter;
          break;
        case "header":
          this.TagName = DynamicHeader;
          break;
        case "nav":
          this.TagName = DynamicNav;
          break;
        case "section":
          this.TagName = DynamicSection;
          break;
        case "article":
          this.TagName = DynamicArticle;
          break;
        case "aside":
          this.TagName = DynamicAside;
          break;
        case "h1":
          this.TagName = DynamicH1;
          break;
        case "h2":
          this.TagName = DynamicH2;
          break;
        case "h3":
          this.TagName = DynamicH3;
          break;
        case "h4":
          this.TagName = DynamicH4;
          break;
        case "h5":
          this.TagName = DynamicH5;
          break;
        case "h6":
          this.TagName = DynamicH6;
          break;
        case "blockquote":
          this.TagName = DynamicBlockquote;
          break;
        case "code":
          this.TagName = DynamicCode;
          break;
        case "pre":
          this.TagName = DynamicPre;
          break;
        case "figure":
          this.TagName = DynamicFigure;
          break;
        case "figcaption":
          this.TagName = DynamicFigcaption;
          break;
        case "video":
          this.TagName = DynamicVideo;
          break;
        case "audio":
          this.TagName = DynamicAudio;
          break;
        case "canvas":
          this.TagName = DynamicCanvas;
          break;
        case "iframe":
          this.TagName = DynamicIframe;
          break;
        default:
          break;
      }
    }
    this.myContent = [this.vcRef.createEmbeddedView(this.tagnameTemplateRef).rootNodes];
  }
  static {
    this.ɵfac = function DynamicRenderer_Factory(t) {
      return new (t || _DynamicRenderer)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicRenderer,
      selectors: [["dynamic-renderer"], ["DynamicRenderer"]],
      viewQuery: function DynamicRenderer_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagnameTemplateRef = _t.first);
        }
      },
      inputs: {
        TagName: "TagName",
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 2,
      consts: [["tagnameTemplate", ""], [4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletContent"]],
      template: function DynamicRenderer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, DynamicRenderer_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, DynamicRenderer_ng_container_2_Template, 3, 2, "ng-container", 1)(3, DynamicRenderer_ng_container_3_Template, 2, 6, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isEmptyElement(ctx.TagName));
          ɵɵadvance();
          ɵɵproperty("ngIf", !!ctx.isEmptyElement(ctx.TagName));
        }
      },
      dependencies: [CommonModule, NgComponentOutlet, NgIf],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicRenderer, [{
    type: Component,
    args: [{
      selector: "dynamic-renderer, DynamicRenderer",
      template: `
    <ng-template #tagnameTemplate><ng-content></ng-content></ng-template>
    <ng-container *ngIf="!isEmptyElement(TagName)">
      <ng-container *ngIf="useTypeOf(TagName) === 'string'">
        <ng-container
          *ngComponentOutlet="
            TagName;
            inputs: {
              attributes: attributes,
              actionAttributes: actionAttributes
            };
            content: myContent
          "
        ></ng-container>
      </ng-container>
      <ng-container *ngIf="!(useTypeOf(TagName) === 'string')">
        <ng-container
          *ngComponentOutlet="
            TagName;
            inputs: {
              attributes: attributes,
              actionAttributes: actionAttributes
            };
            content: myContent
          "
        ></ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="!!isEmptyElement(TagName)">
      <ng-container
        *ngComponentOutlet="
          TagName;
          inputs: {
            attributes: attributes,
            actionAttributes: actionAttributes
          };
          content: myContent
        "
      ></ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    TagName: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    tagnameTemplateRef: [{
      type: ViewChild,
      args: ["tagnameTemplate", {
        static: true
      }]
    }]
  });
})();
var DynamicA = class _DynamicA {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicA_Factory(t) {
      return new (t || _DynamicA)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicA,
      selectors: [["dynamic-a"], ["DynamicA"]],
      viewQuery: function DynamicA_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicA_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "a", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicA, [{
    type: Component,
    args: [{
      selector: "dynamic-a, DynamicA",
      template: ` <a #v ><ng-content></ng-content></a> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicButton = class _DynamicButton {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicButton_Factory(t) {
      return new (t || _DynamicButton)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicButton,
      selectors: [["dynamic-button"], ["DynamicButton"]],
      viewQuery: function DynamicButton_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "button", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicButton, [{
    type: Component,
    args: [{
      selector: "dynamic-button, DynamicButton",
      template: ` <button #v ><ng-content></ng-content></button> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicDiv$1 = class DynamicDiv {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicDiv_Factory(t) {
      return new (t || DynamicDiv)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: DynamicDiv,
      selectors: [["dynamic-div"], ["DynamicDiv"]],
      viewQuery: function DynamicDiv_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicDiv_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDiv$1, [{
    type: Component,
    args: [{
      selector: "dynamic-div, DynamicDiv",
      template: ` <div #v ><ng-content></ng-content></div> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicSpan = class _DynamicSpan {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicSpan_Factory(t) {
      return new (t || _DynamicSpan)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicSpan,
      selectors: [["dynamic-span"], ["DynamicSpan"]],
      viewQuery: function DynamicSpan_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicSpan_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "span", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicSpan, [{
    type: Component,
    args: [{
      selector: "dynamic-span, DynamicSpan",
      template: ` <span #v ><ng-content></ng-content></span> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicP = class _DynamicP {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicP_Factory(t) {
      return new (t || _DynamicP)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicP,
      selectors: [["dynamic-p"], ["DynamicP"]],
      viewQuery: function DynamicP_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicP_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "p", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicP, [{
    type: Component,
    args: [{
      selector: "dynamic-p, DynamicP",
      template: ` <p #v ><ng-content></ng-content></p> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicImg = class _DynamicImg {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicImg_Factory(t) {
      return new (t || _DynamicImg)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicImg,
      selectors: [["dynamic-img"], ["DynamicImg"]],
      viewQuery: function DynamicImg_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicImg_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "img", null, 0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicImg, [{
    type: Component,
    args: [{
      selector: "dynamic-img, DynamicImg",
      template: ` <img #v /> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicInput = class _DynamicInput {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicInput_Factory(t) {
      return new (t || _DynamicInput)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicInput,
      selectors: [["dynamic-input"], ["DynamicInput"]],
      viewQuery: function DynamicInput_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicInput_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "input", null, 0);
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicInput, [{
    type: Component,
    args: [{
      selector: "dynamic-input, DynamicInput",
      template: ` <input #v /> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTextarea = class _DynamicTextarea {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTextarea_Factory(t) {
      return new (t || _DynamicTextarea)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTextarea,
      selectors: [["dynamic-textarea"], ["DynamicTextarea"]],
      viewQuery: function DynamicTextarea_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTextarea_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "textarea", null, 0);
          ɵɵtext(2, "<ng-content></ng-content>");
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTextarea, [{
    type: Component,
    args: [{
      selector: "dynamic-textarea, DynamicTextarea",
      template: ` <textarea #v ><ng-content></ng-content></textarea> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicSelect = class _DynamicSelect {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicSelect_Factory(t) {
      return new (t || _DynamicSelect)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicSelect,
      selectors: [["dynamic-select"], ["DynamicSelect"]],
      viewQuery: function DynamicSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "select", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicSelect, [{
    type: Component,
    args: [{
      selector: "dynamic-select, DynamicSelect",
      template: ` <select #v ><ng-content></ng-content></select> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicOption = class _DynamicOption {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicOption_Factory(t) {
      return new (t || _DynamicOption)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicOption,
      selectors: [["dynamic-option"], ["DynamicOption"]],
      viewQuery: function DynamicOption_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicOption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "option", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicOption, [{
    type: Component,
    args: [{
      selector: "dynamic-option, DynamicOption",
      template: ` <option #v ><ng-content></ng-content></option> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicForm = class _DynamicForm {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicForm_Factory(t) {
      return new (t || _DynamicForm)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicForm,
      selectors: [["dynamic-form"], ["DynamicForm"]],
      viewQuery: function DynamicForm_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicForm_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "form", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicForm, [{
    type: Component,
    args: [{
      selector: "dynamic-form, DynamicForm",
      template: ` <form #v ><ng-content></ng-content></form> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicLabel = class _DynamicLabel {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicLabel_Factory(t) {
      return new (t || _DynamicLabel)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicLabel,
      selectors: [["dynamic-label"], ["DynamicLabel"]],
      viewQuery: function DynamicLabel_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "label", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicLabel, [{
    type: Component,
    args: [{
      selector: "dynamic-label, DynamicLabel",
      template: ` <label #v ><ng-content></ng-content></label> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicUl = class _DynamicUl {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicUl_Factory(t) {
      return new (t || _DynamicUl)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicUl,
      selectors: [["dynamic-ul"], ["DynamicUl"]],
      viewQuery: function DynamicUl_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicUl_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "ul", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicUl, [{
    type: Component,
    args: [{
      selector: "dynamic-ul, DynamicUl",
      template: ` <ul #v ><ng-content></ng-content></ul> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicLi = class _DynamicLi {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicLi_Factory(t) {
      return new (t || _DynamicLi)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicLi,
      selectors: [["dynamic-li"], ["DynamicLi"]],
      viewQuery: function DynamicLi_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicLi_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "li", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicLi, [{
    type: Component,
    args: [{
      selector: "dynamic-li, DynamicLi",
      template: ` <li #v ><ng-content></ng-content></li> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTable = class _DynamicTable {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTable_Factory(t) {
      return new (t || _DynamicTable)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTable,
      selectors: [["dynamic-table"], ["DynamicTable"]],
      viewQuery: function DynamicTable_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTable_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "table", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTable, [{
    type: Component,
    args: [{
      selector: "dynamic-table, DynamicTable",
      template: ` <table #v ><ng-content></ng-content></table> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTr = class _DynamicTr {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTr_Factory(t) {
      return new (t || _DynamicTr)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTr,
      selectors: [["dynamic-tr"], ["DynamicTr"]],
      viewQuery: function DynamicTr_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTr_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tr", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTr, [{
    type: Component,
    args: [{
      selector: "dynamic-tr, DynamicTr",
      template: ` <tr #v ><ng-content></ng-content></tr> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTd = class _DynamicTd {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTd_Factory(t) {
      return new (t || _DynamicTd)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTd,
      selectors: [["dynamic-td"], ["DynamicTd"]],
      viewQuery: function DynamicTd_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTd_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "td", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTd, [{
    type: Component,
    args: [{
      selector: "dynamic-td, DynamicTd",
      template: ` <td #v ><ng-content></ng-content></td> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTh = class _DynamicTh {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTh_Factory(t) {
      return new (t || _DynamicTh)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTh,
      selectors: [["dynamic-th"], ["DynamicTh"]],
      viewQuery: function DynamicTh_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTh_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "th", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTh, [{
    type: Component,
    args: [{
      selector: "dynamic-th, DynamicTh",
      template: ` <th #v ><ng-content></ng-content></th> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicThead = class _DynamicThead {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicThead_Factory(t) {
      return new (t || _DynamicThead)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicThead,
      selectors: [["dynamic-thead"], ["DynamicThead"]],
      viewQuery: function DynamicThead_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicThead_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "thead", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicThead, [{
    type: Component,
    args: [{
      selector: "dynamic-thead, DynamicThead",
      template: ` <thead #v ><ng-content></ng-content></thead> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicTbody = class _DynamicTbody {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicTbody_Factory(t) {
      return new (t || _DynamicTbody)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicTbody,
      selectors: [["dynamic-tbody"], ["DynamicTbody"]],
      viewQuery: function DynamicTbody_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicTbody_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tbody", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTbody, [{
    type: Component,
    args: [{
      selector: "dynamic-tbody, DynamicTbody",
      template: ` <tbody #v ><ng-content></ng-content></tbody> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicFooter = class _DynamicFooter {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicFooter_Factory(t) {
      return new (t || _DynamicFooter)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicFooter,
      selectors: [["dynamic-footer"], ["DynamicFooter"]],
      viewQuery: function DynamicFooter_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicFooter_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "footer", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFooter, [{
    type: Component,
    args: [{
      selector: "dynamic-footer, DynamicFooter",
      template: ` <footer #v ><ng-content></ng-content></footer> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicHeader = class _DynamicHeader {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicHeader_Factory(t) {
      return new (t || _DynamicHeader)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicHeader,
      selectors: [["dynamic-header"], ["DynamicHeader"]],
      viewQuery: function DynamicHeader_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicHeader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "header", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicHeader, [{
    type: Component,
    args: [{
      selector: "dynamic-header, DynamicHeader",
      template: ` <header #v ><ng-content></ng-content></header> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicNav = class _DynamicNav {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicNav_Factory(t) {
      return new (t || _DynamicNav)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicNav,
      selectors: [["dynamic-nav"], ["DynamicNav"]],
      viewQuery: function DynamicNav_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicNav_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "nav", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicNav, [{
    type: Component,
    args: [{
      selector: "dynamic-nav, DynamicNav",
      template: ` <nav #v ><ng-content></ng-content></nav> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicSection = class _DynamicSection {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicSection_Factory(t) {
      return new (t || _DynamicSection)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicSection,
      selectors: [["dynamic-section"], ["DynamicSection"]],
      viewQuery: function DynamicSection_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicSection_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "section", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicSection, [{
    type: Component,
    args: [{
      selector: "dynamic-section, DynamicSection",
      template: ` <section #v ><ng-content></ng-content></section> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicArticle = class _DynamicArticle {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicArticle_Factory(t) {
      return new (t || _DynamicArticle)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicArticle,
      selectors: [["dynamic-article"], ["DynamicArticle"]],
      viewQuery: function DynamicArticle_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicArticle_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "article", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicArticle, [{
    type: Component,
    args: [{
      selector: "dynamic-article, DynamicArticle",
      template: ` <article #v ><ng-content></ng-content></article> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicAside = class _DynamicAside {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicAside_Factory(t) {
      return new (t || _DynamicAside)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicAside,
      selectors: [["dynamic-aside"], ["DynamicAside"]],
      viewQuery: function DynamicAside_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicAside_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "aside", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicAside, [{
    type: Component,
    args: [{
      selector: "dynamic-aside, DynamicAside",
      template: ` <aside #v ><ng-content></ng-content></aside> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH1 = class _DynamicH1 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH1_Factory(t) {
      return new (t || _DynamicH1)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH1,
      selectors: [["dynamic-h1"], ["DynamicH1"]],
      viewQuery: function DynamicH1_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH1_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h1", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH1, [{
    type: Component,
    args: [{
      selector: "dynamic-h1, DynamicH1",
      template: ` <h1 #v ><ng-content></ng-content></h1> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH2 = class _DynamicH2 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH2_Factory(t) {
      return new (t || _DynamicH2)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH2,
      selectors: [["dynamic-h2"], ["DynamicH2"]],
      viewQuery: function DynamicH2_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH2_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h2", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH2, [{
    type: Component,
    args: [{
      selector: "dynamic-h2, DynamicH2",
      template: ` <h2 #v ><ng-content></ng-content></h2> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH3 = class _DynamicH3 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH3_Factory(t) {
      return new (t || _DynamicH3)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH3,
      selectors: [["dynamic-h3"], ["DynamicH3"]],
      viewQuery: function DynamicH3_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH3_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h3", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH3, [{
    type: Component,
    args: [{
      selector: "dynamic-h3, DynamicH3",
      template: ` <h3 #v ><ng-content></ng-content></h3> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH4 = class _DynamicH4 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH4_Factory(t) {
      return new (t || _DynamicH4)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH4,
      selectors: [["dynamic-h4"], ["DynamicH4"]],
      viewQuery: function DynamicH4_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH4_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h4", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH4, [{
    type: Component,
    args: [{
      selector: "dynamic-h4, DynamicH4",
      template: ` <h4 #v ><ng-content></ng-content></h4> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH5 = class _DynamicH5 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH5_Factory(t) {
      return new (t || _DynamicH5)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH5,
      selectors: [["dynamic-h5"], ["DynamicH5"]],
      viewQuery: function DynamicH5_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH5_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h5", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH5, [{
    type: Component,
    args: [{
      selector: "dynamic-h5, DynamicH5",
      template: ` <h5 #v ><ng-content></ng-content></h5> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicH6 = class _DynamicH6 {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicH6_Factory(t) {
      return new (t || _DynamicH6)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicH6,
      selectors: [["dynamic-h6"], ["DynamicH6"]],
      viewQuery: function DynamicH6_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicH6_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "h6", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicH6, [{
    type: Component,
    args: [{
      selector: "dynamic-h6, DynamicH6",
      template: ` <h6 #v ><ng-content></ng-content></h6> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicBlockquote = class _DynamicBlockquote {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicBlockquote_Factory(t) {
      return new (t || _DynamicBlockquote)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicBlockquote,
      selectors: [["dynamic-blockquote"], ["DynamicBlockquote"]],
      viewQuery: function DynamicBlockquote_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicBlockquote_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "blockquote", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicBlockquote, [{
    type: Component,
    args: [{
      selector: "dynamic-blockquote, DynamicBlockquote",
      template: ` <blockquote #v ><ng-content></ng-content></blockquote> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicCode = class _DynamicCode {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicCode_Factory(t) {
      return new (t || _DynamicCode)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicCode,
      selectors: [["dynamic-code"], ["DynamicCode"]],
      viewQuery: function DynamicCode_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicCode_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "code", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicCode, [{
    type: Component,
    args: [{
      selector: "dynamic-code, DynamicCode",
      template: ` <code #v ><ng-content></ng-content></code> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicPre = class _DynamicPre {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicPre_Factory(t) {
      return new (t || _DynamicPre)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicPre,
      selectors: [["dynamic-pre"], ["DynamicPre"]],
      viewQuery: function DynamicPre_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicPre_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "pre", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicPre, [{
    type: Component,
    args: [{
      selector: "dynamic-pre, DynamicPre",
      template: ` <pre #v ><ng-content></ng-content></pre> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicFigure = class _DynamicFigure {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicFigure_Factory(t) {
      return new (t || _DynamicFigure)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicFigure,
      selectors: [["dynamic-figure"], ["DynamicFigure"]],
      viewQuery: function DynamicFigure_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicFigure_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "figure", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFigure, [{
    type: Component,
    args: [{
      selector: "dynamic-figure, DynamicFigure",
      template: ` <figure #v ><ng-content></ng-content></figure> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicFigcaption = class _DynamicFigcaption {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicFigcaption_Factory(t) {
      return new (t || _DynamicFigcaption)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicFigcaption,
      selectors: [["dynamic-figcaption"], ["DynamicFigcaption"]],
      viewQuery: function DynamicFigcaption_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicFigcaption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "figcaption", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicFigcaption, [{
    type: Component,
    args: [{
      selector: "dynamic-figcaption, DynamicFigcaption",
      template: ` <figcaption #v ><ng-content></ng-content></figcaption> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicVideo = class _DynamicVideo {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicVideo_Factory(t) {
      return new (t || _DynamicVideo)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicVideo,
      selectors: [["dynamic-video"], ["DynamicVideo"]],
      viewQuery: function DynamicVideo_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicVideo_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "video", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicVideo, [{
    type: Component,
    args: [{
      selector: "dynamic-video, DynamicVideo",
      template: ` <video #v ><ng-content></ng-content></video> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicAudio = class _DynamicAudio {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicAudio_Factory(t) {
      return new (t || _DynamicAudio)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicAudio,
      selectors: [["dynamic-audio"], ["DynamicAudio"]],
      viewQuery: function DynamicAudio_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicAudio_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "audio", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicAudio, [{
    type: Component,
    args: [{
      selector: "dynamic-audio, DynamicAudio",
      template: ` <audio #v ><ng-content></ng-content></audio> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicCanvas = class _DynamicCanvas {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicCanvas_Factory(t) {
      return new (t || _DynamicCanvas)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicCanvas,
      selectors: [["dynamic-canvas"], ["DynamicCanvas"]],
      viewQuery: function DynamicCanvas_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicCanvas_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "canvas", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicCanvas, [{
    type: Component,
    args: [{
      selector: "dynamic-canvas, DynamicCanvas",
      template: ` <canvas #v ><ng-content></ng-content></canvas> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var DynamicIframe = class _DynamicIframe {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    this.setAttributes(this.v?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (changes.attributes) {
      this.setAttributes(this.v?.nativeElement, this.attributes, changes.attributes.currentValue);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicIframe_Factory(t) {
      return new (t || _DynamicIframe)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicIframe,
      selectors: [["dynamic-iframe"], ["DynamicIframe"]],
      viewQuery: function DynamicIframe_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""]],
      template: function DynamicIframe_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "iframe", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicIframe, [{
    type: Component,
    args: [{
      selector: "dynamic-iframe, DynamicIframe",
      template: ` <iframe #v ><ng-content></ng-content></iframe> `,
      standalone: true,
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var TARGET = "angular";
var getClassPropName = () => {
  switch (TARGET) {
    case "react":
    case "reactNative":
    case "rsc":
      return "className";
    case "svelte":
    case "vue":
    case "solid":
    case "qwik":
    case "angular":
      return "class";
  }
};
var BuilderButton = class _BuilderButton {
  constructor() {
    this.node_0_DynamicRenderer = null;
    this.node_1_DynamicRenderer = null;
  }
  attrs() {
    return __spreadValues(__spreadProps(__spreadValues({}, this.attributes), {
      [getClassPropName()]: `${this.link ? "" : "builder-button"} ${this.attributes[getClassPropName()] || ""}`
    }), this.link ? {
      href: this.link,
      target: this.openLinkInNewTab ? "_blank" : void 0,
      role: "link"
    } : {
      role: "button"
    });
  }
  ngOnInit() {
    this.node_0_DynamicRenderer = this.attrs();
    this.node_1_DynamicRenderer = {};
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_DynamicRenderer = this.attrs();
      this.node_1_DynamicRenderer = {};
    }
  }
  static {
    this.ɵfac = function BuilderButton_Factory(t) {
      return new (t || _BuilderButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderButton,
      selectors: [["builder-button"]],
      inputs: {
        attributes: "attributes",
        link: "link",
        openLinkInNewTab: "openLinkInNewTab",
        builderLinkComponent: "builderLinkComponent",
        text: "text"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [[3, "attributes", "TagName", "actionAttributes"]],
      template: function BuilderButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "dynamic-renderer", 0);
          ɵɵtext(1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("attributes", ctx.node_0_DynamicRenderer)("TagName", ctx.link ? ctx.builderLinkComponent || "a" : "button")("actionAttributes", ctx.node_1_DynamicRenderer);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.text, " ");
        }
      },
      dependencies: [CommonModule, DynamicRenderer],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderButton, [{
    type: Component,
    args: [{
      selector: "builder-button",
      template: `
    <dynamic-renderer
      [attributes]="node_0_DynamicRenderer"
      [TagName]="link ? builderLinkComponent || 'a' : 'button'"
      [actionAttributes]="node_1_DynamicRenderer"
    >
      {{text}}
    </dynamic-renderer>
  `,
      standalone: true,
      imports: [CommonModule, DynamicRenderer],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    attributes: [{
      type: Input
    }],
    link: [{
      type: Input
    }],
    openLinkInNewTab: [{
      type: Input
    }],
    builderLinkComponent: [{
      type: Input
    }],
    text: [{
      type: Input
    }]
  });
})();
var BuilderContext = class _BuilderContext {
  rootSetState() {
  }
  constructor() {
    this.content = null;
    this.context = {};
    this.localState = void 0;
    this.rootState = {};
    this.apiKey = null;
    this.apiVersion = void 0;
    this.componentInfos = {};
    this.inheritedStyles = {};
    this.BlocksWrapper = "div";
    this.BlocksWrapperProps = {};
    this.nonce = "";
    this.model = "";
  }
  static {
    this.ɵfac = function BuilderContext_Factory(t) {
      return new (t || _BuilderContext)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BuilderContext,
      factory: _BuilderContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ComponentsContext = class _ComponentsContext {
  constructor() {
    this.registeredComponents = {};
  }
  static {
    this.ɵfac = function ComponentsContext_Factory(t) {
      return new (t || _ComponentsContext)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ComponentsContext,
      factory: _ComponentsContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentsContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var MSG_PREFIX = "[Builder.io]: ";
var logger = {
  log: (...message) => console.log(MSG_PREFIX, ...message),
  error: (...message) => console.error(MSG_PREFIX, ...message),
  warn: (...message) => console.warn(MSG_PREFIX, ...message),
  debug: (...message) => console.debug(MSG_PREFIX, ...message)
};
var get = (obj, path, defaultValue) => {
  const result = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean).reduce((res, key) => res !== null && res !== void 0 ? res[key] : res, obj);
  return result === void 0 || result === obj ? defaultValue : result;
};
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
var convertSearchParamsToQueryObject = (searchParams) => {
  const options = {};
  searchParams.forEach((value, key) => {
    options[key] = value;
  });
  return options;
};
var normalizeSearchParams = (searchParams) => searchParams instanceof URLSearchParams ? convertSearchParamsToQueryObject(searchParams) : searchParams;
var getSearchString = (search) => {
  if (typeof search === "string") {
    return search;
  } else if (search instanceof URLSearchParams) {
    return search.toString();
  }
  return new URLSearchParams(search).toString();
};
function isIframe() {
  return isBrowser() && window.self !== window.top;
}
function isEditing(search) {
  return isIframe() && (TARGET === "reactNative" || // accessing window.location.search is safe here because `isIframe()` is only `true` if we're in a browser.
  getSearchString(search || window.location.search).indexOf("builder.frameEditing=") !== -1);
}
var getLocation = () => {
  if (TARGET === "reactNative") {
    return null;
  } else if (isBrowser()) {
    const parsedLocation = new URL(location.href);
    if (parsedLocation.pathname === "") {
      parsedLocation.pathname = "/";
    }
    return parsedLocation;
  } else {
    console.warn("Cannot get location for tracking in non-browser environment");
    return null;
  }
};
var getUserAgent = () => typeof navigator === "object" && navigator.userAgent || "";
var getUserAttributes = () => {
  const userAgent = getUserAgent();
  const isMobile = {
    Android() {
      return userAgent.match(/Android/i);
    },
    BlackBerry() {
      return userAgent.match(/BlackBerry/i);
    },
    iOS() {
      return userAgent.match(/iPhone|iPod/i);
    },
    Opera() {
      return userAgent.match(/Opera Mini/i);
    },
    Windows() {
      return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i);
    },
    any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || TARGET === "reactNative";
    }
  };
  const isTablet = userAgent.match(/Tablet|iPad/i);
  const url = getLocation();
  return {
    urlPath: url?.pathname,
    host: url?.host || url?.hostname,
    device: isTablet ? "tablet" : isMobile.any() ? "mobile" : "desktop"
  };
};
var getFunctionArguments = ({
  builder,
  context,
  event,
  state
}) => {
  return Object.entries({
    state,
    Builder: builder,
    // legacy
    builder,
    context,
    event
  });
};
var getBuilderGlobals = () => ({
  isEditing: isEditing(),
  isBrowser: isBrowser(),
  isServer: !isBrowser(),
  getUserAttributes: () => getUserAttributes()
});
var parseCode = (code, {
  isExpression = true
}) => {
  const useReturn = (
    // we disable this for cases where we definitely don't want a return
    isExpression && !(code.includes(";") || code.includes(" return ") || code.trim().startsWith("return "))
  );
  const useCode = useReturn ? `return (${code});` : code;
  return useCode;
};
function flattenState({
  rootState,
  localState,
  rootSetState
}) {
  return new Proxy(rootState, {
    get: (target, prop) => {
      if (localState && prop in localState) {
        return localState[prop];
      }
      const val = target[prop];
      if (typeof val === "object" && val !== null) {
        return flattenState({
          rootState: val,
          localState: void 0,
          rootSetState: rootSetState ? (subState) => {
            target[prop] = subState;
            rootSetState(target);
          } : void 0
        });
      }
      return val;
    },
    set: (target, prop, value) => {
      if (localState && prop in localState) {
        throw new Error("Writing to local state is not allowed as it is read-only.");
      }
      target[prop] = value;
      rootSetState?.(target);
      return true;
    }
  });
}
var runInBrowser = ({
  code,
  builder,
  context,
  event,
  localState,
  rootSetState,
  rootState
}) => {
  const functionArgs = getFunctionArguments({
    builder,
    context,
    event,
    state: flattenState({
      rootState,
      localState,
      rootSetState
    })
  });
  return new Function(...functionArgs.map(([name]) => name), code)(...functionArgs.map(([, value]) => value));
};
var checkIsDefined = (maybeT) => maybeT !== null && maybeT !== void 0;
function isNodeRuntime() {
  return typeof process !== "undefined" && checkIsDefined(process?.versions?.node);
}
var shouldForceBrowserRuntimeInNode = ({
  shouldLogWarning
}) => {
  if (!isNodeRuntime())
    return false;
  const isArm64 = process.arch === "arm64";
  const isNode20 = process.version.startsWith("v20");
  const hasNoNodeSnapshotNodeOption = process.env.NODE_OPTIONS?.includes("--no-node-snapshot");
  if (isArm64 && isNode20 && !hasNoNodeSnapshotNodeOption) {
    if (shouldLogWarning) {
      logger.log(`Skipping usage of \`isolated-vm\` to avoid crashes in Node v20 on an arm64 machine.
    If you would like to use the \`isolated-vm\` package on this machine, please provide the \`NODE_OPTIONS=--no-node-snapshot\` config to your Node process.
    See https://github.com/BuilderIO/builder/blob/main/packages/sdks/README.md#node-v20--m1-macs-apple-silicon-support for more information.
    `);
    }
    return true;
  }
  return false;
};
var chooseBrowserOrServerEval = (args) => isBrowser() || shouldForceBrowserRuntimeInNode({
  shouldLogWarning: true
}) ? runInBrowser(args) : runInBrowser(args);
var STATE_GETTER_REGEX = /^(return )?(\s*)?state(?<getPath>(\.\w+)+)(\s*);?$/;
var VIRTUAL_INDEX_REGEX = /(\s)*var(\s)+_virtual_index(\s)*=(\s)*state(?<getPath>(\.\w+)+)(\s*);?(\s)*return(\s)*_virtual_index(\s)*/;
var getSimpleExpressionGetPath = (code) => {
  return STATE_GETTER_REGEX.exec(code.trim())?.groups?.getPath?.slice(1) || VIRTUAL_INDEX_REGEX.exec(code.trim())?.groups?.getPath?.slice(1);
};
function evaluate({
  code,
  context,
  localState,
  rootState,
  rootSetState,
  event,
  isExpression = true
}) {
  if (code.trim() === "") {
    return void 0;
  }
  const getPath = getSimpleExpressionGetPath(code.trim());
  if (getPath) {
    return get(__spreadValues(__spreadValues({}, rootState), localState), getPath);
  }
  const args = {
    code: parseCode(code, {
      isExpression
    }),
    builder: getBuilderGlobals(),
    context,
    event,
    rootSetState,
    rootState,
    localState
  };
  try {
    const newEval = chooseBrowserOrServerEval(args);
    return newEval;
  } catch (e) {
    logger.error("Failed code evaluation: " + e.message, {
      code
    });
    return void 0;
  }
}
function getBlockComponentOptions(block, context) {
  return __spreadValues(__spreadValues(__spreadValues({}, block.component?.options), block.options), evaluateTextComponentTextOption(block, context));
}
var evaluateTextComponentTextOption = (block, context) => {
  if (block.component?.name === "Text" && block.component.options?.text && typeof block.component.options.text === "string") {
    return __spreadProps(__spreadValues({}, block.component.options), {
      text: block.component.options.text.replace(/{{([^}]+)}}/g, (_match, group) => evaluate({
        code: group,
        context,
        localState: context.localState,
        rootState: context.rootState,
        rootSetState: context.rootSetState
      }))
    });
  }
};
function omit(obj, ...values) {
  const newObject = Object.assign({}, obj);
  for (const key of values) {
    delete newObject[key];
  }
  return newObject;
}
function traverse(obj, callback, parent2 = null, key = null, visited = /* @__PURE__ */ new WeakSet()) {
  if (obj == null || typeof obj !== "object") {
    callback(obj, (newValue) => {
      if (parent2 !== null && key !== null) {
        parent2[key] = newValue;
      }
    });
    return;
  }
  if (visited.has(obj)) {
    return;
  }
  visited.add(obj);
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const update = (newValue) => {
        obj[index] = newValue;
      };
      callback(item, update);
      traverse(item, callback, obj, index, visited);
    });
  } else {
    Object.entries(obj).forEach(([key2, value]) => {
      const update = (newValue) => {
        obj[key2] = newValue;
      };
      callback(value, update);
      traverse(value, callback, obj, key2, visited);
    });
  }
}
function isLocalizedField(value) {
  return value && typeof value === "object" && value["@type"] === "@builder.io/core:LocalizedValue";
}
function containsLocalizedValues(data) {
  if (!data || !Object.getOwnPropertyNames(data).length) {
    return false;
  }
  let hasLocalizedValues = false;
  traverse(data, (value) => {
    if (isLocalizedField(value)) {
      hasLocalizedValues = true;
      return;
    }
  });
  return hasLocalizedValues;
}
function extractLocalizedValues(data, locale) {
  if (!data || !Object.getOwnPropertyNames(data).length) {
    return {};
  }
  traverse(data, (value, update) => {
    if (isLocalizedField(value)) {
      update(value[locale] ?? void 0);
    }
  });
  return data;
}
function resolveLocalizedValues(block, locale) {
  if (block.component?.options && containsLocalizedValues(block.component?.options)) {
    if (!locale) {
      console.warn("[Builder.io] In order to use localized fields in Builder, you must pass a locale prop to the BuilderComponent or to options object while fetching the content to resolve localized fields. Learn more: https://www.builder.io/c/docs/localization-inline#targeting-and-inline-localization");
    }
    block.component.options = extractLocalizedValues(block.component.options, locale ?? "Default");
  }
  return block;
}
var fastClone = (obj) => JSON.parse(JSON.stringify(obj));
var set = (obj, _path, value) => {
  if (Object(obj) !== obj) {
    return obj;
  }
  const path = Array.isArray(_path) ? _path : _path.toString().match(/[^.[\]]+/g);
  path.slice(0, -1).reduce((a, c, i) => Object(a[c]) === a[c] ? a[c] : a[c] = Math.abs(Number(path[i + 1])) >> 0 === +path[i + 1] ? [] : {}, obj)[path[path.length - 1]] = value;
  return obj;
};
function transformBlock(block) {
  return block;
}
function deepCloneWithConditions(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneWithConditions(item));
  }
  if (obj["@type"] === "@builder.io/sdk:Element") {
    return obj;
  }
  const clonedObj = {};
  for (const key in obj) {
    if (key !== "meta" && Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepCloneWithConditions(obj[key]);
    }
  }
  return clonedObj;
}
var IS_SDK_WITHOUT_CACHED_PROCESSED_BLOCK = ["svelte", "vue", "angular", "qwik", "solid"].includes(TARGET);
var getCopy = (block) => {
  if (IS_SDK_WITHOUT_CACHED_PROCESSED_BLOCK) {
    const copy = fastClone(block);
    const copied = __spreadProps(__spreadValues({}, copy), {
      properties: __spreadValues({}, copy.properties),
      actions: __spreadValues({}, copy.actions)
    });
    return copied;
  } else {
    const copy = deepCloneWithConditions(omit(block, "children", "meta"));
    return __spreadProps(__spreadValues({}, copy), {
      properties: __spreadValues({}, copy.properties),
      actions: __spreadValues({}, copy.actions),
      children: block.children,
      meta: block.meta
    });
  }
};
var evaluateBindings = ({
  block,
  context,
  localState,
  rootState,
  rootSetState
}) => {
  if (!block.bindings) {
    return block;
  }
  const copied = getCopy(block);
  for (const binding in block.bindings) {
    const expression = block.bindings[binding];
    const value = evaluate({
      code: expression,
      localState,
      rootState,
      rootSetState,
      context
    });
    set(copied, binding, value);
  }
  return copied;
};
function getProcessedBlock({
  block,
  context,
  localState,
  rootState,
  rootSetState
}) {
  let transformedBlock = resolveLocalizedValues(block, rootState.locale);
  transformedBlock = transformBlock(transformedBlock);
  return evaluateBindings({
    block: transformedBlock,
    localState,
    rootState,
    rootSetState,
    context
  });
}
var DynamicDiv2 = class _DynamicDiv {
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  ngAfterViewInit() {
    const el = this.v?.nativeElement;
    if (!el) {
      return;
    }
    this.setAttributes(el, this.attributes);
    this.setAttributes(el, this.actionAttributes);
    this.setAttributes(el, this.showContentProps);
    this.setAttribute(el, "class", [this.classProp ?? "", this.className ?? ""].join(" ").trim());
    this.handleStyleProp(el, this.style);
    this.setAttribute(el, "builder-parent-id", this.builderParentId);
    this.setAttribute(el, "builder-path", this.builderPath);
    this.setAttribute(el, "builder-model", this.builderModel);
    this.setAttribute(el, "builder-content-id", this.builderContentId);
    this.setAttribute(el, "hidden", this.hidden);
    this.setAttribute(el, "aria-hidden", this.ariaHidden);
  }
  ngOnChanges(changes) {
    const el = this.v?.nativeElement;
    if (!el) {
      return;
    }
    if (Object.keys(changes).length === 0) {
      return;
    }
    if (changes.attributes) {
      this.setAttributes(el, this.attributes, changes.attributes.currentValue);
    }
    if (changes.actionAttributes) {
      this.setAttributes(el, this.actionAttributes, changes.actionAttributes.currentValue);
    }
    if (changes.showContentProps) {
      this.setAttributes(el, this.showContentProps, changes.showContentProps.currentValue);
    }
    if (changes.classProp || changes.className) {
      this.setAttribute(el, "class", [this.classProp ?? "", this.className ?? ""].join(" ").trim());
    }
    if (changes.style)
      this.handleStyleProp(el, this.style);
    if (changes.builderParentId)
      this.setAttribute(el, "builder-parent-id", this.builderParentId);
    if (changes.builderPath)
      this.setAttribute(el, "builder-path", this.builderPath);
    if (changes.builderModel)
      this.setAttribute(el, "builder-model", this.builderModel);
    if (changes.builderContentId)
      this.setAttribute(el, "builder-content-id", this.builderContentId);
    if (changes.hidden)
      this.setAttribute(el, "hidden", this.hidden);
    if (changes.ariaHidden)
      this.setAttribute(el, "aria-hidden", this.ariaHidden);
  }
  setAttributes(el, value, changes) {
    if (!el)
      return;
    const target = changes ? changes : value;
    if (!target)
      return;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key, target[key] ?? "");
      }
    });
  }
  setAttribute(el, key, value) {
    if (value) {
      this.renderer.setAttribute(el, key, value);
    }
  }
  handleStyleProp(el, style) {
    if (typeof style === "object") {
      Object.entries(style).forEach(([key, value]) => {
        this.renderer.setStyle(el, key, value);
      });
    } else {
      this.renderer.setAttribute(el, "style", style);
    }
  }
  ngOnDestroy() {
    this._listenerFns.forEach((fn) => fn());
  }
  static {
    this.ɵfac = function DynamicDiv_Factory(t) {
      return new (t || _DynamicDiv)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DynamicDiv,
      selectors: [["dynamic-div"], ["DynamicDiv"]],
      viewQuery: function DynamicDiv_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.v = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        actionAttributes: "actionAttributes",
        BlockWrapperProps: "BlockWrapperProps",
        builderPath: [InputFlags.None, "builder-path", "builderPath"],
        builderParentId: [InputFlags.None, "builder-parent-id", "builderParentId"],
        BlocksWrapperProps: "BlocksWrapperProps",
        contentWrapperProps: "contentWrapperProps",
        builderModel: [InputFlags.None, "builder-model", "builderModel"],
        builderContentId: [InputFlags.None, "builder-content-id", "builderContentId"],
        ref: "ref",
        classProp: [InputFlags.None, "class", "classProp"],
        style: "style",
        showContentProps: "showContentProps",
        onClick: "onClick",
        onMouseEnter: "onMouseEnter",
        onKeyPress: "onKeyPress",
        hidden: "hidden",
        ariaHidden: [InputFlags.None, "aria-hidden", "ariaHidden"],
        className: "className"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 0,
      consts: [["v", ""], [3, "click", "mouseenter"]],
      template: function DynamicDiv_Template1(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵlistener("click", function DynamicDiv_Template1_div_click_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onClick && ctx.onClick($event));
          })("mouseenter", function DynamicDiv_Template1_div_mouseenter_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMouseEnter && ctx.onMouseEnter($event));
          });
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}", ".props-blocks-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicDiv2, [{
    type: Component,
    args: [{
      selector: "dynamic-div, DynamicDiv",
      template: `
    <div
      #v
      (click)="onClick && onClick($event)"
      (mouseenter)="onMouseEnter && onMouseEnter($event)"
    >
      <ng-content></ng-content>
    </div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n", ".props-blocks-wrapper{display:flex;flex-direction:column;align-items:stretch}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    actionAttributes: [{
      type: Input
    }],
    BlockWrapperProps: [{
      type: Input
    }],
    builderPath: [{
      type: Input,
      args: ["builder-path"]
    }],
    builderParentId: [{
      type: Input,
      args: ["builder-parent-id"]
    }],
    BlocksWrapperProps: [{
      type: Input
    }],
    contentWrapperProps: [{
      type: Input
    }],
    builderModel: [{
      type: Input,
      args: ["builder-model"]
    }],
    builderContentId: [{
      type: Input,
      args: ["builder-content-id"]
    }],
    ref: [{
      type: Input
    }],
    classProp: [{
      type: Input,
      args: ["class"]
    }],
    style: [{
      type: Input
    }],
    showContentProps: [{
      type: Input
    }],
    onClick: [{
      type: Input
    }],
    onMouseEnter: [{
      type: Input
    }],
    onKeyPress: [{
      type: Input
    }],
    hidden: [{
      type: Input
    }],
    ariaHidden: [{
      type: Input,
      args: ["aria-hidden"]
    }],
    className: [{
      type: Input
    }],
    v: [{
      type: ViewChild,
      args: ["v", {
        read: ElementRef
      }]
    }]
  });
})();
var camelToKebabCase = (str) => str ? str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase() : "";
function throttle(func, wait, options = {}) {
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  return function() {
    const now = Date.now();
    if (!previous && options.leading === false)
      previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function assign(target, ..._args) {
  const to = Object(target);
  for (let index = 1; index < arguments.length; index++) {
    const nextSource = arguments[index];
    if (nextSource != null) {
      for (const nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}
function bindAnimations(animations) {
  if (TARGET === "reactNative") {
    return;
  }
  for (const animation of animations) {
    switch (animation.trigger) {
      case "pageLoad":
        triggerAnimation(animation);
        break;
      case "scrollInView":
        bindScrollInViewAnimation(animation);
        break;
    }
  }
}
function warnElementNotPresent(id) {
  console.warn(`Cannot animate element: element with ID ${id} not found!`);
}
function augmentAnimation(animation, element) {
  const stylesUsed = getAllStylesUsed(animation);
  const computedStyle = getComputedStyle(element);
  const firstStyles = animation.steps[0].styles;
  const lastStyles = animation.steps[animation.steps.length - 1].styles;
  const bothStyles = [firstStyles, lastStyles];
  for (const styles of bothStyles) {
    for (const style of stylesUsed) {
      if (!(style in styles)) {
        styles[style] = computedStyle[style];
      }
    }
  }
}
function getAllStylesUsed(animation) {
  const properties = [];
  for (const step of animation.steps) {
    for (const key in step.styles) {
      if (properties.indexOf(key) === -1) {
        properties.push(key);
      }
    }
  }
  return properties;
}
function triggerAnimation(animation) {
  const elements = Array.prototype.slice.call(document.getElementsByClassName(animation.elementId || animation.id || ""));
  if (!elements.length) {
    warnElementNotPresent(animation.elementId || animation.id || "");
    return;
  }
  Array.from(elements).forEach((element) => {
    augmentAnimation(animation, element);
    element.style.transition = "none";
    element.style.transitionDelay = "0";
    assign(element.style, animation.steps[0].styles);
    setTimeout(() => {
      element.style.transition = `all ${animation.duration}s ${camelToKebabCase(animation.easing)}`;
      if (animation.delay) {
        element.style.transitionDelay = animation.delay + "s";
      }
      assign(element.style, animation.steps[1].styles);
      setTimeout(() => {
        element.style.transition = "";
        element.style.transitionDelay = "";
      }, (animation.delay || 0) * 1e3 + animation.duration * 1e3 + 100);
    });
  });
}
function bindScrollInViewAnimation(animation) {
  const elements = Array.prototype.slice.call(document.getElementsByClassName(animation.elementId || animation.id || ""));
  if (!elements.length) {
    warnElementNotPresent(animation.elementId || animation.id || "");
    return;
  }
  Array.from(elements).forEach((element) => {
    augmentAnimation(animation, element);
    let triggered = false;
    let pendingAnimation = false;
    function immediateOnScroll() {
      if (!triggered && isScrolledIntoView(element)) {
        triggered = true;
        pendingAnimation = true;
        setTimeout(() => {
          assign(element.style, animation.steps[1].styles);
          if (!animation.repeat) {
            document.removeEventListener("scroll", onScroll);
          }
          setTimeout(() => {
            pendingAnimation = false;
            if (!animation.repeat) {
              element.style.transition = "";
              element.style.transitionDelay = "";
            }
          }, (animation.duration + (animation.delay || 0)) * 1e3 + 100);
        });
      } else if (animation.repeat && triggered && !pendingAnimation && !isScrolledIntoView(element)) {
        triggered = false;
        assign(element.style, animation.steps[0].styles);
      }
    }
    const onScroll = throttle(immediateOnScroll, 200, {
      leading: false
    });
    function isScrolledIntoView(elem) {
      const rect = elem.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const thresholdPercent = (animation.thresholdPercent || 0) / 100;
      const threshold = thresholdPercent * windowHeight;
      return rect.bottom > threshold && rect.top < windowHeight - threshold;
    }
    const defaultState = animation.steps[0].styles;
    function attachDefaultState() {
      assign(element.style, defaultState);
    }
    attachDefaultState();
    setTimeout(() => {
      element.style.transition = `all ${animation.duration}s ${camelToKebabCase(animation.easing)}`;
      if (animation.delay) {
        element.style.transitionDelay = animation.delay + "s";
      }
    });
    document.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true
    });
    immediateOnScroll();
  });
}
var convertStyleMapToCSSArray = (style) => {
  const cssProps = Object.entries(style).map(([key, value]) => {
    if (typeof value === "string") {
      return `${camelToKebabCase(key)}: ${value};`;
    } else {
      return void 0;
    }
  });
  return cssProps.filter(checkIsDefined);
};
var convertStyleMapToCSS = (style) => convertStyleMapToCSSArray(style).join("\n");
var createCssClass = ({
  mediaQuery,
  className,
  styles
}) => {
  const cssClass = `.${className} {
    ${convertStyleMapToCSS(styles)}
  }`;
  if (mediaQuery) {
    return `${mediaQuery} {
      ${cssClass}
    }`;
  } else {
    return cssClass;
  }
};
function transformStyleProperty({
  style
}) {
  return style;
}
var getStyle = ({
  block,
  context
}) => {
  return mapStyleObjToStrIfNeeded(transformStyleProperty({
    style: block.style || {},
    context,
    block
  }));
};
function mapStyleObjToStrIfNeeded(style) {
  switch (TARGET) {
    case "svelte":
    case "vue":
    case "solid":
    case "angular":
      return convertStyleMapToCSSArray(style).join(" ");
    case "qwik":
    case "reactNative":
    case "react":
    case "rsc":
      return style;
  }
}
var checkIsComponentRestricted = (component, model) => {
  if (!component)
    return true;
  if (!model)
    return false;
  return component.models && component.models.length > 0 && !component.models.includes(model);
};
var getComponent = ({
  block,
  registeredComponents,
  model
}) => {
  const componentName = block.component?.name;
  if (!componentName) {
    return null;
  }
  const ref = registeredComponents[componentName];
  if (!ref || checkIsComponentRestricted(ref, model)) {
    console.warn(`
      Could not find a registered component named "${componentName}". 
      If you registered it, is the file that registered it imported by the file that needs to render it?`);
    return void 0;
  } else {
    return ref;
  }
};
var getRepeatItemData = ({
  block,
  context
}) => {
  const _a = block, {
    repeat
  } = _a, blockWithoutRepeat = __objRest(_a, [
    "repeat"
  ]);
  if (!repeat?.collection) {
    return void 0;
  }
  const itemsArray = evaluate({
    code: repeat.collection,
    localState: context.localState,
    rootState: context.rootState,
    rootSetState: context.rootSetState,
    context: context.context
  });
  if (!Array.isArray(itemsArray)) {
    return void 0;
  }
  const collectionName = repeat.collection.split(".").pop();
  const itemNameToUse = repeat.itemName || (collectionName ? collectionName + "Item" : "item");
  const repeatArray = itemsArray.map((item, index) => ({
    context: __spreadProps(__spreadValues({}, context), {
      localState: __spreadProps(__spreadValues({}, context.localState), {
        $index: index,
        $item: item,
        [itemNameToUse]: item,
        [`$${itemNameToUse}Index`]: index
      })
    }),
    block: blockWithoutRepeat
  }));
  return repeatArray;
};
var provideLinkComponent = (block, linkComponent) => {
  if (block?.shouldReceiveBuilderProps?.builderLinkComponent)
    return {
      builderLinkComponent: linkComponent
    };
  return {};
};
var provideRegisteredComponents = (block, registeredComponents, model) => {
  if (block?.shouldReceiveBuilderProps?.builderComponents) {
    const filteredRegisteredComponents = Object.fromEntries(Object.entries(registeredComponents).filter(([_, component]) => {
      return !checkIsComponentRestricted(component, model);
    }));
    return {
      builderComponents: filteredRegisteredComponents
    };
  }
  return {};
};
var provideBuilderBlock = (block, builderBlock) => {
  if (block?.shouldReceiveBuilderProps?.builderBlock)
    return {
      builderBlock
    };
  return {};
};
var provideBuilderContext = (block, context) => {
  if (block?.shouldReceiveBuilderProps?.builderContext)
    return {
      builderContext: context
    };
  return {};
};
var SIZES = {
  xsmall: {
    min: 0,
    default: 160,
    max: 320
  },
  small: {
    min: 321,
    default: 321,
    max: 640
  },
  medium: {
    min: 641,
    default: 642,
    max: 991
  },
  large: {
    min: 990,
    default: 991,
    max: 1200
  }
};
var getMaxWidthQueryForSize = (size, sizeValues = SIZES) => `@media (max-width: ${sizeValues[size].max}px)`;
var getSizesForBreakpoints = (breakpoints) => {
  const newSizes = fastClone(SIZES);
  if (!breakpoints) {
    return newSizes;
  }
  const {
    xsmall,
    small,
    medium
  } = breakpoints;
  if (xsmall) {
    const xsmallMin = Math.floor(xsmall / 2);
    newSizes.xsmall = {
      max: xsmall,
      min: xsmallMin,
      default: xsmallMin + 1
    };
  }
  if (!small || !medium) {
    return newSizes;
  }
  const smallMin = xsmall ? newSizes.xsmall.max + 1 : Math.floor(small / 2);
  newSizes.small = {
    max: small,
    min: smallMin,
    default: smallMin + 1
  };
  const mediumMin = newSizes.small.max + 1;
  newSizes.medium = {
    max: medium,
    min: mediumMin,
    default: mediumMin + 1
  };
  const largeMin = newSizes.medium.max + 1;
  newSizes.large = {
    max: 2e3,
    // TODO: decide upper limit
    min: largeMin,
    default: largeMin + 1
  };
  return newSizes;
};
var InlinedStyles = class _InlinedStyles {
  constructor(renderer, document2) {
    this.renderer = renderer;
    this.document = document2;
  }
  ngOnChanges(changes) {
    if (changes.styles) {
      if (this.styleElement) {
        this.styleElement.textContent = this.styles;
      } else {
        this.styleElement = this.renderer.createElement("style");
        this.renderer.setAttribute(this.styleElement, "data-id", this.id);
        this.renderer.appendChild(this.styleElement, this.renderer.createText(this.styles));
        this.renderer.setAttribute(this.styleElement, "nonce", this.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
      }
    }
  }
  static {
    this.ɵfac = function InlinedStyles_Factory(t) {
      return new (t || _InlinedStyles)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InlinedStyles,
      selectors: [["inlined-styles"], ["InlinedStyles"]],
      inputs: {
        styles: "styles",
        id: "id",
        nonce: "nonce"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function InlinedStyles_Template(rf, ctx) {
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlinedStyles, [{
    type: Component,
    args: [{
      selector: "inlined-styles, InlinedStyles",
      template: ``,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    styles: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    nonce: [{
      type: Input
    }]
  });
})();
var BlockStyles = class _BlockStyles {
  constructor() {
    this.TARGET = TARGET;
  }
  get canShowBlock() {
    const processedBlock = this.block;
    if (checkIsDefined(processedBlock.hide)) {
      return !processedBlock.hide;
    }
    if (checkIsDefined(processedBlock.show)) {
      return processedBlock.show;
    }
    return true;
  }
  get css() {
    const processedBlock = this.block;
    const styles = processedBlock.responsiveStyles;
    const content = this.context.content;
    const sizesWithUpdatedBreakpoints = getSizesForBreakpoints(content?.meta?.breakpoints || {});
    const contentHasXSmallBreakpoint = Boolean(content?.meta?.breakpoints?.xsmall);
    const largeStyles = styles?.large;
    const mediumStyles = styles?.medium;
    const smallStyles = styles?.small;
    const xsmallStyles = styles?.xsmall;
    const className = processedBlock.id;
    if (!className) {
      return "";
    }
    const largeStylesClass = largeStyles ? createCssClass({
      className,
      styles: largeStyles
    }) : "";
    const mediumStylesClass = mediumStyles ? createCssClass({
      className,
      styles: mediumStyles,
      mediaQuery: getMaxWidthQueryForSize("medium", sizesWithUpdatedBreakpoints)
    }) : "";
    const smallStylesClass = smallStyles ? createCssClass({
      className,
      styles: smallStyles,
      mediaQuery: getMaxWidthQueryForSize("small", sizesWithUpdatedBreakpoints)
    }) : "";
    const xsmallStylesClass = xsmallStyles && contentHasXSmallBreakpoint ? createCssClass({
      className,
      styles: xsmallStyles,
      mediaQuery: getMaxWidthQueryForSize("xsmall", sizesWithUpdatedBreakpoints)
    }) : "";
    const hoverAnimation = processedBlock.animations && processedBlock.animations.find((item) => item.trigger === "hover");
    let hoverStylesClass = "";
    if (hoverAnimation) {
      const hoverStyles = hoverAnimation.steps?.[1]?.styles || {};
      hoverStylesClass = createCssClass({
        className: `${className}:hover`,
        styles: __spreadProps(__spreadValues({}, hoverStyles), {
          transition: `all ${hoverAnimation.duration}s ${camelToKebabCase(hoverAnimation.easing)}`,
          transitionDelay: hoverAnimation.delay ? `${hoverAnimation.delay}s` : "0s"
        })
      }) || "";
    }
    return [largeStylesClass, mediumStylesClass, smallStylesClass, xsmallStylesClass, hoverStylesClass].join(" ");
  }
  static {
    this.ɵfac = function BlockStyles_Factory(t) {
      return new (t || _BlockStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BlockStyles,
      selectors: [["block-styles"]],
      inputs: {
        block: "block",
        context: "context"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["id", "builderio-block", 3, "styles", "nonce"]],
      template: function BlockStyles_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, BlockStyles_ng_container_0_Template, 2, 2, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.TARGET !== "reactNative" && ctx.css && ctx.canShowBlock);
        }
      },
      dependencies: [CommonModule, NgIf, InlinedStyles],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlockStyles, [{
    type: Component,
    args: [{
      selector: "block-styles",
      template: `
    <ng-container *ngIf="TARGET !== 'reactNative' && css && canShowBlock">
      <inlined-styles
        id="builderio-block"
        [styles]="css"
        [nonce]="context.nonce"
      ></inlined-styles>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, InlinedStyles],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    block: [{
      type: Input
    }],
    context: [{
      type: Input
    }]
  });
})();
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var getEventHandlerName = (key) => `on${capitalizeFirstLetter(key)}`;
var createEventHandler = (value, options) => (event) => evaluate({
  code: value,
  context: options.context,
  localState: options.localState,
  rootState: options.rootState,
  rootSetState: options.rootSetState,
  event,
  isExpression: false
});
function getBlockActions(options) {
  const obj = {};
  const optionActions = options.block.actions ?? {};
  for (const key in optionActions) {
    if (!optionActions.hasOwnProperty(key)) {
      continue;
    }
    const value = optionActions[key];
    let eventHandlerName = getEventHandlerName(key);
    if (options.stripPrefix) {
      switch (TARGET) {
        case "vue":
          eventHandlerName = eventHandlerName.replace("v-on:", "");
          break;
        case "svelte":
          eventHandlerName = eventHandlerName.replace("on:", "");
          break;
      }
    }
    obj[eventHandlerName] = createEventHandler(value, options);
  }
  return obj;
}
function transformBlockProperties({
  properties
}) {
  return properties;
}
var extractRelevantRootBlockProperties = (block) => {
  return {
    href: block.href
  };
};
function getBlockProperties({
  block,
  context
}) {
  const properties = __spreadProps(__spreadValues(__spreadValues({}, extractRelevantRootBlockProperties(block)), block.properties), {
    "builder-id": block.id,
    style: getStyle({
      block,
      context
    }),
    [getClassPropName()]: [block.id, "builder-block", block.class, block.properties?.class].filter(Boolean).join(" ")
  });
  return transformBlockProperties({
    properties,
    context,
    block
  });
}
var BlockWrapper = class _BlockWrapper {
  constructor() {
    this.node_0_DynamicRenderer = null;
    this.node_1_DynamicRenderer = null;
  }
  ngOnInit() {
    this.node_0_DynamicRenderer = getBlockProperties({
      block: this.block,
      context: this.context
    });
    this.node_1_DynamicRenderer = getBlockActions({
      block: this.block,
      rootState: this.context.rootState,
      rootSetState: this.context.rootSetState,
      localState: this.context.localState,
      context: this.context.context,
      stripPrefix: true
    });
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_DynamicRenderer = getBlockProperties({
        block: this.block,
        context: this.context
      });
      this.node_1_DynamicRenderer = getBlockActions({
        block: this.block,
        rootState: this.context.rootState,
        rootSetState: this.context.rootSetState,
        localState: this.context.localState,
        context: this.context.context,
        stripPrefix: true
      });
    }
  }
  static {
    this.ɵfac = function BlockWrapper_Factory(t) {
      return new (t || _BlockWrapper)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BlockWrapper,
      selectors: [["block-wrapper"]],
      inputs: {
        block: "block",
        context: "context",
        Wrapper: "Wrapper"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 3,
      consts: [[3, "TagName", "attributes", "actionAttributes"]],
      template: function BlockWrapper_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "dynamic-renderer", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("TagName", ctx.Wrapper)("attributes", ctx.node_0_DynamicRenderer)("actionAttributes", ctx.node_1_DynamicRenderer);
        }
      },
      dependencies: [CommonModule, DynamicRenderer],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlockWrapper, [{
    type: Component,
    args: [{
      selector: "block-wrapper",
      template: `
    <dynamic-renderer
      [TagName]="Wrapper"
      [attributes]="node_0_DynamicRenderer"
      [actionAttributes]="node_1_DynamicRenderer"
    >
      <ng-content></ng-content>
    </dynamic-renderer>
  `,
      standalone: true,
      imports: [CommonModule, DynamicRenderer],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    block: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    Wrapper: [{
      type: Input
    }]
  });
})();
var Awaiter = class _Awaiter {
  static {
    this.ɵfac = function Awaiter_Factory(t) {
      return new (t || _Awaiter)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Awaiter,
      selectors: [["awaiter"]],
      inputs: {
        load: "load",
        props: "props",
        attributes: "attributes",
        fallback: "fallback"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function Awaiter_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementContainerStart(0);
          ɵɵprojection(1);
          ɵɵelementContainerEnd();
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Awaiter, [{
    type: Component,
    args: [{
      selector: "awaiter",
      template: `
    <ng-container><ng-content></ng-content></ng-container>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    load: [{
      type: Input
    }],
    props: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    fallback: [{
      type: Input
    }]
  });
})();
var InteractiveElement = class _InteractiveElement {
  get attributes() {
    return this.includeBlockProps ? __spreadValues(__spreadValues({}, getBlockProperties({
      block: this.block,
      context: this.context
    })), getBlockActions({
      block: this.block,
      rootState: this.context.rootState,
      rootSetState: this.context.rootSetState,
      localState: this.context.localState,
      context: this.context.context
    })) : {};
  }
  constructor(vcRef, renderer) {
    this.vcRef = vcRef;
    this.renderer = renderer;
    this.mergedInputs_atkjh2 = {};
    this._listenerFns = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    this.mergedInputs_atkjh2 = __spreadValues(__spreadValues({}, this.filterPropsThatWrapperNeeds(this.wrapperProps)), this.hasAttributesInput(this.Wrapper) ? {
      attributes: this.attributes
    } : {});
    this.myContent = [this.vcRef.createEmbeddedView(this.wrapperTemplateRef).rootNodes];
  }
  hasAttributesInput(component) {
    return !!reflectComponentType(component)?.inputs.find((input) => input.propName === "attributes");
  }
  updateAttributes(el, attributes) {
    Object.keys(attributes).forEach((attr) => {
      if (attr.startsWith("on")) {
        if (this._listenerFns.has(attr)) {
          this._listenerFns.get(attr)();
        }
        this._listenerFns.set(attr, this.renderer.listen(el, attr.replace("on", "").toLowerCase(), attributes[attr]));
      } else if (attr === "class" && attributes[attr]) {
        const classes = attributes[attr].split(" ");
        classes.forEach((cls) => this.renderer.addClass(el, cls.trim()));
      } else {
        this.renderer.setAttribute(el, attr.toLowerCase(), attributes[attr] ?? "");
      }
    });
  }
  ngAfterViewInit() {
    if (!this.hasAttributesInput(this.Wrapper)) {
      const wrapperElement = this.wrapperTemplateRef.elementRef.nativeElement?.nextElementSibling;
      if (wrapperElement) {
        this.updateAttributes(wrapperElement, this.attributes);
      }
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  filterPropsThatWrapperNeeds(allProps) {
    const definedPropNames = reflectComponentType(this.Wrapper).inputs.map((prop) => prop.propName);
    return definedPropNames.reduce((acc, propName) => {
      acc[propName] = allProps[propName];
      return acc;
    }, {});
  }
  ngOnChanges(changes) {
    if (changes["attributes"] && !this.hasAttributesInput(this.Wrapper)) {
      this.ngAfterViewInit();
    }
    if (typeof window !== "undefined") {
      this.mergedInputs_atkjh2 = __spreadValues(__spreadValues({}, this.filterPropsThatWrapperNeeds(this.wrapperProps)), this.hasAttributesInput(this.Wrapper) ? {
        attributes: this.attributes
      } : {});
    }
  }
  static {
    this.ɵfac = function InteractiveElement_Factory(t) {
      return new (t || _InteractiveElement)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InteractiveElement,
      selectors: [["interactive-element"]],
      viewQuery: function InteractiveElement_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c4, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperTemplateRef = _t.first);
        }
      },
      inputs: {
        includeBlockProps: "includeBlockProps",
        block: "block",
        context: "context",
        Wrapper: "Wrapper",
        wrapperProps: "wrapperProps"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c5,
      decls: 4,
      vars: 2,
      consts: [["wrapperTemplate", ""], [4, "ngIf"], [3, "load", "fallback", "props", "attributes"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletContent"]],
      template: function InteractiveElement_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c5);
          ɵɵtemplate(0, InteractiveElement_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, InteractiveElement_ng_container_2_Template, 3, 4, "ng-container", 1)(3, InteractiveElement_ng_container_3_Template, 2, 3, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.Wrapper.load);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.Wrapper.load);
        }
      },
      dependencies: [CommonModule, NgComponentOutlet, NgIf, Awaiter],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractiveElement, [{
    type: Component,
    args: [{
      selector: "interactive-element",
      template: `
    <ng-template #wrapperTemplate><ng-content></ng-content></ng-template>
    <ng-container *ngIf="Wrapper.load">
      <awaiter
        [load]="Wrapper.load"
        [fallback]="Wrapper.fallback"
        [props]="wrapperProps"
        [attributes]="attributes"
      >
        <ng-content></ng-content>
      </awaiter>
    </ng-container>
    <ng-container *ngIf="!(Wrapper.load)">
      <ng-container
        *ngComponentOutlet="
              Wrapper;
              inputs: mergedInputs_atkjh2;
              content: myContent;
              "
      ></ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, Awaiter],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: Renderer2
    }];
  }, {
    includeBlockProps: [{
      type: Input
    }],
    block: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    Wrapper: [{
      type: Input
    }],
    wrapperProps: [{
      type: Input
    }],
    wrapperTemplateRef: [{
      type: ViewChild,
      args: ["wrapperTemplate", {
        static: true
      }]
    }]
  });
})();
var getWrapperProps = ({
  componentOptions,
  builderBlock,
  context,
  componentRef,
  includeBlockProps,
  isInteractive,
  contextValue
}) => {
  const wrapperPropsWithAttributes = __spreadValues(__spreadValues({}, componentOptions), includeBlockProps ? {
    attributes: getBlockProperties({
      block: builderBlock,
      context: contextValue
    })
  } : {});
  const interactiveElementProps = {
    Wrapper: componentRef,
    block: builderBlock,
    context,
    wrapperProps: componentOptions,
    includeBlockProps
  };
  return isInteractive ? interactiveElementProps : wrapperPropsWithAttributes;
};
var ComponentRef = class _ComponentRef {
  trackByChild0(_, child) {
    return child.id;
  }
  constructor(vcRef) {
    this.vcRef = vcRef;
    this.Wrapper = null;
    this.node_0_state_Wrapper = null;
    this.mergedInputs_v6przu = {};
  }
  ngOnInit() {
    this.Wrapper = this.isInteractive ? InteractiveElement : this.componentRef;
    this.node_0_state_Wrapper = __spreadValues({}, getWrapperProps({
      componentOptions: this.componentOptions,
      builderBlock: this.builderBlock,
      context: this.context,
      componentRef: this.componentRef,
      linkComponent: this.linkComponent,
      includeBlockProps: this.includeBlockProps,
      isInteractive: this.isInteractive,
      contextValue: this.context
    }));
    this.mergedInputs_v6przu = __spreadValues({}, this.node_0_state_Wrapper);
    const wrapperTemplate = this.vcRef.createEmbeddedView(this.wrapperTemplateRef);
    wrapperTemplate.detectChanges();
    this.myContent = [wrapperTemplate.rootNodes];
  }
  ngOnChanges(changes) {
    if (changes.componentOptions) {
      let foundChange = false;
      for (const key in changes.componentOptions.previousValue) {
        if (changes.componentOptions.previousValue[key] !== changes.componentOptions.currentValue[key]) {
          foundChange = true;
          break;
        }
      }
      if (!foundChange) {
        return;
      }
    }
    if (typeof window !== "undefined") {
      this.node_0_state_Wrapper = __spreadValues({}, getWrapperProps({
        componentOptions: this.componentOptions,
        builderBlock: this.builderBlock,
        context: this.context,
        componentRef: this.componentRef,
        linkComponent: this.linkComponent,
        includeBlockProps: this.includeBlockProps,
        isInteractive: this.isInteractive,
        contextValue: this.context
      }));
      this.mergedInputs_v6przu = __spreadValues({}, this.node_0_state_Wrapper);
    }
  }
  static {
    this.ɵfac = function ComponentRef_Factory(t) {
      return new (t || _ComponentRef)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ComponentRef,
      selectors: [["component-ref"]],
      viewQuery: function ComponentRef_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c4, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperTemplateRef = _t.first);
        }
      },
      inputs: {
        componentOptions: "componentOptions",
        builderBlock: "builderBlock",
        context: "context",
        componentRef: "componentRef",
        linkComponent: "linkComponent",
        includeBlockProps: "includeBlockProps",
        isInteractive: "isInteractive",
        blockChildren: "blockChildren",
        registeredComponents: "registeredComponents"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 1,
      consts: [["wrapperTemplate", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "block", "context", "registeredComponents", "linkComponent"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletContent"]],
      template: function ComponentRef_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ComponentRef_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, ComponentRef_ng_container_2_Template, 2, 3, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.componentRef);
        }
      },
      dependencies: () => [CommonModule, NgComponentOutlet, NgForOf, NgIf, Block],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentRef, [{
    type: Component,
    args: [{
      selector: "component-ref",
      template: `
    <ng-template #wrapperTemplate>
      <ng-container *ngIf="componentRef">
<ng-container *ngFor="let child of blockChildren; trackBy: trackByChild0">
        <block
          [block]="child"
          [context]="context"
          [registeredComponents]="registeredComponents"
          [linkComponent]="linkComponent"
        ></block>
      </ng-container>
</ng-container>
    </ng-template>
    <ng-container *ngIf="componentRef">
      <ng-container
        *ngComponentOutlet="
              Wrapper;
              inputs: mergedInputs_v6przu;
              content: myContent;
              "
      ></ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, forwardRef(() => Block)],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    componentOptions: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    componentRef: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }],
    includeBlockProps: [{
      type: Input
    }],
    isInteractive: [{
      type: Input
    }],
    blockChildren: [{
      type: Input
    }],
    registeredComponents: [{
      type: Input
    }],
    wrapperTemplateRef: [{
      type: ViewChild,
      args: ["wrapperTemplate", {
        static: true
      }]
    }]
  });
})();
var RepeatedBlock = class _RepeatedBlock {
  constructor() {
    this.store = null;
  }
  ngOnInit() {
    this.store = this.repeatContext;
  }
  static {
    this.ɵfac = function RepeatedBlock_Factory(t) {
      return new (t || _RepeatedBlock)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RepeatedBlock,
      selectors: [["repeated-block"]],
      inputs: {
        repeatContext: "repeatContext",
        block: "block",
        registeredComponents: "registeredComponents",
        linkComponent: "linkComponent"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 4,
      consts: [[3, "block", "context", "registeredComponents", "linkComponent"]],
      template: function RepeatedBlock_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "block", 0);
        }
        if (rf & 2) {
          ɵɵproperty("block", ctx.block)("context", ctx.store)("registeredComponents", ctx.registeredComponents)("linkComponent", ctx.linkComponent);
        }
      },
      dependencies: () => [CommonModule, Block],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepeatedBlock, [{
    type: Component,
    args: [{
      selector: "repeated-block",
      template: `
    <block
      [block]="block"
      [context]="store"
      [registeredComponents]="registeredComponents"
      [linkComponent]="linkComponent"
    ></block>
  `,
      standalone: true,
      imports: [CommonModule, forwardRef(() => Block)],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    repeatContext: [{
      type: Input
    }],
    block: [{
      type: Input
    }],
    registeredComponents: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }]
  });
})();
var Block = class _Block {
  constructor() {
    this._processedBlock = {
      value: null,
      update: false
    };
  }
  get repeatItem() {
    return getRepeatItemData({
      block: this.block,
      context: this.context
    });
  }
  get processedBlock() {
    const blockToUse = this.block.repeat?.collection ? this.block : getProcessedBlock({
      block: this.block,
      localState: this.context.localState,
      rootState: this.context.rootState,
      rootSetState: this.context.rootSetState,
      context: this.context.context
    });
    return blockToUse;
  }
  get blockComponent() {
    return getComponent({
      block: this.processedBlock,
      registeredComponents: this.registeredComponents,
      model: this.context.model
    });
  }
  get Tag() {
    const shouldUseLink = this.block.tagName === "a" || this.processedBlock.properties?.href || this.processedBlock.href;
    if (shouldUseLink) {
      return this.linkComponent || "a";
    }
    return DynamicDiv2;
  }
  get canShowBlock() {
    if (this.block.repeat?.collection) {
      if (this.repeatItem?.length)
        return true;
      return false;
    }
    const shouldHide = "hide" in this.processedBlock ? this.processedBlock.hide : false;
    const shouldShow = "show" in this.processedBlock ? this.processedBlock.show : true;
    return shouldShow && !shouldHide;
  }
  get childrenWithoutParentComponent() {
    const shouldRenderChildrenOutsideRef = !this.blockComponent?.component && !this.repeatItem;
    return shouldRenderChildrenOutsideRef ? this.processedBlock.children ?? [] : [];
  }
  get componentRefProps() {
    return {
      blockChildren: this.processedBlock.children ?? [],
      componentRef: this.blockComponent?.component,
      componentOptions: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getBlockComponentOptions(this.processedBlock, this.context)), provideBuilderBlock(this.blockComponent, this.processedBlock)), provideBuilderContext(this.blockComponent, this.context)), provideLinkComponent(this.blockComponent, this.linkComponent)), provideRegisteredComponents(this.blockComponent, this.registeredComponents, this.context.model)),
      context: this.context,
      linkComponent: this.linkComponent,
      registeredComponents: this.registeredComponents,
      builderBlock: this.processedBlock,
      includeBlockProps: this.blockComponent?.noWrap === true,
      isInteractive: !(this.blockComponent?.isRSC && TARGET === "rsc")
    };
  }
  trackByChild0(_, child) {
    return child.id;
  }
  trackByData1(index, data) {
    return index;
  }
  trackByData2(index, data) {
    return index;
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      const blockId = this.processedBlock.id;
      const animations = this.processedBlock.animations;
      if (animations && blockId) {
        requestAnimationFrame(() => {
          bindAnimations(animations.map((animation) => __spreadProps(__spreadValues({}, animation), {
            elementId: blockId
          })));
        });
      }
    }
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
    }
  }
  static {
    this.ɵfac = function Block_Factory(t) {
      return new (t || _Block)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Block,
      selectors: [["block"]],
      inputs: {
        block: "block",
        context: "context",
        registeredComponents: "registeredComponents",
        linkComponent: "linkComponent"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "block", "context"], [3, "Wrapper", "block", "context"], [3, "componentRef", "componentOptions", "blockChildren", "context", "registeredComponents", "linkComponent", "builderBlock", "includeBlockProps", "isInteractive"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "block", "registeredComponents", "linkComponent", "context"], [3, "repeatContext", "block", "registeredComponents", "linkComponent"]],
      template: function Block_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, Block_ng_container_0_Template, 4, 4, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.canShowBlock);
        }
      },
      dependencies: [_Block, CommonModule, NgForOf, NgIf, BlockStyles, RepeatedBlock, ComponentRef, BlockWrapper],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Block, [{
    type: Component,
    args: [{
      selector: "block",
      template: `
    <ng-container *ngIf="canShowBlock">
      <block-styles [block]="processedBlock" [context]="context"></block-styles>
      <ng-container *ngIf="!blockComponent?.noWrap">
        <ng-container *ngIf="!repeatItem">
          <block-wrapper
            [Wrapper]="Tag"
            [block]="processedBlock"
            [context]="context"
          >
            <component-ref
              [componentRef]="componentRefProps.componentRef"
              [componentOptions]="componentRefProps.componentOptions"
              [blockChildren]="componentRefProps.blockChildren"
              [context]="componentRefProps.context"
              [registeredComponents]="componentRefProps.registeredComponents"
              [linkComponent]="componentRefProps.linkComponent"
              [builderBlock]="componentRefProps.builderBlock"
              [includeBlockProps]="componentRefProps.includeBlockProps"
              [isInteractive]="componentRefProps.isInteractive"
            ></component-ref>
            <ng-container
              *ngFor="let child of childrenWithoutParentComponent; trackBy: trackByChild0"
            >
              <block
                [block]="child"
                [registeredComponents]="registeredComponents"
                [linkComponent]="linkComponent"
                [context]="context"
              ></block>
            </ng-container>
          </block-wrapper>
        </ng-container>
        <ng-container *ngIf="!(!repeatItem)">
          <ng-container
            *ngFor="let data of repeatItem; index as index; trackBy: trackByData1"
          >
            <repeated-block
              [repeatContext]="data.context"
              [block]="data.block"
              [registeredComponents]="registeredComponents"
              [linkComponent]="linkComponent"
            ></repeated-block>
          </ng-container>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="!(!blockComponent?.noWrap)">
        <ng-container *ngIf="!repeatItem">
          <component-ref
            [componentRef]="componentRefProps.componentRef"
            [componentOptions]="componentRefProps.componentOptions"
            [blockChildren]="componentRefProps.blockChildren"
            [context]="componentRefProps.context"
            [registeredComponents]="componentRefProps.registeredComponents"
            [linkComponent]="componentRefProps.linkComponent"
            [builderBlock]="componentRefProps.builderBlock"
            [includeBlockProps]="componentRefProps.includeBlockProps"
            [isInteractive]="componentRefProps.isInteractive"
          ></component-ref>
        </ng-container>
        <ng-container *ngIf="!(!repeatItem)">
          <ng-container
            *ngFor="let data of repeatItem; index as index; trackBy: trackByData2"
          >
            <repeated-block
              [repeatContext]="data.context"
              [block]="data.block"
              [registeredComponents]="registeredComponents"
              [linkComponent]="linkComponent"
            ></repeated-block>
          </ng-container>
        </ng-container>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, BlockStyles, RepeatedBlock, ComponentRef, BlockWrapper, Block],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    block: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    registeredComponents: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }]
  });
})();
var BlocksWrapper = class _BlocksWrapper {
  get className() {
    return ["builder-blocks", !this.blocks?.length ? "no-blocks" : "", this.classNameProp].filter(Boolean).join(" ");
  }
  get dataPath() {
    if (!this.path) {
      return void 0;
    }
    const thisPrefix = "this.";
    const pathPrefix = "component.options.";
    return this.path.startsWith(thisPrefix) ? this.path.replace(thisPrefix, "") : this.path.startsWith(pathPrefix) ? this.path : `${pathPrefix}${this.path || ""}`;
  }
  onClick() {
    if (isEditing() && !this.blocks?.length) {
      window.parent?.postMessage({
        type: "builder.clickEmptyBlocks",
        data: {
          parentElementId: this.parent,
          dataPath: this.dataPath
        }
      }, "*");
    }
  }
  onMouseEnter() {
    if (isEditing() && !this.blocks?.length) {
      window.parent?.postMessage({
        type: "builder.hoverEmptyBlocks",
        data: {
          parentElementId: this.parent,
          dataPath: this.dataPath
        }
      }, "*");
    }
  }
  constructor(vcRef) {
    this.vcRef = vcRef;
    this.mergedInputs_2eim3t = {};
  }
  ngAfterContentInit() {
    this.mergedInputs_2eim3t = __spreadValues({
      ref: this.blocksWrapperRef,
      class: this.className + " props-blocks-wrapper",
      "builder-path": this.dataPath,
      "builder-parent-id": this.parent,
      style: this.styleProp,
      onClick: this.onClick.bind(this),
      onMouseEnter: this.onMouseEnter.bind(this),
      onKeyPress: this.onClick.bind(this)
    }, this.BlocksWrapperProps);
    if (typeof window !== "undefined") {
    }
    this.myContent = [this.vcRef.createEmbeddedView(this.blockswrapperTemplateRef).rootNodes];
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.mergedInputs_2eim3t = __spreadValues({
        ref: this.blocksWrapperRef,
        class: this.className + " props-blocks-wrapper",
        "builder-path": this.dataPath,
        "builder-parent-id": this.parent,
        style: this.styleProp,
        onClick: this.onClick.bind(this),
        onMouseEnter: this.onMouseEnter.bind(this),
        onKeyPress: this.onClick.bind(this)
      }, this.BlocksWrapperProps);
    }
  }
  static {
    this.ɵfac = function BlocksWrapper_Factory(t) {
      return new (t || _BlocksWrapper)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BlocksWrapper,
      selectors: [["blocks-wrapper"]],
      viewQuery: function BlocksWrapper_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c6, 5);
          ɵɵviewQuery(_c7, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.blocksWrapperRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.blockswrapperTemplateRef = _t.first);
        }
      },
      inputs: {
        blocks: "blocks",
        classNameProp: "classNameProp",
        path: "path",
        parent: "parent",
        styleProp: "styleProp",
        BlocksWrapperProps: "BlocksWrapperProps",
        BlocksWrapper: "BlocksWrapper"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["blockswrapperTemplate", ""], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletContent"]],
      template: function BlocksWrapper_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, BlocksWrapper_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, BlocksWrapper_ng_container_2_Template, 1, 0, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngComponentOutlet", ctx.BlocksWrapper)("ngComponentOutletInputs", ctx.mergedInputs_2eim3t)("ngComponentOutletContent", ctx.myContent);
        }
      },
      dependencies: [CommonModule, NgComponentOutlet],
      styles: ["[_nghost-%COMP%]{display:contents}.props-blocks-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlocksWrapper, [{
    type: Component,
    args: [{
      selector: "blocks-wrapper",
      template: `
    <ng-template #blockswrapperTemplate><ng-content></ng-content></ng-template>
    <ng-container
      *ngComponentOutlet="
              BlocksWrapper;
              inputs: mergedInputs_2eim3t;
              content: myContent;
              "
    ></ng-container>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}.props-blocks-wrapper{display:flex;flex-direction:column;align-items:stretch}\n"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    blocks: [{
      type: Input
    }],
    classNameProp: [{
      type: Input
    }],
    path: [{
      type: Input
    }],
    parent: [{
      type: Input
    }],
    styleProp: [{
      type: Input
    }],
    BlocksWrapperProps: [{
      type: Input
    }],
    BlocksWrapper: [{
      type: Input
    }],
    blocksWrapperRef: [{
      type: ViewChild,
      args: ["blocksWrapperRef"]
    }],
    blockswrapperTemplateRef: [{
      type: ViewChild,
      args: ["blockswrapperTemplate", {
        static: true
      }]
    }]
  });
})();
var Blocks = class _Blocks {
  trackByBlock0(_, block) {
    return block.id;
  }
  constructor(builderContext, componentsContext) {
    this.builderContext = builderContext;
    this.componentsContext = componentsContext;
  }
  static {
    this.ɵfac = function Blocks_Factory(t) {
      return new (t || _Blocks)(ɵɵdirectiveInject(BuilderContext), ɵɵdirectiveInject(ComponentsContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Blocks,
      selectors: [["blocks"]],
      inputs: {
        blocks: "blocks",
        parent: "parent",
        path: "path",
        styleProp: "styleProp",
        className: "className",
        context: "context",
        linkComponent: "linkComponent",
        registeredComponents: "registeredComponents"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 8,
      consts: [[3, "blocks", "parent", "path", "styleProp", "classNameProp", "BlocksWrapper", "BlocksWrapperProps"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "block", "linkComponent", "context", "registeredComponents"]],
      template: function Blocks_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "blocks-wrapper", 0);
          ɵɵtemplate(1, Blocks_ng_container_1_Template, 2, 2, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("blocks", ctx.blocks)("parent", ctx.parent)("path", ctx.path)("styleProp", ctx.styleProp)("classNameProp", ctx.className)("BlocksWrapper", (ctx.context == null ? null : ctx.context.BlocksWrapper) || (ctx.builderContext == null ? null : ctx.builderContext.BlocksWrapper))("BlocksWrapperProps", (ctx.context == null ? null : ctx.context.BlocksWrapperProps) || (ctx.builderContext == null ? null : ctx.builderContext.BlocksWrapperProps));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.blocks);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, BlocksWrapper, Block],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blocks, [{
    type: Component,
    args: [{
      selector: "blocks",
      template: `
    <blocks-wrapper
      [blocks]="blocks"
      [parent]="parent"
      [path]="path"
      [styleProp]="styleProp"
      [classNameProp]="className"
      [BlocksWrapper]="context?.BlocksWrapper || builderContext?.BlocksWrapper"
      [BlocksWrapperProps]="context?.BlocksWrapperProps || builderContext?.BlocksWrapperProps"
    >
      <ng-container *ngIf="blocks">
        <ng-container *ngFor="let block of blocks; trackBy: trackByBlock0">
          <block
            [block]="block"
            [linkComponent]="linkComponent"
            [context]="context || builderContext"
            [registeredComponents]="registeredComponents || componentsContext?.registeredComponents"
          ></block>
        </ng-container>
      </ng-container>
    </blocks-wrapper>
  `,
      standalone: true,
      imports: [CommonModule, BlocksWrapper, Block],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: BuilderContext
    }, {
      type: ComponentsContext
    }];
  }, {
    blocks: [{
      type: Input
    }],
    parent: [{
      type: Input
    }],
    path: [{
      type: Input
    }],
    styleProp: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }],
    registeredComponents: [{
      type: Input
    }]
  });
})();
var getColumnsClass = (id) => {
  return `builder-columns ${id}-breakpoints`;
};
var Columns = class _Columns {
  get gutterSize() {
    return typeof this.space === "number" ? this.space || 0 : 20;
  }
  get cols() {
    return this.columns || [];
  }
  get stackAt() {
    return this.stackColumnsAt || "tablet";
  }
  getTagName(column) {
    return column.link ? this.builderLinkComponent || "a" : DynamicDiv2;
  }
  getWidth(index) {
    return this.cols[index]?.width || 100 / this.cols.length;
  }
  getColumnCssWidth(index) {
    const width = this.getWidth(index);
    const subtractWidth = this.gutterSize * (this.cols.length - 1) * (width / 100);
    return `calc(${width}% - ${subtractWidth}px)`;
  }
  getTabletStyle({
    stackedStyle,
    desktopStyle
  }) {
    return this.stackAt === "tablet" ? stackedStyle : desktopStyle;
  }
  getMobileStyle({
    stackedStyle,
    desktopStyle
  }) {
    return this.stackAt === "never" ? desktopStyle : stackedStyle;
  }
  get flexDir() {
    return this.stackColumnsAt === "never" ? "row" : this.reverseColumnsWhenStacked ? "column-reverse" : "column";
  }
  columnsCssVars() {
    return {
      "--flex-dir": this.flexDir,
      "--flex-dir-tablet": this.getTabletStyle({
        stackedStyle: this.flexDir,
        desktopStyle: "row"
      })
    };
  }
  columnCssVars(index) {
    const gutter = index === 0 ? 0 : this.gutterSize;
    const width = this.getColumnCssWidth(index);
    const gutterPixels = `${gutter}px`;
    const mobileWidth = "100%";
    const mobileMarginLeft = 0;
    const marginLeftKey = "margin-left";
    const sharedStyles = {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    };
    return __spreadProps(__spreadValues({}, sharedStyles), {
      width,
      [marginLeftKey]: gutterPixels,
      "--column-width-mobile": this.getMobileStyle({
        stackedStyle: mobileWidth,
        desktopStyle: width
      }),
      "--column-margin-left-mobile": this.getMobileStyle({
        stackedStyle: mobileMarginLeft,
        desktopStyle: gutterPixels
      }),
      "--column-width-tablet": this.getTabletStyle({
        stackedStyle: mobileWidth,
        desktopStyle: width
      }),
      "--column-margin-left-tablet": this.getTabletStyle({
        stackedStyle: mobileMarginLeft,
        desktopStyle: gutterPixels
      })
    });
  }
  getWidthForBreakpointSize(size) {
    const breakpointSizes = getSizesForBreakpoints(this.builderContext.content?.meta?.breakpoints || {});
    return breakpointSizes[size].max;
  }
  columnsStyles() {
    const childColumnDiv = `.${this.builderBlock.id}-breakpoints .builder-column:first-of-type`;
    return `
        @media (max-width: ${this.getWidthForBreakpointSize("medium")}px) {
          .${this.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir-tablet);
            align-items: stretch;
          }

          ${childColumnDiv} {
            width: var(--column-width-tablet) !important;
            margin-left: var(--column-margin-left-tablet) !important;
          }
        }

        @media (max-width: ${this.getWidthForBreakpointSize("small")}px) {
          .${this.builderBlock.id}-breakpoints {
            flex-direction: var(--flex-dir);
            align-items: stretch;
          }

          ${childColumnDiv} {
            width: var(--column-width-mobile) !important;
            margin-left: var(--column-margin-left-mobile) !important;
          }
        },
      `;
  }
  getAttributes(column, index) {
    return __spreadProps(__spreadValues(__spreadValues({}, {}), column.link ? {
      href: column.link
    } : {}), {
      [getClassPropName()]: "builder-column",
      style: mapStyleObjToStrIfNeeded(this.columnCssVars(index))
    });
  }
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  trackByColumn0(index, column) {
    return index;
  }
  constructor(renderer) {
    this.renderer = renderer;
    this.TARGET = TARGET;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_div = null;
    this.node_1_div = null;
    this.node_2_InlinedStyles = null;
    this.node_3_DynamicRenderer = (column, index) => this.getTagName(column);
    this.node_4_DynamicRenderer = (column, index) => ({});
    this.node_5_DynamicRenderer = (column, index) => this.getAttributes(column, index);
    this.node_6_Blocks = (column, index) => `columns.${index}.blocks`;
    this.node_7_Blocks = (column, index) => ({
      flexGrow: "1"
    });
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.node_0_div = getColumnsClass(this.builderBlock?.id);
    this.node_1_div = this.columnsCssVars();
    this.node_2_InlinedStyles = this.columnsStyles();
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = getColumnsClass(this.builderBlock?.id);
      this.node_1_div = this.columnsCssVars();
      this.node_2_InlinedStyles = this.columnsStyles();
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function Columns_Factory(t) {
      return new (t || _Columns)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Columns,
      selectors: [["columns"]],
      viewQuery: function Columns_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        builderBlock: "builderBlock",
        space: "space",
        columns: "columns",
        stackColumnsAt: "stackColumnsAt",
        builderLinkComponent: "builderLinkComponent",
        reverseColumnsWhenStacked: "reverseColumnsWhenStacked",
        builderContext: "builderContext",
        builderComponents: "builderComponents"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 6,
      consts: [["elRef0", ""], [3, "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "builderio-columns", 3, "styles", "nonce"], [3, "TagName", "actionAttributes", "attributes"], [3, "path", "parent", "context", "registeredComponents", "linkComponent", "blocks", "styleProp"]],
      template: function Columns_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, Columns_ng_container_2_Template, 2, 2, "ng-container", 2)(3, Columns_ng_container_3_Template, 3, 10, "ng-container", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.node_0_div + " div");
          ɵɵproperty("ngStyle", ctx.node_1_div);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.TARGET !== "reactNative");
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.columns)("ngForTrackBy", ctx.trackByColumn0);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgStyle, InlinedStyles, DynamicRenderer, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}.div[_ngcontent-%COMP%]{display:flex;line-height:normal}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Columns, [{
    type: Component,
    args: [{
      selector: "columns",
      template: `
    <div [class]="node_0_div + ' div'" [ngStyle]="node_1_div" #elRef0>
      <ng-container *ngIf="TARGET !== 'reactNative'">
        <inlined-styles
          id="builderio-columns"
          [styles]="node_2_InlinedStyles"
          [nonce]="builderContext.nonce"
        ></inlined-styles>
      </ng-container>
      <ng-container
        *ngFor="let column of columns; index as index; trackBy: trackByColumn0"
      >
        <dynamic-renderer
          [TagName]="node_3_DynamicRenderer(column, index)"
          [actionAttributes]="node_4_DynamicRenderer(column, index)"
          [attributes]="node_5_DynamicRenderer(column, index)"
        >
          <blocks
            [path]="node_6_Blocks(column, index)"
            [parent]="builderBlock.id"
            [context]="builderContext"
            [registeredComponents]="builderComponents"
            [linkComponent]="builderLinkComponent"
            [blocks]="column.blocks"
            [styleProp]="node_7_Blocks(column, index)"
          ></blocks>
        </dynamic-renderer>
      </ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, InlinedStyles, DynamicRenderer, Blocks],
      styles: [":host{display:contents}.div{display:flex;line-height:normal}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    builderBlock: [{
      type: Input
    }],
    space: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    stackColumnsAt: [{
      type: Input
    }],
    builderLinkComponent: [{
      type: Input
    }],
    reverseColumnsWhenStacked: [{
      type: Input
    }],
    builderContext: [{
      type: Input
    }],
    builderComponents: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var FragmentComponent = class _FragmentComponent {
  static {
    this.ɵfac = function FragmentComponent_Factory(t) {
      return new (t || _FragmentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FragmentComponent,
      selectors: [["fragment-component"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function FragmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "span");
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FragmentComponent, [{
    type: Component,
    args: [{
      selector: "fragment-component",
      template: `
    <span><ng-content></ng-content></span>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], null, null);
})();
function removeProtocol(path) {
  return path.replace(/http(s)?:/, "");
}
function updateQueryParam(uri = "", key, value) {
  const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  const separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + encodeURIComponent(value) + "$2");
  }
  return uri + separator + key + "=" + encodeURIComponent(value);
}
function getShopifyImageUrl(src, size) {
  if (!src || !src?.match(/cdn\.shopify\.com/) || !size) {
    return src;
  }
  if (size === "master") {
    return removeProtocol(src);
  }
  const match = src.match(/(_\d+x(\d+)?)?(\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?)/i);
  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[3];
    const useSize = size.match("x") ? size : `${size}x`;
    return removeProtocol(`${prefix[0]}_${useSize}${suffix}`);
  }
  return null;
}
function getSrcSet(url) {
  if (!url) {
    return url;
  }
  const sizes = [100, 200, 400, 800, 1200, 1600, 2e3];
  if (url.match(/builder\.io/)) {
    let srcUrl = url;
    const widthInSrc = Number(url.split("?width=")[1]);
    if (!isNaN(widthInSrc)) {
      srcUrl = `${srcUrl} ${widthInSrc}w`;
    }
    return sizes.filter((size) => size !== widthInSrc).map((size) => `${updateQueryParam(url, "width", size)} ${size}w`).concat([srcUrl]).join(", ");
  }
  if (url.match(/cdn\.shopify\.com/)) {
    return sizes.map((size) => [getShopifyImageUrl(url, `${size}x${size}`), size]).filter(([sizeUrl]) => !!sizeUrl).map(([sizeUrl, size]) => `${sizeUrl} ${size}w`).concat([url]).join(", ");
  }
  return url;
}
var BuilderImage = class _BuilderImage {
  constructor() {
    this.node_0_img = null;
    this.node_1_img = null;
    this.node_2_Show = null;
    this.node_3_div = null;
  }
  get srcSetToUse() {
    const imageToUse = this.image || this.src;
    const url = imageToUse;
    if (!url || // We can auto add srcset for cdn.builder.io and shopify
    // images, otherwise you can supply this prop manually
    !(typeof url === "string" && (url.match(/builder\.io/) || url.match(/cdn\.shopify\.com/)))) {
      return this.srcset;
    }
    if (this.noWebp) {
      return void 0;
    }
    if (this.srcset && this.image?.includes("builder.io/api/v1/image")) {
      if (!this.srcset.includes(this.image.split("?")[0])) {
        console.debug("Removed given srcset");
        return getSrcSet(url);
      }
    } else if (this.image && !this.srcset) {
      return getSrcSet(url);
    }
    return getSrcSet(url);
  }
  get webpSrcSet() {
    if (this.srcSetToUse?.match(/builder\.io/) && !this.noWebp) {
      return this.srcSetToUse.replace(/\?/g, "?format=webp&");
    } else {
      return "";
    }
  }
  get aspectRatioCss() {
    const aspectRatioStyles = {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: "0px",
      top: "0px"
    };
    const out = this.aspectRatio ? aspectRatioStyles : void 0;
    return out;
  }
  ngOnInit() {
    this.node_0_img = __spreadValues({
      objectPosition: this.backgroundPosition || "center",
      objectFit: this.backgroundSize || "cover"
    }, this.aspectRatioCss);
    this.node_1_img = "builder-image" + (this.className ? " " + this.className : "");
    this.node_2_Show = this.aspectRatio && !(this.builderBlock?.children?.length && this.fitContent);
    this.node_3_div = {
      paddingTop: this.aspectRatio * 100 + "%"
    };
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_img = __spreadValues({
        objectPosition: this.backgroundPosition || "center",
        objectFit: this.backgroundSize || "cover"
      }, this.aspectRatioCss);
      this.node_1_img = "builder-image" + (this.className ? " " + this.className : "");
      this.node_2_Show = this.aspectRatio && !(this.builderBlock?.children?.length && this.fitContent);
      this.node_3_div = {
        paddingTop: this.aspectRatio * 100 + "%"
      };
    }
  }
  static {
    this.ɵfac = function BuilderImage_Factory(t) {
      return new (t || _BuilderImage)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderImage,
      selectors: [["builder-image"]],
      inputs: {
        backgroundPosition: "backgroundPosition",
        backgroundSize: "backgroundSize",
        className: "className",
        aspectRatio: "aspectRatio",
        builderBlock: "builderBlock",
        fitContent: "fitContent",
        image: "image",
        src: "src",
        srcset: "srcset",
        noWebp: "noWebp",
        highPriority: "highPriority",
        altText: "altText",
        sizes: "sizes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c5,
      decls: 7,
      vars: 14,
      consts: [[4, "ngIf"], [3, "ngStyle"], ["type", "image/webp"], [1, "builder-image-sizer", "div", 3, "ngStyle"], [1, "div-2"]],
      template: function BuilderImage_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c5);
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "picture");
          ɵɵtemplate(2, BuilderImage_ng_container_2_Template, 2, 1, "ng-container", 0);
          ɵɵelement(3, "img", 1);
          ɵɵelementEnd();
          ɵɵtemplate(4, BuilderImage_ng_container_4_Template, 2, 1, "ng-container", 0)(5, BuilderImage_ng_container_5_Template, 2, 0, "ng-container", 0)(6, BuilderImage_ng_container_6_Template, 3, 0, "ng-container", 0);
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.webpSrcSet);
          ɵɵadvance();
          ɵɵclassMap(ctx.node_1_img + " img");
          ɵɵproperty("ngStyle", ctx.node_0_img);
          ɵɵattribute("loading", ctx.highPriority ? "eager" : "lazy")("fetchpriority", ctx.highPriority ? "high" : "auto")("alt", ctx.altText)("role", ctx.altText ? void 0 : "presentation")("src", ctx.image, ɵɵsanitizeUrl)("srcset", ctx.srcSetToUse)("sizes", ctx.sizes);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.node_2_Show);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.builderBlock == null ? null : ctx.builderBlock.children == null ? null : ctx.builderBlock.children.length) && ctx.fitContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.fitContent && (ctx.builderBlock == null ? null : ctx.builderBlock.children == null ? null : ctx.builderBlock.children.length));
        }
      },
      dependencies: [CommonModule, NgIf, NgStyle],
      styles: ["[_nghost-%COMP%]{display:contents}.img[_ngcontent-%COMP%]{opacity:1;transition:opacity .2s ease-in-out}.div[_ngcontent-%COMP%]{width:100%;pointer-events:none;font-size:0}.div-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;position:absolute;top:0;left:0;width:100%;height:100%}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderImage, [{
    type: Component,
    args: [{
      selector: "builder-image",
      template: `
    <ng-container>
      <picture>
        <ng-container *ngIf="webpSrcSet">
          <source type="image/webp" [attr.srcset]="webpSrcSet" />
        </ng-container>
        <img
          [attr.loading]="highPriority ? 'eager' : 'lazy'"
          [attr.fetchpriority]="highPriority ? 'high' : 'auto'"
          [attr.alt]="altText"
          [attr.role]="altText ? undefined : 'presentation'"
          [ngStyle]="node_0_img"
          [class]="node_1_img + ' img'"
          [attr.src]="image"
          [attr.srcset]="srcSetToUse"
          [attr.sizes]="sizes"
        />
      </picture>
      <ng-container *ngIf="node_2_Show">
        <div class="builder-image-sizer div" [ngStyle]="node_3_div"></div>
      </ng-container>
      <ng-container *ngIf="builderBlock?.children?.length && fitContent">
        <ng-content></ng-content>
      </ng-container>
      <ng-container *ngIf="!fitContent && builderBlock?.children?.length">
        <div class="div-2"><ng-content></ng-content></div>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}.img{opacity:1;transition:opacity .2s ease-in-out}.div{width:100%;pointer-events:none;font-size:0}.div-2{display:flex;flex-direction:column;align-items:stretch;position:absolute;top:0;left:0;width:100%;height:100%}\n"]
    }]
  }], null, {
    backgroundPosition: [{
      type: Input
    }],
    backgroundSize: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    aspectRatio: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    srcset: [{
      type: Input
    }],
    noWebp: [{
      type: Input
    }],
    highPriority: [{
      type: Input
    }],
    altText: [{
      type: Input
    }],
    sizes: [{
      type: Input
    }]
  });
})();
var SectionComponent = class _SectionComponent {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_section = null;
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.node_0_section = {
      width: "100%",
      alignSelf: "stretch",
      flexGrow: 1,
      boxSizing: "border-box",
      maxWidth: this.maxWidth || 1200,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      marginLeft: "auto",
      marginRight: "auto"
    };
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_section = {
        width: "100%",
        alignSelf: "stretch",
        flexGrow: 1,
        boxSizing: "border-box",
        maxWidth: this.maxWidth || 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        marginLeft: "auto",
        marginRight: "auto"
      };
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function SectionComponent_Factory(t) {
      return new (t || _SectionComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SectionComponent,
      selectors: [["section-component"]],
      viewQuery: function SectionComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        maxWidth: "maxWidth",
        attributes: "attributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [["elRef0", ""], [3, "ngStyle"]],
      template: function SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "section", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.node_0_section);
        }
      },
      dependencies: [CommonModule, NgStyle],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionComponent, [{
    type: Component,
    args: [{
      selector: "section-component",
      template: `
    <section [ngStyle]="node_0_section" #elRef0>
      <ng-content></ng-content>
    </section>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    maxWidth: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var getTopLevelDomain = (host) => {
  if (host === "localhost" || host === "127.0.0.1") {
    return host;
  }
  const parts = host.split(".");
  if (parts.length > 2) {
    return parts.slice(1).join(".");
  }
  return host;
};
var getCookieSync = ({
  name,
  canTrack
}) => {
  try {
    if (!canTrack) {
      return void 0;
    }
    return document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
  } catch (err) {
    logger.warn("[COOKIE] GET error: ", err?.message || err);
    return void 0;
  }
};
var getCookie = (args) => __async(void 0, null, function* () {
  return getCookieSync(args);
});
var stringifyCookie = (cookie) => cookie.map(([key, value]) => value ? `${key}=${value}` : key).filter(checkIsDefined).join("; ");
var SECURE_CONFIG = [["secure", ""], ["SameSite", "None"]];
var createCookieString = ({
  name,
  value,
  expires
}) => {
  const secure = isBrowser() ? location.protocol === "https:" : true;
  const secureObj = secure ? SECURE_CONFIG : [[]];
  const expiresObj = expires ? [["expires", expires.toUTCString()]] : [[]];
  const cookieValue = [[name, value], ...expiresObj, ["path", "/"], ["domain", getTopLevelDomain(window.location.hostname)], ...secureObj];
  const cookie = stringifyCookie(cookieValue);
  return cookie;
};
var setCookie = (_0) => __async(void 0, [_0], function* ({
  name,
  value,
  expires,
  canTrack
}) {
  try {
    if (!canTrack) {
      return;
    }
    const cookie = createCookieString({
      name,
      value,
      expires
    });
    document.cookie = cookie;
  } catch (err) {
    logger.warn("[COOKIE] SET error: ", err?.message || err);
  }
});
var BUILDER_STORE_PREFIX = "builder.tests";
var getContentTestKey = (id) => `${BUILDER_STORE_PREFIX}.${id}`;
var getContentVariationCookie = ({
  contentId
}) => getCookie({
  name: getContentTestKey(contentId),
  canTrack: true
});
var getContentVariationCookieSync = ({
  contentId
}) => getCookieSync({
  name: getContentTestKey(contentId),
  canTrack: true
});
var setContentVariationCookie = ({
  contentId,
  value
}) => setCookie({
  name: getContentTestKey(contentId),
  value,
  canTrack: true
});
var checkIsBuilderContentWithVariations = (item) => checkIsDefined(item.id) && checkIsDefined(item.variations) && Object.keys(item.variations).length > 0;
var getRandomVariationId = ({
  id,
  variations
}) => {
  let n = 0;
  const random = Math.random();
  for (const id2 in variations) {
    const testRatio = variations[id2]?.testRatio;
    n += testRatio;
    if (random < n) {
      return id2;
    }
  }
  return id;
};
var getAndSetVariantId = (args) => {
  const randomVariationId = getRandomVariationId(args);
  setContentVariationCookie({
    contentId: args.id,
    value: randomVariationId
  }).catch((err) => {
    logger.error("could not store A/B test variation: ", err);
  });
  return randomVariationId;
};
var getTestFields = ({
  item,
  testGroupId
}) => {
  const variationValue = item.variations[testGroupId];
  if (testGroupId === item.id || // handle edge-case where `testGroupId` points to non-existing variation
  !variationValue) {
    return {
      testVariationId: item.id,
      testVariationName: "Default"
    };
  } else {
    return {
      data: variationValue.data,
      testVariationId: variationValue.id,
      testVariationName: variationValue.name || (variationValue.id === item.id ? "Default" : "")
    };
  }
};
var handleABTestingSync = ({
  item,
  canTrack
}) => {
  if (TARGET === "reactNative")
    return item;
  if (!canTrack) {
    return item;
  }
  if (!item) {
    return void 0;
  }
  if (!checkIsBuilderContentWithVariations(item)) {
    return item;
  }
  const testGroupId = getContentVariationCookieSync({
    contentId: item.id
  }) || getAndSetVariantId({
    variations: item.variations,
    id: item.id
  });
  const variationValue = getTestFields({
    item,
    testGroupId
  });
  return __spreadValues(__spreadValues({}, item), variationValue);
};
var handleABTesting = (_0) => __async(void 0, [_0], function* ({
  item,
  canTrack
}) {
  if (!canTrack) {
    return item;
  }
  if (!checkIsBuilderContentWithVariations(item)) {
    return item;
  }
  const cookieValue = yield getContentVariationCookie({
    contentId: item.id
  });
  const testGroupId = cookieValue || getAndSetVariantId({
    variations: item.variations,
    id: item.id
  });
  const variationValue = getTestFields({
    item,
    testGroupId
  });
  return __spreadValues(__spreadValues({}, item), variationValue);
});
var USER_ATTRIBUTES_COOKIE_NAME = "builder.userAttributes";
function createUserAttributesService() {
  let canTrack = true;
  const subscribers = /* @__PURE__ */ new Set();
  return {
    setUserAttributes(newAttrs) {
      if (!isBrowser()) {
        return;
      }
      const userAttributes = __spreadValues(__spreadValues({}, this.getUserAttributes()), newAttrs);
      setCookie({
        name: USER_ATTRIBUTES_COOKIE_NAME,
        value: JSON.stringify(userAttributes),
        canTrack
      });
      subscribers.forEach((callback) => callback(userAttributes));
    },
    getUserAttributes() {
      if (!isBrowser()) {
        return {};
      }
      return JSON.parse(getCookieSync({
        name: USER_ATTRIBUTES_COOKIE_NAME,
        canTrack
      }) || "{}");
    },
    subscribeOnUserAttributesChange(callback) {
      subscribers.add(callback);
      return () => {
        subscribers.delete(callback);
      };
    },
    setCanTrack(value) {
      canTrack = value;
    }
  };
}
var userAttributesService = createUserAttributesService();
var setClientUserAttributes = (attributes) => {
  userAttributesService.setUserAttributes(attributes);
};
var getDefaultCanTrack = (canTrack) => {
  const result = checkIsDefined(canTrack) ? canTrack : true;
  userAttributesService.setCanTrack(result);
  return result;
};
var defaultTitle = {
  "@type": "@builder.io/sdk:Element",
  layerName: "Accordion item title",
  responsiveStyles: {
    large: {
      marginTop: "10px",
      position: "relative",
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      paddingBottom: "10px"
    }
  },
  children: [{
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        textAlign: "left",
        display: "flex",
        flexDirection: "column"
      }
    },
    component: {
      name: "Text",
      options: {
        text: "I am an accordion title. Click me!"
      }
    }
  }]
};
var defaultDetail = {
  "@type": "@builder.io/sdk:Element",
  layerName: "Accordion item detail",
  responsiveStyles: {
    large: {
      position: "relative",
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      marginTop: "10px",
      paddingBottom: "10px"
    }
  },
  children: [{
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        paddingTop: "50px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "50px"
      }
    },
    component: {
      name: "Text",
      options: {
        text: "I am an accordion detail, hello!"
      }
    }
  }]
};
var componentInfo$j = {
  name: "Builder:Accordion",
  canHaveChildren: true,
  image: "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Ffab6c1fd3fe542408cbdec078bca7f35",
  defaultStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  },
  inputs: [{
    name: "items",
    type: "list",
    broadcast: true,
    subFields: [{
      name: "title",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [defaultTitle]
    }, {
      name: "detail",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [defaultDetail]
    }],
    defaultValue: [{
      title: [defaultTitle],
      detail: [defaultDetail]
    }, {
      title: [defaultTitle],
      detail: [defaultDetail]
    }],
    showIf: (options) => !options.get("useChildrenForItems")
  }, {
    name: "oneAtATime",
    helperText: "Only allow opening one at a time (collapse all others when new item openned)",
    type: "boolean",
    defaultValue: false
  }, {
    name: "grid",
    helperText: "Display as a grid",
    type: "boolean",
    defaultValue: false
  }, {
    name: "gridRowWidth",
    helperText: "Display as a grid",
    type: "string",
    showIf: (options) => options.get("grid"),
    defaultValue: "25%"
  }, {
    name: "useChildrenForItems",
    type: "boolean",
    helperText: "Use child elements for each slide, instead of the array. Useful for dynamically repeating items",
    advanced: true,
    defaultValue: false,
    onChange: (options) => {
      if (options.get("useChildrenForItems") === true) {
        options.set("items", []);
      }
    }
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true,
    builderComponents: true,
    builderLinkComponent: true
  }
};
var convertOrderNumberToString = (order) => {
  return order.toString();
};
var Accordion = class _Accordion {
  constructor() {
    this.open = [];
    this.node_0_div = (item, index) => this.getAccordionTitleClassName(index);
    this.node_1_div = (item, index) => __spreadValues(__spreadValues({}, this.accordionTitleStyles), this.grid && __spreadValues({
      width: this.gridRowWidth
    }, {
      order: this.openGridItemOrder !== null ? convertOrderNumberToString(index) : convertOrderNumberToString(index + 1)
    }));
    this.node_3_Blocks = (item, index) => `items.${index}.title`;
    this.node_4_Show = (item, index) => this.open.includes(index);
    this.node_5_div = (item, index) => this.getAccordionDetailClassName(index);
    this.node_6_Blocks = (item, index) => `items.${index}.detail`;
  }
  get onlyOneAtATime() {
    return Boolean(this.grid || this.oneAtATime);
  }
  get accordionStyles() {
    const styles = __spreadValues({
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column"
    }, this.grid && {
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap"
    });
    return styles;
  }
  get accordionTitleStyles() {
    const shared = {
      display: "flex",
      flexDirection: "column"
    };
    const styles = __spreadProps(__spreadValues({}, shared), {
      alignItems: "stretch",
      cursor: "pointer"
    });
    return Object.fromEntries(Object.entries(styles).filter(([_, value]) => value !== void 0));
  }
  getAccordionTitleClassName(index) {
    return `builder-accordion-title builder-accordion-title-${this.open.includes(index) ? "open" : "closed"}`;
  }
  getAccordionDetailClassName(index) {
    return `builder-accordion-detail builder-accordion-detail-${this.open.includes(index) ? "open" : "closed"}`;
  }
  get openGridItemOrder() {
    let itemOrder = null;
    const getOpenGridItemPosition = this.grid && this.open.length;
    if (getOpenGridItemPosition && document) {
      const openItemIndex = this.open[0];
      const openItem = document.querySelector(`.builder-accordion-title[data-index="${openItemIndex}"]`);
      let subjectItem = openItem;
      itemOrder = openItemIndex;
      if (subjectItem) {
        let prevItemRect = subjectItem.getBoundingClientRect();
        while (subjectItem = subjectItem && subjectItem.nextElementSibling) {
          if (subjectItem) {
            if (subjectItem.classList.contains("builder-accordion-detail")) {
              continue;
            }
            const subjectItemRect = subjectItem.getBoundingClientRect();
            if (subjectItemRect.left > prevItemRect.left) {
              const index = parseInt(subjectItem.getAttribute("data-index") || "", 10);
              if (!isNaN(index)) {
                prevItemRect = subjectItemRect;
                itemOrder = index;
              }
            } else {
              break;
            }
          }
        }
      }
    }
    if (typeof itemOrder === "number") {
      itemOrder = itemOrder + 1;
    }
    return itemOrder;
  }
  get accordionDetailStyles() {
    const styles = __spreadValues(__spreadValues({}, {
      order: typeof this.openGridItemOrder === "number" ? this.openGridItemOrder : void 0
    }), this.grid && {
      width: "100%"
    });
    return Object.fromEntries(Object.entries(styles).filter(([_, value]) => value !== void 0));
  }
  onClick(index) {
    if (this.open.includes(index)) {
      this.open = this.onlyOneAtATime ? [] : this.open.filter((item) => item !== index);
    } else {
      this.open = this.onlyOneAtATime ? [index] : this.open.concat(index);
    }
  }
  trackByItem0(index, item) {
    return index;
  }
  static {
    this.ɵfac = function Accordion_Factory(t) {
      return new (t || _Accordion)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Accordion,
      selectors: [["accordion"]],
      inputs: {
        grid: "grid",
        oneAtATime: "oneAtATime",
        gridRowWidth: "gridRowWidth",
        items: "items",
        builderBlock: "builderBlock",
        builderContext: "builderContext",
        builderComponents: "builderComponents",
        builderLinkComponent: "builderLinkComponent"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "builder-accordion", 3, "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "ngStyle"], [3, "blocks", "path", "parent", "context", "registeredComponents", "linkComponent"], [4, "ngIf"], [3, "ngStyle"]],
      template: function Accordion_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, Accordion_ng_container_1_Template, 5, 11, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.accordionStyles);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByItem0);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgStyle, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "accordion",
      template: `
    <div class="builder-accordion" [ngStyle]="accordionStyles">
      <ng-container
        *ngFor="let item of items; index as index; trackBy: trackByItem0"
      >
        <ng-container>
          <div
            [class]="node_0_div(item, index)"
            [ngStyle]="node_1_div(item, index)"
            [attr.data-index]="index"
            (click)="onClick(index)"
          >
            <blocks
              [blocks]="item.title"
              [path]="node_3_Blocks(item, index)"
              [parent]="builderBlock.id"
              [context]="builderContext"
              [registeredComponents]="builderComponents"
              [linkComponent]="builderLinkComponent"
            ></blocks>
          </div>
          <ng-container *ngIf="node_4_Show(item, index)">
            <div
              [class]="node_5_div(item, index)"
              [ngStyle]="accordionDetailStyles"
            >
              <blocks
                [blocks]="item.detail"
                [path]="node_6_Blocks(item, index)"
                [parent]="builderBlock.id"
                [context]="builderContext"
                [registeredComponents]="builderComponents"
                [linkComponent]="builderLinkComponent"
              ></blocks>
            </div>
          </ng-container>
        </ng-container>
      </ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, Blocks],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    grid: [{
      type: Input
    }],
    oneAtATime: [{
      type: Input
    }],
    gridRowWidth: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    builderContext: [{
      type: Input
    }],
    builderComponents: [{
      type: Input
    }],
    builderLinkComponent: [{
      type: Input
    }]
  });
})();
var componentInfo$i = {
  name: "Core:Button",
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13",
  defaultStyles: {
    // TODO: make min width more intuitive and set one
    appearance: "none",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    backgroundColor: "#000000",
    color: "white",
    borderRadius: "4px",
    textAlign: "center",
    cursor: "pointer"
  },
  inputs: [{
    name: "text",
    type: "text",
    defaultValue: "Click me!",
    bubble: true
  }, {
    name: "link",
    type: "url",
    bubble: true
  }, {
    name: "openLinkInNewTab",
    type: "boolean",
    defaultValue: false,
    friendlyName: "Open link in new tab"
  }],
  static: true,
  noWrap: true,
  shouldReceiveBuilderProps: {
    builderLinkComponent: true
  }
};
var componentInfo$h = {
  // TODO: ways to statically preprocess JSON for references, functions, etc
  name: "Columns",
  isRSC: true,
  inputs: [{
    name: "columns",
    type: "array",
    broadcast: true,
    subFields: [{
      name: "blocks",
      type: "array",
      hideFromUI: true,
      defaultValue: [{
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden"
          }
        },
        component: {
          name: "Image",
          options: {
            image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            backgroundPosition: "center",
            backgroundSize: "cover",
            aspectRatio: 0.7004048582995948
          }
        }
      }, {
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto"
          }
        },
        component: {
          name: "Text",
          options: {
            text: "<p>Enter some text...</p>"
          }
        }
      }]
    }, {
      name: "width",
      type: "number",
      hideFromUI: true,
      helperText: "Width %, e.g. set to 50 to fill half of the space"
    }, {
      name: "link",
      type: "url",
      helperText: "Optionally set a url that clicking this column will link to"
    }],
    defaultValue: [{
      blocks: [{
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden"
          }
        },
        component: {
          name: "Image",
          options: {
            image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            backgroundPosition: "center",
            backgroundSize: "cover",
            aspectRatio: 0.7004048582995948
          }
        }
      }, {
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto"
          }
        },
        component: {
          name: "Text",
          options: {
            text: "<p>Enter some text...</p>"
          }
        }
      }]
    }, {
      blocks: [{
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden"
          }
        },
        component: {
          name: "Image",
          options: {
            image: "https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            backgroundPosition: "center",
            backgroundSize: "cover",
            aspectRatio: 0.7004048582995948
          }
        }
      }, {
        "@type": "@builder.io/sdk:Element",
        responsiveStyles: {
          large: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            flexShrink: "0",
            position: "relative",
            marginTop: "30px",
            textAlign: "center",
            lineHeight: "normal",
            height: "auto"
          }
        },
        component: {
          name: "Text",
          options: {
            text: "<p>Enter some text...</p>"
          }
        }
      }]
    }],
    onChange: (options) => {
      function clearWidths() {
        columns.forEach((col) => {
          col.delete("width");
        });
      }
      const columns = options.get("columns");
      if (Array.isArray(columns)) {
        const containsColumnWithWidth = !!columns.find((col) => col.get("width"));
        if (containsColumnWithWidth) {
          const containsColumnWithoutWidth = !!columns.find((col) => !col.get("width"));
          if (containsColumnWithoutWidth) {
            clearWidths();
          } else {
            const sumWidths = columns.reduce((memo, col) => {
              return memo + col.get("width");
            }, 0);
            const widthsDontAddUp = sumWidths !== 100;
            if (widthsDontAddUp) {
              clearWidths();
            }
          }
        }
      }
    }
  }, {
    name: "space",
    type: "number",
    defaultValue: 20,
    helperText: "Size of gap between columns",
    advanced: true
  }, {
    name: "stackColumnsAt",
    type: "string",
    defaultValue: "tablet",
    helperText: "Convert horizontal columns to vertical at what device size",
    enum: ["tablet", "mobile", "never"],
    advanced: true
  }, {
    name: "reverseColumnsWhenStacked",
    type: "boolean",
    defaultValue: false,
    helperText: "When stacking columns for mobile devices, reverse the ordering",
    advanced: true
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true,
    builderComponents: true,
    builderLinkComponent: true
  }
};
var componentInfo$g = {
  name: "Fragment",
  static: true,
  hidden: true,
  canHaveChildren: true,
  noWrap: true
};
var IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "svg", "webp", "gif", "jfif", "pjpeg", "pjp", "apng", "avif", "tif", "tiff", "heif", "bmp", "eps", "raw", "cr2", "nef", "orf", "sr2", "psd", "heic", "dib", "ai"];
var VIDEO_FILE_TYPES = ["mp4", "webm", "mkv", "flv", "vob", "ogv", "ogg", "drc", "gif", "gifv", "mng", "avi", "mov", "qt", "mts", "m2ts", "ts", "wmv", "yuv", "rm", "rmvb", "viv", "asf", "amv", "m4p", "mpeg", "mpe", "m2v", "m4v", "svi", "3gp", "3g2", "mxf", "roq", "nsv", "f4v", "f4p", "f4a", "f4b"];
var componentInfo$f = {
  name: "Image",
  static: true,
  image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",
  defaultStyles: {
    position: "relative",
    minHeight: "20px",
    minWidth: "20px",
    overflow: "hidden"
  },
  canHaveChildren: true,
  inputs: [{
    name: "image",
    type: "file",
    bubble: true,
    allowedFileTypes: IMAGE_FILE_TYPES,
    required: true,
    defaultValue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",
    onChange: (options) => {
      const DEFAULT_ASPECT_RATIO = 0.7041;
      options.delete("srcset");
      options.delete("noWebp");
      function loadImage(url, timeout = 6e4) {
        return new Promise((resolve, reject) => {
          const img = document.createElement("img");
          let loaded = false;
          img.onload = () => {
            loaded = true;
            resolve(img);
          };
          img.addEventListener("error", (event) => {
            console.warn("Image load failed", event.error);
            reject(event.error);
          });
          img.src = url;
          setTimeout(() => {
            if (!loaded) {
              reject(new Error("Image load timed out"));
            }
          }, timeout);
        });
      }
      function round2(num) {
        return Math.round(num * 1e3) / 1e3;
      }
      const value = options.get("image");
      const aspectRatio = options.get("aspectRatio");
      fetch(value).then((res) => res.blob()).then((blob) => {
        if (blob.type.includes("svg")) {
          options.set("noWebp", true);
        }
      });
      if (value && (!aspectRatio || aspectRatio === DEFAULT_ASPECT_RATIO)) {
        return loadImage(value).then((img) => {
          const possiblyUpdatedAspectRatio = options.get("aspectRatio");
          if (options.get("image") === value && (!possiblyUpdatedAspectRatio || possiblyUpdatedAspectRatio === DEFAULT_ASPECT_RATIO)) {
            if (img.width && img.height) {
              options.set("aspectRatio", round2(img.height / img.width));
              options.set("height", img.height);
              options.set("width", img.width);
            }
          }
        });
      }
    }
  }, {
    name: "backgroundSize",
    type: "text",
    defaultValue: "cover",
    enum: [{
      label: "contain",
      value: "contain",
      helperText: "The image should never get cropped"
    }, {
      label: "cover",
      value: "cover",
      helperText: "The image should fill it's box, cropping when needed"
    }]
  }, {
    name: "backgroundPosition",
    type: "text",
    defaultValue: "center",
    enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"]
  }, {
    name: "altText",
    type: "string",
    helperText: "Text to display when the user has images off"
  }, {
    name: "height",
    type: "number",
    hideFromUI: true
  }, {
    name: "width",
    type: "number",
    hideFromUI: true
  }, {
    name: "sizes",
    type: "string",
    hideFromUI: true
  }, {
    name: "srcset",
    type: "string",
    hideFromUI: true
  }, {
    name: "lazy",
    type: "boolean",
    defaultValue: true,
    hideFromUI: true
  }, {
    name: "fitContent",
    type: "boolean",
    helperText: "When child blocks are provided, fit to them instead of using the image's aspect ratio",
    defaultValue: true
  }, {
    name: "highPriority",
    type: "boolean",
    advanced: true,
    helperText: "Mark this image as high priority compared to other images on the page. This prevents lazy loading of the image and tells the browser to load this image before others on the page."
  }, {
    name: "aspectRatio",
    type: "number",
    helperText: "This is the ratio of height/width, e.g. set to 1.5 for a 300px wide and 200px tall photo. Set to 0 to not force the image to maintain it's aspect ratio",
    advanced: true,
    defaultValue: 0.7041
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true
  }
};
var componentInfo$e = {
  name: "PersonalizationContainer",
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true
  },
  noWrap: true,
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F37229ed30d8c41dfb10b8cca1992053a",
  canHaveChildren: true,
  inputs: [{
    name: "variants",
    defaultValue: [],
    behavior: "personalizationVariantList",
    type: "list",
    subFields: [{
      name: "name",
      type: "text"
    }, {
      name: "query",
      friendlyName: "Targeting rules",
      type: "BuilderQuery",
      defaultValue: []
    }, {
      name: "startDate",
      type: "date"
    }, {
      name: "endDate",
      type: "date"
    }, {
      name: "blocks",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: []
    }]
  }]
};
var InlinedScript = class _InlinedScript {
  constructor(renderer, document2, platformId) {
    this.renderer = renderer;
    this.document = document2;
    this.platformId = platformId;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement("script");
      script.innerHTML = this.scriptStr;
      this.renderer.setAttribute(script, "data-id", this.id);
      this.renderer.setAttribute(script, "nonce", this.nonce);
      this.renderer.appendChild(this.document.body, script);
    }
  }
  static {
    this.ɵfac = function InlinedScript_Factory(t) {
      return new (t || _InlinedScript)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InlinedScript,
      selectors: [["inlined-script"], ["InlinedScript"]],
      inputs: {
        scriptStr: "scriptStr",
        id: "id",
        nonce: "nonce"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function InlinedScript_Template(rf, ctx) {
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlinedScript, [{
    type: Component,
    args: [{
      selector: "inlined-script, InlinedScript",
      template: ``,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    scriptStr: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    nonce: [{
      type: Input
    }]
  });
})();
function isPreviewing(_search) {
  const search = _search || (isBrowser() ? window.location.search : void 0);
  if (!search) {
    return false;
  }
  const normalizedSearch = getSearchString(search);
  return Boolean(normalizedSearch.indexOf("builder.preview=") !== -1);
}
function filterWithCustomTargeting(userAttributes, query, startDate, endDate) {
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function objectMatchesQuery(userattr, query2) {
    const result = (() => {
      const property = query2.property;
      const operator = query2.operator;
      let testValue = query2.value;
      if (query2 && query2.property === "urlPath" && query2.value && typeof query2.value === "string" && query2.value !== "/" && query2.value.endsWith("/")) {
        testValue = query2.value.slice(0, -1);
      }
      if (!(property && operator)) {
        return true;
      }
      if (Array.isArray(testValue)) {
        if (operator === "isNot") {
          return testValue.every((val) => objectMatchesQuery(userattr, {
            property,
            operator,
            value: val
          }));
        }
        return !!testValue.find((val) => objectMatchesQuery(userattr, {
          property,
          operator,
          value: val
        }));
      }
      const value = userattr[property];
      if (Array.isArray(value)) {
        return value.includes(testValue);
      }
      switch (operator) {
        case "is":
          return value === testValue;
        case "isNot":
          return value !== testValue;
        case "contains":
          return (isString(value) || Array.isArray(value)) && value.includes(String(testValue));
        case "startsWith":
          return isString(value) && value.startsWith(String(testValue));
        case "endsWith":
          return isString(value) && value.endsWith(String(testValue));
        case "greaterThan":
          return isNumber(value) && isNumber(testValue) && value > testValue;
        case "lessThan":
          return isNumber(value) && isNumber(testValue) && value < testValue;
        case "greaterThanOrEqualTo":
          return isNumber(value) && isNumber(testValue) && value >= testValue;
        case "lessThanOrEqualTo":
          return isNumber(value) && isNumber(testValue) && value <= testValue;
        default:
          return false;
      }
    })();
    return result;
  }
  const item = {
    query,
    startDate,
    endDate
  };
  const now = userAttributes.date && new Date(userAttributes.date) || /* @__PURE__ */ new Date();
  if (item.startDate && new Date(item.startDate) > now) {
    return false;
  } else if (item.endDate && new Date(item.endDate) < now) {
    return false;
  }
  if (!item.query || !item.query.length) {
    return true;
  }
  return item.query.every((filter) => {
    return objectMatchesQuery(userAttributes, filter);
  });
}
var PERSONALIZATION_SCRIPT = `function getPersonalizedVariant(variants, blockId, locale) {
  if (!navigator.cookieEnabled) {
    return;
  }
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function removeVariants() {
    variants?.forEach(function (_, index) {
      document.querySelector('template[data-variant-id="' + blockId + '-' + index + '"]')?.remove();
    });
    document.querySelector('script[data-id="variants-script-' + blockId + '"]')?.remove();
    document.querySelector('style[data-id="variants-styles-' + blockId + '"]')?.remove();
  }
  const attributes = JSON.parse(getCookie('builder.userAttributes') || '{}');
  if (locale) {
    attributes.locale = locale;
  }
  const winningVariantIndex = variants?.findIndex(function (variant) {
    return filterWithCustomTargeting(attributes, variant.query, variant.startDate, variant.endDate);
  });
  const isDebug = location.href.includes('builder.debug=true');
  if (isDebug) {
    console.debug('PersonalizationContainer', {
      attributes,
      variants,
      winningVariantIndex
    });
  }
  if (winningVariantIndex !== -1) {
    const winningVariant = document.querySelector('template[data-variant-id="' + blockId + '-' + winningVariantIndex + '"]');
    if (winningVariant) {
      const parentNode = winningVariant.parentNode;
      if (parentNode) {
        const newParent = parentNode.cloneNode(false);
        newParent.appendChild(winningVariant.content.firstChild);
        newParent.appendChild(winningVariant.content.lastChild);
        parentNode.parentNode?.replaceChild(newParent, parentNode);
      }
      if (isDebug) {
        console.debug('PersonalizationContainer', 'Winning variant Replaced:', winningVariant);
      }
    }
  } else if (variants && variants.length > 0) {
    removeVariants();
  }
}`;
var FILTER_WITH_CUSTOM_TARGETING_SCRIPT = "function filterWithCustomTargeting(userAttributes, query, startDate, endDate) {\n  function isString(val) {\n    return typeof val === 'string';\n  }\n  function isNumber(val) {\n    return typeof val === 'number';\n  }\n  function objectMatchesQuery(userattr, query) {\n    const result = (() => {\n      const property = query.property;\n      const operator = query.operator;\n      let testValue = query.value;\n      if (query && query.property === 'urlPath' && query.value && typeof query.value === 'string' && query.value !== '/' && query.value.endsWith('/')) {\n        testValue = query.value.slice(0, -1);\n      }\n      if (!(property && operator)) {\n        return true;\n      }\n      if (Array.isArray(testValue)) {\n        if (operator === 'isNot') {\n          return testValue.every(val => objectMatchesQuery(userattr, {\n            property,\n            operator,\n            value: val\n          }));\n        }\n        return !!testValue.find(val => objectMatchesQuery(userattr, {\n          property,\n          operator,\n          value: val\n        }));\n      }\n      const value = userattr[property];\n      if (Array.isArray(value)) {\n        return value.includes(testValue);\n      }\n      switch (operator) {\n        case 'is':\n          return value === testValue;\n        case 'isNot':\n          return value !== testValue;\n        case 'contains':\n          return (isString(value) || Array.isArray(value)) && value.includes(String(testValue));\n        case 'startsWith':\n          return isString(value) && value.startsWith(String(testValue));\n        case 'endsWith':\n          return isString(value) && value.endsWith(String(testValue));\n        case 'greaterThan':\n          return isNumber(value) && isNumber(testValue) && value > testValue;\n        case 'lessThan':\n          return isNumber(value) && isNumber(testValue) && value < testValue;\n        case 'greaterThanOrEqualTo':\n          return isNumber(value) && isNumber(testValue) && value >= testValue;\n        case 'lessThanOrEqualTo':\n          return isNumber(value) && isNumber(testValue) && value <= testValue;\n        default:\n          return false;\n      }\n    })();\n    return result;\n  }\n  const item = {\n    query,\n    startDate,\n    endDate\n  };\n  const now = userAttributes.date && new Date(userAttributes.date) || new Date();\n  if (item.startDate && new Date(item.startDate) > now) {\n    return false;\n  } else if (item.endDate && new Date(item.endDate) < now) {\n    return false;\n  }\n  if (!item.query || !item.query.length) {\n    return true;\n  }\n  return item.query.every(filter => {\n    return objectMatchesQuery(userAttributes, filter);\n  });\n}";
function checkShouldRenderVariants$1(variants, canTrack) {
  const hasVariants = variants && variants.length > 0;
  if (TARGET === "reactNative")
    return false;
  if (!hasVariants)
    return false;
  if (!canTrack)
    return false;
  if (TARGET === "vue" || TARGET === "svelte")
    return true;
  if (isBrowser())
    return false;
  return true;
}
function getBlocksToRender({
  variants,
  previewingIndex,
  isHydrated,
  filteredVariants,
  fallbackBlocks
}) {
  const fallback = {
    blocks: fallbackBlocks ?? [],
    path: "this.children"
  };
  if (isHydrated && isEditing()) {
    if (typeof previewingIndex === "number" && previewingIndex < (variants?.length ?? 0)) {
      const variant = variants[previewingIndex];
      return {
        blocks: variant.blocks,
        path: `component.options.variants.${previewingIndex}.blocks`
      };
    }
    return fallback;
  }
  if (isBrowser()) {
    const winningVariant = filteredVariants?.[0];
    if (winningVariant) {
      return {
        blocks: winningVariant.blocks,
        path: `component.options.variants.${variants?.indexOf(winningVariant)}.blocks`
      };
    }
  }
  return fallback;
}
var getPersonalizationScript = (variants, blockId, locale) => {
  return `
  (function() {
    ${FILTER_WITH_CUSTOM_TARGETING_SCRIPT}
    ${PERSONALIZATION_SCRIPT}
    getPersonalizedVariant(${JSON.stringify(variants)}, "${blockId}"${locale ? `, "${locale}"` : ""})
  })();
  `;
};
var PersonalizationContainer = class _PersonalizationContainer {
  get filteredVariants() {
    return (this.variants || []).filter((variant) => {
      return filterWithCustomTargeting(__spreadValues(__spreadValues({}, this.builderContext?.rootState?.locale ? {
        locale: this.builderContext?.rootState?.locale
      } : {}), this.userAttributes), variant.query, variant.startDate, variant.endDate);
    });
  }
  get blocksToRender() {
    return getBlocksToRender({
      variants: this.variants,
      fallbackBlocks: this.builderBlock?.children,
      isHydrated: this.isHydrated,
      filteredVariants: this.filteredVariants,
      previewingIndex: this.previewingIndex
    });
  }
  get hideVariantsStyleString() {
    return (this.variants || []).map((_, index) => `[data-variant-id="${this.builderBlock?.id}-${index}"] { display: none; } `).join("");
  }
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  trackByVariant0(index, variant) {
    return index;
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.userAttributes = userAttributesService.getUserAttributes();
    this.scriptStr = null;
    this.unsubscribers = [];
    this.shouldRenderVariants = null;
    this.isHydrated = false;
    this.node_0_div = null;
    this.node_1_template = (variant, index) => `${this.builderBlock?.id}-${index}`;
    this.node_2_Blocks = (variant, index) => `component.options.variants.${index}.blocks`;
    this.node_3_InlinedStyles = null;
    this.node_4_InlinedScript = null;
  }
  ngOnInit() {
    this.scriptStr = getPersonalizationScript(this.variants, this.builderBlock?.id || "none", this.builderContext?.rootState?.locale);
    this.shouldRenderVariants = checkShouldRenderVariants$1(this.variants, getDefaultCanTrack(this.builderContext?.canTrack));
    this.node_0_div = `builder-personalization-container ${this.attributes?.className || ""}`;
    this.node_3_InlinedStyles = `variants-styles-${this.builderBlock?.id}`;
    this.node_4_InlinedScript = `variants-script-${this.builderBlock?.id}`;
    if (typeof window !== "undefined") {
      this.isHydrated = true;
      const unsub = userAttributesService.subscribeOnUserAttributesChange((attrs) => {
        this.userAttributes = attrs;
      });
      if (!(isEditing() || isPreviewing())) {
        const variant = this.filteredVariants[0];
        if (this.rootRef.nativeElement) {
          this.rootRef.nativeElement.dispatchEvent(new CustomEvent("builder.variantLoaded", {
            detail: {
              variant: variant || "default",
              content: this.builderContext?.content
            },
            bubbles: true
          }));
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && this.rootRef.nativeElement) {
                this.rootRef.nativeElement.dispatchEvent(new CustomEvent("builder.variantDisplayed", {
                  detail: {
                    variant: variant || "default",
                    content: this.builderContext?.content
                  },
                  bubbles: true
                }));
              }
            });
          });
          observer.observe(this.rootRef.nativeElement);
        }
      }
      this.unsubscribers.push(unsub);
    }
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = `builder-personalization-container ${this.attributes?.className || ""}`;
      this.node_3_InlinedStyles = `variants-styles-${this.builderBlock?.id}`;
      this.node_4_InlinedScript = `variants-script-${this.builderBlock?.id}`;
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    this.unsubscribers.forEach((unsub) => unsub());
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function PersonalizationContainer_Factory(t) {
      return new (t || _PersonalizationContainer)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PersonalizationContainer,
      selectors: [["personalization-container"]],
      viewQuery: function PersonalizationContainer_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c9, 5);
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        builderContext: "builderContext",
        attributes: "attributes",
        builderBlock: "builderBlock",
        variants: "variants",
        previewingIndex: "previewingIndex"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 5,
      vars: 6,
      consts: [["rootRef", "", "elRef0", ""], [4, "ngIf"], [3, "blocks", "parent", "path"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nonce", "styles", "id"], [3, "nonce", "scriptStr", "id"]],
      template: function PersonalizationContainer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", null, 0);
          ɵɵtemplate(3, PersonalizationContainer_ng_container_3_Template, 4, 8, "ng-container", 1);
          ɵɵelement(4, "blocks", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.node_0_div);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.shouldRenderVariants);
          ɵɵadvance();
          ɵɵproperty("blocks", ctx.blocksToRender.blocks)("parent", ctx.builderBlock == null ? null : ctx.builderBlock.id)("path", ctx.blocksToRender.path);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, Blocks, InlinedStyles, InlinedScript],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationContainer, [{
    type: Component,
    args: [{
      selector: "personalization-container",
      template: `
    <div #rootRef [class]="node_0_div" #elRef0>
      <ng-container *ngIf="shouldRenderVariants">
        <ng-container
          *ngFor="let variant of variants; index as index; trackBy: trackByVariant0"
        >
          <template [attr.data-variant-id]="node_1_template(variant, index)">
            <blocks
              [blocks]="variant.blocks"
              [parent]="builderBlock?.id"
              [path]="node_2_Blocks(variant, index)"
            ></blocks>
          </template>
        </ng-container>
        <inlined-styles
          [nonce]="builderContext?.nonce || ''"
          [styles]="hideVariantsStyleString"
          [id]="node_3_InlinedStyles"
        ></inlined-styles>
        <inlined-script
          [nonce]="builderContext?.nonce || ''"
          [scriptStr]="scriptStr"
          [id]="node_4_InlinedScript"
        ></inlined-script>
      </ng-container>
      <blocks
        [blocks]="blocksToRender.blocks"
        [parent]="builderBlock?.id"
        [path]="blocksToRender.path"
      ></blocks>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, Blocks, InlinedStyles, InlinedScript],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    builderContext: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    variants: [{
      type: Input
    }],
    previewingIndex: [{
      type: Input
    }],
    rootRef: [{
      type: ViewChild,
      args: ["rootRef"]
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$d = {
  name: "Core:Section",
  static: true,
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a",
  inputs: [{
    name: "maxWidth",
    type: "number",
    defaultValue: 1200
  }, {
    name: "lazyLoad",
    type: "boolean",
    defaultValue: false,
    advanced: true,
    description: "Only render this section when in view"
  }],
  defaultStyles: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "0px",
    width: "100vw",
    marginLeft: "calc(50% - 50vw)"
  },
  canHaveChildren: true,
  defaultChildren: [{
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        textAlign: "center"
      }
    },
    component: {
      name: "Text",
      options: {
        text: "<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"
      }
    }
  }]
};
var componentInfo$c = {
  name: "Slot",
  isRSC: true,
  description: "Allow child blocks to be inserted into this content when used as a Symbol",
  docsLink: "https://www.builder.io/c/docs/symbols-with-blocks",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F3aad6de36eae43b59b52c85190fdef56",
  // Maybe wrap this for canHaveChildren so bind children to this hm
  inputs: [{
    name: "name",
    type: "string",
    required: true,
    defaultValue: "children"
  }],
  shouldReceiveBuilderProps: {
    builderContext: true,
    builderComponents: true
  }
};
var BuilderSlot = class _BuilderSlot {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_div = null;
    this.node_1_div = null;
    this.node_2_Blocks = null;
    this.node_3_Blocks = null;
    this.node_4_Blocks = null;
  }
  ngOnInit() {
    this.node_0_div = {
      pointerEvents: "auto"
    };
    this.node_1_div = __spreadValues({}, !this.builderContext.context?.symbolId && {
      "builder-slot": this.name
    });
    this.node_2_Blocks = this.builderContext.context?.symbolId;
    this.node_3_Blocks = `symbol.data.${this.name}`;
    this.node_4_Blocks = this.builderContext.rootState?.[this.name];
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.node_1_div);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = {
        pointerEvents: "auto"
      };
      this.node_1_div = __spreadValues({}, !this.builderContext.context?.symbolId && {
        "builder-slot": this.name
      });
      this.node_2_Blocks = this.builderContext.context?.symbolId;
      this.node_3_Blocks = `symbol.data.${this.name}`;
      this.node_4_Blocks = this.builderContext.rootState?.[this.name];
      this.setAttributes(this.elRef0?.nativeElement, this.node_1_div, changes["node_1_div"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function BuilderSlot_Factory(t) {
      return new (t || _BuilderSlot)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderSlot,
      selectors: [["builder-slot"]],
      viewQuery: function BuilderSlot_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        builderContext: "builderContext",
        name: "name",
        builderComponents: "builderComponents"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 6,
      consts: [["elRef0", ""], [3, "ngStyle"], [3, "parent", "path", "context", "registeredComponents", "blocks"]],
      template: function BuilderSlot_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵelement(2, "blocks", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.node_0_div);
          ɵɵadvance(2);
          ɵɵproperty("parent", ctx.node_2_Blocks)("path", ctx.node_3_Blocks)("context", ctx.builderContext)("registeredComponents", ctx.builderComponents)("blocks", ctx.node_4_Blocks);
        }
      },
      dependencies: [CommonModule, NgStyle, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderSlot, [{
    type: Component,
    args: [{
      selector: "builder-slot",
      template: `
    <div [ngStyle]="node_0_div" #elRef0>
      <blocks
        [parent]="node_2_Blocks"
        [path]="node_3_Blocks"
        [context]="builderContext"
        [registeredComponents]="builderComponents"
        [blocks]="node_4_Blocks"
      ></blocks>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, Blocks],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    builderContext: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    builderComponents: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$b = {
  name: "Symbol",
  noWrap: true,
  static: true,
  isRSC: true,
  inputs: [{
    name: "symbol",
    type: "uiSymbol"
  }, {
    name: "dataOnly",
    helperText: "Make this a data symbol that doesn't display any UI",
    type: "boolean",
    defaultValue: false,
    advanced: true,
    hideFromUI: true
  }, {
    name: "inheritState",
    helperText: "Inherit the parent component state and data",
    type: "boolean",
    defaultValue: false,
    advanced: true
  }, {
    name: "renderToLiquid",
    helperText: "Render this symbols contents to liquid. Turn off to fetch with javascript and use custom targeting",
    type: "boolean",
    defaultValue: false,
    advanced: true,
    hideFromUI: true
  }, {
    name: "useChildren",
    hideFromUI: true,
    type: "boolean"
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true,
    builderComponents: true,
    builderLinkComponent: true
  }
};
var defaultTab = {
  "@type": "@builder.io/sdk:Element",
  responsiveStyles: {
    large: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "10px",
      paddingBottom: "10px",
      minWidth: "100px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      userSelect: "none"
    }
  },
  component: {
    name: "Text",
    options: {
      text: "New tab"
    }
  }
};
var defaultElement = {
  "@type": "@builder.io/sdk:Element",
  responsiveStyles: {
    large: {
      height: "200px",
      display: "flex",
      marginTop: "20px",
      flexDirection: "column"
    }
  },
  component: {
    name: "Text",
    options: {
      text: "New tab content "
    }
  }
};
var componentInfo$a = {
  name: "Builder: Tabs",
  inputs: [{
    name: "tabs",
    type: "list",
    broadcast: true,
    subFields: [{
      name: "label",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [defaultTab]
    }, {
      name: "content",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [defaultElement]
    }],
    defaultValue: [{
      label: [__spreadProps(__spreadValues({}, defaultTab), {
        component: {
          name: "Text",
          options: {
            text: "Tab 1"
          }
        }
      })],
      content: [__spreadProps(__spreadValues({}, defaultElement), {
        component: {
          name: "Text",
          options: {
            text: "Tab 1 content"
          }
        }
      })]
    }, {
      label: [__spreadProps(__spreadValues({}, defaultTab), {
        component: {
          name: "Text",
          options: {
            text: "Tab 2"
          }
        }
      })],
      content: [__spreadProps(__spreadValues({}, defaultElement), {
        component: {
          name: "Text",
          options: {
            text: "Tab 2 content"
          }
        }
      })]
    }]
  }, {
    name: "activeTabStyle",
    type: "uiStyle",
    helperText: "CSS styles for the active tab",
    defaultValue: {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  }, {
    name: "defaultActiveTab",
    type: "number",
    helperText: 'Default tab to open to. Set to "1" for the first tab, "2" for the second, or choose "0" for none',
    defaultValue: 1,
    advanced: true
  }, {
    name: "collapsible",
    type: "boolean",
    helperText: "If on, clicking an open tab closes it so no tabs are active",
    defaultValue: false,
    advanced: true
  }, {
    name: "tabHeaderLayout",
    type: "enum",
    helperText: "Change the layout of the tab headers (uses justify-content)",
    defaultValue: "flex-start",
    enum: [{
      label: "Center",
      value: "center"
    }, {
      label: "Space between",
      value: "space-between"
    }, {
      label: "Space around",
      value: "space-around"
    }, {
      label: "Left",
      value: "flex-start"
    }, {
      label: "Right",
      value: "flex-end"
    }]
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true,
    builderComponents: true,
    builderLinkComponent: true
  }
};
var Tabs = class _Tabs {
  constructor() {
    this.activeTab = null;
    this.node_0_div = null;
    this.node_1_span = (tab, index) => `builder-tab-wrap ${this.activeTab === index ? "builder-tab-active" : ""}`;
    this.node_2_span = (tab, index) => __spreadValues({}, this.activeTab === index ? this.activeTabStyle : {});
    this.node_4_Blocks = (tab, index) => `tabs.${index}.label`;
    this.node_5_Show = null;
    this.node_6_Blocks = null;
    this.node_7_Blocks = null;
  }
  activeTabContent(active) {
    return this.tabs && this.tabs[active].content;
  }
  onClick(index) {
    if (index === this.activeTab && this.collapsible) {
      this.activeTab = -1;
    } else {
      this.activeTab = index;
    }
  }
  trackByTab0(index, tab) {
    return index;
  }
  ngOnInit() {
    this.activeTab = this.defaultActiveTab ? this.defaultActiveTab - 1 : 0;
    this.node_0_div = {
      display: "flex",
      flexDirection: "row",
      justifyContent: this.tabHeaderLayout || "flex-start",
      overflow: "auto"
    };
    this.node_5_Show = this.activeTabContent(this.activeTab);
    this.node_6_Blocks = `tabs.${this.activeTab}.content`;
    this.node_7_Blocks = this.activeTabContent(this.activeTab);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = {
        display: "flex",
        flexDirection: "row",
        justifyContent: this.tabHeaderLayout || "flex-start",
        overflow: "auto"
      };
      this.node_5_Show = this.activeTabContent(this.activeTab);
      this.node_6_Blocks = `tabs.${this.activeTab}.content`;
      this.node_7_Blocks = this.activeTabContent(this.activeTab);
    }
  }
  static {
    this.ɵfac = function Tabs_Factory(t) {
      return new (t || _Tabs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Tabs,
      selectors: [["tabs"]],
      inputs: {
        tabHeaderLayout: "tabHeaderLayout",
        defaultActiveTab: "defaultActiveTab",
        tabs: "tabs",
        collapsible: "collapsible",
        activeTabStyle: "activeTabStyle",
        builderBlock: "builderBlock",
        builderContext: "builderContext",
        builderComponents: "builderComponents",
        builderLinkComponent: "builderLinkComponent"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [[1, "builder-tabs-wrap", 3, "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "click", "ngStyle"], [3, "parent", "path", "blocks", "context", "registeredComponents", "linkComponent"]],
      template: function Tabs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div")(1, "div", 0);
          ɵɵtemplate(2, Tabs_ng_container_2_Template, 3, 9, "ng-container", 1);
          ɵɵelementEnd();
          ɵɵtemplate(3, Tabs_ng_container_3_Template, 3, 6, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngStyle", ctx.node_0_div);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.tabs)("ngForTrackBy", ctx.trackByTab0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.node_5_Show);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgStyle, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs, [{
    type: Component,
    args: [{
      selector: "tabs",
      template: `
    <div>
      <div class="builder-tabs-wrap" [ngStyle]="node_0_div">
        <ng-container
          *ngFor="let tab of tabs; index as index; trackBy: trackByTab0"
        >
          <span
            [class]="node_1_span(tab, index)"
            [ngStyle]="node_2_span(tab, index)"
            (click)="onClick(index)"
          >
            <blocks
              [parent]="builderBlock.id"
              [path]="node_4_Blocks(tab, index)"
              [blocks]="tab.label"
              [context]="builderContext"
              [registeredComponents]="builderComponents"
              [linkComponent]="builderLinkComponent"
            ></blocks>
          </span>
        </ng-container>
      </div>
      <ng-container *ngIf="node_5_Show">
        <div>
          <blocks
            [parent]="builderBlock.id"
            [path]="node_6_Blocks"
            [blocks]="node_7_Blocks"
            [context]="builderContext"
            [registeredComponents]="builderComponents"
            [linkComponent]="builderLinkComponent"
          ></blocks>
        </div>
      </ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, Blocks],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    tabHeaderLayout: [{
      type: Input
    }],
    defaultActiveTab: [{
      type: Input
    }],
    tabs: [{
      type: Input
    }],
    collapsible: [{
      type: Input
    }],
    activeTabStyle: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    builderContext: [{
      type: Input
    }],
    builderComponents: [{
      type: Input
    }],
    builderLinkComponent: [{
      type: Input
    }]
  });
})();
var componentInfo$9 = {
  shouldReceiveBuilderProps: {
    builderBlock: TARGET === "reactNative" ? true : false,
    builderContext: true
  },
  name: "Text",
  static: true,
  isRSC: true,
  image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-text_fields-24px%20(1).svg?alt=media&token=12177b73-0ee3-42ca-98c6-0dd003de1929",
  inputs: [{
    name: "text",
    type: "html",
    required: true,
    autoFocus: true,
    bubble: true,
    defaultValue: "Enter some text..."
  }],
  defaultStyles: {
    lineHeight: "normal",
    height: "auto",
    textAlign: "center"
  }
};
var BuilderText = class _BuilderText {
  ngOnInit() {
    this.node_0_div = this.text?.toString() || "";
    this.node_1_div = {
      outline: "none"
    };
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.node_0_div = null;
    this.node_1_div = null;
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = this.text?.toString() || "";
      this.node_1_div = {
        outline: "none"
      };
    }
  }
  static {
    this.ɵfac = function BuilderText_Factory(t) {
      return new (t || _BuilderText)(ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderText,
      selectors: [["builder-text"]],
      inputs: {
        text: "text"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 2,
      consts: [[1, "builder-text", 3, "innerHTML", "ngStyle"]],
      template: function BuilderText_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("innerHTML", ctx.sanitizer.bypassSecurityTrustHtml(ctx.node_0_div), ɵɵsanitizeHtml)("ngStyle", ctx.node_1_div);
        }
      },
      dependencies: [CommonModule, NgStyle],
      styles: ["[_nghost-%COMP%]{display:contents}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderText, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "builder-text",
      template: `
    <div
      class="builder-text"
      [innerHTML]="sanitizer.bypassSecurityTrustHtml(node_0_div)"
      [ngStyle]="node_1_div"
    ></div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    text: [{
      type: Input
    }]
  });
})();
var componentInfo$8 = {
  name: "Custom Code",
  static: true,
  requiredPermissions: ["editCode"],
  inputs: [{
    name: "code",
    type: "html",
    required: true,
    defaultValue: "<p>Hello there, I am custom HTML code!</p>",
    code: true
  }, {
    name: "replaceNodes",
    type: "boolean",
    helperText: "Preserve server rendered dom nodes",
    advanced: true
  }, {
    name: "scriptsClientOnly",
    type: "boolean",
    defaultValue: false,
    helperText: "Only print and run scripts on the client. Important when scripts influence DOM that could be replaced when client loads",
    advanced: true
  }]
};
var CustomCode = class _CustomCode {
  ngOnInit() {
    this.node_0_div = "builder-custom-code" + (this.replaceNodes ? " replace-nodes" : "");
    if (typeof window !== "undefined") {
      if (!this.elementRef.nativeElement?.getElementsByTagName || typeof window === "undefined") {
        return;
      }
      const scripts = this.elementRef.nativeElement.getElementsByTagName("script");
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if (script.src) {
          if (this.scriptsInserted.includes(script.src)) {
            continue;
          }
          this.scriptsInserted.push(script.src);
          const newScript = document.createElement("script");
          newScript.async = true;
          newScript.src = script.src;
          document.head.appendChild(newScript);
        } else if (!script.type || ["text/javascript", "application/javascript", "application/ecmascript"].includes(script.type)) {
          if (this.scriptsRun.includes(script.innerText)) {
            continue;
          }
          try {
            this.scriptsRun.push(script.innerText);
            new Function(script.innerText)();
          } catch (error) {
            console.warn("`CustomCode`: Error running script:", error);
          }
        }
      }
    }
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.scriptsInserted = [];
    this.scriptsRun = [];
    this.node_0_div = null;
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = "builder-custom-code" + (this.replaceNodes ? " replace-nodes" : "");
    }
  }
  static {
    this.ɵfac = function CustomCode_Factory(t) {
      return new (t || _CustomCode)(ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CustomCode,
      selectors: [["custom-code"]],
      viewQuery: function CustomCode_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c10, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementRef = _t.first);
        }
      },
      inputs: {
        replaceNodes: "replaceNodes",
        code: "code"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [["elementRef", ""], [3, "innerHTML"]],
      template: function CustomCode_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 1, 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.node_0_div);
          ɵɵproperty("innerHTML", ctx.sanitizer.bypassSecurityTrustHtml(ctx.code), ɵɵsanitizeHtml);
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomCode, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "custom-code",
      template: `
    <div #elementRef [class]="node_0_div" [innerHTML]="sanitizer.bypassSecurityTrustHtml(code)"></div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    replaceNodes: [{
      type: Input
    }],
    code: [{
      type: Input
    }],
    elementRef: [{
      type: ViewChild,
      args: ["elementRef"]
    }]
  });
})();
var componentInfo$7 = {
  name: "Embed",
  static: true,
  inputs: [{
    name: "url",
    type: "url",
    required: true,
    defaultValue: "",
    helperText: "e.g. enter a youtube url, google map, etc"
  }, {
    name: "content",
    type: "html",
    defaultValue: '<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>',
    hideFromUI: true
  }]
};
var SCRIPT_MIME_TYPES = ["text/javascript", "application/javascript", "application/ecmascript"];
var isJsScript = (script) => SCRIPT_MIME_TYPES.includes(script.type);
var BuilderEmbed = class _BuilderEmbed {
  findAndRunScripts() {
    if (!this.elem.nativeElement || !this.elem.nativeElement.getElementsByTagName)
      return;
    const scripts = this.elem.nativeElement.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      if (script.src && !this.scriptsInserted.includes(script.src)) {
        this.scriptsInserted.push(script.src);
        const newScript = document.createElement("script");
        newScript.async = true;
        newScript.src = script.src;
        document.head.appendChild(newScript);
      } else if (isJsScript(script) && !this.scriptsRun.includes(script.innerText)) {
        try {
          this.scriptsRun.push(script.innerText);
          new Function(script.innerText)();
        } catch (error) {
          console.warn("`Embed`: Error running script:", error);
        }
      }
    }
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.scriptsInserted = [];
    this.scriptsRun = [];
    this.ranInitFn = false;
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      if (this.elem.nativeElement && !this.ranInitFn) {
        this.ranInitFn = true;
        this.findAndRunScripts();
      }
    }
  }
  static {
    this.ɵfac = function BuilderEmbed_Factory(t) {
      return new (t || _BuilderEmbed)(ɵɵdirectiveInject(DomSanitizer));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderEmbed,
      selectors: [["builder-embed"]],
      viewQuery: function BuilderEmbed_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c11, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elem = _t.first);
        }
      },
      inputs: {
        content: "content"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 1,
      consts: [["elem", ""], [1, "builder-embed", 3, "innerHTML"]],
      template: function BuilderEmbed_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 1, 0);
        }
        if (rf & 2) {
          ɵɵproperty("innerHTML", ctx.sanitizer.bypassSecurityTrustHtml(ctx.content), ɵɵsanitizeHtml);
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderEmbed, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "builder-embed",
      template: `
    <div class="builder-embed" #elem [innerHTML]="sanitizer.bypassSecurityTrustHtml(content)"></div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, {
    content: [{
      type: Input
    }],
    elem: [{
      type: ViewChild,
      args: ["elem"]
    }]
  });
})();
var componentInfo$6 = {
  name: "Form:Form",
  // editableTags: ['builder-form-error']
  defaults: {
    responsiveStyles: {
      large: {
        marginTop: "15px",
        paddingBottom: "15px"
      }
    }
  },
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5",
  inputs: [{
    name: "sendSubmissionsTo",
    type: "string",
    // TODO: save to builder data and user can download as csv
    // TODO: easy for mode too or computed add/remove fields form mode
    // so you can edit details and high level mode at same time...
    // Later - more integrations like mailchimp
    // /api/v1/form-submit?to=mailchimp
    enum: [{
      label: "Send to email",
      value: "email",
      helperText: "Send form submissions to the email address of your choosing"
    }, {
      label: "Custom",
      value: "custom",
      helperText: "Handle where the form requests go manually with a little code, e.g. to your own custom backend"
    }],
    defaultValue: "email"
  }, {
    name: "sendSubmissionsToEmail",
    type: "string",
    required: true,
    // TODO: required: () => options.get("sendSubmissionsTo") === "email"
    defaultValue: "your@email.com",
    showIf: 'options.get("sendSubmissionsTo") === "email"'
  }, {
    name: "sendWithJs",
    type: "boolean",
    helperText: "Set to false to use basic html form action",
    defaultValue: true,
    showIf: 'options.get("sendSubmissionsTo") === "custom"'
  }, {
    name: "name",
    type: "string",
    defaultValue: "My form"
    // advanced: true
  }, {
    name: "action",
    type: "string",
    helperText: "URL to send the form data to",
    showIf: 'options.get("sendSubmissionsTo") === "custom"'
  }, {
    name: "contentType",
    type: "string",
    defaultValue: "application/json",
    advanced: true,
    // TODO: do automatically if file input
    enum: ["application/json", "multipart/form-data", "application/x-www-form-urlencoded"],
    showIf: 'options.get("sendSubmissionsTo") === "custom" && options.get("sendWithJs") === true'
  }, {
    name: "method",
    type: "string",
    showIf: 'options.get("sendSubmissionsTo") === "custom"',
    defaultValue: "POST",
    advanced: true
  }, {
    name: "previewState",
    type: "string",
    // TODO: persist: false flag
    enum: ["unsubmitted", "sending", "success", "error"],
    defaultValue: "unsubmitted",
    helperText: 'Choose a state to edit, e.g. choose "success" to show what users see on success and edit the message',
    showIf: 'options.get("sendSubmissionsTo") !== "zapier" && options.get("sendWithJs") === true'
  }, {
    name: "successUrl",
    type: "url",
    helperText: "Optional URL to redirect the user to on form submission success",
    showIf: 'options.get("sendSubmissionsTo") !== "zapier" && options.get("sendWithJs") === true'
  }, {
    name: "resetFormOnSubmit",
    type: "boolean",
    showIf: "options.get('sendSubmissionsTo') === 'custom' && options.get('sendWithJs') === true",
    advanced: true
  }, {
    name: "successMessage",
    type: "uiBlocks",
    hideFromUI: true,
    defaultValue: [{
      "@type": "@builder.io/sdk:Element",
      responsiveStyles: {
        large: {
          marginTop: "10px"
        }
      },
      component: {
        name: "Text",
        options: {
          text: "<span>Thanks!</span>"
        }
      }
    }]
  }, {
    name: "validate",
    type: "boolean",
    defaultValue: true,
    advanced: true
  }, {
    name: "errorMessagePath",
    type: "text",
    advanced: true,
    helperText: 'Path to where to get the error message from in a JSON response to display to the user, e.g. "error.message" for a response like { "error": { "message": "this username is taken" }}'
  }, {
    name: "errorMessage",
    type: "uiBlocks",
    hideFromUI: true,
    defaultValue: [{
      "@type": "@builder.io/sdk:Element",
      responsiveStyles: {
        large: {
          marginTop: "10px"
        }
      },
      bindings: {
        "component.options.text": "state.formErrorMessage || block.component.options.text"
      },
      component: {
        name: "Text",
        options: {
          text: "<span>Form submission error :( Please check your answers and try again</span>"
        }
      }
    }]
  }, {
    name: "sendingMessage",
    type: "uiBlocks",
    hideFromUI: true,
    defaultValue: [{
      "@type": "@builder.io/sdk:Element",
      responsiveStyles: {
        large: {
          marginTop: "10px"
        }
      },
      component: {
        name: "Text",
        options: {
          text: "<span>Sending...</span>"
        }
      }
    }]
  }, {
    name: "customHeaders",
    type: "map",
    valueType: {
      type: "string"
    },
    advanced: true,
    showIf: 'options.get("sendSubmissionsTo") === "custom" && options.get("sendWithJs") === true'
  }],
  noWrap: true,
  canHaveChildren: true,
  defaultChildren: [{
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        marginTop: "10px"
      }
    },
    component: {
      name: "Text",
      options: {
        text: "<span>Enter your name</span>"
      }
    }
  }, {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        marginTop: "10px"
      }
    },
    component: {
      name: "Form:Input",
      options: {
        name: "name",
        placeholder: "Jane Doe"
      }
    }
  }, {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        marginTop: "10px"
      }
    },
    component: {
      name: "Text",
      options: {
        text: "<span>Enter your email</span>"
      }
    }
  }, {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        marginTop: "10px"
      }
    },
    component: {
      name: "Form:Input",
      options: {
        name: "email",
        placeholder: "jane@doe.com"
      }
    }
  }, {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        marginTop: "10px"
      }
    },
    component: {
      name: "Form:SubmitButton",
      options: {
        text: "Submit"
      }
    }
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderContext: true,
    builderComponents: true,
    builderLinkComponent: true
  }
};
var validEnvList = ["production", "qa", "test", "development", "dev", "cdn-qa", "cloud", "fast", "cdn2", "cdn-prod"];
var getEnv = () => {
  const env = "development";
  return validEnvList.includes(env) ? env : "production";
};
function logFetch(url) {
  if (typeof process !== "undefined" && process.env?.DEBUG) {
    if (String(process.env.DEBUG) == "true") {
      logger.log(url);
    }
  }
}
var FormComponent = class _FormComponent {
  mergeNewRootState(newData) {
    const combinedState = __spreadValues(__spreadValues({}, this.builderContext.rootState), newData);
    if (this.builderContext.rootSetState) {
      this.builderContext.rootSetState?.(combinedState);
    } else {
      this.builderContext.rootState = combinedState;
    }
  }
  submissionState() {
    return isEditing() && this.previewState || this.formState;
  }
  onSubmit(event) {
    const sendWithJsProp = this.sendWithJs || this.sendSubmissionsTo === "email";
    if (this.sendSubmissionsTo === "zapier") {
      event.preventDefault();
    } else if (sendWithJsProp) {
      if (!(this.action || this.sendSubmissionsTo === "email")) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      const el = event.currentTarget || event.target;
      const headers = this.customHeaders || {};
      let body;
      const formData = new FormData(el);
      const formPairs = Array.from(el.querySelectorAll("input,select,textarea")).filter((el2) => !!el2.name).map((el2) => {
        let value;
        const key = el2.name;
        if (el2 instanceof HTMLInputElement) {
          if (el2.type === "radio") {
            if (el2.checked) {
              value = el2.name;
              return {
                key,
                value
              };
            }
          } else if (el2.type === "checkbox") {
            value = el2.checked;
          } else if (el2.type === "number" || el2.type === "range") {
            const num = el2.valueAsNumber;
            if (!isNaN(num)) {
              value = num;
            }
          } else if (el2.type === "file") {
            value = el2.files;
          } else {
            value = el2.value;
          }
        } else {
          value = el2.value;
        }
        return {
          key,
          value
        };
      });
      let formContentType = this.contentType;
      if (this.sendSubmissionsTo === "email") {
        formContentType = "multipart/form-data";
      }
      Array.from(formPairs).forEach(({
        value
      }) => {
        if (value instanceof File || Array.isArray(value) && value[0] instanceof File || value instanceof FileList) {
          formContentType = "multipart/form-data";
        }
      });
      if (formContentType !== "application/json") {
        body = formData;
      } else {
        const json = {};
        Array.from(formPairs).forEach(({
          value,
          key
        }) => {
          set(json, key, value);
        });
        body = JSON.stringify(json);
      }
      if (formContentType && formContentType !== "multipart/form-data") {
        if (
          /* Zapier doesn't allow content-type header to be sent from browsers */
          !(sendWithJsProp && this.action?.includes("zapier.com"))
        ) {
          headers["content-type"] = formContentType;
        }
      }
      const presubmitEvent = new CustomEvent("presubmit", {
        detail: {
          body
        }
      });
      if (this.formRef.nativeElement) {
        this.formRef.nativeElement.dispatchEvent(presubmitEvent);
        if (presubmitEvent.defaultPrevented) {
          return;
        }
      }
      this.formState = "sending";
      const formUrl = `${getEnv() === "dev" ? "http://localhost:5000" : "https://builder.io"}/api/v1/form-submit?apiKey=${this.builderContext.apiKey}&to=${btoa(this.sendSubmissionsToEmail || "")}&name=${encodeURIComponent(this.name || "")}`;
      const url = this.sendSubmissionsTo === "email" ? formUrl : this.action;
      logFetch(url);
      fetch(url, {
        body,
        headers,
        method: this.method || "post"
      }).then((res) => __async(this, null, function* () {
        let body2;
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          body2 = yield res.json();
        } else {
          body2 = yield res.text();
        }
        if (!res.ok && this.errorMessagePath) {
          let message = get(body2, this.errorMessagePath);
          if (message) {
            if (typeof message !== "string") {
              message = JSON.stringify(message);
            }
            this.formErrorMessage = message;
            this.mergeNewRootState({
              formErrorMessage: message
            });
          }
        }
        this.responseData = body2;
        this.formState = res.ok ? "success" : "error";
        if (res.ok) {
          const submitSuccessEvent = new CustomEvent("submit:success", {
            detail: {
              res,
              body: body2
            }
          });
          if (this.formRef.nativeElement) {
            this.formRef.nativeElement.dispatchEvent(submitSuccessEvent);
            if (submitSuccessEvent.defaultPrevented) {
              return;
            }
            if (this.resetFormOnSubmit !== false) {
              this.formRef.nativeElement.reset();
            }
          }
          if (this.successUrl) {
            if (this.formRef.nativeElement) {
              const event2 = new CustomEvent("route", {
                detail: {
                  url: this.successUrl
                }
              });
              this.formRef.nativeElement.dispatchEvent(event2);
              if (!event2.defaultPrevented) {
                location.href = this.successUrl;
              }
            } else {
              location.href = this.successUrl;
            }
          }
        }
      }), (err) => {
        const submitErrorEvent = new CustomEvent("submit:error", {
          detail: {
            error: err
          }
        });
        if (this.formRef.nativeElement) {
          this.formRef.nativeElement.dispatchEvent(submitErrorEvent);
          if (submitErrorEvent.defaultPrevented) {
            return;
          }
        }
        this.responseData = err;
        this.formState = "error";
      });
    }
  }
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.formState = "unsubmitted";
    this.responseData = null;
    this.formErrorMessage = "";
    this.node_1_Show = null;
    this.node_2_Show = null;
    this.node_3_Show = null;
    this.node_4_div = null;
    this.node_5_Show = null;
    this.elRef0_state_0 = null;
    this.elRef0_state_1 = null;
  }
  ngOnInit() {
    this.node_1_Show = this.submissionState() === "error";
    this.node_2_Show = this.submissionState() === "sending";
    this.node_3_Show = this.submissionState() === "error" && this.responseData;
    this.node_4_div = JSON.stringify(this.responseData, null, 2);
    this.node_5_Show = this.submissionState() === "success";
    this.elRef0_state_0 = {};
    this.elRef0_state_1 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_1);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_1_Show = this.submissionState() === "error";
      this.node_2_Show = this.submissionState() === "sending";
      this.node_3_Show = this.submissionState() === "error" && this.responseData;
      this.node_4_div = JSON.stringify(this.responseData, null, 2);
      this.node_5_Show = this.submissionState() === "success";
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.elRef0_state_1 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_1, changes["elRef0_state_1"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function FormComponent_Factory(t) {
      return new (t || _FormComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormComponent,
      selectors: [["form-component"]],
      viewQuery: function FormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c12, 5);
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        builderContext: "builderContext",
        previewState: "previewState",
        sendWithJs: "sendWithJs",
        sendSubmissionsTo: "sendSubmissionsTo",
        action: "action",
        customHeaders: "customHeaders",
        contentType: "contentType",
        sendSubmissionsToEmail: "sendSubmissionsToEmail",
        name: "name",
        method: "method",
        errorMessagePath: "errorMessagePath",
        resetFormOnSubmit: "resetFormOnSubmit",
        successUrl: "successUrl",
        validate: "validate",
        attributes: "attributes",
        errorMessage: "errorMessage",
        sendingMessage: "sendingMessage",
        successMessage: "successMessage"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 8,
      consts: [["formRef", "", "elRef0", ""], [3, "submit"], [4, "ngIf"], ["path", "errorMessage", 3, "blocks", "context"], ["path", "sendingMessage", 3, "blocks", "context"], [1, "builder-form-error-text", "pre"], ["path", "successMessage", 3, "blocks", "context"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "form", 1, 0);
          ɵɵlistener("submit", function FormComponent_Template_form_submit_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSubmit($event));
          });
          ɵɵprojection(3);
          ɵɵtemplate(4, FormComponent_ng_container_4_Template, 2, 2, "ng-container", 2)(5, FormComponent_ng_container_5_Template, 2, 2, "ng-container", 2)(6, FormComponent_ng_container_6_Template, 3, 1, "ng-container", 2)(7, FormComponent_ng_container_7_Template, 2, 2, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵattribute("validate", ctx.validate)("action", !ctx.sendWithJs && ctx.action, ɵɵsanitizeUrl)("method", ctx.method)("name", ctx.name);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.node_1_Show);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.node_2_Show);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.node_3_Show);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.node_5_Show);
        }
      },
      dependencies: [CommonModule, NgIf, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}.pre[_ngcontent-%COMP%]{padding:10px;color:red;text-align:center}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormComponent, [{
    type: Component,
    args: [{
      selector: "form-component",
      template: `
    <form
      [attr.validate]="validate"
      #formRef
      [attr.action]="!sendWithJs && action"
      [attr.method]="method"
      [attr.name]="name"
      (submit)="onSubmit($event)"
      #elRef0
    >
      <ng-content></ng-content>
      <ng-container *ngIf="node_1_Show">
        <blocks
          path="errorMessage"
          [blocks]="errorMessage!"
          [context]="builderContext"
        ></blocks>
      </ng-container>
      <ng-container *ngIf="node_2_Show">
        <blocks
          path="sendingMessage"
          [blocks]="sendingMessage!"
          [context]="builderContext"
        ></blocks>
      </ng-container>
      <ng-container *ngIf="node_3_Show">
        <pre class="builder-form-error-text pre">{{node_4_div}}</pre>
      </ng-container>
      <ng-container *ngIf="node_5_Show">
        <blocks
          path="successMessage"
          [blocks]="successMessage!"
          [context]="builderContext"
        ></blocks>
      </ng-container>
    </form>
  `,
      standalone: true,
      imports: [CommonModule, Blocks],
      styles: [":host{display:contents}.pre{padding:10px;color:red;text-align:center}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    builderContext: [{
      type: Input
    }],
    previewState: [{
      type: Input
    }],
    sendWithJs: [{
      type: Input
    }],
    sendSubmissionsTo: [{
      type: Input
    }],
    action: [{
      type: Input
    }],
    customHeaders: [{
      type: Input
    }],
    contentType: [{
      type: Input
    }],
    sendSubmissionsToEmail: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    errorMessagePath: [{
      type: Input
    }],
    resetFormOnSubmit: [{
      type: Input
    }],
    successUrl: [{
      type: Input
    }],
    validate: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    sendingMessage: [{
      type: Input
    }],
    successMessage: [{
      type: Input
    }],
    formRef: [{
      type: ViewChild,
      args: ["formRef"]
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$5 = {
  name: "Form:Input",
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca",
  inputs: [
    {
      name: "type",
      type: "text",
      enum: ["text", "number", "email", "url", "checkbox", "radio", "range", "date", "datetime-local", "search", "tel", "time", "file", "month", "week", "password", "color", "hidden"],
      defaultValue: "text"
    },
    {
      name: "name",
      type: "string",
      required: true,
      helperText: 'Every input in a form needs a unique name describing what it takes, e.g. "email"'
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Hello there",
      helperText: "Text to display when there is no value"
    },
    // TODO: handle value vs default value automatically like ng-model
    {
      name: "defaultValue",
      type: "string"
    },
    {
      name: "value",
      type: "string",
      advanced: true
    },
    {
      name: "required",
      type: "boolean",
      helperText: "Is this input required to be filled out to submit a form",
      defaultValue: false
    }
  ],
  noWrap: true,
  static: true,
  defaultStyles: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ccc"
  }
};
var FormInputComponent = class _FormInputComponent {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_input = null;
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.node_0_input = isEditing() && this.defaultValue ? this.defaultValue : "default-key";
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_input = isEditing() && this.defaultValue ? this.defaultValue : "default-key";
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function FormInputComponent_Factory(t) {
      return new (t || _FormInputComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormInputComponent,
      selectors: [["form-input-component"]],
      viewQuery: function FormInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        defaultValue: "defaultValue",
        attributes: "attributes",
        placeholder: "placeholder",
        type: "type",
        name: "name",
        value: "value",
        required: "required"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 6,
      consts: [["elRef0", ""]],
      template: function FormInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "input", null, 0);
        }
        if (rf & 2) {
          ɵɵattribute("placeholder", ctx.placeholder)("type", ctx.type)("name", ctx.name)("value", ctx.value)("defaultValue", ctx.defaultValue)("required", ctx.required);
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInputComponent, [{
    type: Component,
    args: [{
      selector: "form-input-component",
      template: `
    <input
      [attr.placeholder]="placeholder"
      [attr.type]="type"
      [attr.name]="name"
      [attr.value]="value"
      [attr.defaultValue]="defaultValue"
      [attr.required]="required"
      #elRef0
    />
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    defaultValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$4 = {
  name: "Form:Select",
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F83acca093fb24aaf94dee136e9a4b045",
  defaultStyles: {
    alignSelf: "flex-start"
  },
  inputs: [{
    name: "options",
    type: "list",
    required: true,
    subFields: [{
      name: "value",
      type: "text",
      required: true
    }, {
      name: "name",
      type: "text"
    }],
    defaultValue: [{
      value: "option 1"
    }, {
      value: "option 2"
    }]
  }, {
    name: "name",
    type: "string",
    required: true,
    helperText: 'Every select in a form needs a unique name describing what it gets, e.g. "email"'
  }, {
    name: "defaultValue",
    type: "string"
  }, {
    name: "value",
    type: "string",
    advanced: true
  }, {
    name: "required",
    type: "boolean",
    defaultValue: false
  }],
  static: true,
  noWrap: true
};
var SelectComponent = class _SelectComponent {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  trackByOption0(index, option) {
    return `${option.name}-${index}`;
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_select = null;
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.node_0_select = isEditing() && this.defaultValue ? this.defaultValue : "default-key";
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_select = isEditing() && this.defaultValue ? this.defaultValue : "default-key";
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function SelectComponent_Factory(t) {
      return new (t || _SelectComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SelectComponent,
      selectors: [["select-component"]],
      viewQuery: function SelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        defaultValue: "defaultValue",
        attributes: "attributes",
        value: "value",
        name: "name",
        required: "required",
        options: "options"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 6,
      consts: [["elRef0", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "select", null, 0);
          ɵɵtemplate(2, SelectComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵattribute("value", ctx.value)("defaultValue", ctx.defaultValue)("name", ctx.name)("required", ctx.required);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption0);
        }
      },
      dependencies: [CommonModule, NgForOf],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{
      selector: "select-component",
      template: `
    <select
      [attr.value]="value"
      [attr.defaultValue]="defaultValue"
      [attr.name]="name"
      [attr.required]="required"
      #elRef0
    >
      <ng-container
        *ngFor="let option of options; index as index; trackBy: trackByOption0"
      >
        <option [attr.value]="option.value">
          {{option.name || option.value}}
        </option>
      </ng-container>
    </select>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    defaultValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$3 = {
  name: "Form:SubmitButton",
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fdf2820ffed1f4349a94c40b3221f5b98",
  defaultStyles: {
    appearance: "none",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    backgroundColor: "#3898EC",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer"
  },
  inputs: [{
    name: "text",
    type: "text",
    defaultValue: "Click me"
  }],
  static: true,
  noWrap: true
  // TODO: optional children? maybe as optional form input
  // that only shows if advanced setting is flipped
  // TODO: defaultChildren
  // canHaveChildren: true,
};
var SubmitButton = class _SubmitButton {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function SubmitButton_Factory(t) {
      return new (t || _SubmitButton)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SubmitButton,
      selectors: [["submit-button"]],
      viewQuery: function SubmitButton_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        text: "text"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 1,
      consts: [["elRef0", ""], ["type", "submit"]],
      template: function SubmitButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 1, 0);
          ɵɵtext(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.text);
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubmitButton, [{
    type: Component,
    args: [{
      selector: "submit-button",
      template: `
    <button type="submit" #elRef0>{{text}}</button>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$2 = {
  name: "Form:TextArea",
  image: "https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Ff74a2f3de58c4c3e939204e5b6b8f6c3",
  inputs: [{
    advanced: true,
    name: "value",
    type: "string"
  }, {
    name: "name",
    type: "string",
    required: true,
    helperText: 'Every input in a form needs a unique name describing what it gets, e.g. "email"'
  }, {
    name: "defaultValue",
    type: "string"
  }, {
    name: "placeholder",
    type: "string",
    defaultValue: "Hello there"
  }, {
    name: "required",
    type: "boolean",
    defaultValue: false
  }],
  defaultStyles: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ccc"
  },
  static: true,
  noWrap: true
};
var BuilderTextarea = class _BuilderTextarea {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function BuilderTextarea_Factory(t) {
      return new (t || _BuilderTextarea)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderTextarea,
      selectors: [["builder-textarea"]],
      viewQuery: function BuilderTextarea_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        attributes: "attributes",
        placeholder: "placeholder",
        name: "name",
        value: "value",
        defaultValue: "defaultValue",
        required: "required"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 5,
      consts: [["elRef0", ""]],
      template: function BuilderTextarea_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "textarea", null, 0);
        }
        if (rf & 2) {
          ɵɵattribute("placeholder", ctx.placeholder)("name", ctx.name)("value", ctx.value)("defaultValue", ctx.defaultValue)("required", ctx.required);
        }
      },
      dependencies: [CommonModule],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderTextarea, [{
    type: Component,
    args: [{
      selector: "builder-textarea",
      template: `
    <textarea
      [attr.placeholder]="placeholder"
      [attr.name]="name"
      [attr.value]="value"
      [attr.defaultValue]="defaultValue"
      [attr.required]="required"
      #elRef0
    ></textarea>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    attributes: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo$1 = {
  // friendlyName?
  name: "Raw:Img",
  hideFromInsertMenu: true,
  image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",
  inputs: [{
    name: "image",
    bubble: true,
    type: "file",
    allowedFileTypes: IMAGE_FILE_TYPES,
    required: true
  }],
  noWrap: true,
  static: true
};
var ImgComponent = class _ImgComponent {
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.node_0_img = null;
    this.node_1_img = null;
    this.elRef0_state_0 = null;
  }
  ngOnInit() {
    this.node_0_img = {
      objectFit: this.backgroundSize || "cover",
      objectPosition: this.backgroundPosition || "center"
    };
    this.node_1_img = isEditing() && this.imgSrc || "default-key";
    this.elRef0_state_0 = {};
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_img = {
        objectFit: this.backgroundSize || "cover",
        objectPosition: this.backgroundPosition || "center"
      };
      this.node_1_img = isEditing() && this.imgSrc || "default-key";
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function ImgComponent_Factory(t) {
      return new (t || _ImgComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ImgComponent,
      selectors: [["img-component"]],
      viewQuery: function ImgComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        backgroundSize: "backgroundSize",
        backgroundPosition: "backgroundPosition",
        imgSrc: "imgSrc",
        altText: "altText",
        image: "image",
        attributes: "attributes"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [["elRef0", ""], [3, "ngStyle"]],
      template: function ImgComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "img", 1, 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.node_0_img);
          ɵɵattribute("alt", ctx.altText)("src", ctx.imgSrc || ctx.image, ɵɵsanitizeUrl);
        }
      },
      dependencies: [CommonModule, NgStyle],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgComponent, [{
    type: Component,
    args: [{
      selector: "img-component",
      template: `
    <img
      [ngStyle]="node_0_img"
      [attr.alt]="altText"
      [attr.src]="imgSrc || image"
      #elRef0
    />
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    backgroundSize: [{
      type: Input
    }],
    backgroundPosition: [{
      type: Input
    }],
    imgSrc: [{
      type: Input
    }],
    altText: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var componentInfo = {
  name: "Video",
  canHaveChildren: true,
  defaultStyles: {
    minHeight: "20px",
    minWidth: "20px"
  },
  image: "https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-videocam-24px%20(1).svg?alt=media&token=49a84e4a-b20e-4977-a650-047f986874bb",
  inputs: [{
    name: "video",
    type: "file",
    allowedFileTypes: VIDEO_FILE_TYPES,
    bubble: true,
    defaultValue: "https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd27731a526464deba0016216f5f9e570%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=d27731a526464deba0016216f5f9e570&alt=media&optimized=true",
    required: true
  }, {
    name: "posterImage",
    type: "file",
    allowedFileTypes: IMAGE_FILE_TYPES,
    helperText: "Image to show before the video plays"
  }, {
    name: "autoPlay",
    type: "boolean",
    defaultValue: true
  }, {
    name: "controls",
    type: "boolean",
    defaultValue: false
  }, {
    name: "muted",
    type: "boolean",
    defaultValue: true
  }, {
    name: "loop",
    type: "boolean",
    defaultValue: true
  }, {
    name: "playsInline",
    type: "boolean",
    defaultValue: true
  }, {
    name: "fit",
    type: "text",
    defaultValue: "cover",
    enum: ["contain", "cover", "fill", "auto"]
  }, {
    name: "preload",
    type: "text",
    defaultValue: "metadata",
    enum: ["auto", "metadata", "none"]
  }, {
    name: "fitContent",
    type: "boolean",
    helperText: "When child blocks are provided, fit to them instead of using the aspect ratio",
    defaultValue: true,
    advanced: true
  }, {
    name: "position",
    type: "text",
    defaultValue: "center",
    enum: ["center", "top", "left", "right", "bottom", "top left", "top right", "bottom left", "bottom right"]
  }, {
    name: "height",
    type: "number",
    advanced: true
  }, {
    name: "width",
    type: "number",
    advanced: true
  }, {
    name: "aspectRatio",
    type: "number",
    advanced: true,
    defaultValue: 0.7004048582995948
  }, {
    name: "lazyLoad",
    type: "boolean",
    helperText: 'Load this video "lazily" - as in only when a user scrolls near the video. Recommended for optmized performance and bandwidth consumption',
    defaultValue: true,
    advanced: true
  }],
  shouldReceiveBuilderProps: {
    builderBlock: true
  }
};
var BuilderVideo = class _BuilderVideo {
  get videoProps() {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.autoPlay === true ? {
      autoPlay: true
    } : {}), this.muted === true ? {
      muted: true
    } : {}), this.controls === true ? {
      controls: true
    } : {}), this.loop === true ? {
      loop: true
    } : {}), this.playsInline === true ? {
      playsInline: true
    } : {});
  }
  get spreadProps() {
    return __spreadValues({}, this.videoProps);
  }
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.lazyVideoObserver = void 0;
    this.node_0_div = null;
    this.node_1_video = null;
    this.node_2_source = null;
    this.node_3_Show = null;
    this.node_4_div = null;
    this.node_5_div = null;
    this.node_6_div = null;
  }
  ngOnInit() {
    this.node_0_div = {
      position: "relative"
    };
    this.node_1_video = __spreadValues(__spreadProps(__spreadValues({
      width: "100%",
      height: "100%"
    }, this.attributes?.style), {
      objectFit: this.fit,
      objectPosition: this.position,
      // Hack to get object fit to work as expected and
      // not have the video overflow
      borderRadius: "1px"
    }), this.aspectRatio ? {
      position: "absolute"
    } : null);
    this.node_2_source = __spreadValues({}, this.lazyLoad ? {
      "data-src": this.video
    } : {
      src: this.video
    });
    this.node_3_Show = this.aspectRatio && !(this.fitContent && this.builderBlock?.children?.length);
    this.node_4_div = {
      width: "100%",
      paddingTop: this.aspectRatio * 100 + "%",
      pointerEvents: "none",
      fontSize: "0px"
    };
    this.node_5_div = {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    };
    this.node_6_div = {
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%"
    };
  }
  ngAfterViewInit() {
    if (this.lazyLoad) {
      const oberver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting)
            return;
          const videoElement = entry.target;
          try {
            Array.from(videoElement.children).filter((child) => child instanceof HTMLElement && child.tagName === "SOURCE").forEach((source) => {
              const src = source.dataset.src;
              if (src) {
                source.src = src;
              }
            });
            videoElement.load();
            oberver.unobserve(videoElement);
          } catch (error) {
            console.error("Error loading lazy video:", error);
          }
        });
      });
      if (this.videoRef.nativeElement) {
        oberver.observe(this.videoRef.nativeElement);
      }
      this.lazyVideoObserver = oberver;
    }
    this.setAttributes(this.elRef0?.nativeElement, this.spreadProps);
    this.setAttributes(this.elRef1?.nativeElement, this.node_2_source);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_div = {
        position: "relative"
      };
      this.node_1_video = __spreadValues(__spreadProps(__spreadValues({
        width: "100%",
        height: "100%"
      }, this.attributes?.style), {
        objectFit: this.fit,
        objectPosition: this.position,
        // Hack to get object fit to work as expected and
        // not have the video overflow
        borderRadius: "1px"
      }), this.aspectRatio ? {
        position: "absolute"
      } : null);
      this.node_2_source = __spreadValues({}, this.lazyLoad ? {
        "data-src": this.video
      } : {
        src: this.video
      });
      this.node_3_Show = this.aspectRatio && !(this.fitContent && this.builderBlock?.children?.length);
      this.node_4_div = {
        width: "100%",
        paddingTop: this.aspectRatio * 100 + "%",
        pointerEvents: "none",
        fontSize: "0px"
      };
      this.node_5_div = {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      };
      this.node_6_div = {
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
      };
      this.setAttributes(this.elRef0?.nativeElement, this.spreadProps, changes["spreadProps"]?.currentValue);
      this.setAttributes(this.elRef1?.nativeElement, this.node_2_source, changes["node_2_source"]?.currentValue);
    }
  }
  ngOnDestroy() {
    if (this.lazyVideoObserver) {
      this.lazyVideoObserver.disconnect();
    }
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function BuilderVideo_Factory(t) {
      return new (t || _BuilderVideo)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderVideo,
      selectors: [["builder-video"]],
      viewQuery: function BuilderVideo_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c13, 5);
          ɵɵviewQuery(_c8, 5);
          ɵɵviewQuery(_c14, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.videoRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef1 = _t.first);
        }
      },
      inputs: {
        lazyLoad: "lazyLoad",
        attributes: "attributes",
        fit: "fit",
        position: "position",
        aspectRatio: "aspectRatio",
        video: "video",
        fitContent: "fitContent",
        builderBlock: "builderBlock",
        autoPlay: "autoPlay",
        muted: "muted",
        controls: "controls",
        loop: "loop",
        playsInline: "playsInline",
        preload: "preload",
        posterImage: "posterImage"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c5,
      decls: 9,
      vars: 7,
      consts: [["videoRef", "", "elRef0", ""], ["elRef1", ""], [3, "ngStyle"], [1, "builder-video", 3, "ngStyle"], ["type", "video/mp4"], [4, "ngIf"]],
      template: function BuilderVideo_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c5);
          ɵɵelementStart(0, "div", 2)(1, "video", 3, 0);
          ɵɵelement(4, "source", 4, 1);
          ɵɵelementEnd();
          ɵɵtemplate(6, BuilderVideo_ng_container_6_Template, 2, 1, "ng-container", 5)(7, BuilderVideo_ng_container_7_Template, 3, 1, "ng-container", 5)(8, BuilderVideo_ng_container_8_Template, 3, 1, "ng-container", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.node_0_div);
          ɵɵadvance();
          ɵɵproperty("ngStyle", ctx.node_1_video);
          ɵɵattribute("preload", ctx.lazyLoad ? "none" : ctx.preload || "metadata")("poster", ctx.posterImage, ɵɵsanitizeUrl);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.node_3_Show);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.builderBlock == null ? null : ctx.builderBlock.children == null ? null : ctx.builderBlock.children.length) && ctx.fitContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.builderBlock == null ? null : ctx.builderBlock.children == null ? null : ctx.builderBlock.children.length) && !ctx.fitContent);
        }
      },
      dependencies: [CommonModule, NgIf, NgStyle],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderVideo, [{
    type: Component,
    args: [{
      selector: "builder-video",
      template: `
    <div [ngStyle]="node_0_div">
      <video
        class="builder-video"
        #videoRef
        [attr.preload]="lazyLoad ? 'none' : preload || 'metadata'"
        [ngStyle]="node_1_video"
        [attr.poster]="posterImage"
        #elRef0
      >
        <source type="video/mp4" #elRef1 />
      </video>
      <ng-container *ngIf="node_3_Show">
        <div [ngStyle]="node_4_div"></div>
      </ng-container>
      <ng-container *ngIf="builderBlock?.children?.length && fitContent">
        <div [ngStyle]="node_5_div"><ng-content></ng-content></div>
      </ng-container>
      <ng-container *ngIf="builderBlock?.children?.length && !fitContent">
        <div [ngStyle]="node_6_div"><ng-content></ng-content></div>
      </ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    lazyLoad: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    fit: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    aspectRatio: [{
      type: Input
    }],
    video: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    autoPlay: [{
      type: Input
    }],
    muted: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    playsInline: [{
      type: Input
    }],
    preload: [{
      type: Input
    }],
    posterImage: [{
      type: Input
    }],
    videoRef: [{
      type: ViewChild,
      args: ["videoRef"]
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }],
    elRef1: [{
      type: ViewChild,
      args: ["elRef1"]
    }]
  });
})();
var getExtraComponents = () => [__spreadValues({
  component: CustomCode
}, componentInfo$8), __spreadValues({
  component: BuilderEmbed
}, componentInfo$7), ...TARGET === "rsc" ? [] : [__spreadValues({
  component: FormComponent
}, componentInfo$6), __spreadValues({
  component: FormInputComponent
}, componentInfo$5), __spreadValues({
  component: SubmitButton
}, componentInfo$3), __spreadValues({
  component: SelectComponent
}, componentInfo$4), __spreadValues({
  component: BuilderTextarea
}, componentInfo$2)], __spreadValues({
  component: ImgComponent
}, componentInfo$1), __spreadValues({
  component: BuilderVideo
}, componentInfo)];
var getDefaultRegisteredComponents = () => [__spreadValues({
  component: BuilderButton
}, componentInfo$i), __spreadValues({
  component: Columns
}, componentInfo$h), __spreadValues({
  component: FragmentComponent
}, componentInfo$g), __spreadValues({
  component: BuilderImage
}, componentInfo$f), __spreadValues({
  component: SectionComponent
}, componentInfo$d), __spreadValues({
  component: BuilderSlot
}, componentInfo$c), __spreadValues({
  component: BuilderSymbol
}, componentInfo$b), __spreadValues({
  component: BuilderText
}, componentInfo$9), ...TARGET === "react" ? [__spreadValues({
  component: PersonalizationContainer
}, componentInfo$e)] : [], ...TARGET === "rsc" ? [] : [__spreadValues({
  component: Tabs
}, componentInfo$a), __spreadValues({
  component: Accordion
}, componentInfo$j)], ...getExtraComponents()];
var createRegisterComponentMessage = (info) => ({
  type: "builder.registerComponent",
  data: serializeIncludingFunctions(info)
});
var serializeFn = (fnValue) => {
  const fnStr = fnValue.toString().trim();
  const isArrowWithoutParens = /^[a-zA-Z0-9_]+\s*=>/i.test(fnStr);
  const appendFunction = !fnStr.startsWith("function") && !fnStr.startsWith("async") && !fnStr.startsWith("(") && !isArrowWithoutParens;
  return `return (${appendFunction ? "function " : ""}${fnStr}).apply(this, arguments)`;
};
function serializeIncludingFunctions(info) {
  return JSON.parse(JSON.stringify(info, (key, value) => {
    if (typeof value === "function") {
      return serializeFn(value);
    }
    return value;
  }));
}
var UPDATE_COOKIES_AND_STYLES_SCRIPT = "function updateCookiesAndStyles(contentId, variants, isHydrationTarget) {\n  function getAndSetVariantId() {\n    function setCookie(name, value, days) {\n      let expires = '';\n      if (days) {\n        const date = new Date();\n        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n        expires = '; expires=' + date.toUTCString();\n      }\n      document.cookie = name + '=' + (value || '') + expires + '; path=/' + '; Secure; SameSite=None';\n    }\n    function getCookie(name) {\n      const nameEQ = name + '=';\n      const ca = document.cookie.split(';');\n      for (let i = 0; i < ca.length; i++) {\n        let c = ca[i];\n        while (c.charAt(0) === ' ') c = c.substring(1, c.length);\n        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n      }\n      return null;\n    }\n    const cookieName = `builder.tests.${contentId}`;\n    const variantInCookie = getCookie(cookieName);\n    const availableIDs = variants.map(vr => vr.id).concat(contentId);\n    if (variantInCookie && availableIDs.includes(variantInCookie)) {\n      return variantInCookie;\n    }\n    let n = 0;\n    const random = Math.random();\n    for (let i = 0; i < variants.length; i++) {\n      const variant = variants[i];\n      const testRatio = variant.testRatio;\n      n += testRatio;\n      if (random < n) {\n        setCookie(cookieName, variant.id);\n        return variant.id;\n      }\n    }\n    setCookie(cookieName, contentId);\n    return contentId;\n  }\n  const winningVariantId = getAndSetVariantId();\n  const styleEl = document.currentScript?.previousElementSibling;\n  if (isHydrationTarget) {\n    styleEl.remove();\n    const thisScriptEl = document.currentScript;\n    thisScriptEl?.remove();\n  } else {\n    const newStyleStr = variants.concat({\n      id: contentId\n    }).filter(variant => variant.id !== winningVariantId).map(value => {\n      return `.variant-${value.id} {  display: none; }\n        `;\n    }).join('');\n    styleEl.innerHTML = newStyleStr;\n  }\n}";
var UPDATE_VARIANT_VISIBILITY_SCRIPT = "function updateVariantVisibility(variantContentId, defaultContentId, isHydrationTarget) {\n  if (!navigator.cookieEnabled) {\n    return;\n  }\n  function getCookie(name) {\n    const nameEQ = name + '=';\n    const ca = document.cookie.split(';');\n    for (let i = 0; i < ca.length; i++) {\n      let c = ca[i];\n      while (c.charAt(0) === ' ') c = c.substring(1, c.length);\n      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n    }\n    return null;\n  }\n  const cookieName = `builder.tests.${defaultContentId}`;\n  const winningVariant = getCookie(cookieName);\n  const parentDiv = document.currentScript?.parentElement;\n  const isDefaultContent = variantContentId === defaultContentId;\n  const isWinningVariant = winningVariant === variantContentId;\n  if (isWinningVariant && !isDefaultContent) {\n    parentDiv?.removeAttribute('hidden');\n    parentDiv?.removeAttribute('aria-hidden');\n  } else if (!isWinningVariant && isDefaultContent) {\n    parentDiv?.setAttribute('hidden', 'true');\n    parentDiv?.setAttribute('aria-hidden', 'true');\n  }\n  if (isHydrationTarget) {\n    if (!isWinningVariant) {\n      parentDiv?.remove();\n    }\n    const thisScriptEl = document.currentScript;\n    thisScriptEl?.remove();\n  }\n  return;\n}";
var UPDATE_COOKIES_AND_STYLES_SCRIPT_NAME = "builderIoAbTest";
var UPDATE_VARIANT_VISIBILITY_SCRIPT_FN_NAME = "builderIoRenderContent";
var getVariants = (content) => Object.values(content?.variations || {}).map((variant) => __spreadProps(__spreadValues({}, variant), {
  testVariationId: variant.id,
  id: content?.id
}));
var checkShouldRenderVariants = ({
  canTrack,
  content
}) => {
  const hasVariants = getVariants(content).length > 0;
  if (TARGET === "reactNative")
    return false;
  if (!hasVariants)
    return false;
  if (!canTrack)
    return false;
  if (TARGET === "vue" || TARGET === "svelte")
    return true;
  if (isBrowser())
    return false;
  return true;
};
var getIsHydrationTarget = (target) => target === "react" || target === "reactNative";
var isHydrationTarget = getIsHydrationTarget(TARGET);
var getInitVariantsFnsScriptString = () => `
  window.${UPDATE_COOKIES_AND_STYLES_SCRIPT_NAME} = ${UPDATE_COOKIES_AND_STYLES_SCRIPT}
  window.${UPDATE_VARIANT_VISIBILITY_SCRIPT_FN_NAME} = ${UPDATE_VARIANT_VISIBILITY_SCRIPT}
  `;
var getUpdateCookieAndStylesScript = (variants, contentId) => `
  window.${UPDATE_COOKIES_AND_STYLES_SCRIPT_NAME}(
    "${contentId}",${JSON.stringify(variants)}, ${isHydrationTarget}
  )`;
var getUpdateVariantVisibilityScript = ({
  contentId,
  variationId
}) => `window.${UPDATE_VARIANT_VISIBILITY_SCRIPT_FN_NAME}(
    "${variationId}", "${contentId}", ${isHydrationTarget}
  )`;
function getPreviewContent(_searchParams) {
  return void 0;
}
var SDK_VERSION = "0.18.0";
var getSdkHeaders = () => ({
  "X-Builder-SDK": TARGET,
  "X-Builder-SDK-GEN": "2",
  "X-Builder-SDK-Version": SDK_VERSION
});
function getGlobalThis() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return globalThis;
}
function getFetch() {
  const globalFetch = getGlobalThis().fetch;
  if (typeof globalFetch === "undefined") {
    console.warn(`Builder SDK could not find a global fetch function. Make sure you have a polyfill for fetch in your project. 
      For more information, read https://github.com/BuilderIO/this-package-uses-fetch`);
    throw new Error("Builder SDK could not find a global `fetch` function");
  }
  return globalFetch;
}
var fetch$1 = getFetch();
function flatten(object, path = null, separator = ".") {
  return Object.keys(object).reduce((acc, key) => {
    const value = object[key];
    const newPath = [path, key].filter(Boolean).join(separator);
    const isObject = [typeof value === "object", value !== null, !(Array.isArray(value) && value.length === 0)].every(Boolean);
    return isObject ? __spreadValues(__spreadValues({}, acc), flatten(value, newPath, separator)) : __spreadProps(__spreadValues({}, acc), {
      [newPath]: value
    });
  }, {});
}
function flattenMongoQuery(obj, _current, _res = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = _current ? _current + "." + key : key;
    if (value && typeof value === "object" && !Array.isArray(value) && !Object.keys(value).find((item) => item.startsWith("$"))) {
      flattenMongoQuery(value, newKey, _res);
    } else {
      _res[newKey] = value;
    }
  }
  return _res;
}
function unflatten(obj) {
  const result = {};
  for (const key in obj) {
    const parts = key.split(".");
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        current[part] = obj[key];
      } else {
        current[part] = current[part] || {};
        current = current[part];
      }
    }
  }
  return result;
}
var DEFAULT_API_VERSION = "v3";
var BUILDER_SEARCHPARAMS_PREFIX = "builder.";
var BUILDER_OPTIONS_PREFIX = "options.";
var getBuilderSearchParams = (_options) => {
  if (!_options) {
    return {};
  }
  const options = normalizeSearchParams(_options);
  const newOptions = {};
  Object.keys(options).forEach((key) => {
    if (key.startsWith(BUILDER_SEARCHPARAMS_PREFIX)) {
      const trimmedKey = key.replace(BUILDER_SEARCHPARAMS_PREFIX, "").replace(BUILDER_OPTIONS_PREFIX, "");
      newOptions[trimmedKey] = options[key];
    }
  });
  return newOptions;
};
var getBuilderSearchParamsFromWindow = () => {
  if (!isBrowser()) {
    return {};
  }
  const searchParams = new URLSearchParams(window.location.search);
  return getBuilderSearchParams(searchParams);
};
var isPositiveNumber = (thing) => typeof thing === "number" && !isNaN(thing) && thing >= 0;
var generateContentUrl = (options) => {
  const {
    limit = 30,
    userAttributes,
    query,
    model,
    apiKey,
    enrich,
    locale,
    apiVersion = DEFAULT_API_VERSION,
    fields,
    omit: omit2,
    offset,
    cacheSeconds,
    staleCacheSeconds,
    sort,
    includeUnpublished,
    apiHost
  } = options;
  if (!apiKey) {
    throw new Error("Missing API key");
  }
  if (!["v3"].includes(apiVersion)) {
    throw new Error(`Invalid apiVersion: expected 'v3', received '${apiVersion}'`);
  }
  const noTraverse = limit !== 1;
  const baseUrl = apiHost || "https://cdn.builder.io";
  const url = new URL(`${baseUrl}/api/${apiVersion}/content/${model}`);
  url.searchParams.set("apiKey", apiKey);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("noTraverse", String(noTraverse));
  url.searchParams.set("includeRefs", String(true));
  const finalLocale = locale || userAttributes?.locale;
  let finalUserAttributes = userAttributes || {};
  if (finalLocale) {
    url.searchParams.set("locale", finalLocale);
    finalUserAttributes = __spreadValues({
      locale: finalLocale
    }, finalUserAttributes);
  }
  if (enrich)
    url.searchParams.set("enrich", String(enrich));
  url.searchParams.set("omit", omit2 || "meta.componentsUsed");
  if (fields) {
    url.searchParams.set("fields", fields);
  }
  if (Number.isFinite(offset) && offset > -1) {
    url.searchParams.set("offset", String(Math.floor(offset)));
  }
  if (typeof includeUnpublished === "boolean") {
    url.searchParams.set("includeUnpublished", String(includeUnpublished));
  }
  if (cacheSeconds && isPositiveNumber(cacheSeconds)) {
    url.searchParams.set("cacheSeconds", String(cacheSeconds));
  }
  if (staleCacheSeconds && isPositiveNumber(staleCacheSeconds)) {
    url.searchParams.set("staleCacheSeconds", String(staleCacheSeconds));
  }
  if (sort) {
    const flattened2 = flatten({
      sort
    });
    for (const key in flattened2) {
      url.searchParams.set(key, JSON.stringify(flattened2[key]));
    }
  }
  const queryOptions = __spreadValues(__spreadValues({}, getBuilderSearchParamsFromWindow()), normalizeSearchParams(options.options || {}));
  finalUserAttributes = __spreadValues(__spreadValues({}, finalUserAttributes), getUserAttributesAsJSON(queryOptions));
  const flattened = flatten(queryOptions);
  for (const key in flattened) {
    url.searchParams.set(key, String(flattened[key]));
  }
  if (Object.keys(finalUserAttributes).length > 0) {
    url.searchParams.set("userAttributes", JSON.stringify(finalUserAttributes));
  }
  if (query) {
    const flattened2 = flattenMongoQuery({
      query
    });
    for (const key in flattened2) {
      url.searchParams.set(key, JSON.stringify(flattened2[key]));
    }
  }
  return url;
};
var getUserAttributesFromQueryOptions = (queryOptions) => {
  const newUserAttributes = {};
  for (const key in queryOptions) {
    if (key.startsWith("userAttributes.")) {
      newUserAttributes[key] = queryOptions[key];
      delete queryOptions[key];
    }
  }
  return newUserAttributes;
};
var getUserAttributesAsJSON = (queryOptions) => {
  if (isBrowser() && queryOptions["preview"] === "BUILDER_STUDIO") {
    queryOptions["userAttributes.urlPath"] = window.location.pathname;
    queryOptions["userAttributes.host"] = window.location.host;
    const queryOptionsForUserAttributes = getUserAttributesFromQueryOptions(queryOptions);
    const {
      userAttributes
    } = unflatten(queryOptionsForUserAttributes);
    return userAttributes;
  }
  return {};
};
var checkContentHasResults = (content) => "results" in content;
function fetchOneEntry(options) {
  return __async(this, null, function* () {
    const allContent = yield fetchEntries(__spreadProps(__spreadValues({}, options), {
      limit: 1
    }));
    if (allContent) {
      return allContent[0] || null;
    }
    return null;
  });
}
var _fetchContent = (options) => __async(void 0, null, function* () {
  const url = generateContentUrl(options);
  const _fetch = options.fetch ?? fetch$1;
  const fetchOptions = __spreadProps(__spreadValues({}, options.fetchOptions), {
    headers: __spreadValues(__spreadValues({}, options.fetchOptions?.headers), getSdkHeaders())
  });
  const res = yield _fetch(url.href, fetchOptions);
  const content = yield res.json();
  return content;
});
var _processContentResult = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (options, content, url = generateContentUrl(options)) {
  const canTrack = getDefaultCanTrack(options.canTrack);
  const isPreviewing2 = url.search.includes(`preview=`);
  if (TARGET === "rsc" && isPreviewing2) {
    const newResults = [];
    for (const item of content.results) {
      const previewContent = getPreviewContent(url.searchParams);
      newResults.push(previewContent || item);
    }
    content.results = newResults;
  }
  if (!canTrack)
    return content.results;
  if (!(isBrowser() || TARGET === "reactNative"))
    return content.results;
  try {
    const newResults = [];
    for (const item of content.results) {
      newResults.push(yield handleABTesting({
        item,
        canTrack
      }));
    }
    content.results = newResults;
  } catch (e) {
    logger.error("Could not process A/B tests. ", e);
  }
  return content.results;
});
function fetchEntries(options) {
  return __async(this, null, function* () {
    const url = generateContentUrl(options);
    const content = yield _fetchContent(options);
    if (!checkContentHasResults(content)) {
      logger.error("Error fetching data. ", {
        url,
        content,
        options
      });
      throw content;
    }
    return _processContentResult(options, content);
  });
}
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function uuid() {
  return uuidv4().replace(/-/g, "");
}
var SESSION_LOCAL_STORAGE_KEY = "builderSessionId";
var getSessionId = (_0) => __async(void 0, [_0], function* ({
  canTrack
}) {
  if (!canTrack) {
    return void 0;
  }
  const sessionId = yield getCookie({
    name: SESSION_LOCAL_STORAGE_KEY,
    canTrack
  });
  if (checkIsDefined(sessionId)) {
    return sessionId;
  } else {
    const newSessionId = createSessionId();
    setSessionId({
      id: newSessionId,
      canTrack
    });
    return newSessionId;
  }
});
var createSessionId = () => uuid();
var setSessionId = ({
  id,
  canTrack
}) => setCookie({
  name: SESSION_LOCAL_STORAGE_KEY,
  value: id,
  canTrack
});
var getLocalStorage = () => isBrowser() && typeof localStorage !== "undefined" ? localStorage : void 0;
var getLocalStorageItem = ({
  key,
  canTrack
}) => {
  try {
    if (canTrack) {
      return getLocalStorage()?.getItem(key);
    }
    return void 0;
  } catch (err) {
    console.debug("[LocalStorage] GET error: ", err);
    return void 0;
  }
};
var setLocalStorageItem = ({
  key,
  canTrack,
  value
}) => {
  try {
    if (canTrack) {
      getLocalStorage()?.setItem(key, value);
    }
  } catch (err) {
    console.debug("[LocalStorage] SET error: ", err);
  }
};
var VISITOR_LOCAL_STORAGE_KEY = "builderVisitorId";
var getVisitorId = ({
  canTrack
}) => {
  if (!canTrack) {
    return void 0;
  }
  const visitorId = getLocalStorageItem({
    key: VISITOR_LOCAL_STORAGE_KEY,
    canTrack
  });
  if (checkIsDefined(visitorId)) {
    return visitorId;
  } else {
    const newVisitorId = createVisitorId();
    setVisitorId({
      id: newVisitorId,
      canTrack
    });
    return newVisitorId;
  }
};
var createVisitorId = () => uuid();
var setVisitorId = ({
  id,
  canTrack
}) => setLocalStorageItem({
  key: VISITOR_LOCAL_STORAGE_KEY,
  value: id,
  canTrack
});
var getTrackingEventData = (_0) => __async(void 0, [_0], function* ({
  canTrack
}) {
  if (!canTrack) {
    return {
      visitorId: void 0,
      sessionId: void 0
    };
  }
  const sessionId = yield getSessionId({
    canTrack
  });
  const visitorId = getVisitorId({
    canTrack
  });
  return {
    sessionId,
    visitorId
  };
});
var createEvent = (_a) => __async(void 0, null, function* () {
  var _b = _a, {
    type: eventType,
    canTrack,
    apiKey,
    metadata
  } = _b, properties = __objRest(_b, [
    "type",
    "canTrack",
    "apiKey",
    "metadata"
  ]);
  return {
    type: eventType,
    data: __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, properties), {
      metadata: __spreadValues({
        url: location.href
      }, metadata)
    }), yield getTrackingEventData({
      canTrack
    })), {
      userAttributes: getUserAttributes(),
      ownerId: apiKey
    })
  };
});
function _track(_a) {
  return __async(this, null, function* () {
    var _b = _a, {
      apiHost
    } = _b, eventProps = __objRest(_b, [
      "apiHost"
    ]);
    if (!eventProps.apiKey) {
      logger.error("Missing API key for track call. Please provide your API key.");
      return;
    }
    if (!eventProps.canTrack) {
      return;
    }
    if (isEditing()) {
      return;
    }
    if (!(isBrowser() || TARGET === "reactNative")) {
      return;
    }
    const baseUrl = apiHost || "https://cdn.builder.io";
    const url = `${baseUrl}/api/v1/track`;
    logFetch(url);
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        events: [yield createEvent(eventProps)]
      }),
      headers: __spreadValues({
        "content-type": "application/json"
      }, getSdkHeaders()),
      mode: "cors"
    }).catch((err) => {
      console.error("Failed to track: ", err);
    });
  });
}
var track = (args) => _track(__spreadProps(__spreadValues({}, args), {
  canTrack: true
}));
function round(num) {
  return Math.round(num * 1e3) / 1e3;
}
var findParentElement = (target, callback, checkElement = true) => {
  if (!(target instanceof HTMLElement)) {
    return null;
  }
  let parent2 = checkElement ? target : target.parentElement;
  do {
    if (!parent2) {
      return null;
    }
    const matches = callback(parent2);
    if (matches) {
      return parent2;
    }
  } while (parent2 = parent2.parentElement);
  return null;
};
var findBuilderParent = (target) => findParentElement(target, (el) => {
  const id = el.getAttribute("builder-id") || el.id;
  return Boolean(id?.indexOf("builder-") === 0);
});
var computeOffset = ({
  event,
  target
}) => {
  const targetRect = target.getBoundingClientRect();
  const xOffset = event.clientX - targetRect.left;
  const yOffset = event.clientY - targetRect.top;
  const xRatio = round(xOffset / targetRect.width);
  const yRatio = round(yOffset / targetRect.height);
  return {
    x: xRatio,
    y: yRatio
  };
};
var getInteractionPropertiesForEvent = (event) => {
  const target = event.target;
  const targetBuilderElement = target && findBuilderParent(target);
  const builderId = targetBuilderElement?.getAttribute("builder-id") || targetBuilderElement?.id;
  return {
    targetBuilderElement: builderId || void 0,
    metadata: {
      targetOffset: target ? computeOffset({
        event,
        target
      }) : void 0,
      builderTargetOffset: targetBuilderElement ? computeOffset({
        event,
        target: targetBuilderElement
      }) : void 0,
      builderElementIndex: targetBuilderElement && builderId ? [].slice.call(document.getElementsByClassName(builderId)).indexOf(targetBuilderElement) : void 0
    }
  };
};
var DEFAULT_TRUSTED_HOSTS = ["*.beta.builder.io", "beta.builder.io", "builder.io", "localhost", "qa.builder.io"];
function isFromTrustedHost(trustedHosts, e) {
  if (!e.origin.startsWith("http") && !e.origin.startsWith("https")) {
    return false;
  }
  const url = new URL(e.origin), hostname = url.hostname;
  return (trustedHosts || DEFAULT_TRUSTED_HOSTS).findIndex((trustedHost) => trustedHost.startsWith("*.") ? hostname.endsWith(trustedHost.slice(1)) : trustedHost === hostname) > -1;
}
var registry = {};
function register(type, info) {
  if (type === "plugin") {
    info = serializeIncludingFunctions(info);
  }
  let typeList = registry[type];
  if (!typeList) {
    typeList = registry[type] = [];
  }
  typeList.push(info);
  if (isBrowser()) {
    const message = {
      type: "builder.register",
      data: {
        type,
        info
      }
    };
    try {
      parent.postMessage(message, "*");
      if (parent !== window) {
        window.postMessage(message, "*");
      }
    } catch (err) {
      console.debug("Could not postmessage", err);
    }
  }
}
var registerInsertMenu = () => {
  register("insertMenu", {
    name: "_default",
    default: true,
    items: [{
      name: "Box"
    }, {
      name: "Text"
    }, {
      name: "Image"
    }, {
      name: "Columns"
    }, ...TARGET === "reactNative" ? [] : [{
      name: "Core:Section"
    }, {
      name: "Core:Button"
    }, {
      name: "Embed"
    }, {
      name: "Custom Code"
    }]]
  });
};
var isSetupForEditing = false;
var setupBrowserForEditing = (options) => {
  if (isSetupForEditing) {
    return;
  }
  isSetupForEditing = true;
  if (isBrowser()) {
    window.parent?.postMessage({
      type: "builder.sdkInfo",
      data: {
        target: TARGET,
        version: SDK_VERSION,
        supportsPatchUpdates: false,
        // Supports builder-model="..." attribute which is needed to
        // scope our '+ add block' button styling
        supportsAddBlockScoping: true,
        supportsCustomBreakpoints: true,
        modelName: options.modelName,
        apiKey: options.apiKey,
        supportsXSmallBreakpoint: TARGET === "reactNative" ? false : true,
        blockLevelPersonalization: true
      }
    }, "*");
    window.parent?.postMessage({
      type: "builder.updateContent",
      data: {
        options
      }
    }, "*");
    window.addEventListener("message", (event) => {
      if (!isFromTrustedHost(options.trustedHosts, event)) {
        return;
      }
      const {
        data
      } = event;
      if (!data?.type) {
        return;
      }
      switch (data.type) {
        case "builder.evaluate": {
          const text = data.data.text;
          const args = data.data.arguments || [];
          const id = data.data.id;
          const fn = new Function(text);
          let result;
          let error = null;
          try {
            result = fn.apply(null, args);
          } catch (err) {
            error = err;
          }
          if (error) {
            window.parent?.postMessage({
              type: "builder.evaluateError",
              data: {
                id,
                error: error.message
              }
            }, "*");
          } else {
            if (result && typeof result.then === "function") {
              result.then((finalResult) => {
                window.parent?.postMessage({
                  type: "builder.evaluateResult",
                  data: {
                    id,
                    result: finalResult
                  }
                }, "*");
              }).catch(console.error);
            } else {
              window.parent?.postMessage({
                type: "builder.evaluateResult",
                data: {
                  result,
                  id
                }
              }, "*");
            }
          }
          break;
        }
      }
    });
  }
};
var createEditorListener = ({
  model,
  trustedHosts,
  callbacks
}) => {
  return (event) => {
    if (!isFromTrustedHost(trustedHosts, event)) {
      return;
    }
    const {
      data
    } = event;
    if (data) {
      switch (data.type) {
        case "builder.configureSdk": {
          callbacks.configureSdk(data.data);
          break;
        }
        case "builder.triggerAnimation": {
          callbacks.animation(data.data);
          break;
        }
        case "builder.contentUpdate": {
          const messageContent = data.data;
          const key = messageContent.key || messageContent.alias || messageContent.entry || messageContent.modelName;
          const contentData = messageContent.data;
          if (key === model) {
            callbacks.contentUpdate(contentData);
          }
          break;
        }
      }
    }
  };
};
var subscribeToEditor = ({
  model,
  apiKey,
  callback,
  trustedHosts
}) => {
  if (!isBrowser) {
    logger.warn("`subscribeToEditor` only works in the browser. It currently seems to be running on the server.");
    return () => {
    };
  }
  setupBrowserForEditing({
    modelName: model,
    apiKey
  });
  const listener = createEditorListener({
    callbacks: {
      contentUpdate: callback,
      animation: () => {
      },
      configureSdk: () => {
      }
    },
    model,
    trustedHosts
  });
  window.addEventListener("message", listener);
  return () => {
    window.removeEventListener("message", listener);
  };
};
var SDKS_USING_ELEMENT_REF_APPROACH = ["svelte", "qwik", "vue"];
var needsElementRefDivForEditing = () => {
  return SDKS_USING_ELEMENT_REF_APPROACH.includes(TARGET) && (isEditing() || isPreviewing());
};
var getCssFromFont = (font) => {
  const family = font.family + (font.kind && !font.kind.includes("#") ? ", " + font.kind : "");
  const name = family.split(",")[0];
  const url = font.fileUrl ?? font?.files?.regular;
  let str = "";
  if (url && family && name) {
    str += `
@font-face {
font-family: "${family}";
src: local("${name}"), url('${url}') format('woff2');
font-display: fallback;
font-weight: 400;
}
      `.trim();
  }
  if (font.files) {
    for (const weight in font.files) {
      const isNumber = String(Number(weight)) === weight;
      if (!isNumber) {
        continue;
      }
      const weightUrl = font.files[weight];
      if (weightUrl && weightUrl !== url) {
        str += `
@font-face {
font-family: "${family}";
src: url('${weightUrl}') format('woff2');
font-display: fallback;
font-weight: ${weight};
}
        `.trim();
      }
    }
  }
  return str;
};
var getFontCss = ({
  customFonts
}) => {
  return customFonts?.map((font) => getCssFromFont(font))?.join(" ") || "";
};
var getCss = ({
  cssCode,
  contentId
}) => {
  if (!cssCode) {
    return "";
  }
  if (!contentId) {
    return cssCode;
  }
  return cssCode?.replace(/&/g, `div[builder-content-id="${contentId}"]`) || "";
};
var DEFAULT_STYLES = `
.builder-button {
  all: unset;
}

.builder-text > p:first-of-type, .builder-text > .builder-paragraph:first-of-type {
  margin: 0;
}
.builder-text > p, .builder-text > .builder-paragraph {
  color: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-align: inherit;
  font-family: inherit;
}
`;
var getDefaultStyles = (isNested) => {
  return !isNested ? DEFAULT_STYLES : "";
};
var getWrapperClassName = (variationId) => {
  return `variant-${variationId}`;
};
var EnableEditor = class _EnableEditor {
  mergeNewRootState(newData) {
    const combinedState = __spreadValues(__spreadValues({}, this.builderContextSignal.rootState), newData);
    if (this.builderContextSignal.rootSetState) {
      this.builderContextSignal.rootSetState?.(combinedState);
    } else {
      this.builderContextSignal.rootState = combinedState;
    }
  }
  mergeNewContent(newContent) {
    const newContentValue = __spreadProps(__spreadValues(__spreadValues({}, this.builderContextSignal.content), newContent), {
      data: __spreadValues(__spreadValues({}, this.builderContextSignal.content?.data), newContent?.data),
      meta: __spreadProps(__spreadValues(__spreadValues({}, this.builderContextSignal.content?.meta), newContent?.meta), {
        breakpoints: newContent?.meta?.breakpoints || this.builderContextSignal.content?.meta?.breakpoints
      })
    });
    this.builderContextSignal.content = newContentValue;
  }
  get showContentProps() {
    return this.showContent ? {} : {
      hidden: true,
      "aria-hidden": true
    };
  }
  processMessage(event) {
    return createEditorListener({
      model: this.model,
      trustedHosts: this.trustedHosts,
      callbacks: {
        configureSdk: (messageContent) => {
          const {
            breakpoints,
            contentId
          } = messageContent;
          if (!contentId || contentId !== this.builderContextSignal.content?.id) {
            return;
          }
          if (breakpoints) {
            this.mergeNewContent({
              meta: {
                breakpoints
              }
            });
          }
        },
        animation: (animation) => {
          triggerAnimation(animation);
        },
        contentUpdate: (newContent) => {
          this.mergeNewContent(newContent);
        }
      }
    })(event);
  }
  onClick(event) {
    if (this.builderContextSignal.content) {
      const variationId = this.builderContextSignal.content?.testVariationId;
      const contentId = this.builderContextSignal.content?.id;
      _track(__spreadProps(__spreadValues({
        apiHost: this.apiHost,
        type: "click",
        canTrack: getDefaultCanTrack(this.canTrack),
        contentId,
        apiKey: this.apiKey,
        variationId: variationId !== contentId ? variationId : void 0
      }, getInteractionPropertiesForEvent(event)), {
        unique: !this.clicked
      }));
    }
    if (!this.clicked) {
      this.clicked = true;
    }
  }
  runHttpRequests() {
    const requests = this.builderContextSignal.content?.data?.httpRequests ?? {};
    Object.entries(requests).forEach(([key, url]) => {
      if (!url)
        return;
      if (this.httpReqsPending[key])
        return;
      if (this.httpReqsData[key] && !isEditing())
        return;
      this.httpReqsPending[key] = true;
      const evaluatedUrl = url.replace(/{{([^}]+)}}/g, (_match, group) => String(evaluate({
        code: group,
        context: this.context || {},
        localState: void 0,
        rootState: this.builderContextSignal.rootState,
        rootSetState: this.builderContextSignal.rootSetState
      })));
      logFetch(evaluatedUrl);
      fetch(evaluatedUrl).then((response) => response.json()).then((json) => {
        this.mergeNewRootState({
          [key]: json
        });
        this.httpReqsData[key] = true;
      }).catch((err) => {
        console.error("error fetching dynamic data", url, err);
      }).finally(() => {
        this.httpReqsPending[key] = false;
      });
    });
  }
  emitStateUpdate() {
    if (isEditing()) {
      window.dispatchEvent(new CustomEvent("builder:component:stateChange", {
        detail: {
          state: fastClone(this.builderContextSignal.rootState),
          ref: {
            name: this.model
          }
        }
      }));
    }
  }
  constructor(vcRef) {
    this.vcRef = vcRef;
    this.builderContext = BuilderContext;
    this.ContentWrapper = null;
    this.httpReqsData = {};
    this.httpReqsPending = {};
    this.clicked = false;
    this.node_0_Show = null;
    this.node_2_state_ContentWrapper = null;
    this.node_3_state_ContentWrapper = null;
    this.mergedInputs_ekawrq = {};
  }
  ngOnInit() {
    this.ContentWrapper = this.contentWrapper || DynamicDiv2;
    this.runHttpRequests();
    this.emitStateUpdate();
    this.node_0_Show = this.builderContextSignal.content || needsElementRefDivForEditing();
    this.node_2_state_ContentWrapper = getWrapperClassName(this.content?.testVariationId || this.content?.id);
    this.node_3_state_ContentWrapper = {
      display: !this.builderContextSignal.content && needsElementRefDivForEditing() ? "none" : void 0
    };
    this.mergedInputs_ekawrq = __spreadValues(__spreadValues({
      ref: this.elementRef,
      onClick: this.onClick.bind(this),
      "builder-content-id": this.builderContextSignal.content?.id,
      "builder-model": this.model,
      className: this.node_2_state_ContentWrapper,
      style: this.node_3_state_ContentWrapper
    }, this.showContentProps), this.contentWrapperProps);
    if (typeof window !== "undefined") {
      if (isBrowser()) {
        if (isEditing() && !this.isNestedRender) {
          window.addEventListener("message", this.processMessage.bind(this));
          registerInsertMenu();
          setupBrowserForEditing(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, this.locale ? {
            locale: this.locale
          } : {}), this.enrich ? {
            enrich: this.enrich
          } : {}), this.trustedHosts ? {
            trustedHosts: this.trustedHosts
          } : {}), {
            modelName: this.model ?? "",
            apiKey: this.apiKey
          }));
          Object.values(this.builderContextSignal.componentInfos).forEach((registeredComponent) => {
            if (!registeredComponent.models?.length || registeredComponent.models.includes(this.model)) {
              const message = createRegisterComponentMessage(registeredComponent);
              window.parent?.postMessage(message, "*");
            }
          });
          window.addEventListener("builder:component:stateChangeListenerActivated", this.emitStateUpdate.bind(this));
        }
        const shouldTrackImpression = this.builderContextSignal.content && getDefaultCanTrack(this.canTrack);
        if (shouldTrackImpression) {
          const variationId = this.builderContextSignal.content?.testVariationId;
          const contentId = this.builderContextSignal.content?.id;
          const apiKeyProp = this.apiKey;
          _track({
            apiHost: this.apiHost,
            type: "impression",
            canTrack: true,
            contentId,
            apiKey: apiKeyProp,
            variationId: variationId !== contentId ? variationId : void 0
          });
        }
        if (isPreviewing() && !isEditing()) {
          const searchParams = new URL(location.href).searchParams;
          const searchParamPreviewModel = searchParams.get("builder.preview");
          const searchParamPreviewId = searchParams.get(`builder.overrides.${searchParamPreviewModel}`);
          const previewApiKey = searchParams.get("apiKey") || searchParams.get("builder.space");
          if (searchParamPreviewModel === "BUILDER_STUDIO" || searchParamPreviewModel === this.model && previewApiKey === this.apiKey && (!this.content || searchParamPreviewId === this.content.id)) {
            fetchOneEntry(__spreadValues({
              model: this.model,
              apiKey: this.apiKey,
              apiVersion: this.builderContextSignal.apiVersion
            }, searchParamPreviewModel === "BUILDER_STUDIO" && this.context?.symbolId ? {
              query: {
                id: this.context.symbolId
              }
            } : {})).then((content) => {
              if (content) {
                this.mergeNewContent(content);
              }
            });
          }
        }
      }
    }
    this.myContent = [this.vcRef.createEmbeddedView(this.contentwrapperTemplateRef).rootNodes];
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      if (this.content) {
        this.mergeNewContent(this.content);
      }
      this.emitStateUpdate();
      if (this.data) {
        this.mergeNewRootState(this.data);
      }
      if (this.locale) {
        this.mergeNewRootState({
          locale: this.locale
        });
      }
      this.node_0_Show = this.builderContextSignal.content || needsElementRefDivForEditing();
      this.node_2_state_ContentWrapper = getWrapperClassName(this.content?.testVariationId || this.content?.id);
      this.node_3_state_ContentWrapper = {
        display: !this.builderContextSignal.content && needsElementRefDivForEditing() ? "none" : void 0
      };
      this.mergedInputs_ekawrq = __spreadValues(__spreadValues({
        ref: this.elementRef,
        onClick: this.onClick.bind(this),
        "builder-content-id": this.builderContextSignal.content?.id,
        "builder-model": this.model,
        className: this.node_2_state_ContentWrapper,
        style: this.node_3_state_ContentWrapper
      }, this.showContentProps), this.contentWrapperProps);
    }
  }
  ngOnDestroy() {
    if (isBrowser()) {
      window.removeEventListener("message", this.processMessage.bind(this));
      window.removeEventListener("builder:component:stateChangeListenerActivated", this.emitStateUpdate.bind(this));
    }
  }
  static {
    this.ɵfac = function EnableEditor_Factory(t) {
      return new (t || _EnableEditor)(ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EnableEditor,
      selectors: [["enable-editor"]],
      viewQuery: function EnableEditor_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c10, 5);
          ɵɵviewQuery(_c15, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentwrapperTemplateRef = _t.first);
        }
      },
      inputs: {
        isNestedRender: "isNestedRender",
        locale: "locale",
        enrich: "enrich",
        trustedHosts: "trustedHosts",
        model: "model",
        apiKey: "apiKey",
        builderContextSignal: "builderContextSignal",
        canTrack: "canTrack",
        apiHost: "apiHost",
        content: "content",
        context: "context",
        data: "data",
        showContent: "showContent",
        contentWrapper: "contentWrapper",
        contentWrapperProps: "contentWrapperProps"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [["contentwrapperTemplate", ""], [4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletContent"]],
      template: function EnableEditor_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, EnableEditor_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, EnableEditor_ng_container_2_Template, 2, 3, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.node_0_Show);
        }
      },
      dependencies: [CommonModule, NgComponentOutlet, NgIf],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnableEditor, [{
    type: Component,
    args: [{
      selector: "enable-editor",
      template: `
    <ng-template #contentwrapperTemplate><ng-content></ng-content></ng-template>
    <ng-container *ngIf="node_0_Show">
      <ng-container
        *ngComponentOutlet="
              ContentWrapper;
              inputs: mergedInputs_ekawrq;
              content: myContent;
              "
      ></ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    isNestedRender: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    enrich: [{
      type: Input
    }],
    trustedHosts: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    apiKey: [{
      type: Input
    }],
    builderContextSignal: [{
      type: Input
    }],
    canTrack: [{
      type: Input
    }],
    apiHost: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    showContent: [{
      type: Input
    }],
    contentWrapper: [{
      type: Input
    }],
    contentWrapperProps: [{
      type: Input
    }],
    elementRef: [{
      type: ViewChild,
      args: ["elementRef"]
    }],
    contentwrapperTemplateRef: [{
      type: ViewChild,
      args: ["contentwrapperTemplate", {
        static: true
      }]
    }]
  });
})();
var ContentStyles = class _ContentStyles {
  constructor() {
    this.injectedStyles = null;
  }
  ngOnInit() {
    this.injectedStyles = `
${getCss({
      cssCode: this.cssCode,
      contentId: this.contentId
    })}
${getFontCss({
      customFonts: this.customFonts
    })}
${getDefaultStyles(this.isNestedRender)}
`.trim();
  }
  static {
    this.ɵfac = function ContentStyles_Factory(t) {
      return new (t || _ContentStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ContentStyles,
      selectors: [["content-styles"]],
      inputs: {
        cssCode: "cssCode",
        contentId: "contentId",
        customFonts: "customFonts",
        isNestedRender: "isNestedRender",
        nonce: "nonce"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 2,
      consts: [["id", "builderio-content", 3, "styles", "nonce"]],
      template: function ContentStyles_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "inlined-styles", 0);
        }
        if (rf & 2) {
          ɵɵproperty("styles", ctx.injectedStyles)("nonce", ctx.nonce);
        }
      },
      dependencies: [CommonModule, InlinedStyles],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentStyles, [{
    type: Component,
    args: [{
      selector: "content-styles",
      template: `
    <inlined-styles
      id="builderio-content"
      [styles]="injectedStyles"
      [nonce]="nonce"
    ></inlined-styles>
  `,
      standalone: true,
      imports: [CommonModule, InlinedStyles],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    cssCode: [{
      type: Input
    }],
    contentId: [{
      type: Input
    }],
    customFonts: [{
      type: Input
    }],
    isNestedRender: [{
      type: Input
    }],
    nonce: [{
      type: Input
    }]
  });
})();
var getRootStateInitialValue = ({
  content,
  data,
  locale
}) => {
  const defaultValues = {};
  const initialState = content?.data?.state || {};
  content?.data?.inputs?.forEach((input) => {
    if (input.name && input.defaultValue !== void 0) {
      defaultValues[input.name] = input.defaultValue;
    }
  });
  return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, defaultValues), initialState), data), locale ? {
    locale
  } : {});
};
var getContentInitialValue = ({
  content,
  data
}) => {
  return !content ? void 0 : __spreadProps(__spreadValues({}, content), {
    data: __spreadValues(__spreadValues({}, content?.data), data),
    meta: content?.meta
  });
};
var ContentComponent = class _ContentComponent {
  constructor() {
    this.TARGET = TARGET;
    this.scriptStr = null;
    this.registeredComponents = null;
    this.builderContextSignal = null;
  }
  contentSetState(newRootState) {
    this.builderContextSignal.rootState = newRootState;
  }
  ngOnInit() {
    this.scriptStr = getUpdateVariantVisibilityScript({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      variationId: this.content?.testVariationId,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      contentId: this.content?.id
    });
    this.registeredComponents = [...getDefaultRegisteredComponents(), ...this.customComponents || []].reduce((acc, _a) => {
      var _b = _a, {
        component
      } = _b, info = __objRest(_b, [
        "component"
      ]);
      return __spreadProps(__spreadValues({}, acc), {
        [info.name]: __spreadValues({
          component
        }, serializeIncludingFunctions(info))
      });
    }, {});
    this.builderContextSignal = {
      content: getContentInitialValue({
        content: this.content,
        data: this.data
      }),
      localState: void 0,
      rootState: getRootStateInitialValue({
        content: this.content,
        data: this.data,
        locale: this.locale
      }),
      rootSetState: this.contentSetState.bind(this),
      context: this.context || {},
      canTrack: this.canTrack,
      apiKey: this.apiKey,
      apiVersion: this.apiVersion,
      componentInfos: [...getDefaultRegisteredComponents(), ...this.customComponents || []].reduce((acc, _c) => {
        var _d = _c, {
          component: _
        } = _d, info = __objRest(_d, [
          "component"
        ]);
        return __spreadProps(__spreadValues({}, acc), {
          [info.name]: serializeIncludingFunctions(info)
        });
      }, {}),
      inheritedStyles: {},
      BlocksWrapper: this.blocksWrapper || DynamicDiv2,
      BlocksWrapperProps: this.blocksWrapperProps || {},
      nonce: this.nonce || "",
      model: this.model
    };
    if (!this.apiKey) {
      logger.error("No API key provided to `Content` component. This can cause issues. Please provide an API key using the `apiKey` prop.");
    }
    const jsCode = this.builderContextSignal.content?.data?.jsCode;
    if (jsCode) {
      evaluate({
        code: jsCode,
        context: this.context || {},
        localState: void 0,
        rootState: this.builderContextSignal.rootState,
        rootSetState: (newState) => {
          this.builderContextSignal.rootSetState?.(newState);
        },
        isExpression: false
      });
    }
  }
  static {
    this.ɵfac = function ContentComponent_Factory(t) {
      return new (t || _ContentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ContentComponent,
      selectors: [["content-component"]],
      hostAttrs: ["ngSkipHydration", "true"],
      inputs: {
        apiKey: "apiKey",
        context: "context",
        content: "content",
        customComponents: "customComponents",
        data: "data",
        locale: "locale",
        canTrack: "canTrack",
        apiVersion: "apiVersion",
        blocksWrapper: "blocksWrapper",
        blocksWrapperProps: "blocksWrapperProps",
        nonce: "nonce",
        model: "model",
        apiHost: "apiHost",
        enrich: "enrich",
        showContent: "showContent",
        contentWrapper: "contentWrapper",
        contentWrapperProps: "contentWrapperProps",
        trustedHosts: "trustedHosts",
        isNestedRender: "isNestedRender",
        isSsrAbTest: "isSsrAbTest",
        linkComponent: "linkComponent"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 4,
      vars: 22,
      consts: [[3, "apiHost", "nonce", "content", "data", "model", "context", "apiKey", "canTrack", "locale", "enrich", "showContent", "builderContextSignal", "contentWrapper", "contentWrapperProps", "trustedHosts", "isNestedRender"], [4, "ngIf"], [3, "blocks", "context", "registeredComponents", "linkComponent"], ["id", "builderio-variant-visibility", 3, "scriptStr", "nonce"], [3, "nonce", "isNestedRender", "contentId", "cssCode", "customFonts"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "enable-editor", 0);
          ɵɵtemplate(1, ContentComponent_ng_container_1_Template, 2, 2, "ng-container", 1)(2, ContentComponent_ng_container_2_Template, 2, 5, "ng-container", 1);
          ɵɵelement(3, "blocks", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("apiHost", ctx.apiHost)("nonce", ctx.nonce)("content", ctx.content)("data", ctx.data)("model", ctx.model)("context", ctx.context)("apiKey", ctx.apiKey)("canTrack", ctx.canTrack)("locale", ctx.locale)("enrich", ctx.enrich)("showContent", ctx.showContent)("builderContextSignal", ctx.builderContextSignal)("contentWrapper", ctx.contentWrapper)("contentWrapperProps", ctx.contentWrapperProps)("trustedHosts", ctx.trustedHosts)("isNestedRender", ctx.isNestedRender);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isSsrAbTest);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.TARGET !== "reactNative");
          ɵɵadvance();
          ɵɵproperty("blocks", ctx.builderContextSignal.content == null ? null : ctx.builderContextSignal.content.data == null ? null : ctx.builderContextSignal.content.data.blocks)("context", ctx.builderContextSignal)("registeredComponents", ctx.registeredComponents)("linkComponent", ctx.linkComponent);
        }
      },
      dependencies: [CommonModule, NgIf, EnableEditor, InlinedScript, ContentStyles, Blocks],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentComponent, [{
    type: Component,
    args: [{
      host: {
        ngSkipHydration: "true"
      },
      selector: "content-component",
      template: `
    <enable-editor
      [apiHost]="apiHost"
      [nonce]="nonce"
      [content]="content"
      [data]="data"
      [model]="model"
      [context]="context"
      [apiKey]="apiKey"
      [canTrack]="canTrack"
      [locale]="locale"
      [enrich]="enrich"
      [showContent]="showContent"
      [builderContextSignal]="builderContextSignal"
      [contentWrapper]="contentWrapper"
      [contentWrapperProps]="contentWrapperProps"
      [trustedHosts]="trustedHosts"
      [isNestedRender]="isNestedRender"
    >
      <ng-container *ngIf="isSsrAbTest">
        <inlined-script
          id="builderio-variant-visibility"
          [scriptStr]="scriptStr"
          [nonce]="nonce || ''"
        ></inlined-script>
      </ng-container>
      <ng-container *ngIf="TARGET !== 'reactNative'">
        <content-styles
          [nonce]="nonce || ''"
          [isNestedRender]="isNestedRender"
          [contentId]="builderContextSignal.content?.id"
          [cssCode]="builderContextSignal.content?.data?.cssCode"
          [customFonts]="builderContextSignal.content?.data?.customFonts"
        ></content-styles>
      </ng-container>
      <blocks
        [blocks]="builderContextSignal.content?.data?.blocks"
        [context]="builderContextSignal"
        [registeredComponents]="registeredComponents"
        [linkComponent]="linkComponent"
      ></blocks>
    </enable-editor>
  `,
      standalone: true,
      imports: [CommonModule, EnableEditor, InlinedScript, ContentStyles, Blocks],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    apiKey: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    customComponents: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    canTrack: [{
      type: Input
    }],
    apiVersion: [{
      type: Input
    }],
    blocksWrapper: [{
      type: Input
    }],
    blocksWrapperProps: [{
      type: Input
    }],
    nonce: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    apiHost: [{
      type: Input
    }],
    enrich: [{
      type: Input
    }],
    showContent: [{
      type: Input
    }],
    contentWrapper: [{
      type: Input
    }],
    contentWrapperProps: [{
      type: Input
    }],
    trustedHosts: [{
      type: Input
    }],
    isNestedRender: [{
      type: Input
    }],
    isSsrAbTest: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }]
  });
})();
var ContentVariants = class _ContentVariants {
  constructor() {
    this.TARGET = TARGET;
    this.getVariants = getVariants;
    this.shouldRenderVariants = null;
    this.node_0_InlinedScript = null;
  }
  get updateCookieAndStylesScriptStr() {
    return getUpdateCookieAndStylesScript(getVariants(this.content).map((value) => ({
      id: value.testVariationId,
      testRatio: value.testRatio
    })), this.content?.id || "");
  }
  get hideVariantsStyleString() {
    return getVariants(this.content).map((value) => `.variant-${value.testVariationId} { display: none; } `).join("");
  }
  get defaultContent() {
    return this.shouldRenderVariants ? __spreadProps(__spreadValues({}, this.content), {
      testVariationId: this.content?.id
    }) : handleABTestingSync({
      item: this.content,
      canTrack: getDefaultCanTrack(this.canTrack)
    });
  }
  trackByVariant0(_, variant) {
    return variant.testVariationId;
  }
  ngOnInit() {
    this.shouldRenderVariants = checkShouldRenderVariants({
      canTrack: getDefaultCanTrack(this.canTrack),
      content: this.content
    });
    this.node_0_InlinedScript = getInitVariantsFnsScriptString();
    if (typeof window !== "undefined") {
    }
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      this.node_0_InlinedScript = getInitVariantsFnsScriptString();
    }
  }
  static {
    this.ɵfac = function ContentVariants_Factory(t) {
      return new (t || _ContentVariants)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ContentVariants,
      selectors: [["builder-content"], ["content-variants"]],
      inputs: {
        canTrack: "canTrack",
        content: "content",
        isNestedRender: "isNestedRender",
        nonce: "nonce",
        apiHost: "apiHost",
        model: "model",
        data: "data",
        context: "context",
        apiKey: "apiKey",
        apiVersion: "apiVersion",
        customComponents: "customComponents",
        linkComponent: "linkComponent",
        locale: "locale",
        enrich: "enrich",
        blocksWrapper: "blocksWrapper",
        blocksWrapperProps: "blocksWrapperProps",
        contentWrapper: "contentWrapper",
        contentWrapperProps: "contentWrapperProps",
        trustedHosts: "trustedHosts"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 23,
      consts: [[4, "ngIf"], [3, "apiHost", "nonce", "isNestedRender", "content", "showContent", "model", "data", "context", "apiKey", "apiVersion", "customComponents", "linkComponent", "canTrack", "locale", "enrich", "isSsrAbTest", "blocksWrapper", "blocksWrapperProps", "contentWrapper", "contentWrapperProps", "trustedHosts"], ["id", "builderio-init-variants-fns", 3, "scriptStr", "nonce"], ["id", "builderio-variants", 3, "styles", "nonce"], ["id", "builderio-variants-visibility", 3, "scriptStr", "nonce"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "apiHost", "isNestedRender", "nonce", "content", "showContent", "model", "data", "context", "apiKey", "apiVersion", "customComponents", "linkComponent", "canTrack", "locale", "enrich", "isSsrAbTest", "blocksWrapper", "blocksWrapperProps", "contentWrapper", "contentWrapperProps", "trustedHosts"]],
      template: function ContentVariants_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵtemplate(1, ContentVariants_ng_container_1_Template, 2, 2, "ng-container", 0)(2, ContentVariants_ng_container_2_Template, 4, 6, "ng-container", 0);
          ɵɵelement(3, "content-component", 1);
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isNestedRender && ctx.TARGET !== "reactNative");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.shouldRenderVariants);
          ɵɵadvance();
          ɵɵproperty("apiHost", ctx.apiHost)("nonce", ctx.nonce)("isNestedRender", ctx.isNestedRender)("content", ctx.defaultContent)("showContent", true)("model", ctx.model)("data", ctx.data)("context", ctx.context)("apiKey", ctx.apiKey)("apiVersion", ctx.apiVersion)("customComponents", ctx.customComponents)("linkComponent", ctx.linkComponent)("canTrack", ctx.canTrack)("locale", ctx.locale)("enrich", ctx.enrich)("isSsrAbTest", ctx.shouldRenderVariants)("blocksWrapper", ctx.blocksWrapper)("blocksWrapperProps", ctx.blocksWrapperProps)("contentWrapper", ctx.contentWrapper)("contentWrapperProps", ctx.contentWrapperProps)("trustedHosts", ctx.trustedHosts);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, InlinedScript, InlinedStyles, ContentComponent],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentVariants, [{
    type: Component,
    args: [{
      selector: "builder-content, content-variants",
      template: `
    <ng-container>
      <ng-container *ngIf="!isNestedRender && TARGET !== 'reactNative'">
        <inlined-script
          id="builderio-init-variants-fns"
          [scriptStr]="node_0_InlinedScript"
          [nonce]="nonce || ''"
        ></inlined-script>
      </ng-container>
      <ng-container *ngIf="shouldRenderVariants">
        <inlined-styles
          id="builderio-variants"
          [styles]="hideVariantsStyleString"
          [nonce]="nonce || ''"
        ></inlined-styles>
        <inlined-script
          id="builderio-variants-visibility"
          [scriptStr]="updateCookieAndStylesScriptStr"
          [nonce]="nonce || ''"
        ></inlined-script>
        <ng-container
          *ngFor="let variant of getVariants(content); trackBy: trackByVariant0"
        >
          <content-component
            [apiHost]="apiHost"
            [isNestedRender]="isNestedRender"
            [nonce]="nonce"
            [content]="variant"
            [showContent]="false"
            [model]="model"
            [data]="data"
            [context]="context"
            [apiKey]="apiKey"
            [apiVersion]="apiVersion"
            [customComponents]="customComponents"
            [linkComponent]="linkComponent"
            [canTrack]="canTrack"
            [locale]="locale"
            [enrich]="enrich"
            [isSsrAbTest]="shouldRenderVariants"
            [blocksWrapper]="blocksWrapper"
            [blocksWrapperProps]="blocksWrapperProps"
            [contentWrapper]="contentWrapper"
            [contentWrapperProps]="contentWrapperProps"
            [trustedHosts]="trustedHosts"
          ></content-component>
        </ng-container>
      </ng-container>
      <content-component
        [apiHost]="apiHost"
        [nonce]="nonce"
        [isNestedRender]="isNestedRender"
        [content]="defaultContent"
        [showContent]="true"
        [model]="model"
        [data]="data"
        [context]="context"
        [apiKey]="apiKey"
        [apiVersion]="apiVersion"
        [customComponents]="customComponents"
        [linkComponent]="linkComponent"
        [canTrack]="canTrack"
        [locale]="locale"
        [enrich]="enrich"
        [isSsrAbTest]="shouldRenderVariants"
        [blocksWrapper]="blocksWrapper"
        [blocksWrapperProps]="blocksWrapperProps"
        [contentWrapper]="contentWrapper"
        [contentWrapperProps]="contentWrapperProps"
        [trustedHosts]="trustedHosts"
      ></content-component>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, InlinedScript, InlinedStyles, ContentComponent],
      styles: [":host{display:contents}\n"]
    }]
  }], null, {
    canTrack: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    isNestedRender: [{
      type: Input
    }],
    nonce: [{
      type: Input
    }],
    apiHost: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    apiKey: [{
      type: Input
    }],
    apiVersion: [{
      type: Input
    }],
    customComponents: [{
      type: Input
    }],
    linkComponent: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    enrich: [{
      type: Input
    }],
    blocksWrapper: [{
      type: Input
    }],
    blocksWrapperProps: [{
      type: Input
    }],
    contentWrapper: [{
      type: Input
    }],
    contentWrapperProps: [{
      type: Input
    }],
    trustedHosts: [{
      type: Input
    }]
  });
})();
var fetchSymbolContent = (_0) => __async(void 0, [_0], function* ({
  builderContextValue,
  symbol
}) {
  if (symbol?.model && // This is a hack, we should not need to check for this, but it is needed for Svelte.
  builderContextValue?.apiKey) {
    return fetchOneEntry(__spreadValues({
      model: symbol.model,
      apiKey: builderContextValue.apiKey,
      apiVersion: builderContextValue.apiVersion
    }, symbol?.entry && {
      query: {
        id: symbol.entry
      }
    })).catch((err) => {
      logger.error("Could not fetch symbol content: ", err);
      return void 0;
    });
  }
  return void 0;
});
var BuilderSymbol = class _BuilderSymbol {
  get blocksWrapper() {
    return DynamicDiv2;
  }
  get contentWrapper() {
    return DynamicDiv2;
  }
  get className() {
    return [...[this.attributes[getClassPropName()]], "builder-symbol", this.symbol?.inline ? "builder-inline-symbol" : void 0, this.symbol?.dynamic || this.dynamic ? "builder-dynamic-symbol" : void 0].filter(Boolean).join(" ");
  }
  setContent() {
    if (this.contentToUse)
      return;
    fetchSymbolContent({
      symbol: this.symbol,
      builderContextValue: this.builderContext
    }).then((newContent) => {
      if (newContent) {
        this.contentToUse = newContent;
      }
    });
  }
  setAttributes(el, value, changes) {
    if (!el) {
      return;
    }
    const target = typeof changes === "undefined" ? value : changes;
    Object.keys(target).forEach((key) => {
      if (key.startsWith("on")) {
        if (this._listenerFns.has(key)) {
          this._listenerFns.get(key)();
        }
        this._listenerFns.set(key, this.renderer.listen(el, key.replace("on", "").toLowerCase(), target[key]));
      } else {
        this.renderer.setAttribute(el, key.toLowerCase(), target[key] ?? "");
      }
    });
  }
  constructor(renderer) {
    this.renderer = renderer;
    this._listenerFns = /* @__PURE__ */ new Map();
    this.contentToUse = null;
    this.node_0_ContentVariants = null;
    this.node_1_ContentVariants = null;
    this.node_2_ContentVariants = null;
    this.elRef0_state_0 = null;
    this.elRef0_state_1 = null;
  }
  ngOnInit() {
    this.contentToUse = this.symbol?.content;
    this.node_0_ContentVariants = __spreadProps(__spreadValues({}, this.builderContext.context), {
      symbolId: this.builderBlock?.id
    });
    this.node_1_ContentVariants = Object.values(this.builderComponents);
    this.node_2_ContentVariants = __spreadValues(__spreadValues(__spreadValues({}, this.symbol?.data), this.builderContext.localState), this.contentToUse?.data?.state);
    this.elRef0_state_0 = {};
    this.elRef0_state_1 = {};
    if (typeof window !== "undefined") {
    }
  }
  ngAfterViewInit() {
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0);
    this.setAttributes(this.elRef0?.nativeElement, this.attributes);
    this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_1);
  }
  ngOnChanges(changes) {
    if (typeof window !== "undefined") {
      if (changes.symbol) {
        this.setContent();
      }
      this.node_0_ContentVariants = __spreadProps(__spreadValues({}, this.builderContext.context), {
        symbolId: this.builderBlock?.id
      });
      this.node_1_ContentVariants = Object.values(this.builderComponents);
      this.node_2_ContentVariants = __spreadValues(__spreadValues(__spreadValues({}, this.symbol?.data), this.builderContext.localState), this.contentToUse?.data?.state);
      this.elRef0_state_0 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_0, changes["elRef0_state_0"]?.currentValue);
      this.setAttributes(this.elRef0?.nativeElement, this.attributes, changes["attributes"]?.currentValue);
      this.elRef0_state_1 = {};
      this.setAttributes(this.elRef0?.nativeElement, this.elRef0_state_1, changes["elRef0_state_1"]?.currentValue);
    }
  }
  ngOnDestroy() {
    for (const fn of this._listenerFns.values()) {
      fn();
    }
  }
  static {
    this.ɵfac = function BuilderSymbol_Factory(t) {
      return new (t || _BuilderSymbol)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BuilderSymbol,
      selectors: [["builder-symbol"]],
      viewQuery: function BuilderSymbol_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elRef0 = _t.first);
        }
      },
      inputs: {
        symbol: "symbol",
        builderContext: "builderContext",
        builderBlock: "builderBlock",
        builderComponents: "builderComponents",
        attributes: "attributes",
        dynamic: "dynamic",
        builderLinkComponent: "builderLinkComponent"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 15,
      consts: [["elRef0", ""], [3, "nonce", "isNestedRender", "apiVersion", "apiKey", "context", "customComponents", "data", "canTrack", "model", "content", "linkComponent", "blocksWrapper", "contentWrapper"]],
      template: function BuilderSymbol_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", null, 0);
          ɵɵelement(2, "content-variants", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_10_0;
          ɵɵclassMap(ctx.className);
          ɵɵadvance(2);
          ɵɵproperty("nonce", ctx.builderContext.nonce)("isNestedRender", true)("apiVersion", ctx.builderContext.apiVersion)("apiKey", ctx.builderContext.apiKey)("context", ctx.node_0_ContentVariants)("customComponents", ctx.node_1_ContentVariants)("data", ctx.node_2_ContentVariants)("canTrack", ctx.builderContext.canTrack)("model", (tmp_10_0 = ctx.symbol == null ? null : ctx.symbol.model) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "")("content", ctx.contentToUse)("linkComponent", ctx.builderLinkComponent)("blocksWrapper", ctx.blocksWrapper)("contentWrapper", ctx.contentWrapper);
        }
      },
      dependencies: [CommonModule, ContentVariants],
      styles: ["[_nghost-%COMP%]{display:contents}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuilderSymbol, [{
    type: Component,
    args: [{
      selector: "builder-symbol",
      template: `
    <div [class]="className" #elRef0>
      <content-variants
        [nonce]="builderContext.nonce"
        [isNestedRender]="true"
        [apiVersion]="builderContext.apiVersion"
        [apiKey]="builderContext.apiKey!"
        [context]="node_0_ContentVariants"
        [customComponents]="node_1_ContentVariants"
        [data]="node_2_ContentVariants"
        [canTrack]="builderContext.canTrack"
        [model]="symbol?.model ?? ''"
        [content]="contentToUse"
        [linkComponent]="builderLinkComponent"
        [blocksWrapper]="blocksWrapper"
        [contentWrapper]="contentWrapper"
      ></content-variants>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, ContentVariants],
      styles: [":host{display:contents}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, {
    symbol: [{
      type: Input
    }],
    builderContext: [{
      type: Input
    }],
    builderBlock: [{
      type: Input
    }],
    builderComponents: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    dynamic: [{
      type: Input
    }],
    builderLinkComponent: [{
      type: Input
    }],
    elRef0: [{
      type: ViewChild,
      args: ["elRef0"]
    }]
  });
})();
var settings = {};
function setEditorSettings(newSettings) {
  if (isBrowser()) {
    Object.assign(settings, newSettings);
    const message = {
      type: "builder.settingsChange",
      data: settings
    };
    parent.postMessage(message, "*");
  }
}
var fetchBuilderProps = (_args) => __async(void 0, null, function* () {
  const urlPath = _args.path || _args.url?.pathname || _args.userAttributes?.urlPath;
  const getContentArgs = __spreadProps(__spreadValues({}, _args), {
    apiKey: _args.apiKey,
    model: _args.model || "page",
    userAttributes: __spreadValues(__spreadValues({}, _args.userAttributes), urlPath ? {
      urlPath
    } : {}),
    options: getBuilderSearchParams(_args.searchParams || _args.url?.searchParams || _args.options)
  });
  return {
    apiKey: getContentArgs.apiKey,
    model: getContentArgs.model,
    content: yield fetchOneEntry(getContentArgs)
  };
});
export {
  Blocks,
  BuilderContext,
  BuilderButton as Button,
  Columns,
  ContentVariants as Content,
  FragmentComponent as Fragment,
  BuilderImage as Image,
  SectionComponent as Section,
  BuilderSymbol as Symbol,
  BuilderText as Text,
  BuilderVideo as Video,
  _processContentResult,
  createRegisterComponentMessage,
  fetchBuilderProps,
  fetchEntries,
  fetchOneEntry,
  getBuilderSearchParams,
  isEditing,
  isPreviewing,
  register,
  setClientUserAttributes,
  setEditorSettings,
  subscribeToEditor,
  track
};
//# sourceMappingURL=@builder__io_sdk-angular.js.map
