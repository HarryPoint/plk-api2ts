import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/甘特图相关/getByIdUsingGET
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultProducePlanAutoScheduleOutputVO>(
        {
            url: "/masterdata-service/autoPlanGantt/getById",
            method: "get",
            params,
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
    scheduleType?: string;
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
    isLock?: string;
    /** undefined */
    priorityLevel?: number;
}
