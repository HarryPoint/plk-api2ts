import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/缓存相关/markCmdExecuteFailureUsingPOST
*/
export default function fetchMethod(options: { data: IMarkCmdExecuteFailureRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/cache/markCmdExecuteFailure",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** MarkCmdExecuteFailureRequestDTO */
export interface IMarkCmdExecuteFailureRequestDTO {
    /** undefined */
    id?: string;
    /** undefined */
    desc?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
