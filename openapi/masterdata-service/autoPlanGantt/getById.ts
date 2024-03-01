import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/甘特图相关/getByIdUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultProducePlanAutoScheduleOutputVO>(
        {
            url: "/masterdata-service/autoPlanGantt/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProducePlanAutoScheduleOutputVO» */
export interface IJSONResultProducePlanAutoScheduleOutputVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProducePlanAutoScheduleOutputVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProducePlanAutoScheduleOutputVO */
export interface IProducePlanAutoScheduleOutputVO {
    /** undefined */
    beginTime?: number;
    /** undefined */
    endTime?: number;
    /** undefined */
    id?: string;
    /** undefined */
    isLock?: EProducePlanAutoScheduleOutputVO_isLock;
    /** undefined */
    occupyReason?: string;
    /** undefined */
    priorityLevel?: number;
    /** undefined */
    processId?: string;
    /** undefined */
    produceOrderId?: string;
    /** undefined */
    producePlanId?: string;
    /** undefined */
    routingStep?: number;
    /** undefined */
    routingStepId?: string;
    /** undefined */
    scheduleType?: EProducePlanAutoScheduleOutputVO_scheduleType;
}

export enum EProducePlanAutoScheduleOutputVO_isLock {
    Y = "Y",
    N = "N"
}

export enum EProducePlanAutoScheduleOutputVO_scheduleType {
    OCCUPY_PROCESS = "OCCUPY_PROCESS",
    OCCUPY_TIME = "OCCUPY_TIME",
    PROCESS = "PROCESS",
    ORDER = "ORDER"
}
