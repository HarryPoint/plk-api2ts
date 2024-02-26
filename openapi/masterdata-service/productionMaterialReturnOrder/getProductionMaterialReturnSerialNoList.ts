import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产退料单相关/getProductionMaterialReturnSerialNoListUsingPOST
*/
export default function fetchMethod(options: { params: { productionMaterialIssuanceOrderDetailId?: number } }, extraOptions?: any) {
    return http<IJSONResultListProductionMaterialReturnSerialNoQueryResponseDTO>(
        {
            url: "/masterdata-service/productionMaterialReturnOrder/getProductionMaterialReturnSerialNoList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProductionMaterialReturnSerialNoQueryResponseDTO»» */
export interface IJSONResultListProductionMaterialReturnSerialNoQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionMaterialReturnSerialNoQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ProductionMaterialReturnSerialNoQueryResponseDTO */
export interface IProductionMaterialReturnSerialNoQueryResponseDTO {
    /** undefined */
    serialNo?: string;
    /** undefined */
    serialRemark?: string;
}
