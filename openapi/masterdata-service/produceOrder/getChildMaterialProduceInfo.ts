// 子物料生产信息查询请求DTO
export interface I子物料生产信息查询请求DTO {
    // 标准工艺ID
    standardTechnologyId: number;
    // 生产订单ID
    produceOrderId: number;
}
// JSONResult«子生产订单信息查询响应»
export interface IJSONResult子生产订单信息查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 子生产订单信息查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
