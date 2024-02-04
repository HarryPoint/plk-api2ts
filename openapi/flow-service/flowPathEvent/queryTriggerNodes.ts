// JSONResult«List«FlowPathEventTriggerNodeQueryResponseDTO»»
export interface IJSONResultListFlowPathEventTriggerNodeQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathEventTriggerNodeQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathEventTriggerNodeQueryResponseDTO
export interface IFlowPathEventTriggerNodeQueryResponseDTO {
    // undefined
    id: number;
    // undefined
    flowPathId: number;
    // undefined
    flowPathVersionId: number;
    // undefined
    flowPathEventId: number;
    // undefined
    flowPathNodeId: number;
    // undefined
    flowPathNodeSerialNo: string;
}
