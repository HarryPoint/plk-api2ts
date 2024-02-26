import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/应用事件相关/queryTriggerNodesUsingPOST
*/
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListFlowPathEventTriggerNodeQueryResponseDTO>(
        {
            url: "/flow-service/flowPathEvent/queryTriggerNodes",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«List«FlowPathEventTriggerNodeQueryResponseDTO»» */
export interface IJSONResultListFlowPathEventTriggerNodeQueryResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IFlowPathEventTriggerNodeQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** FlowPathEventTriggerNodeQueryResponseDTO */
export interface IFlowPathEventTriggerNodeQueryResponseDTO {
    /** undefined */
    id: number;
    /** undefined */
    flowPathId: number;
    /** undefined */
    flowPathVersionId: number;
    /** undefined */
    flowPathEventId: number;
    /** undefined */
    flowPathNodeId: number;
    /** undefined */
    flowPathNodeSerialNo: string;
}
