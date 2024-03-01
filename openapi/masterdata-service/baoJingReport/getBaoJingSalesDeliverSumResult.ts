import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingSalesDeliverSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingSalesDeliveryReportSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaojingSalesDeliveryReportFormStatisticsReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingSalesDeliverSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶销售发货报表搜索VO */
export interface IBaojingSalesDeliveryReportSearchVO {
    /** 业务员ID列表 */
    businessUserIdList?: string[];
    /** 客户id集 */
    customerIds?: string[];
    /** 发货日期-开始 yyyy-MM-dd HH:mm:ss */
    deliverDateBegin?: number;
    /** 发货日期-结束 yyyy-MM-dd HH:mm:ss */
    deliverDateEnd?: number;
    /** 需求日期-开始 yyyy-MM-dd HH:mm:ss */
    demandDateBegin?: number;
    /** 需求日期-结束 yyyy-MM-dd HH:mm:ss */
    demandDateEnd?: number;
    /** 产品id集 */
    majorDataIds?: string[];
    /** 产品名称 */
    majorDataName?: string;
    /** 物料类型 */
    materialTypes?: string[];
    /** 单据类型 */
    orderType?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 运单号 */
    trackNo?: string;
    /** 单据号 */
    workOrderNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«宝晶销售发货报表表格统计返回VO» */
export interface IJSONResultBaojingSalesDeliveryReportFormStatisticsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingSalesDeliveryReportFormStatisticsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶销售发货报表表格统计返回VO */
export interface IBaojingSalesDeliveryReportFormStatisticsReturnedToVO {
    /** 发货数量总计 */
    actualQuantitySum?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
