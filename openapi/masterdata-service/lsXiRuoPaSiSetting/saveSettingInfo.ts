// http://47.108.139.107:16700/doc.html#/default/西偌帕斯大屏相关/saveSettingInfoUsingPOST_2
// 西偌帕斯大屏设置DTO
export interface ISilopusBigScreenSetUpTheDTO {
    // 主要物料id集
    majorDataIds: number[];
    // 主要工序id集
    processIds: number[];
    // 计划设置集
    planSettings: ISilopusLargeScreenProjectNumberSetDTO[];
    // 工序目标值设置集
    processTargetSettings: ISilopusProcessTargetValueLargeScreenSetDTO[];
    // 报废数据前五统计时间类型
    scrapStatisticsTime: string;
}
// 西偌帕斯大屏计划数设置DTO
export interface ISilopusLargeScreenProjectNumberSetDTO {
    // 日程安排日期 yyyy-MM-dd
    scheduleDate: string;
    // 计划数
    planQuantity: number;
}
// 西偌帕斯工序目标值大屏设置DTO
export interface ISilopusProcessTargetValueLargeScreenSetDTO {
    // 工序id
    processId: number;
    // 产出目标数
    produceTargetQuantity: number;
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
