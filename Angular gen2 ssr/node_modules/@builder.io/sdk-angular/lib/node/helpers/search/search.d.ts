export type QueryObject = Record<string, string | string[]>;
export declare const convertSearchParamsToQueryObject: (searchParams: URLSearchParams) => QueryObject;
export declare const normalizeSearchParams: (searchParams: QueryObject | URLSearchParams) => QueryObject;
export type Search = URLSearchParams | string | QueryObject;
export declare const getSearchString: (search: Search) => string;
