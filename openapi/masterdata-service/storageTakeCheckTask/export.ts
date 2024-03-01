import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/exportUsingPOST_32
*/
export default function fetchMethod(options: { data: IWarehouseInventoryTasksPageQueryObjects, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/storageTakeCheckTask/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务分页查询对象 */
export interface IWarehouseInventoryTasksPageQueryObjects {
    /** 完成开始时间 yyyy-MM-dd HH:mm:ss */
    completeBeginTime?: string;
    /** 完成结束时间 yyyy-MM-dd HH:mm:ss */
    completeEndTime?: string;
    /** 处理人id */
    handleUserIds?: string[];
    /** 物料id */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    planEndTime?: string;
    /** 状态 */
    status?: EWarehouseInventoryTasksPageQueryObjects_status;
    /** 盘点仓库id */
    storehouseIds?: string[];
    /** 任务编号 */
    taskNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EWarehouseInventoryTasksPageQueryObjects_status {
    /** 待盘点 */
    WAIT = "WAIT",
    /** 盘点中 */
    HANDLING = "HANDLING",
    /** 待核对 */
    WAIT_VERIFY = "WAIT_VERIFY",
    /** 待盈亏处理 */
    WAIT_EXAMINE = "WAIT_EXAMINE",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
