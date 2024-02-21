// 正式产品订单延期新增请求对象
export interface INewRequestObjectForOfficialProductOrderExtension {
    // 企业id
    enterpriseId: number;
    // 延长时长(天)
    delayDurationQuantity: number;
    // 延期原因
    delayReason: string;
    // 预计到期日期
    planExpireTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
