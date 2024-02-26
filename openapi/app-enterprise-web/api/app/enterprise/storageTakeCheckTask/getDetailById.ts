import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/getDetailByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string; isCheckHandleUser?: string } }, extraOptions?: any) {
    return http<IJSONResultReturnTheDetailsOfTheWarehouseInventoryTaskToTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getDetailById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓库盘点任务详情返回DTO» */
export interface IJSONResultReturnTheDetailsOfTheWarehouseInventoryTaskToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IReturnToDTOForWarehouseInventoryTaskDetails;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 仓库盘点任务详情返回DTO */
export interface IReturnToDTOForWarehouseInventoryTaskDetails {
    /** id */
    id?: number;
    /** 任务基本信息 */
    taskInfo?: IWarehouseInventoryTaskReturnedToDTO;
    /** 物料盘点清单 */
    checkList?: IWarehouseInventoryListReturnedToDTO[];
}
/** 仓库盘点任务返回DTO */
export interface IWarehouseInventoryTaskReturnedToDTO {
    /** id */
    id?: number;
    /** 盘点单号 */
    taskNo?: string;
    /** 盘点仓库id */
    storehouseId?: number;
    /** 盘点仓库名称 */
    storehouseName?: string;
    /** 盘点仓库编号 */
    storehouseCode?: string;
    /** 盘点范围 */
    scopeType?: string;
    /** 盘点范围描述 */
    scopeTypeDesc?: string;
    /** 盘点物料种类(针对盘点范围是物料类型的) */
    handleMaterialTypeList?: string[];
    /** 盘点物料种类描述(针对盘点范围是物料类型的) */
    handleMaterialTypeDescList?: string[];
    /** 处理人id集合 -- 指派 */
    handleUserIdList?: number[];
    /** 处理人姓名集合 -- 指派 */
    handleUsernameList?: string[];
    /** 计划开始时间 */
    planBeginTime?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 初盘提交人id */
    lastHandleUserId?: number;
    /** 初盘提交人姓名 */
    lastHandleUsername?: string;
    /** 初盘完成时间 */
    lastHandleTime?: string;
    /** 核对人id */
    verifyUserId?: number;
    /** 核对提交人 */
    verifyUsername?: string;
    /** 核对完成时间 */
    verifyTime?: string;
    /** 审核人id */
    examineUserId?: number;
    /** 审核人 */
    examineUsername?: string;
    /** 审核完成时间 */
    examineTime?: string;
    /** 指定仓位数组(指定仓位类型时有值) */
    warehouseList?: IIdNameNumberVO[];
    /** 盘盈单编号 */
    inventoryProfitOrderCode?: string;
    /** 盘亏单编号 */
    inventoryLossOrderCode?: string;
    /** 盘盈单id */
    inventoryProfitOrderId?: number;
    /** 盘亏单id */
    inventoryLossOrderId?: number;
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
/** 仓库盘点仓位清单返回DTO */
export interface IWarehouseInventoryListReturnedToDTO {
    /** 盘点详情id */
    id?: number;
    /** 仓位id */
    warehouseId?: number;
    /** 仓位名称 */
    warehouseName?: string;
    /** 仓位编号 */
    warehouseCode?: string;
    /** 区域名称 */
    areaName?: string;
    /** 区域编号 */
    areaCode?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料种类 */
    materialType?: string;
    /** 物料种类描述 */
    materialTypeDesc?: string;
    /** 原始数量(账面库存) */
    originalQuantity?: number;
    /** 盘点数量 */
    quantity?: number;
    /** 核对数量 */
    verifyQuantity?: number;
    /** 核对调整数量 */
    verifyDiffQuantity?: number;
    /** 盘点结果(盈亏数量) */
    checkQuantity?: number;
    /** 差异原因 */
    differenceReason?: string;
    /** 备注 */
    remark?: string;
    /** 批次号 */
    lotNo?: string;
    /** 启用批次 */
    enableLot?: string;
    /** 启用序列号 */
    enableSerialNo?: string;
    /** 启用序列号 */
    hasWarehouseMaterial?: string;
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 匹配序列号集 */
    pickSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘盈序列号集 */
    profitSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘亏序列号集 */
    lossSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
}
/** 盘点任务盘点明细序列号DTO */
export interface IInventoryTaskInventoryDetailsSerialNumberDTO {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
