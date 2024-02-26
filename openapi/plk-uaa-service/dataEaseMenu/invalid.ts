import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/invalidUsingPOST
*/
export default function fetchMethod(options: { data: IDataEaseMenuDeactivatesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/invalid",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单停用请求对象 */
export interface IDataEaseMenuDeactivatesTheRequestObject {
    /** ids */
    ids?: number[];
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
