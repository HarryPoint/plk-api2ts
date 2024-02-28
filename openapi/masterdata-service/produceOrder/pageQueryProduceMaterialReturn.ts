import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/pageQueryProduceMaterialReturnUsingPOST
*/
export default function fetchMethod(options: { data: IPaging8 }, extraOptions?: any) {
    return http<IProduceMaterialReturnQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceMaterialReturn",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_8 */
export interface IPaging8 {
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
/** JSONResult«分页信息«ProduceMaterialReturnQueryResponseDTO»» */
export interface IProduceMaterialReturnQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProduceMaterialReturnQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProduceMaterialReturnQueryResponseDTO» */
export interface IThePagingInformationProduceMaterialReturnQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProduceMaterialReturnQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProduceMaterialReturnQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProduceMaterialReturnQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ProduceMaterialReturnQueryResponseDTO */
export interface IProduceMaterialReturnQueryResponseDTO {
    /** ID */
    id?: string;
    /** 主数据ID/生产退料ID */
    masterDataId?: string;
    /** 生产退料编码 */
    produceMaterialReturnOrderCode?: string;
    /** 单据日期 */
    billDate?: number;
    /** 生产领料ID */
    productionMaterialIssuanceOrderId?: string;
    /** 生产领料编码 */
    productionMaterialIssuanceOrderCode?: string;
    /** 生产领料明细ID */
    productionMaterialIssuanceOrderDetailId?: string;
    /** 退料人ID */
    materialReturnEmployeeId?: string;
    /** 退料人名称 */
    materialReturnEmployeeName?: string;
    /** 退料部门ID */
    materialReturnDepartmentId?: string;
    /** 退料部门名称 */
    materialReturnDepartmentName?: string;
    /** 物料ID */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 生产领料的批次号 */
    lotNo?: string;
    /** 已退料数量 */
    returnedQuantity?: number;
    /** 退料数量 */
    materialReturnQuantity?: number;
    /** 序列号列表 */
    serialNoList?: Record<string, any>[];
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProduceMaterialReturnQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProduceMaterialReturnQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
