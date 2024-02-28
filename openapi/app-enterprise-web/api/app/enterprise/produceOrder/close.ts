import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产订单相关/closeUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderClosedDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/close",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单关闭 DTO */
export interface IProductionOrderClosedDTO {
    /** 生产订单id */
    produceOrderId: string;
    /** 登录密码 */
    loginPassword?: string;
    /** 关闭原因 */
    closeRemark?: string;
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
