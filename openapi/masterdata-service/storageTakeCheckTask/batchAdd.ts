import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/batchAddUsingPOST
*/
export default function fetchMethod(options: { data: IEditDTOForWarehouseInventoryTaskBatch, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/masterdata-service/storageTakeCheckTask/batchAdd",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务批次编辑DTO */
export interface IEditDTOForWarehouseInventoryTaskBatch {
    /** 任务列表 */
    taskList: IEditDTOForWarehouseInventoryTask[];
    /** 计划开始时间，yyyy-MM-dd HH:mm:ss */
    planBeginTime?: string;
    /** 盘点范围 */
    scopeType: EEditDTOForWarehouseInventoryTaskBatch_scopeType;
    /** 物料大类列表，盘点范围为物料类型时必填 */
    handleMaterialTypes?: string[];
    /** 指定仓库仓位id集，盘点范围为指定仓位时必填，只传最底层仓位 */
    warehouseList?: IWarehouseInventoryTaskPositionEditingDTO[];
}
/** 仓库盘点任务编辑DTO */
export interface IEditDTOForWarehouseInventoryTask {
    /** 盘点单号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId: string;
    /** 处理人id集 */
    handleUserIds: string[];
}
/** 仓库盘点任务仓位编辑DTO */
export interface IWarehouseInventoryTaskPositionEditingDTO {
    /** 仓库id */
    storehouseId?: string;
    /** 仓位id */
    warehouseId?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEditDTOForWarehouseInventoryTaskBatch_scopeType {
    /** 指定仓位 */
    APPOINT = "APPOINT",
    /** 物料类型 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 全部物料 */
    ALL = "ALL"
}
