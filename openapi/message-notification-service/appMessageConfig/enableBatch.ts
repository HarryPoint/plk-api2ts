import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/应用消息配置相关/enableBatchUsingPOST
*/
export default function fetchMethod(options: { data: IAppMessageConfigBatchEnabledRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/appMessageConfig/enableBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** AppMessageConfigBatchEnabledRequestDTO */
export interface IAppMessageConfigBatchEnabledRequestDTO {
    /** 应用消息配置ID列表 */
    idList?: number[];
    /** 应用ID */
    applicationId?: number;
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
    ts?: number;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
