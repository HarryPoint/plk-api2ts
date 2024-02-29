import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16500/doc.html#/default/应用事件相关/queryTriggerTimingsUsingPOST
*/
export default function fetchMethod(options: { data: IEventTriggerTiming }, extraOptions?: any) {
    return http<IJSONResultListFlowPathEventTriggerTimingQueryResponseDTO>(
        {
            url: "/flow-service/flowPathEvent/queryTriggerTimings",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 事件触发时机 */
export interface IEventTriggerTiming {
    /** 根据应用版本ID列表 */
    flowPathVersionIdList?: string[];
    /** 触发事件的时机 */
    triggerEventTiming?: EEventTriggerTiming_triggerEventTiming;
}
/** JSONResult«List«FlowPathEventTriggerTimingQueryResponseDTO»» */
export interface IJSONResultListFlowPathEventTriggerTimingQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathEventTriggerTimingQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathEventTriggerTimingQueryResponseDTO */
export interface IFlowPathEventTriggerTimingQueryResponseDTO {
    /** undefined */
    id?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathVersionId?: string;
    /** undefined */
    flowPathEventId?: string;
    /** undefined */
    eventTriggerTiming?: EFlowPathEventTriggerTimingQueryResponseDTO_eventTriggerTiming;
}

export enum EEventTriggerTiming_triggerEventTiming {
    /** 流程完成后触发 */
    FLOW_COMPLETED_POST = "FLOW_COMPLETED_POST"
}

export enum EFlowPathEventTriggerTimingQueryResponseDTO_eventTriggerTiming {
    FLOW_COMPLETED_POST = "FLOW_COMPLETED_POST"
}
