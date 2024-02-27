import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/门户相关/enableBatchUsingPOST_1
*/
export default function fetchMethod(options: { data: IPortalEnabledRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/portal/enableBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 门户启用请求DTO */
export interface IPortalEnabledRequestDTO {
    /** 门户ID列表 */
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
