import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectQualityTargetCompleteCountUsingPOST_1
*/
export default function fetchMethod(data: IProjectOverviewQueryDto, extraOptions?: any) {
    return http<IJSONResultStatisticalResponseObjectForProjectQualityObjectives>(
        {
            url: "/masterdata-service/projectOverview/queryProjectQualityTargetCompleteCount",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 项目id */
    projectId: number;
    /** 开始日期 */
    beginTime: string;
    /** 结束日期 */
    endTime: string;
    /** 查询条数 */
    limit: number;
}
/** JSONResult«项目质量目标统计响应对象» */
export interface IJSONResultStatisticalResponseObjectForProjectQualityObjectives {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProjectQualityObjectivesStatisticalResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 项目质量目标统计响应对象 */
export interface IProjectQualityObjectivesStatisticalResponseObjects {
    /** 总数量 */
    totalQuantity: number;
    /** 未完成数量 */
    unCompleteQuantity: number;
    /** 已完成数量 */
    completeQuantity: number;
    /** 超期完成数量 */
    overdueCompleteQuantity: number;
    /** 超期未完成数量 */
    overdueUnCompleteQuantity: number;
    /** 正常进行数量 */
    normalQuantity: number;
    /** 按期完成数量 */
    onTimeCompleteQuantity: number;
    /** 达成率 */
    completeRate: number;
}
