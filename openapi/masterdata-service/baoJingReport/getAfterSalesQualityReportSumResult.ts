import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getAfterSalesQualityReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IAfterSalesQualityAnalysisReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultAfterSalesQualityAnalysisReturnsVO1>(
        {
            url: "/masterdata-service/baoJingReport/getAfterSalesQualityReportSumResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 售后质量分析报表搜索VO */
export interface IAfterSalesQualityAnalysisReportSearchVO {
    /** 记录日期开始时间 yyyy-MM-dd HH:mm:ss */
    beginDate?: number;
    /** 业务员id */
    businessIds?: string[];
    /** 客户id */
    customerId?: string[];
    /** 记录日期结束时间 yyyy-MM-dd HH:mm:ss */
    endDate?: number;
    /** 灌装日期开始时间 yyyy-MM-dd HH:mm:ss */
    fillingBeginDate?: number;
    /** 灌装日期结束时间 yyyy-MM-dd HH:mm:ss */
    fillingEndDate?: number;
    /** 灌装线 */
    fillingLine?: string;
    /** 产品id */
    majorDataIds?: string[];
    /** 物料类型 */
    materialTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产日期开始时间 yyyy-MM-dd HH:mm:ss */
    productionBeginDate?: number;
    /** 生产日期结束时间 yyyy-MM-dd HH:mm:ss */
    productionEndDate?: number;
    /** 责任单位 */
    responsibleUnit?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«售后质量分析返回VO»_1 */
export interface IJSONResultAfterSalesQualityAnalysisReturnsVO1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IAfterSalesQualityAnalysisReturnsVO2;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 售后质量分析返回VO_2 */
export interface IAfterSalesQualityAnalysisReturnsVO2 {
    /** 数量 */
    quantitySum?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
