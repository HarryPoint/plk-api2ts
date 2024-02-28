import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/DataEase菜单相关/invalidUsingPOST
*/
export default function fetchMethod(options: { data: IDataEaseMenuDeactivatesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/invalid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单停用请求对象 */
export interface IDataEaseMenuDeactivatesTheRequestObject {
    /** ids */
    ids?: string[];
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
