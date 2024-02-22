// 试用产品订单延期新增请求对象
export interface ITrialProductOrderExtensionNewRequestObject {
    // 企业id
    enterpriseId: number;
    // 延长时长(天)
    delayDurationQuantity: number;
    // 购买账号数
    buyAccountQuantity: number;
    // 产品模块
    productModuleArray: string[];
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
