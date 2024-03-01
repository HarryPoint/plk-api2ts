import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/pageQueryProduceMaterialIssuanceSummaryUsingPOST
*/
export default function fetchMethod(options: { data: IPaging7 }, extraOptions?: any) {
    return http<IProduceMaterialIssuanceSummaryQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceMaterialIssuanceSummary",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_7 */
export interface IPaging7 {
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
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
/** JSONResult«分页信息«ProduceMaterialIssuanceSummaryQueryResponseDTO»» */
export interface IProduceMaterialIssuanceSummaryQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceMaterialIssuanceSummaryQueryResponseDTO» */
export interface IThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProduceMaterialIssuanceSummaryQueryResponseDTO[];
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
/** ProduceMaterialIssuanceSummaryQueryResponseDTO */
export interface IProduceMaterialIssuanceSummaryQueryResponseDTO {
    /** ID */
    id?: string;
    /** 领料数量 */
    issuanceQuantity?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料ID */
    materialId?: string;
    /** 领取状态 */
    materialIssuanceStatus?: EProduceMaterialIssuanceSummaryQueryResponseDTO_materialIssuanceStatus;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 未领数量 */
    notIssuedQuantity?: number;
    /** 已退料数量 */
    returnedQuantity?: number;
    /** 计划领取的数量 */
    toBeIssuedQuantity?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceMaterialIssuanceSummaryQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceMaterialIssuanceSummaryQueryResponseDTO_materialIssuanceStatus {
    /** 未领料 */
    NONE = "NONE",
    /** 部分领料 */
    PARTIAL_ISSUE = "PARTIAL_ISSUE",
    /** 完全领料 */
    FULL_ISSUE = "FULL_ISSUE"
}
