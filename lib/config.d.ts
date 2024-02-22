export type IConfig = {
    translateCacheFileName: string;
    translateApiUri: string;
    translateAppKey: string;
    translateAppSecret: string;
    translateChunkSize: number;
    serviceMap: Record<string, string>;
    serviceNameToPath: boolean;
    output: string;
};
declare const resultConfig: IConfig;
export default resultConfig;
