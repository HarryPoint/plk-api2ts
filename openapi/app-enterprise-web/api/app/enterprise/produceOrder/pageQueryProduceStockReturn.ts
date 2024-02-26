import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/pageQueryProduceStockReturnUsingPOST
*/
export default function fetchMethod(data: IPaging11, extraOptions?: any) {
    return http<IProductionStockReturnQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/pageQueryProduceStockReturn",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 分页_11 */
export interface IPaging11 {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 生产订单ID */
    produceOrderId: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«分页信息«ProductionStockReturnQueryResponseDTO»» */
export interface IProductionStockReturnQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IThePagingInformationProductionStockReturnQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«ProductionStockReturnQueryResponseDTO» */
export interface IThePagingInformationProductionStockReturnQueryResponseDTO {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IProductionStockReturnQueryResponseDTO[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** ProductionStockReturnQueryResponseDTO */
export interface IProductionStockReturnQueryResponseDTO {
    /** ID */
    id: number;
    /** 主数据ID/生产退库单ID */
    masterDataId: number;
    /** 生产退库单编码 */
    produceStockReturnOrderCode: string;
    /** 单据日期 */
    billDate: string;
    /** 退库收货人 */
    stockReturnEmployeeId: number;
    /** 退库收货人名称 */
    stockReturnEmployeeName: string;
    /** 退库收货部门ID */
    stockReturnDepartmentId: number;
    /** 退库收货部门名称 */
    stockReturnDepartmentName: string;
    /** 生产入库单ID */
    productionStockInOrderId: number;
    /** 生产入库单明细ID */
    productionStockInOrderDetailId: number;
    /** 生产入库单编码 */
    productionStockInOrderCode: string;
    /** 物料ID */
    materialId: number;
    /** 物料编码 */
    materialCode: string;
    /** 物料名称 */
    materialName: string;
    /** 物料类型 */
    materialType: string;
    /** 批次号 */
    lotNo: string;
    /** 退库数量 */
    stockReturnQuantity: number;
    /** 退库序列号列表 */
    serialNoList: Record<string, any>[];
}
