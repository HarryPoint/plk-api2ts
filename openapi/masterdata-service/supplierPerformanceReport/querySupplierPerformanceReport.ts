import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/供应商绩效评价报表相关/querySupplierPerformanceReportUsingPOST
export default function fetchMethod(data: QuerySupplierPerformanceReport) {
    return http<IJSONResultThePageInformationQualityPerformanceEvaluationReportReturnsTheDTO>({
        url: "/masterdata-service/supplierPerformanceReport/querySupplierPerformanceReport",
        method: "post",
        data,
    });
}
// JSONResult«分页信息«质量绩效评价表报表返回DTO»»
export interface IJSONResultThePageInformationQualityPerformanceEvaluationReportReturnsTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationQualityPerformanceEvaluationFormReportReturnedToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质量绩效评价表报表返回DTO»
export interface IPageInformationQualityPerformanceEvaluationFormReportReturnedToDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IQualityPerformanceEvaluationFormReturnToDTO[];
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
// 质量绩效评价表报表返回DTO
export interface IQualityPerformanceEvaluationFormReturnToDTO {
    // 供应商名称
    supplierName: string;
    // 入厂验收质量Q1扣分
    q1DeductPoints: number;
    // 交付使用质量Q2扣分
    q2DeductPoints: number;
    // 试验试车质量Q3扣分
    q3DeductPoints: number;
    // 外厂使用质量Q4扣分
    q4DeductPoints: number;
    // Q1得分
    q1Points: number;
    // Q2得分
    q2Points: number;
    // Q3得分
    q3Points: number;
    // Q4得分
    q4Points: number;
    // 总扣分
    totalDeductPoints: number;
    // q3數量
    q3Count: number;
    // 总得分
    totalPoints: number;
}
