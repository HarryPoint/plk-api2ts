import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/批次跟踪报表相关/getMaterialLotNoTrackReportForPageUsingPOST
*/
export default function fetchMethod(options: { data: GetMaterialLotNoTrackReportForPage }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialBatchTrackingPagingResponseObject>(
        {
            url: "/masterdata-service/warehouseStorageLotNoTrackReport/getMaterialLotNoTrackReportForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料批次跟踪分页响应对象»» */
export interface IJSONResultPagingInformationMaterialBatchTrackingPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationMaterialBatchTracksPagingResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«物料批次跟踪分页响应对象» */
export interface IPagingInformationMaterialBatchTracksPagingResponseObjects {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMaterialBatchTrackingPagingResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 物料批次跟踪分页响应对象 */
export interface IMaterialBatchTrackingPagingResponseObject {
    /** 流程应用code */
    masterDataFlowPathCode?: string;
    /** 所属主数据id (eg:物料id) */
    masterDataId?: number;
    /** 物料code */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 仓位操作类型 */
    storageLogType?: ('IN' | 'OUT' | 'CHECK' | 'LOCK' | 'SCRAP');
    /** 操作仓位id */
    opWarehouseId?: number;
    /** 操作仓位名称 */
    opWarehouseName?: string;
    /** 操作仓库id */
    opStorehouseId?: number;
    /** 操作仓库名称 */
    opStorehouseName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 业务id */
    businessId?: number;
    /** 单据编号 */
    businessNo?: string;
    /** 单据日期 */
    billDate?: string;
    /** 单据类型 */
    billName?: string;
    /** 单据流程code */
    flowPathCode?: string;
    /** 单据状态 */
    businessStatus?: string;
    /** 数量 */
    quantity?: number;
}
