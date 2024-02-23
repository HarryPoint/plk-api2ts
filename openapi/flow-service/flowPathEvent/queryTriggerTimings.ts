import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/应用事件相关/queryTriggerTimingsUsingPOST
export default function fetchMethod(data: IEventTriggerTiming, extraOptions?: any) {
    return http<IJSONResultListFlowPathEventTriggerTimingQueryResponseDTO>(
        {
            url: "/flow-service/flowPathEvent/queryTriggerTimings",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 事件触发时机
export interface IEventTriggerTiming {
    // 根据应用版本ID列表
    flowPathVersionIdList: number[];
    // 触发事件的时机
    triggerEventTiming: string;
}
// JSONResult«List«FlowPathEventTriggerTimingQueryResponseDTO»»
export interface IJSONResultListFlowPathEventTriggerTimingQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathEventTriggerTimingQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathEventTriggerTimingQueryResponseDTO
export interface IFlowPathEventTriggerTimingQueryResponseDTO {
    // undefined
    id: number;
    // undefined
    flowPathId: number;
    // undefined
    flowPathVersionId: number;
    // undefined
    flowPathEventId: number;
    // undefined
    eventTriggerTiming: string;
}
