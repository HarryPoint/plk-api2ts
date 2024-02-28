import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目概况相关/queryProjectTaskCompleteCountUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultProjectTaskStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectOverview/queryProjectTaskCompleteCount",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 项目id */
    projectId: string;
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 查询条数 */
    limit?: number;
}
/** JSONResult«项目任务统计响应对象» */
export interface IJSONResultProjectTaskStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskStatisticsResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务统计响应对象 */
export interface IProjectTaskStatisticsResponseObject {
    /** 任务总数量 */
    totalQuantity?: number;
    /** 已完成数量 */
    completeQuantity?: number;
    /** 超期数量 */
    overdueQuantity?: number;
    /** 按期完成数量 */
    onTimeCompleteQuantity?: number;
    /** 超期完成数量 */
    overdueCompleteQuantity?: number;
    /** 未完成数量 */
    unCompleteQuantity?: number;
    /** 正常进行数量 */
    normalQuantity?: number;
    /** 超期未完成数量 */
    overdueUnCompleteQuantity?: number;
}
