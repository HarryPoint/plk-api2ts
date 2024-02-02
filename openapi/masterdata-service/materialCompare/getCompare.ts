// 物料主数据bom id集合VO
export interface I物料主数据bomid集合VO {
    // bomId集合
    bomIds: number[];
}
// JSONResult«List«物料主数据比对返回VO»»
export interface IJSONResultList物料主数据比对返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料主数据比对返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
