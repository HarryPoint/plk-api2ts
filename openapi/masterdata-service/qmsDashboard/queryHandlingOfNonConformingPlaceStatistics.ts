import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingPlaceStatisticsUsingGET
*/
export default function fetchMethod(params: { dateBegin: string; dateEnd: string }, extraOptions?: any) {
    return http<IJSONResultLargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO>(
        {
            url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingPlaceStatistics",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«大屏不合格品统计内外场响应DTO» */
export interface IJSONResultLargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ILargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 大屏不合格品统计内外场响应DTO */
export interface ILargeScreenNonconformingProductStatisticsInternalAndExternalFieldResponseDTO {
    /** 内场数量 */
    internalQuantity: number;
    /** 内场占比 */
    internalRatio: number;
    /** 外场数量 */
    externalQuantity: number;
    /** 外场占比 */
    externalRatio: number;
}
