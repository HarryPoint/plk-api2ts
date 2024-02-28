import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/生产订单相关/cancelBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProduceOrderBatchCancelRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/cancelBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProduceOrderBatchCancelRequestDTO */
export interface IProduceOrderBatchCancelRequestDTO {
    /** 生产订单ID列表 */
    produceOrderIdList?: string[];
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
