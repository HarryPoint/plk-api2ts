import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryLeaderInstructCompleteCountUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultLeaderInstructionsStatisticalResponseObjects>(
        {
            url: "/masterdata-service/projectOverview/queryLeaderInstructCompleteCount",
            method: "post",
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
/** JSONResult«领导批示统计响应对象» */
export interface IJSONResultLeaderInstructionsStatisticalResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILeaderIndicatesStatisticalResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 领导批示统计响应对象 */
export interface ILeaderIndicatesStatisticalResponseObjects {
    /** 总数量 */
    totalQuantity?: number;
    /** 未完成数量 */
    unCompleteQuantity?: number;
    /** 已完成数量 */
    completeQuantity?: number;
    /** 正常进行数量 */
    normalQuantity?: number;
    /** 按期完成数量 */
    onTimeCompleteQuantity?: number;
    /** 超期完成数量 */
    overdueCompleteQuantity?: number;
    /** 超期未完成数量 */
    overdueUnCompleteQuantity?: number;
    /** 完成率 */
    completeRate?: number;
}
