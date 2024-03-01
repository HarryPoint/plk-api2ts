import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目概况相关/queryLeaderInstructCompleteCountUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultLeaderInstructionsStatisticalResponseObjects>(
        {
            url: "/masterdata-service/projectOverview/queryLeaderInstructCompleteCount",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 查询条数 */
    limit?: number;
    /** 项目id */
    projectId: string;
}
/** JSONResult«领导批示统计响应对象» */
export interface IJSONResultLeaderInstructionsStatisticalResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILeaderIndicatesStatisticalResponseObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 领导批示统计响应对象 */
export interface ILeaderIndicatesStatisticalResponseObjects {
    /** 已完成数量 */
    completeQuantity?: number;
    /** 完成率 */
    completeRate?: number;
    /** 正常进行数量 */
    normalQuantity?: number;
    /** 按期完成数量 */
    onTimeCompleteQuantity?: number;
    /** 超期完成数量 */
    overdueCompleteQuantity?: number;
    /** 超期未完成数量 */
    overdueUnCompleteQuantity?: number;
    /** 总数量 */
    totalQuantity?: number;
    /** 未完成数量 */
    unCompleteQuantity?: number;
}
