// JSONResult«List«生产订单返回VO»»_1
export interface IJSONResultList生产订单返回VO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产订单返回VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单返回VO_1
export interface I生产订单返回VO_1 {
    // id
    id: number;
    // 订单状态
    orderStatus: string;
    // 订单状态描述
    orderStatusDesc: string;
    // 操作时间
    createTime: string;
    // 描述
    remark: string;
}