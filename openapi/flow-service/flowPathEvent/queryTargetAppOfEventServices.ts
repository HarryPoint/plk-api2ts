import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16500/doc.html#/default/应用事件相关/queryTargetAppOfEventServicesUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListTheTargetApplicationQueryRequest>(
        {
            url: "/flow-service/flowPathEvent/queryTargetAppOfEventServices",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«目标应用查询请求»» */
export interface IJSONResultListTheTargetApplicationQueryRequest {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITargetApplicationQueryRequest[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 目标应用查询请求 */
export interface ITargetApplicationQueryRequest {
    /** undefined */
    flowPathEventId?: string;
    /** undefined */
    targetAppId?: string;
}
