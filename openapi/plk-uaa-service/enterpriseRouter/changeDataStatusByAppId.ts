// 企业路由根据应用id变更数据状态请求 DTO
export interface ITheEnterpriseRouteRequestsTheDTOToChangeTheDataStatusBasedOnTheApplicationId {
    // 应用id
    appId: number;
    // 数据状态
    dataStatus: number;
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
