// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«生产订单下发结果DTO»
export interface IJSONResult生产订单下发结果DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单下发结果DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
