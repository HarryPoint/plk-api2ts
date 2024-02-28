import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/getProduceOrderSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; lotOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheProductionOrderIsReturnedToVO>(
        {
            url: "/masterdata-service/lotOrder/getProduceOrderSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产订单返回VO»» */
export interface IJSONResultListTheProductionOrderIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderReturnedToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单返回VO */
export interface IProductionOrderReturnedToVO {
    /** id */
    id?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
}
