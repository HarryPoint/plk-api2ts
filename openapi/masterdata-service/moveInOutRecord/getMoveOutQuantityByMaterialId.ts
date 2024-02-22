// http://47.108.139.107:16700/doc.html#/default/进出料记录管理/getMoveOutQuantityByMaterialIdUsingGET
// JSONResult«bigdecimal»
export interface IJSONResultbigdecimal {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
