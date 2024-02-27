import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getUserEnterpriseUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListSaasEnterpriseResponseDTO>(
        {
            url: "/plk-uaa-service/saasAuth/getUserEnterprise",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Saas企业响应 DTO»» */
export interface IJSONResultListSaasEnterpriseResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISaasEnterprisesRespondToDTO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Saas企业响应 DTO_1 */
export interface ISaasEnterprisesRespondToDTO1 {
    /** 企业id */
    id?: string;
    /** 企业到期时间 */
    expireTime?: number;
    /** 企业名称 */
    name?: string;
    /** 企业编号 */
    code?: string;
    /** 是否是最后登录企业 */
    isLastLogin?: ESaasEnterprisesRespondToDTO1_isLastLogin;
    /** 服务类型 */
    productServiceType?: ESaasEnterprisesRespondToDTO1_productServiceType;
}

export enum ESaasEnterprisesRespondToDTO1_isLastLogin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESaasEnterprisesRespondToDTO1_productServiceType {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}
