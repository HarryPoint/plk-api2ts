import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/pageQueryProduceStockReturnUsingPOST
*/
export default function fetchMethod(options: { data: IPaging11 }, extraOptions?: any) {
    return http<IProductionStockReturnQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceStockReturn",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_11 */
export interface IPaging11 {
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
/** JSONResult«分页信息«ProductionStockReturnQueryResponseDTO»» */
export interface IProductionStockReturnQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePagingInformationProductionStockReturnQueryResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ProductionStockReturnQueryResponseDTO» */
export interface IThePagingInformationProductionStockReturnQueryResponseDTO {
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationProductionStockReturnQueryResponseDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationProductionStockReturnQueryResponseDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionStockReturnQueryResponseDTO[];
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
/** ProductionStockReturnQueryResponseDTO */
export interface IProductionStockReturnQueryResponseDTO {
    /** 单据日期 */
    billDate?: number;
    /** ID */
    id?: string;
    /** 批次号 */
    lotNo?: string;
    /** 主数据ID/生产退库单ID */
    masterDataId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料类型 */
    materialType?: string;
    /** 生产退库单编码 */
    produceStockReturnOrderCode?: string;
    /** 生产入库单编码 */
    productionStockInOrderCode?: string;
    /** 生产入库单明细ID */
    productionStockInOrderDetailId?: string;
    /** 生产入库单ID */
    productionStockInOrderId?: string;
    /** 退库序列号列表 */
    serialNoList?: Record<string, any>[];
    /** 退库收货部门ID */
    stockReturnDepartmentId?: string;
    /** 退库收货部门名称 */
    stockReturnDepartmentName?: string;
    /** 退库收货人 */
    stockReturnEmployeeId?: string;
    /** 退库收货人名称 */
    stockReturnEmployeeName?: string;
    /** 退库数量 */
    stockReturnQuantity?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationProductionStockReturnQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationProductionStockReturnQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
