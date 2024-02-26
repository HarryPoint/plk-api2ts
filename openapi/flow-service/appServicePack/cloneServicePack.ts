import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/应用服务包相关/cloneServicePackUsingPOST
*/
export default function fetchMethod(options: { data: IServiceObjectRegistrationRequest }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/flow-service/appServicePack/cloneServicePack",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 服务对象注册请求 */
export interface IServiceObjectRegistrationRequest {
    /** 服务对象id */
    serviceObjectId?: number;
    /** 应用级别 */
    applicationLevel?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
