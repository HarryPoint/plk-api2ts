import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16500/doc.html#/default/门户相关/removeBatchUsingPOST_1
*/
export default function fetchMethod(options: { data: IPortalDeleteRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/portal/removeBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 门户删除请求DTO */
export interface IPortalDeleteRequestDTO {
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
