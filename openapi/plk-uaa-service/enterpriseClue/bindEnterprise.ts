import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/客户线索相关/bindEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerLeadsUpdateTheEnterpriseRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseClue/bindEnterprise",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 客户线索更新企业请求对象 */
export interface ICustomerLeadsUpdateTheEnterpriseRequestObject {
    /** 企业线索id */
    enterpriseClueId?: string;
    /** 企业id */
    enterpriseId?: string;
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
