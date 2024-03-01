import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/DataEase菜单相关/validUsingPOST
*/
export default function fetchMethod(options: { data: ITheDataEaseMenuEnablesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/valid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单启用请求对象 */
export interface ITheDataEaseMenuEnablesTheRequestObject {
    /** ids */
    ids?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
