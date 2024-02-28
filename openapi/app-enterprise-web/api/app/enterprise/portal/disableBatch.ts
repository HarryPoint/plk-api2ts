import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16400/doc.html#/default/门户相关/disableBatchUsingPOST_3
*/
export default function fetchMethod(options: { data: IThePortalDisablesTheRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/portal/disableBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 门户禁用请求DTO */
export interface IThePortalDisablesTheRequestDTO {
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
