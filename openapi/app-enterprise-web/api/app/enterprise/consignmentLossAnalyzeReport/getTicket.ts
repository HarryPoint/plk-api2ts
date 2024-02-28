import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/宝晶寄售损耗报表相关/getExportTicketUsingPOST_1
*/
export default function fetchMethod(options: { data: IConsignmentLossAnalysisReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/consignmentLossAnalyzeReport/getTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 寄售损耗分析报表搜索VO */
export interface IConsignmentLossAnalysisReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 仓库id */
    warehouseId?: string[];
    /** 日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 客户id */
    customerId?: string[];
    /** 产品id */
    majorDataIds?: string[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 产品名称 */
    productName?: string;
    /** 规格型号 */
    productSpec?: string;
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
