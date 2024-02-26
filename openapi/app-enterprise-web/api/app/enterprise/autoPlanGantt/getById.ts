import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/getByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultProducePlanAutoScheduleOutputVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/getById",
            method: "get",
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
    ts?: number;
}
/** ProducePlanAutoScheduleOutputVO */
export interface IProducePlanAutoScheduleOutputVO {
    /** undefined */
    id?: number;
    /** undefined */
    producePlanId?: number;
    /** undefined */
    scheduleType?: EProducePlanAutoScheduleOutputVO_scheduleType;
    /** undefined */
    produceOrderId?: number;
    /** undefined */
    routingStepId?: number;
    /** undefined */
    routingStep?: number;
    /** undefined */
    processId?: number;
    /** undefined */
    beginTime?: string;
    /** undefined */
    endTime?: string;
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
