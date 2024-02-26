import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/物料库存维度报表相关/getWarehouseMaterialDimensionReportUsingPOST
*/
export default function fetchMethod(data: GetWarehouseMaterialDimensionReport, extraOptions?: any) {
    return http<IJSONResultPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseMaterialDimensionReport/getWarehouseMaterialDimensionReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料库存维度查询明细响应对象»» */
export interface IJSONResultPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«物料库存维度查询明细响应对象» */
export interface IPageInformationQueriesDetailedResponseObjectsInTheMaterialInventoryDimension {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IResponseObjectsForQueryingDetailsInTheInventoryDimension[];
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
/** 物料库存维度查询明细响应对象 */
export interface IResponseObjectsForQueryingDetailsInTheInventoryDimension {
    /** 物料id */
    materialId: number;
    /** 物料编号 */
    materialCode: string;
    /** 物料名称 */
    materialName: string;
    /** 规格 */
    materialSpec: string;
    /** 单位 */
    materialUnit: string;
    /** 批次号 */
    lotNo: string;
    /** 仓位id */
    warehouseId: number;
    /** 仓位编号 */
    warehouseCode: string;
    /** 仓位名称 */
    warehouseName: string;
    /** 仓库id */
    storehouseId: number;
    /** 仓库编号 */
    storehouseCode: string;
    /** 仓库名称 */
    storehouseName: string;
    /** 库存总数 */
    storageTotalCount: number;
    /** 库存锁定数 */
    storageLockCount: number;
    /** 库存可使用数 */
    storageUseCount: number;
}
