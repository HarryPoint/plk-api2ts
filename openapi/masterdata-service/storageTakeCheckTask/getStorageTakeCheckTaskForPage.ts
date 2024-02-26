import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/getStorageTakeCheckTaskForPageUsingPOST
*/
export default function fetchMethod(options: { data: ISearchVOOnTheExecutionSideOfTheWarehouseInventoryTaskparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
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
    handleType?: ('WAIT' | 'HANDLED');
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
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«仓库盘点任务执行端返回DTO» */
export interface IPageInformationReturnsTheDTOFromTheExecutionSideOfTheWarehouseInventoryTask {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheExecutionEndOfTheWarehouseInventoryTaskReturnsTheDTO[];
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
/** 仓库盘点任务执行端返回DTO */
export interface ITheExecutionEndOfTheWarehouseInventoryTaskReturnsTheDTO {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId?: number;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 计划开始时间 */
    planBeginTime?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 提交人ID */
    handleUserId?: number;
    /** 提交人 */
    handleUserName?: string;
}
