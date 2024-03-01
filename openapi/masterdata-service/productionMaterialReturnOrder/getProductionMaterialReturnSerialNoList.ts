import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产退料单相关/getProductionMaterialReturnSerialNoListUsingPOST
*/
export default function fetchMethod(options: { params: { ProductionMaterialIssuanceOrderDetailId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionMaterialReturnSerialNoQueryResponseDTO>(
        {
            url: "/masterdata-service/productionMaterialReturnOrder/getProductionMaterialReturnSerialNoList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProductionMaterialReturnSerialNoQueryResponseDTO»» */
export interface IJSONResultListProductionMaterialReturnSerialNoQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionMaterialReturnSerialNoQueryResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProductionMaterialReturnSerialNoQueryResponseDTO */
export interface IProductionMaterialReturnSerialNoQueryResponseDTO {
    /** undefined */
    serialNo?: string;
    /** undefined */
    serialRemark?: string;
}
