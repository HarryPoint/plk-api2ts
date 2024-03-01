import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/getDetailByIdUsingGET_4
*/
export default function fetchMethod(options: { params: { Id?: string; IsCheckHandleUser?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultReturnTheDetailsOfTheWarehouseInventoryTaskToTheDTO>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓库盘点任务详情返回DTO» */
export interface IJSONResultReturnTheDetailsOfTheWarehouseInventoryTaskToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IReturnToDTOForWarehouseInventoryTaskDetails;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓库盘点任务详情返回DTO */
export interface IReturnToDTOForWarehouseInventoryTaskDetails {
    /** 物料盘点清单 */
    checkList?: IWarehouseInventoryListReturnedToDTO[];
    /** id */
    id?: string;
    /** 任务基本信息 */
    taskInfo?: IWarehouseInventoryTaskReturnedToDTO;
}
/** 仓库盘点仓位清单返回DTO */
export interface IWarehouseInventoryListReturnedToDTO {
    /** 区域编号 */
    areaCode?: string;
    /** 区域名称 */
    areaName?: string;
    /** 盘点结果(盈亏数量) */
    checkQuantity?: number;
    /** 差异原因 */
    differenceReason?: string;
    /** 启用批次 */
    enableLot?: EWarehouseInventoryListReturnedToDTO_enableLot;
    /** 启用序列号 */
    enableSerialNo?: EWarehouseInventoryListReturnedToDTO_enableSerialNo;
    /** 启用序列号 */
    hasWarehouseMaterial?: EWarehouseInventoryListReturnedToDTO_hasWarehouseMaterial;
    /** 盘点详情id */
    id?: string;
    /** 盘亏序列号集 */
    lossSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 批次号 */
    lotNo?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料种类 */
    materialType?: string;
    /** 物料种类描述 */
    materialTypeDesc?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 原始数量(账面库存) */
    originalQuantity?: number;
    /** 匹配序列号集 */
    pickSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘盈序列号集 */
    profitSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘点数量 */
    quantity?: number;
    /** 备注 */
    remark?: string;
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 仓库编号 */
    storehouseCode?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 核对调整数量 */
    verifyDiffQuantity?: number;
    /** 核对数量 */
    verifyQuantity?: number;
    /** 仓位编号 */
    warehouseCode?: string;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
}
/** 盘点任务盘点明细序列号DTO */
export interface IInventoryTaskInventoryDetailsSerialNumberDTO {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
/** 仓库盘点任务返回DTO */
export interface IWarehouseInventoryTaskReturnedToDTO {
    /** 完成时间 */
    completeTime?: number;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 审核完成时间 */
    examineTime?: number;
    /** 审核人id */
    examineUserId?: string;
    /** 审核人 */
    examineUsername?: string;
    /** 盘点物料种类描述(针对盘点范围是物料类型的) */
    handleMaterialTypeDescList?: string[];
    /** 盘点物料种类(针对盘点范围是物料类型的) */
    handleMaterialTypeList?: string[];
    /** 处理人id集合 -- 指派 */
    handleUserIdList?: string[];
    /** 处理人姓名集合 -- 指派 */
    handleUsernameList?: string[];
    /** id */
    id?: string;
    /** 盘亏单编号 */
    inventoryLossOrderCode?: string;
    /** 盘亏单id */
    inventoryLossOrderId?: string;
    /** 盘盈单编号 */
    inventoryProfitOrderCode?: string;
    /** 盘盈单id */
    inventoryProfitOrderId?: string;
    /** 初盘完成时间 */
    lastHandleTime?: number;
    /** 初盘提交人id */
    lastHandleUserId?: string;
    /** 初盘提交人姓名 */
    lastHandleUsername?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 盘点范围 */
    scopeType?: EWarehouseInventoryTaskReturnedToDTO_scopeType;
    /** 盘点范围描述 */
    scopeTypeDesc?: string;
    /** 状态 */
    status?: EWarehouseInventoryTaskReturnedToDTO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 盘点仓库id */
    storehouseId?: string;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点单号 */
    taskNo?: string;
    /** 核对完成时间 */
    verifyTime?: number;
    /** 核对人id */
    verifyUserId?: string;
    /** 核对提交人 */
    verifyUsername?: string;
    /** 指定仓位数组(指定仓位类型时有值) */
    warehouseList?: IIdNameNumberVO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}

export enum EWarehouseInventoryListReturnedToDTO_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWarehouseInventoryListReturnedToDTO_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWarehouseInventoryListReturnedToDTO_hasWarehouseMaterial {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWarehouseInventoryTaskReturnedToDTO_scopeType {
    /** 指定仓位 */
    APPOINT = "APPOINT",
    /** 物料类型 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 全部物料 */
    ALL = "ALL"
}

export enum EWarehouseInventoryTaskReturnedToDTO_status {
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
