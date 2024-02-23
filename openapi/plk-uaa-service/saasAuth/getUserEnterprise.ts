import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getUserEnterpriseUsingPOST
export default function fetchMethod() {
    return http<IJSONResultListSaasEnterpriseResponseDTO>({
        url: "/plk-uaa-service/saasAuth/getUserEnterprise",
        method: "post",
    });
}
// JSONResult«List«Saas企业响应 DTO»»
export interface IJSONResultListSaasEnterpriseResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISaasEnterprisesRespondToDTO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Saas企业响应 DTO_1
export interface ISaasEnterprisesRespondToDTO1 {
    // 企业id
    id: number;
    // 企业到期时间
    expireTime: string;
    // 企业名称
    name: string;
    // 企业编号
    code: string;
    // 是否是最后登录企业
    isLastLogin: string;
    // 服务类型
    productServiceType: string;
}
