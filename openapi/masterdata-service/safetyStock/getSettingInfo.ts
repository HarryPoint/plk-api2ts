// 安全库存设置搜索VO
export interface ISecurityStockSettingsSearchVO {
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
}
// JSONResult«安全库存设置返回VO»
export interface IJSONResultSecurityStockSettingsReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISafetyStockSettingsReturnVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 安全库存设置返回VO
export interface ISafetyStockSettingsReturnVO {
    // 是否开启预警
    isWarning: string;
    // 计数方式
    computeType: string;
}
