// 销售订单关闭 DTO
export interface I销售订单关闭DTO {
    // 销售订单id
    salesOrderId: number;
    // 登录密码
    loginPassword: string;
    // 关闭原因
    closeRemark: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
