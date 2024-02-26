import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务相关/queryPreProjectTaskChainUsingGET
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskLinkNode>(
        {
            url: "/masterdata-service/projectTask/queryPreProjectTaskChain",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务链路节点»» */
export interface IJSONResultListProjectTaskLinkNode {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskLinkNode[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目任务链路节点 */
export interface IProjectTaskLinkNode {
    /** 任务id */
    id?: number;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
    /** 前置任务 */
    preTaskIds?: Record<string, any>[];
}
