import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/closeBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProduceOrderBatchCloseRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceOrder/closeBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProduceOrderBatchCloseRequestDTO */
export interface IProduceOrderBatchCloseRequestDTO {
    /** 生产订单ID列表 */
    produceOrderIdList?: string[];
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
