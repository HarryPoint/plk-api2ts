import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/物料库存维度报表相关/getWarehouseMaterialDimensionReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension>(
        {
            url: "/masterdata-service/warehouseMaterialDimensionReport/getWarehouseMaterialDimensionReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料库存维度查询明细响应对象»» */
export interface IJSONResultPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料库存维度查询明细响应对象» */
export interface IPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IResponseObjectsForQueryingDetailsInTheInventoryDimension[];
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
/** 物料库存维度查询明细响应对象 */
export interface IResponseObjectsForQueryingDetailsInTheInventoryDimension {
    /** 批次号 */
    lotNo?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 单位 */
    materialUnit?: string;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓位编号 */
    warehouseCode?: string;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
}

export enum EPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
