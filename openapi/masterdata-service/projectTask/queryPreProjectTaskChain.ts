import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/queryPreProjectTaskChainUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskLinkNode>(
        {
            url: "/masterdata-service/projectTask/queryPreProjectTaskChain",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务链路节点»» */
export interface IJSONResultListProjectTaskLinkNode {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskLinkNode[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务链路节点 */
export interface IProjectTaskLinkNode {
    /** 任务编号 */
    code?: string;
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
    /** 前置任务 */
    preTaskIds?: Record<string, any>[];
}
