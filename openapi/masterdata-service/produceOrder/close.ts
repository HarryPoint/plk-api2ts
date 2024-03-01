import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/closeUsingPOST_1
*/
export default function fetchMethod(options: { data: IProductionOrderClosedDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceOrder/close",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单关闭 DTO */
export interface IProductionOrderClosedDTO {
    /** 关闭原因 */
    closeRemark?: string;
    /** 登录密码 */
    loginPassword?: string;
    /** 生产订单id */
    produceOrderId: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
