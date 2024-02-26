import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/importStorageTakeCheckTaskDetailUsingPOST
*/
export default function fetchMethod(params: { submitCheckList?: string; taskId: number }, extraOptions?: any) {
    return http<IJSONResultListReturnTheWarehouseInventoryListToTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/importStorageTakeCheckTaskDetail",
            method: "post",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«仓库盘点仓位清单返回DTO»» */
export interface IJSONResultListReturnTheWarehouseInventoryListToTheDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IWarehouseInventoryListReturnedToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 仓库盘点仓位清单返回DTO */
export interface IWarehouseInventoryListReturnedToDTO {
    /** 盘点详情id */
    id: number;
    /** 仓位id */
    warehouseId: number;
    /** 仓位名称 */
    warehouseName: string;
    /** 仓位编号 */
    warehouseCode: string;
    /** 区域名称 */
    areaName: string;
    /** 区域编号 */
    areaCode: string;
    /** 仓库名称 */
    storehouseName: string;
    /** 仓库编号 */
    storehouseCode: string;
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 物料编号 */
    materialCode: string;
    /** 物料单位 */
    materialUnit: string;
    /** 物料规格 */
    materialSpec: string;
    /** 物料种类 */
    materialType: string;
    /** 物料种类描述 */
    materialTypeDesc: string;
    /** 原始数量(账面库存) */
    originalQuantity: number;
    /** 盘点数量 */
    quantity: number;
    /** 核对数量 */
    verifyQuantity: number;
    /** 核对调整数量 */
    verifyDiffQuantity: number;
    /** 盘点结果(盈亏数量) */
    checkQuantity: number;
    /** 差异原因 */
    differenceReason: string;
    /** 备注 */
    remark: string;
    /** 批次号 */
    lotNo: string;
    /** 启用批次 */
    enableLot: string;
    /** 启用序列号 */
    enableSerialNo: string;
    /** 启用序列号 */
    hasWarehouseMaterial: string;
    /** 序列号集 */
    serialNos: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 匹配序列号集 */
    pickSerialNos: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘盈序列号集 */
    profitSerialNos: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘亏序列号集 */
    lossSerialNos: IInventoryTaskInventoryDetailsSerialNumberDTO[];
}
/** 盘点任务盘点明细序列号DTO */
export interface IInventoryTaskInventoryDetailsSerialNumberDTO {
    /** 序列号 */
    serialNo: string;
    /** 备注 */
    serialRemark: string;
}
