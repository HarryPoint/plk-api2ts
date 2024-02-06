// JSONResult«List«单位返回VO»»
export interface ITheJSONResultListUnitReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUnitReturnVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 单位返回VO
export interface IUnitReturnVO {
    // id
    id: number;
    // 单位名称
    name: string;
    // 单位编码
    code: string;
}
