export declare const convertStyleMapToCSSArray: (style: Partial<CSSStyleDeclaration>) => string[];
export declare const convertStyleMapToCSS: (style: Partial<CSSStyleDeclaration>) => string;
export declare const createCssClass: ({ mediaQuery, className, styles }: {
    mediaQuery?: string;
    className: string;
    styles: Partial<CSSStyleDeclaration>;
}) => string;
