// JSONResult«List«大屏不合格品统计按项目返回»»
export interface IJSONResultListLargeScreenDefectiveProductStatisticsReturnByItem {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILargeScreenNonconformingProductStatisticsAreReturnedByItem[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏不合格品统计按项目返回
export interface ILargeScreenNonconformingProductStatisticsAreReturnedByItem {
    // 型号
    model: string;
    // 数量
    quantity: number;
}
