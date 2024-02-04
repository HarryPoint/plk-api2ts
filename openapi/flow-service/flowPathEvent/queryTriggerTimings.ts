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
