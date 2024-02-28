import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getAfterSalesQualityReportUsingPOST
*/
export default function fetchMethod(options: { data: IAfterSalesQualityAnalysisReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultAfterSalesQualityAnalysisReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getAfterSalesQualityReport",
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
/** JSONResult«售后质量分析返回VO» */
export interface IJSONResultAfterSalesQualityAnalysisReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAfterSalesQualityAnalysisReturnsVO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 售后质量分析返回VO_1 */
export interface IAfterSalesQualityAnalysisReturnsVO1 {
    /** 数据表 */
    tablePage?: IPagingInformationAfterSalesQualityAnalysisReturnsVO;
    /** 客户维度 */
    customerDimension?: IAfterSalesQualityAnalysisChartDataReturnedToVO[];
    /** 趋势图 */
    chartsOfAccident?: IAfterSalesQualityAnalysisChartDataReturnedToVO[];
}
/** 分页信息«售后质量分析返回VO» */
export interface IPagingInformationAfterSalesQualityAnalysisReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IAfterSalesQualityAnalysisReturnedToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationAfterSalesQualityAnalysisReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationAfterSalesQualityAnalysisReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 售后质量分析返回VO */
export interface IAfterSalesQualityAnalysisReturnedToVO {
    /** 客户 */
    customer?: string;
    /** 业务员 */
    businessMan?: string;
    /** 产品名称 */
    productName?: string;
    /** 产品id集合 */
    productIds?: string;
    /** 灌装日期 */
    fillingDate?: number;
    /** 灌装日期 */
    fillingDateStr?: string;
    /** 生产日期 */
    productionDate?: number;
    /** 灌装线 */
    fillingLine?: string;
    /** 责任单位 */
    responsibleUnit?: string;
    /** 事故描述 */
    accidentDesc?: string;
    /** 数量 */
    quantity?: number;
    /** 图片 */
    picUrls?: IAnnexVO[];
    /** 备注 */
    remark?: string;
}
/** 附件 VO */
export interface IAnnexVO {
    /** 文件id */
    id?: string;
    /** 文件key */
    fileKey?: string;
    /** 文件完整路径 */
    fileUrl?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件大小 */
    size?: string;
}
/** 售后质量分析图表数据返回VO */
export interface IAfterSalesQualityAnalysisChartDataReturnedToVO {
    /** 轴标 */
    title?: string;
    /** 事故次数 */
    numOfAccidents?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationAfterSalesQualityAnalysisReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationAfterSalesQualityAnalysisReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
