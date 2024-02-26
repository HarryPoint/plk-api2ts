import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/validUsingPOST
*/
export default function fetchMethod(data: IStandardProcessEnablesDeactivationOfRequestObjects, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/valid",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 标准工艺启用、停用请求对象 */
export interface IStandardProcessEnablesDeactivationOfRequestObjects {
    /** 启用 Y 停用 N */
    valid: string;
    /** 是否 启用/停用 全部, Y 全部 */
    validAll?: string;
    /** 标准工艺ids */
    standardTechnologyIds?: number[];
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
