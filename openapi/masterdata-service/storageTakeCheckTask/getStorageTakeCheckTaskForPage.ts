import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/getStorageTakeCheckTaskForPageUsingPOST
*/
export default function fetchMethod(options: { data: ISearchVOOnTheExecutionSideOfTheWarehouseInventoryTask, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getStorageTakeCheckTaskForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务执行端搜索VO */
export interface ISearchVOOnTheExecutionSideOfTheWarehouseInventoryTask {
    /** 处理类型 */
    handleType?: ESearchVOOnTheExecutionSideOfTheWarehouseInventoryTask_handleType;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«仓库盘点任务执行端返回DTO»» */
export interface IJSONResultReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓库盘点任务执行端返回DTO» */
export interface IPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheExecutionEndOfTheWarehouseInventoryTaskReturnsTheDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 仓库盘点任务执行端返回DTO */
export interface ITheExecutionEndOfTheWarehouseInventoryTaskReturnsTheDTO {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId?: string;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 完成时间 */
    completeTime?: number;
    /** 提交人ID */
    handleUserId?: string;
    /** 提交人 */
    handleUserName?: string;
}

export enum ESearchVOOnTheExecutionSideOfTheWarehouseInventoryTask_handleType {
    /** 待处理 */
    WAIT = "WAIT",
    /** 已处理 */
    HANDLED = "HANDLED"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
