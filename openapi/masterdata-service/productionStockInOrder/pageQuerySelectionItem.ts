import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产入库单相关/pageQuerySelectionItemUsingPOST_1
*/
export default function fetchMethod(options: { data: IPaging13 }, extraOptions?: any) {
    return http<IProduceOrderSelectionItemQueryResponseDTO1JSONResultPagingInformation>(
        {
            url: "/masterdata-service/productionStockInOrder/pageQuerySelectionItem",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_13 */
export interface IPaging13 {
    /** 是否入库前先领料 */
    isBeforeStorageIssuanceMaterial?: EPaging13_isBeforeStorageIssuanceMaterial;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产物料ID */
    produceMaterialIdList?: string[];
    /** 生产订单编号匹配 */
    produceOrderCodeMatch?: string;
    /** 生产批次列表 */
    productionLotNoList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«ProduceOrderSelectionItemQueryResponseDTO»»_1 */
export interface IProduceOrderSelectionItemQueryResponseDTO1JSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePagingInformationProduceOrderSelectionItemQueryResponseDTO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceOrderSelectionItemQueryResponseDTO»_1 */
export interface IThePagingInformationProduceOrderSelectionItemQueryResponseDTO1 {
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceOrderSelectionItemQueryResponseDTO1_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceOrderSelectionItemQueryResponseDTO1_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProduceOrderSelectionItemQueryResponseDTO1[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** ProduceOrderSelectionItemQueryResponseDTO_1 */
export interface IProduceOrderSelectionItemQueryResponseDTO1 {
    /** 物料编码 */
    materialCode?: string;
    /** 物料ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料类型 */
    materialType?: string;
    /** 未入库数量 */
    notStockInQuantity?: number;
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 生产订单ID */
    produceOrderId?: string;
    /** 生产批次号 */
    productionLotNo?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 销售订单ID */
    salesOrderId?: string;
    /** 已入库数量 */
    stockInQuantity?: number;
    /** 已退库数量 */
    stockReturnedQuantity?: number;
    /** 仓库ID */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 需入库数量 */
    toBeStockInQuantity?: number;
    /** 单位ID */
    unitId?: string;
    /** 单位名称 */
    unitName?: string;
    /** 仓位ID */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
}

export enum EPaging13_isBeforeStorageIssuanceMaterial {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProduceOrderSelectionItemQueryResponseDTO1_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceOrderSelectionItemQueryResponseDTO1_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
