import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/querySupplierPerformanceUsingPOST
export default function fetchMethod(data: IQmsLargeScreenTimeIntervalRequest) {
    return post<IJSONResultListQualityPerformanceEvaluationTableReturnsDTO1['data']>({
      url: "/masterdata-service/qmsDashboard/querySupplierPerformance",
      data,
    });
}
// qms大屏时间区间请求
export interface IQmsLargeScreenTimeIntervalRequest {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
    // 查询日期区间类型
    dateRangeType: string;
}
// JSONResult«List«质量绩效评价表返回DTO»»_1
export interface IJSONResultListQualityPerformanceEvaluationTableReturnsDTO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityPerformanceEvaluationFormReturnedToDTO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量绩效评价表返回DTO_1
export interface IQualityPerformanceEvaluationFormReturnedToDTO1 {
    // 总扣分
    totalDeductPoints: number;
    // 供应商名称
    supplierName: string;
}
