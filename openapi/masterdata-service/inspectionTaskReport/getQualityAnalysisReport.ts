import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/检验任务统计报表相关/getQualityAnalysisReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO>(
        {
            url: "/masterdata-service/inspectionTaskReport/getQualityAnalysisReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«质量统计分析报表返回DTO»» */
export interface IJSONResultThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质量统计分析报表返回DTO» */
export interface IThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IQualityStatisticalAnalysisReportReturnedToDTO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 质量统计分析报表返回DTO */
export interface IQualityStatisticalAnalysisReportReturnedToDTO {
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 天 */
    day?: string;
    /** 报检数量 */
    inspectionApplyQuantity?: number;
    /** 检验员id */
    inspectionEmployeeId?: string;
    /** 检验员名称 */
    inspectionEmployeeName?: string;
    /** 交检总数 */
    inspectionQuantity?: number;
    /** 批次 */
    lot?: string;
    /** 物料code */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 物料单位 */
    materialUnitName?: string;
    /** 月 */
    month?: string;
    /** ppm */
    ppm?: number;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 物料检验类别id */
    qmsInspectionCategoryId?: string;
    /** 物料检验类别 */
    qmsInspectionCategoryName?: string;
    /** 交检合格数 */
    qualifiedQuantity?: number;
    /** 交检合格率% */
    qualifiedRate?: number;
    /** 供应商code */
    supplierCode?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 检验及时率% */
    timelinessRate?: number;
    /** 交检不合格数 */
    unQualifiedQuantity?: number;
    /** 年 */
    year?: string;
}

export enum EThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
