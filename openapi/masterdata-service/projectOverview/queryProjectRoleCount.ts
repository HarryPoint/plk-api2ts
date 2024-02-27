import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectRoleCountUsingPOST
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectRoleStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectOverview/queryProjectRoleCount",
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
/** JSONResult«List«项目角色统计响应对象»» */
export interface IJSONResultListProjectRoleStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectRoleStatisticsResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目角色统计响应对象 */
export interface IProjectRoleStatisticsResponseObjects {
}
