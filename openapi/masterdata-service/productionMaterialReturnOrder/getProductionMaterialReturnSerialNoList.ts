import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产退料单相关/getProductionMaterialReturnSerialNoListUsingPOST
export function fetchMethod(params: { productionMaterialIssuanceOrderDetailId: number }) {
    return post({
      url: "/masterdata-service/productionMaterialReturnOrder/getProductionMaterialReturnSerialNoList",
      params,
    });
}
// JSONResult«List«ProductionMaterialReturnSerialNoQueryResponseDTO»»
export interface IJSONResultListProductionMaterialReturnSerialNoQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionMaterialReturnSerialNoQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProductionMaterialReturnSerialNoQueryResponseDTO
export interface IProductionMaterialReturnSerialNoQueryResponseDTO {
    // undefined
    serialNo: string;
    // undefined
    serialRemark: string;
}
