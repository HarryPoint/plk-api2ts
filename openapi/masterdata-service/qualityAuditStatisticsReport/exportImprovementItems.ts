import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量审核统计表/exportImprovementItemsUsingPOST
*/
export default function fetchMethod(data: IBasicQualityAuditQueryRequest, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/exportImprovementItems",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求 */
export interface IBasicQualityAuditQueryRequest {
    /** 日期范围-起始 */
    dateRangeBegin: string;
    /** 日期范围-结束 */
    dateRangeEnd: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
