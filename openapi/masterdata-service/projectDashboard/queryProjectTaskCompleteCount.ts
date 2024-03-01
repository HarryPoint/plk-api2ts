import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryProjectTaskCompleteCountUsingPOST
*/
export default function fetchMethod(options: { data: IProjectKanbanQueryDto }, extraOptions?: any) {
    return http<IJSONResultProjectTaskStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectDashboard/queryProjectTaskCompleteCount",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目看板查询dto */
export interface IProjectKanbanQueryDto {
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** undefined */
    excludeProjectIds?: string[];
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: string[];
}
/** JSONResult«项目任务统计响应对象» */
export interface IJSONResultProjectTaskStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskStatisticsResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务统计响应对象 */
export interface IProjectTaskStatisticsResponseObject {
    /** 已完成数量 */
    completeQuantity?: number;
    /** 正常进行数量 */
    normalQuantity?: number;
    /** 按期完成数量 */
    onTimeCompleteQuantity?: number;
    /** 超期完成数量 */
    overdueCompleteQuantity?: number;
    /** 超期数量 */
    overdueQuantity?: number;
    /** 超期未完成数量 */
    overdueUnCompleteQuantity?: number;
    /** 任务总数量 */
    totalQuantity?: number;
    /** 未完成数量 */
    unCompleteQuantity?: number;
}
