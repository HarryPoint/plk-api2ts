// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«关联单据响应»»
export interface IJSONResultList关联单据响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I关联单据响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 关联单据响应
export interface I关联单据响应 {
    // 单据id
    id: number;
    // 单据编号
    code: string;
    // 关联单据id
    associatedOrderId: number;
    // 关联单据编号
    associatedOrderCode: string;
    // 关联单据类型
    associatedOrderType: string;
    // 关联单据类型描述
    associatedOrderTypeDesc: string;
    // 流程id
    flowPathId: number;
}
