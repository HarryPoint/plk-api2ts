import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产订单相关/pageQueryProduceStockInSummaryUsingPOST
export default function fetchMethod(data: IPaging10) {
    return http<IProductionStockInSummaryQueryResponseDTOJSONResultPagingInformation>({
        url: "/app-enterprise-web/api/app/enterprise/produceOrder/pageQueryProduceStockInSummary",
        method: "post",
        data,
    });
}
// 分页_10
export interface IPaging10 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 生产订单ID
    produceOrderId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«ProductionStockInSummaryQueryResponseDTO»»
export interface IProductionStockInSummaryQueryResponseDTOJSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationProductionStockInSummaryQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«ProductionStockInSummaryQueryResponseDTO»
export interface IThePagingInformationProductionStockInSummaryQueryResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProductionStockInSummaryQueryResponseDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// ProductionStockInSummaryQueryResponseDTO
export interface IProductionStockInSummaryQueryResponseDTO {
    // ID
    id: number;
    // 物料ID
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料类型
    materialType: string;
    // 生产批次号
    productionLotNo: string;
    // 原批次号
    originalProductionLotNo: string;
    // 计划生产的数量
    plannedProductionQuantity: number;
    // 拆出数量
    dismantledQuantity: number;
    // 剩余数量
    remainingQuantity: number;
    // 需入库数量
    toBeStockInQuantity: number;
    // 已入库数量
    stockInQuantity: number;
    // 入库序列号
    stockInSerialNoList: Record<string, any>[];
    // 未入库数量
    notStockInQuantity: number;
    // 已退库数量
    stockReturnedQuantity: number;
    // 退库序列号
    stockReturnSerialNoList: Record<string, any>[];
}