import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(收款汇总)相关/getExportTicketUsingPOST_3
*/
export default function fetchMethod(options: { data: IBaojingCollectionSummaryAnalysisReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportCollectionTotal/getExportTicket",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶收款汇总分析报表搜索VO */
export interface IBaojingCollectionSummaryAnalysisReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 业务员id集 */
    businessUserIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户id集 */
    customerIds?: string[];
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    dateBegin?: number;
    /** 付款单位id集(客户id) */
    payCustomerIds?: string[];
    /** 收款组织 */
    collectionOrganization?: string;
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    dateEnd?: number;
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
