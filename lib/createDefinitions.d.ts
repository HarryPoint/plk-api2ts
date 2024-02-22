import { SourceFile } from "ts-morph";
export declare const createDefinitions: (definitionsFile: SourceFile, data: any, option?: {
    translate?: boolean;
    prefix?: string;
}) => Promise<void>;
