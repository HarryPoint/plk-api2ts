// 企业修改请求对象
export interface ITheEnterpriseModifiesTheRequestObject {
    // 企业名
    name: string;
    // 管理员手机号
    adminPhone: string;
    // 专家ids
    expertUserIdArray: number[];
    // 销售经理ids
    salesManagerUserIdArray: number[];
    // 交付经理用户ids
    deliveryManagerUserIdArray: number[];
    // 企业id
    id: number;
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
