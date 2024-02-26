import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/销售订单相关/closeUsingPOST
*/
export default function fetchMethod(data: ISalesOrdersCloseTheDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/salesOrder/close",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 销售订单关闭 DTO */
export interface ISalesOrdersCloseTheDTO {
    /** 销售订单id */
    salesOrderId: number;
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
    ts?: number;
}
