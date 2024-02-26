import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/pageQueryProduceMaterialIssuanceUsingPOST
*/
export default function fetchMethod(data: IPaging6, extraOptions?: any) {
    return http<IProduceMaterialIssuanceQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/pageQueryProduceMaterialIssuance",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 分页_6 */
export interface IPaging6 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单ID */
    produceOrderId?: number;
    /** 物料ID */
    materialIdList?: number[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«ProduceMaterialIssuanceQueryResponseDTO»» */
export interface IProduceMaterialIssuanceQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProduceMaterialIssuanceQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«ProduceMaterialIssuanceQueryResponseDTO» */
export interface IThePagingInformationProduceMaterialIssuanceQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProduceMaterialIssuanceQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** ProduceMaterialIssuanceQueryResponseDTO */
export interface IProduceMaterialIssuanceQueryResponseDTO {
    /** ID */
    id?: number;
    /** 主数据ID/生产领料ID */
    masterDataId?: number;
    /** 生产领料编码 */
    produceMaterialIssuanceOrderCode?: string;
    /** 单据日期 */
    billDate?: string;
    /** 领料人ID */
    materialIssuanceEmployeeId?: number;
    /** 领料人名称 */
    materialIssuanceEmployeeName?: string;
    /** 领料部门ID */
    materialIssuanceDepartmentId?: number;
    /** 领料部门名称 */
    materialIssuanceDepartmentName?: string;
    /** 物料ID */
    materialId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 批次号 */
    lotNo?: string;
    /** 领料数量 */
    issuanceQuantity?: number;
    /** 序列号列表 */
    serialNoList?: Record<string, any>[];
}
