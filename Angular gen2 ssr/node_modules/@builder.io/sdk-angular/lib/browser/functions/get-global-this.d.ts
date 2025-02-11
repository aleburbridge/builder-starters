/// <reference types="node" />
type Global = typeof global | typeof window | typeof self | typeof globalThis;
export declare function getGlobalThis(): Global;
export {};
