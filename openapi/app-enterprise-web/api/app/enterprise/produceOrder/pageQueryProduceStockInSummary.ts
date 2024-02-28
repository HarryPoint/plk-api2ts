import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/pageQueryProduceStockInSummaryUsingPOST
*/
export default function fetchMethod(options: { data: IPaging10 }, extraOptions?: any) {
    return http<IProductionStockInSummaryQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/pageQueryProduceStockInSummary",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_10 */
export interface IPaging10 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单ID */
    produceOrderId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«ProductionStockInSummaryQueryResponseDTO»» */
export interface IProductionStockInSummaryQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProductionStockInSummaryQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProductionStockInSummaryQueryResponseDTO» */
export interface IThePagingInformationProductionStockInSummaryQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProductionStockInSummaryQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProductionStockInSummaryQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProductionStockInSummaryQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ProductionStockInSummaryQueryResponseDTO */
export interface IProductionStockInSummaryQueryResponseDTO {
    /** ID */
    id?: string;
    /** 物料ID */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 生产批次号 */
    productionLotNo?: string;
    /** 原批次号 */
    originalProductionLotNo?: string;
    /** 计划生产的数量 */
    plannedProductionQuantity?: number;
    /** 拆出数量 */
    dismantledQuantity?: number;
    /** 剩余数量 */
    remainingQuantity?: number;
    /** 需入库数量 */
    toBeStockInQuantity?: number;
    /** 已入库数量 */
    stockInQuantity?: number;
    /** 入库序列号 */
    stockInSerialNoList?: Record<string, any>[];
    /** 未入库数量 */
    notStockInQuantity?: number;
    /** 已退库数量 */
    stockReturnedQuantity?: number;
    /** 退库序列号 */
    stockReturnSerialNoList?: Record<string, any>[];
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProductionStockInSummaryQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProductionStockInSummaryQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
