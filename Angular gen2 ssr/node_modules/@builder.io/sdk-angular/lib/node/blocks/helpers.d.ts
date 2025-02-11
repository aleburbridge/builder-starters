export declare function filterAttrs(attrs: {
    [index: string]: any;
}, prefix: string, isEvent: boolean): {
    [index: string]: any;
};
/**
 * Svelte SDK: workaround to dynamically provide event handlers to components/elements.
 * https://svelte.dev/repl/1246699e266f41218a8eeb45b9b58b54?version=3.24.1
 */
export declare function setAttrs(node: HTMLElement, attrs?: Record<string, (event: Event) => void>): {
    update(attrs?: {}): void;
    destroy(): void;
};
