// JSONResult«大屏不合格品统计按审理情况响应DTO»
export interface IJSONResult大屏不合格品统计按审理情况响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I大屏不合格品统计按审理情况响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏不合格品统计按审理情况响应DTO
export interface I大屏不合格品统计按审理情况响应DTO {
    // 未关闭数量
    handlingQuantity: number;
    // 已关闭数量
    completeQuantity: number;
}
