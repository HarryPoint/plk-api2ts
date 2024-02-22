// http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectActionItemCompleteCountUsingPOST_1
// 项目概况查询dto
export interface IProjectOverviewQueryDto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«项目行动项统计响应对象»
export interface IJSONResultProjectActionItemStatisticsResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IItemActionItemStatisticsResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目行动项统计响应对象
export interface IItemActionItemStatisticsResponseObject {
    // 总数量
    totalQuantity: number;
    // 未完成数量
    unCompleteQuantity: number;
    // 已完成数量
    completeQuantity: number;
    // 正常进行数量
    normalQuantity: number;
    // 按期完成数量
    onTimeCompleteQuantity: number;
    // 超期完成数量
    overdueCompleteQuantity: number;
    // 超期未完成数量
    overdueUnCompleteQuantity: number;
    // 完成率
    completeRate: number;
}
