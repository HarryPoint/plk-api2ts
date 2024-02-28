import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/甘特图相关/getByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProducePlanAutoScheduleOutputVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProducePlanAutoScheduleOutputVO */
export interface IProducePlanAutoScheduleOutputVO {
    /** undefined */
    id?: string;
    /** undefined */
    producePlanId?: string;
    /** undefined */
    scheduleType?: EProducePlanAutoScheduleOutputVO_scheduleType;
    /** undefined */
    produceOrderId?: string;
    /** undefined */
    routingStepId?: string;
    /** undefined */
    routingStep?: number;
    /** undefined */
    processId?: string;
    /** undefined */
    beginTime?: number;
    /** undefined */
    endTime?: number;
    /** undefined */
    occupyReason?: string;
    /** undefined */
    isLock?: EProducePlanAutoScheduleOutputVO_isLock;
    /** undefined */
    priorityLevel?: number;
}

export enum EProducePlanAutoScheduleOutputVO_scheduleType {
    OCCUPY_PROCESS = "OCCUPY_PROCESS",
    OCCUPY_TIME = "OCCUPY_TIME",
    PROCESS = "PROCESS",
    ORDER = "ORDER"
}

export enum EProducePlanAutoScheduleOutputVO_isLock {
    Y = "Y",
    N = "N"
}
