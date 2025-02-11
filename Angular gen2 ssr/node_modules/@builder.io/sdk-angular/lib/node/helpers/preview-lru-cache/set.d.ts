import type { BuilderContent } from '../../types/builder-content';
export declare function postPreviewContent({ key, value }: {
    key: string;
    value: BuilderContent;
}): Promise<{
    [x: string]: BuilderContent;
}>;
