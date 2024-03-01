import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏相关/getSalesOrderProgressUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListCheckTheCompletionProgressOfProductionLargeScreenOrdersReturnToVO>(
        {
            url: "/masterdata-service/lsShenLanSetting/getSalesOrderProgress",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«质检生产大屏订单完成进度返回VO»» */
export interface IJSONResultListCheckTheCompletionProgressOfProductionLargeScreenOrdersReturnToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQcProductionLargeScreenOrderCompletionProgressReturnToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检生产大屏订单完成进度返回VO */
export interface IQcProductionLargeScreenOrderCompletionProgressReturnToVO {
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 交货日期 */
    deliveryDate?: number;
    /** 计划结束日期 */
    endTime?: number;
    /** id(销售订单明细id) */
    id?: string;
    /** 当前区域id */
    lastAreaId?: string;
    /** 当前区域名称(当前工作组) */
    lastAreaName?: string;
    /** 当前区域进入时间(进入工作组日期) */
    lastAreaTime?: number;
    /** 物料id */
    majorDataId?: string;
    /** 物料名称(产品名称) */
    majorDataName?: string;
    /** 物料型号(产品型号) */
    majorDataSpec?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单号(编号) */
    salesOrderNo?: string;
}
