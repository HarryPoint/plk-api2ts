import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采接口管理相关/getApiAuthInfoUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultSaasEnterpriseAkSkRespondsToDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollectionApi/getApiAuthInfo",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«Saas企业Ak Sk响应 DTO» */
export interface IJSONResultSaasEnterpriseAkSkRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISaasEnterpriseAkSkRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** Saas企业Ak Sk响应 DTO */
export interface ISaasEnterpriseAkSkRespondsToDTO {
    /** id */
    id?: number;
    /** accessKey */
    accessKey?: string;
    /** accessSecret */
    accessSecret?: string;
}
