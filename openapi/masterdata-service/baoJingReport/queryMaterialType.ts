// http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/queryMaterialTypeUsingGET
// JSONResult«List«CodeName»»
export interface IJSONResultListCodeName {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICodeName[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CodeName
export interface ICodeName {
    // undefined
    code: string;
    // undefined
    name: string;
}
