import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/缓存相关/markCmdExecuteSuccessUsingPOST
*/
export default function fetchMethod(options: { data: IMarkCmdExecuteSuccessRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/cache/markCmdExecuteSuccess",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** MarkCmdExecuteSuccessRequestDTO */
export interface IMarkCmdExecuteSuccessRequestDTO {
    /** undefined */
    id?: number;
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
    ts?: number;
}
