import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/消息方案/disableBatchUsingPOST_1
*/
export default function fetchMethod(data: IMessageSchemaBatchDisableRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/messageSchema/disableBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** MessageSchemaBatchDisableRequestDTO */
export interface IMessageSchemaBatchDisableRequestDTO {
    /** ID 列表 */
    idList?: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
