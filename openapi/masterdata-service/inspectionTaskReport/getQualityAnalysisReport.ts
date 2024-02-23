import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/检验任务统计报表相关/getQualityAnalysisReportUsingPOST
export default function fetchMethod(data: GetQualityAnalysisReport) {
    return http<IJSONResultThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO>({
        url: "/masterdata-service/inspectionTaskReport/getQualityAnalysisReport",
        method: "post",
        data,
    });
}
// JSONResult«分页信息«质量统计分析报表返回DTO»»
export interface IJSONResultThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质量统计分析报表返回DTO»
export interface IThePageInformationQualityStatisticalAnalysisReportReturnsTheDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IQualityStatisticalAnalysisReportReturnedToDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 质量统计分析报表返回DTO
export interface IQualityStatisticalAnalysisReportReturnedToDTO {
    // 年
    year: string;
    // 月
    month: string;
    // 天
    day: string;
    // 物料检验类别id
    qmsInspectionCategoryId: number;
    // 物料检验类别
    qmsInspectionCategoryName: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料code
    materialCode: string;
    // 规格
    materialSpec: string;
    // 物料单位id
    materialUnitId: number;
    // 物料单位
    materialUnitName: string;
    // 供应商id
    supplierId: number;
    // 供应商code
    supplierCode: string;
    // 供应商名称
    supplierName: string;
    // 批次
    lot: string;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 检验员id
    inspectionEmployeeId: number;
    // 检验员名称
    inspectionEmployeeName: string;
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 报检数量
    inspectionApplyQuantity: number;
    // 交检总数
    inspectionQuantity: number;
    // 交检合格数
    qualifiedQuantity: number;
    // 交检不合格数
    unQualifiedQuantity: number;
    // 交检合格率%
    qualifiedRate: number;
    // ppm
    ppm: number;
    // 检验及时率%
    timelinessRate: number;
}
