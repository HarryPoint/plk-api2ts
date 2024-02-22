import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingReasonStatisticsUsingGET
export function fetchMethod(params: { dateBegin: string; dateEnd: string }) {
    return get({
      url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingReasonStatistics",
      params,
    });
}
// JSONResult«List«大屏不合格品统计按原因响应DTO»»
export interface IJSONResultListLargeScreenUnqualifiedProductStatisticsRespondToTheDTOBasedOnTheCause {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILargeScreenUnqualifiedProductStatisticsAccordingToTheReasonResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏不合格品统计按原因响应DTO
export interface ILargeScreenUnqualifiedProductStatisticsAccordingToTheReasonResponseDTO {
    // 原因
    category: string;
    // 数量
    quantity: number;
}
