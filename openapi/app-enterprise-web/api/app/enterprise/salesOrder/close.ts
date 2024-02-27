import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/销售订单相关/closeUsingPOST_1
*/
export default function fetchMethod(options: { data: ISalesOrdersCloseTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrder/close",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 销售订单关闭 DTO */
export interface ISalesOrdersCloseTheDTO {
    /** 销售订单id */
    salesOrderId: string;
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
