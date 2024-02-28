import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产领料单相关/pageQuerySelectionItemUsingPOST
*/
export default function fetchMethod(options: { data: IPaging12 }, extraOptions?: any) {
    return http<IProduceOrderSelectionItemQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/productionMaterialIssuanceOrder/pageQuerySelectionItem",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_12 */
export interface IPaging12 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单编号匹配 */
    produceOrderCodeMatch?: string;
    /** 生产物料ID */
    produceMaterialIdList?: string[];
    /** 子物料ID列表 */
    materialIdList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«ProduceOrderSelectionItemQueryResponseDTO»» */
export interface IProduceOrderSelectionItemQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProduceOrderSelectionItemQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceOrderSelectionItemQueryResponseDTO» */
export interface IThePagingInformationProduceOrderSelectionItemQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProduceOrderSelectionItemQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceOrderSelectionItemQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceOrderSelectionItemQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ProduceOrderSelectionItemQueryResponseDTO */
export interface IProduceOrderSelectionItemQueryResponseDTO {
    /** 生产订单ID */
    produceOrderId?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 生产物料ID */
    produceMaterialId?: string;
    /** 生产物料编码 */
    produceMaterialCode?: string;
    /** 生产物料名称 */
    produceMaterialName?: string;
    /** 生产物料类型 */
    produceMaterialType?: string;
    /** 生产物料规格 */
    produceMaterialSpec?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 领料状态 */
    materialIssuanceStatus?: EProduceOrderSelectionItemQueryResponseDTO_materialIssuanceStatus;
    /** 子物料ID */
    materialId?: string;
    /** 子物料编号 */
    materialCode?: string;
    /** 子物料名称 */
    materialName?: string;
    /** 子物料类型 */
    materialType?: string;
    /** 子物料规格 */
    materialSpec?: string;
    /** 子物料单位ID */
    unitId?: string;
    /** 子物料单位名称 */
    unitName?: string;
    /** 可用库存 */
    usableQuantity?: number;
    /** 应领取的数量 */
    toBeIssuedQuantity?: number;
    /** 未领数量 */
    notIssuedQuantity?: number;
    /** 已领料数量 */
    issuanceQuantity?: number;
    /** 已退料数量 */
    returnedQuantity?: number;
    /** 库存查询ID */
    warehouseMaterialRpId?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProduceOrderSelectionItemQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceOrderSelectionItemQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceOrderSelectionItemQueryResponseDTO_materialIssuanceStatus {
    /** 未领料 */
    NONE = "NONE",
    /** 部分领料 */
    PARTIAL_ISSUE = "PARTIAL_ISSUE",
    /** 完全领料 */
    FULL_ISSUE = "FULL_ISSUE"
}
