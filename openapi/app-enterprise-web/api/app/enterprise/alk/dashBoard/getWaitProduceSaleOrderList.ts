import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安利康大屏相关/getWaitProduceSaleOrderListUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListSalesVOToBeProduced>(
        {
            url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/getWaitProduceSaleOrderList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«待生产销售单VO»» */
export interface IJSONResultListSalesVOToBeProduced {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISingleVOToBeProducedAndSold[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 待生产销售单VO */
export interface ISingleVOToBeProducedAndSold {
    /** 订单号 */
    saleOrderCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 订单数量 */
    saleOrderQuantity?: number;
    /** 排产进度 */
    scheduleProgress?: number;
    /** 合格产出进度 */
    passProgress?: number;
    /** 整体交付日期 */
    salesOrderDeliveryDate?: string;
}
