import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/仓位系统应用库存批次号相关/getWarehouseStorageSystemApplicationLotNoUsingPOST
*/
export default function fetchMethod(options: { data: ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingQueryObjects }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheWarehouseSystemAppliesTheInventoryBatchNumberPagingReturnObject>(
        {
            url: "/masterdata-service/warehouseStorageSystemApplicationLotNo/getLotNoList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓位系统应用库存批次号分页查询对象 */
export interface ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingQueryObjects {
    /** 批次号 */
    lotNo?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 可使用库存不为0---出库:Y 入库:N */
    storageUseCountNotZero?: ETheWarehouseSystemAppliesTheInventoryBatchNumberToPagingQueryObjects_storageUseCountNotZero;
    /** 仓库id */
    storehouseIds?: string[];
    /** 仓位id */
    warehouseIds?: string[];
    /** 仓位系统应用id(eg：物料id) */
    warehouseSystemApplicationId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«仓位系统应用库存批次号分页返回对象»» */
export interface IJSONResultPagingInformationTheWarehouseSystemAppliesTheInventoryBatchNumberPagingReturnObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓位系统应用库存批次号分页返回对象» */
export interface IPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingReturnObjects[];
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
/** 仓位系统应用库存批次号分页返回对象 */
export interface ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingReturnObjects {
    /** 批次号 */
    lotNo?: string;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
    /** 仓位系统应用关联数据id(eg：物料id) */
    warehouseSystemApplicationId?: string;
}

export enum ETheWarehouseSystemAppliesTheInventoryBatchNumberToPagingQueryObjects_storageUseCountNotZero {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationTheWarehouseSystemAppliesInventoryBatchNumberPagingToReturnObjects_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
