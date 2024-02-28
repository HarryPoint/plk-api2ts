import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16500/doc.html#/default/应用服务包相关/registerServiceObjectUsingPOST
*/
export default function fetchMethod(options: { data: IServiceObjectRegistrationRequest1 }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/flow-service/appServicePack/registerServiceObject",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 服务对象注册请求_1 */
export interface IServiceObjectRegistrationRequest1 {
    /** ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 应用级别 */
    applicationLevel?: EServiceObjectRegistrationRequest1_applicationLevel;
    /** 来源应用服务包id */
    fromAppServicePackId?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EServiceObjectRegistrationRequest1_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}
