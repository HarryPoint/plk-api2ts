// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getProduceTimeFeeMonthTotalUsingPOST
// 工时工费月度报表搜索VO
export interface IMonthlyReportOfHourlyLaborFeeSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 员工id集
    userIds: number[];
    // 班组id集
    classGroupIds: number[];
    // 查询开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«工时工费月度汇总统计报表返回VO»
export interface IJSONResultMonthlySummaryStatisticalReportOfManHourFeeReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMonthlySummaryStatisticalReportOfManHourFeeIsReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工时工费月度汇总统计报表返回VO
export interface IMonthlySummaryStatisticalReportOfManHourFeeIsReturnedToVO {
    // 合格产出工费
    produceFee: number;
    // 返工产出工费
    backFee: number;
    // 合计工费
    totalFee: number;
}
