import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/logoutUsingPOST
*/
export default function fetchMethod(options: { data: IDeregisterRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/saasAuth/logout",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 注销请求 DTO */
export interface IDeregisterRequestDTO {
    /** 客户端编码 */
    clientCode: string;
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
