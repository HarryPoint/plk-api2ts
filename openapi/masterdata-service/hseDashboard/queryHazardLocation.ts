import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryHazardLocationUsingPOST
export default function fetchMethod(data: IOccupationalHazardSiteInquiryRequest, extraOptions?: any) {
    return http<IJSONResultResponseToOccupationalHazardSiteQuery>(
        {
            url: "/masterdata-service/hseDashboard/queryHazardLocation",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 职业危害场所查询请求
export interface IOccupationalHazardSiteInquiryRequest {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«职业危害场所查询响应»
export interface IJSONResultResponseToOccupationalHazardSiteQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOccupationalHazardSiteInquiryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 职业危害场所查询响应
export interface IOccupationalHazardSiteInquiryResponse {
    // 职业危害场所数量/流程状态未已完成的总数
    hazardLocationQuantity: number;
    // 职业危害因素数量
    hazardFactorsQuantity: number;
    // 超标的数量
    exceededQuantity: number;
    // 未超标的数量
    withinQuantity: number;
}
