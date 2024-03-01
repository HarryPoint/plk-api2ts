import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryProjectTaskCompleteQuarterDistributeUsingGET
*/
export default function fetchMethod(options: { params: { ProjectCategory?: string } }, extraOptions?: any) {
    return http<IJSONResultListQuarterlyDistributedResponseObjectForProjectTasks>(
        {
            url: "/masterdata-service/projectDashboard/queryProjectTaskCompleteQuarterDistribute",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务季度分布响应对象»» */
export interface IJSONResultListQuarterlyDistributedResponseObjectForProjectTasks {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQuarterlyDistributedResponseObjectsForProjectTasks[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务季度分布响应对象 */
export interface IQuarterlyDistributedResponseObjectsForProjectTasks {
    /** 季度开始日期 */
    beginTime?: number;
    /** 已完成数量 */
    completeQuantity?: number;
    /** 完成率 */
    completeRate?: number;
    /** 季度结束日期 */
    endTime?: number;
    /** 任务总数量 */
    totalQuantity?: number;
}
