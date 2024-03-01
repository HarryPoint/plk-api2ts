import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/sortByMoveUpUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectTaskSortRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectTask/sortByMoveUp",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务排序请求对象 */
export interface IProjectTaskSortRequestObject {
    /** 移动任务id */
    moveProjectTaskId: string;
    /** 移动到的排序,最小为1 */
    moveToSort: number;
    /** 项目计划id */
    projectPlanId?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
