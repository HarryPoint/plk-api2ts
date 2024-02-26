import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/exportStorageTakeCheckTaskDetailUsingPOST
*/
export default function fetchMethod(options: { data: IExportTheWarehouseInventoryListToDTO[] }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/exportStorageTakeCheckTaskDetail",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点仓位清单导出DTO */
export interface IExportTheWarehouseInventoryListToDTO {
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
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailSerialNumberDTO1[];
    /** undefined */
    serialNoStr?: string;
}
/** 盘点任务盘点明细序列号DTO_1 */
export interface IInventoryTaskInventoryDetailSerialNumberDTO1 {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
/** ModelAndView */
export interface IModelAndView {
}
