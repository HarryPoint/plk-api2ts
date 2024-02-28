import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:17600/doc.html#/default/消息方案/enableBatchUsingPOST_2
*/
export default function fetchMethod(options: { data: IMessageSchemaBatchEnableRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/messageSchema/enableBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** MessageSchemaBatchEnableRequestDTO */
export interface IMessageSchemaBatchEnableRequestDTO {
    /** ID 列表 */
    idList?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
