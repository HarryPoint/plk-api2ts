import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/pageQueryProduceStockInUsingPOST
*/
export default function fetchMethod(options: { data: IPaging9 }, extraOptions?: any) {
    return http<IProductionStockInQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/produceOrder/pageQueryProduceStockIn",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_9 */
export interface IPaging9 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单ID */
    produceOrderId?: number;
    /** 生产物料ID */
    materialId?: number;
    /** 批次好 */
    lotNoList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«ProductionStockInQueryResponseDTO»» */
export interface IProductionStockInQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationProductionStockInQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«ProductionStockInQueryResponseDTO» */
export interface IThePagingInformationProductionStockInQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductionStockInQueryResponseDTO[];
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
/** ProductionStockInQueryResponseDTO */
export interface IProductionStockInQueryResponseDTO {
    /** ID */
    id?: number;
    /** 主数据ID/生产入库单ID */
    masterDataId?: number;
    /** 生产入库单编码 */
    produceStockInOrderCode?: string;
    /** 单据日期 */
    billDate?: string;
    /** 交易人 */
    deliveryEmployeeId?: number;
    /** 交易人名称 */
    deliveryEmployeeName?: string;
    /** 交易部门ID */
    deliveryDepartmentId?: number;
    /** 交易部门名称 */
    deliveryDepartmentName?: string;
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
    /** 入库数量 */
    stockInQuantity?: number;
    /** 入库序列号列表 */
    serialNoList?: Record<string, any>[];
}
