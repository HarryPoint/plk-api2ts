import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/宝晶售后质量分析报表相关/getAfterSalesQualityExportTicketUsingPOST
*/
export default function fetchMethod(options: { data: IAfterSalesQualityAnalysisReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/afterSalesQualityReport/getExportTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 售后质量分析报表搜索VO */
export interface IAfterSalesQualityAnalysisReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 灌装日期开始时间 yyyy-MM-dd HH:mm:ss */
    fillingBeginDate?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 灌装日期结束时间 yyyy-MM-dd HH:mm:ss */
    fillingEndDate?: number;
    /** 客户id */
    customerId?: string[];
    /** 生产日期开始时间 yyyy-MM-dd HH:mm:ss */
    productionBeginDate?: number;
    /** 业务员id */
    businessIds?: string[];
    /** 生产日期结束时间 yyyy-MM-dd HH:mm:ss */
    productionEndDate?: number;
    /** 记录日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 记录日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 产品id */
    majorDataIds?: string[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 灌装线 */
    fillingLine?: string;
    /** 责任单位 */
    responsibleUnit?: string;
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
