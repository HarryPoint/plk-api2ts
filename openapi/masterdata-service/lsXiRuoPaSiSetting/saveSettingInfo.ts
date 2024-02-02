// 西偌帕斯大屏设置DTO
export interface I西偌帕斯大屏设置DTO {
    // 主要物料id集
    majorDataIds: number[];
    // 主要工序id集
    processIds: number[];
    // 计划设置集
    planSettings: 西偌帕斯大屏计划数设置DTO[];
    // 工序目标值设置集
    processTargetSettings: 西偌帕斯工序目标值大屏设置DTO[];
    // 报废数据前五统计时间类型
    scrapStatisticsTime: string;
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
