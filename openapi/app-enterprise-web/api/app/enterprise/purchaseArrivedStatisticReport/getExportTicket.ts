import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/宝晶采购到货统计报表相关/getConsignmentLossAnalyzeExportTicketUsingPOST
*/
export default function fetchMethod(options: { data: IPurchaseArrivalStatisticsReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/purchaseArrivedStatisticReport/getExportTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 采购到货统计报表搜索VO */
export interface IPurchaseArrivalStatisticsReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 采购订单编号 */
    purchaseOrderNo?: string;
    /** 最新到货日期结束时间 yyyy-MM-dd HH:mm:ss */
    lastEndDate?: number;
    /** 供应商id */
    supplierIds?: string[];
    /** 要求到货日期开始时间 yyyy-MM-dd HH:mm:ss */
    requiredBeginDate?: number;
    /** 要求到货日期结束时间 yyyy-MM-dd HH:mm:ss */
    requiredEndDate?: number;
    /** 最新到货日期开始时间 yyyy-MM-dd HH:mm:ss */
    lastBeginDate?: number;
    /** 物料材质 */
    texture?: string;
    /** 单据类型 */
    orderType?: string;
    /** 物料id */
    majorDataIds?: string[];
    /** 物料名称 */
    majorDataName?: string;
    /** 采购类型 */
    purchaseType?: string;
    /** 物料类型 */
    materialTypes?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«导出ticket信息» */
export interface IJSONResultExportedTicketInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportingTicketInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出ticket信息 */
export interface IExportingTicketInformation {
    /** 导出凭证ticket */
    ticket?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
