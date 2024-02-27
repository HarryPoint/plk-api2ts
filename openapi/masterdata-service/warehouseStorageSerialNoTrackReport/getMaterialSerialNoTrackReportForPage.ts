import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/序列号跟踪报表相关/getMaterialSerialNoTrackReportForPageUsingPOST
*/
export default function fetchMethod(options: { data: GetMaterialSerialNoTrackReportForPage }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialSerialNumberTracesPagingResponseObjects>(
        {
            url: "/masterdata-service/warehouseStorageSerialNoTrackReport/getMaterialSerialNoTrackReportForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料序列号跟踪分页响应对象»» */
export interface IJSONResultPagingInformationMaterialSerialNumberTracesPagingResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMaterialSerialNumberTracksPageResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料序列号跟踪分页响应对象» */
export interface IPageInformationMaterialSerialNumberTracksPageResponseObjects {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheMaterialSerialNumberTracksPagingResponseObjects[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMaterialSerialNumberTracksPageResponseObjects_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMaterialSerialNumberTracksPageResponseObjects_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 物料序列号跟踪分页响应对象 */
export interface ITheMaterialSerialNumberTracksPagingResponseObjects {
    /** id */
    id?: string;
    /** 库存记录id */
    storageLogId?: string;
    /** 流程应用code */
    masterDataFlowPathCode?: string;
    /** 所属主数据id (eg:物料id) */
    masterDataId?: string;
    /** 物料code */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 仓位操作类型 */
    type?: ETheMaterialSerialNumberTracksPagingResponseObjects_type;
    /** 操作仓位id */
    opWarehouseId?: string;
    /** 操作仓位名称 */
    opWarehouseName?: string;
    /** 操作仓库id */
    opStorehouseId?: string;
    /** 操作仓库名称 */
    opStorehouseName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 业务id */
    businessId?: string;
    /** 单据编号 */
    businessNo?: string;
    /** 单据日期 */
    billDate?: number;
    /** 单据类型 */
    billName?: string;
    /** 单据流程code */
    billFlowPathCode?: string;
    /** 单据状态 */
    businessStatus?: string;
    /** 序列号 */
    serialNo?: string;
    /** 序列号备注 */
    serialRemark?: string;
}

export enum EPageInformationMaterialSerialNumberTracksPageResponseObjects_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMaterialSerialNumberTracksPageResponseObjects_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheMaterialSerialNumberTracksPagingResponseObjects_type {
    /** 入库 */
    IN = "IN",
    /** 出库 */
    OUT = "OUT",
    /** 盘点 */
    CHECK = "CHECK",
    /** 库存锁定 */
    LOCK = "LOCK",
    /** 报废 */
    SCRAP = "SCRAP"
}
