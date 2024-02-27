import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/validUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessEnablesDeactivationOfRequestObjects }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/valid",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺启用、停用请求对象 */
export interface IStandardProcessEnablesDeactivationOfRequestObjects {
    /** 启用 Y 停用 N */
    valid: EStandardProcessEnablesDeactivationOfRequestObjects_valid;
    /** 是否 启用/停用 全部, Y 全部 */
    validAll?: EStandardProcessEnablesDeactivationOfRequestObjects_validAll;
    /** 标准工艺ids */
    standardTechnologyIds?: string[];
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

export enum EStandardProcessEnablesDeactivationOfRequestObjects_valid {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EStandardProcessEnablesDeactivationOfRequestObjects_validAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
