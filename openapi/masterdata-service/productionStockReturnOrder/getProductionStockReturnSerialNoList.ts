import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产退库单相关/getProductionStockReturnSerialNoListUsingPOST
export default function fetchMethod(params: { productionStockInOrderDetailId: number }) {
    return http<IJSONResultListProductionStockReturnSerialNoQueryResponseDTO>({
        url: "/masterdata-service/productionStockReturnOrder/getProductionStockReturnSerialNoList",
        method: "post",
        params,
    });
}
// JSONResult«List«ProductionStockReturnSerialNoQueryResponseDTO»»
export interface IJSONResultListProductionStockReturnSerialNoQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionStockReturnSerialNoQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProductionStockReturnSerialNoQueryResponseDTO
export interface IProductionStockReturnSerialNoQueryResponseDTO {
    // undefined
    serialNo: string;
    // undefined
    serialRemark: string;
}
