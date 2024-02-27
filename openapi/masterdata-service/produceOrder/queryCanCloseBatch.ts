import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/queryCanCloseBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProduceOrderBatchCloseRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/produceOrder/queryCanCloseBatch",
            method: "post",
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
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
