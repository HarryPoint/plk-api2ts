// 修改企业批次管理信息请求对象
export interface IExampleModifyTheEnterpriseBatchManagementInformationRequestObject {
    // 企业id
    id: number;
    // 是否启用批次关联
    isEnableBatchManagement: string;
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
