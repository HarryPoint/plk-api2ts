import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryHazardArchiveUsingPOST
*/
export default function fetchMethod(data: IOccupationalHazardFileQueryRequest, extraOptions?: any) {
    return http<IJSONResultOccupationalHazardFileQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryHazardArchive",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 职业危害档案查询请求 */
export interface IOccupationalHazardFileQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: string;
    /** 查询日期的结束 */
    dateRangeEnd?: string;
}
/** JSONResult«职业危害档案查询响应» */
export interface IJSONResultOccupationalHazardFileQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOccupationalHazardFileQueryResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 职业危害档案查询响应 */
export interface IOccupationalHazardFileQueryResponse {
    /** 新增职业病数量 */
    newOccupationalDiseaseQuantity?: number;
    /** 职业禁忌症数量 */
    occupationContraindicationQuantity?: number;
    /** 岗前体检 */
    preJobPhysicalExamination?: number;
    /** 岗中体检 */
    inJobPhysicalExamination?: number;
    /** 离岗体检 */
    postJobPhysicalExamination?: number;
}
