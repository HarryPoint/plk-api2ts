import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/pageQueryProduceMaterialIssuanceUsingPOST
*/
export default function fetchMethod(options: { data: IPaging6 }, extraOptions?: any) {
    return http<IProduceMaterialIssuanceQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceMaterialIssuance",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_6 */
export interface IPaging6 {
    /** 物料ID */
    materialIdList?: string[];
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
/** JSONResult«分页信息«ProduceMaterialIssuanceQueryResponseDTO»» */
export interface IProduceMaterialIssuanceQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePagingInformationProduceMaterialIssuanceQueryResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceMaterialIssuanceQueryResponseDTO» */
export interface IThePagingInformationProduceMaterialIssuanceQueryResponseDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceMaterialIssuanceQueryResponseDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceMaterialIssuanceQueryResponseDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProduceMaterialIssuanceQueryResponseDTO[];
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
/** ProduceMaterialIssuanceQueryResponseDTO */
export interface IProduceMaterialIssuanceQueryResponseDTO {
    /** 单据日期 */
    billDate?: number;
    /** ID */
    id?: string;
    /** 领料数量 */
    issuanceQuantity?: number;
    /** 批次号 */
    lotNo?: string;
    /** 主数据ID/生产领料ID */
    masterDataId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料ID */
    materialId?: string;
    /** 领料部门ID */
    materialIssuanceDepartmentId?: string;
    /** 领料部门名称 */
    materialIssuanceDepartmentName?: string;
    /** 领料人ID */
    materialIssuanceEmployeeId?: string;
    /** 领料人名称 */
    materialIssuanceEmployeeName?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 生产领料编码 */
    produceMaterialIssuanceOrderCode?: string;
    /** 序列号列表 */
    serialNoList?: Record<string, any>[];
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProduceMaterialIssuanceQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceMaterialIssuanceQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
