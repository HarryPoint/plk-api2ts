import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/getAkSkByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultSaasEnterpriseAkSkRespondsToDTO>(
        {
            url: "/plk-uaa-service/enterprise/getAkSkById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Saas企业Ak Sk响应 DTO» */
export interface IJSONResultSaasEnterpriseAkSkRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISaasEnterpriseAkSkRespondsToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Saas企业Ak Sk响应 DTO */
export interface ISaasEnterpriseAkSkRespondsToDTO {
    /** accessKey */
    accessKey?: string;
    /** accessSecret */
    accessSecret?: string;
    /** id */
    id?: string;
}
