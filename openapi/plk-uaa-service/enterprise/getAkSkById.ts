import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业客户相关/getAkSkByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultSaasEnterpriseAkSkRespondsToDTO>(
        {
            url: "/plk-uaa-service/enterprise/getAkSkById",
            method: "post",
            ...options,
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
