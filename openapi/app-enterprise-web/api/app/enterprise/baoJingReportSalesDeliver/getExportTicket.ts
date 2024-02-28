import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/getExportTicketUsingPOST_6
*/
export default function fetchMethod(options: { data: IBaojingSalesDeliveryReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/getExportTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶销售发货报表搜索VO */
export interface IBaojingSalesDeliveryReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户id集 */
    customerIds?: string[];
    /** 产品名称 */
    majorDataName?: string;
    /** 产品id集 */
    majorDataIds?: string[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 运单号 */
    trackNo?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 单据号 */
    workOrderNo?: string;
    /** 发货日期-开始 yyyy-MM-dd HH:mm:ss */
    deliverDateBegin?: number;
    /** 单据类型 */
    orderType?: string;
    /** 发货日期-结束 yyyy-MM-dd HH:mm:ss */
    deliverDateEnd?: number;
    /** 需求日期-开始 yyyy-MM-dd HH:mm:ss */
    demandDateBegin?: number;
    /** 需求日期-结束 yyyy-MM-dd HH:mm:ss */
    demandDateEnd?: number;
    /** 业务员ID列表 */
    businessUserIdList?: string[];
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
