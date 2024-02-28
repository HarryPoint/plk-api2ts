import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16500/doc.html#/default/应用事件相关/queryTriggerNodesUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListFlowPathEventTriggerNodeQueryResponseDTO>(
        {
            url: "/flow-service/flowPathEvent/queryTriggerNodes",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«FlowPathEventTriggerNodeQueryResponseDTO»» */
export interface IJSONResultListFlowPathEventTriggerNodeQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathEventTriggerNodeQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathEventTriggerNodeQueryResponseDTO */
export interface IFlowPathEventTriggerNodeQueryResponseDTO {
    /** undefined */
    id?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathVersionId?: string;
    /** undefined */
    flowPathEventId?: string;
    /** undefined */
    flowPathNodeId?: string;
    /** undefined */
    flowPathNodeSerialNo?: string;
}
