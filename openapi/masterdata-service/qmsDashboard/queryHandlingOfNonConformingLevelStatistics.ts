// JSONResult«大屏不合格品统计按级别返回»
export interface IJSONResultLargeScreenDefectiveProductStatisticsAreReturnedByLevel {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILargeScreenNonconformingProductStatisticsAreReturnedByLevel;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏不合格品统计按级别返回
export interface ILargeScreenNonconformingProductStatisticsAreReturnedByLevel {
    // I的数量
    quantityOfCategoryOne: number;
    // II的数量
    quantityOfCategoryTwo: number;
    // III的数量
    quantityOfCategoryThree: number;
    // I的占比
    percentageOfCategoryOne: number;
    // II的占比
    percentageOfCategoryTwo: number;
    // III的占比
    percentageOfCategoryThree: number;
}
