import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/getStorageTakeCheckTaskDetailUsingGET
*/
export default function fetchMethod(options: { params: { id?: string; enterpriseId?: number; userId?: number } }, extraOptions?: any) {
    return http<IJSONResultReturnsTheDTOFromTheExecutingEndOfTheWarehouseInventoryTaskDetails>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getStorageTakeCheckTaskDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓库盘点任务明细执行端返回DTO» */
export interface IJSONResultReturnsTheDTOFromTheExecutingEndOfTheWarehouseInventoryTaskDetails {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheExecutionEndReturnsTheDTOForWarehouseInventoryTaskDetails;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 仓库盘点任务明细执行端返回DTO */
export interface ITheExecutionEndReturnsTheDTOForWarehouseInventoryTaskDetails {
    /** id */
    id?: number;
    /** 任务号 */
    taskNo?: string;
    /** 处理人id */
    handleUserId?: number;
    /** 处理人姓名 */
    handleUsername?: string;
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
    /** 状态 */
    status?: ETheExecutionEndReturnsTheDTOForWarehouseInventoryTaskDetails_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 默认盘点清单 */
    list?: ITheExecutionEndOfTheWarehouseInventoryTaskListReturnsVO[];
}
/** 仓库盘点任务清单执行端返回VO */
export interface ITheExecutionEndOfTheWarehouseInventoryTaskListReturnsVO {
    /** 盘点仓位id */
    warehouseId?: number;
    /** 盘点仓位名称 */
    warehouseName?: string;
    /** 盘点仓位编号 */
    warehouseCode?: string;
    /** 仓位层级，从高至低排列 */
    warehouseList?: IIdNameNumberVO[];
    /** 物料集 */
    materialList?: IWarehouseInventoryTaskListReturnTheMaterialExecutionEndToTheDTO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** 仓库盘点任务清单物料执行端返回DTO */
export interface IWarehouseInventoryTaskListReturnTheMaterialExecutionEndToTheDTO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 盘点数量 */
    quantity?: number;
}

export enum ETheExecutionEndReturnsTheDTOForWarehouseInventoryTaskDetails_status {
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
