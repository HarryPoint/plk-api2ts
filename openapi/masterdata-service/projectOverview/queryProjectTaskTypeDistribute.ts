import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目概况相关/queryProjectTaskTypeDistributeUsingPOST
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskTypeDistributedResponseObject>(
        {
            url: "/masterdata-service/projectOverview/queryProjectTaskTypeDistribute",
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
/** JSONResult«List«项目任务类型分布响应对象»» */
export interface IJSONResultListProjectTaskTypeDistributedResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectTaskTypeDistributesTheResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务类型分布响应对象 */
export interface ITheProjectTaskTypeDistributesTheResponseObject {
    /** 分布数量 */
    distributeQuantity?: number;
    /** 项目任务类型id */
    projectTaskTypeId?: string;
    /** 项目任务类型名称 */
    projectTaskTypeName?: string;
}
