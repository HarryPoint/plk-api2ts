import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/handleUsingPOST
*/
export default function fetchMethod(options: { data: IInventoryTaskInventoryProcessingDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/storageTakeCheckTask/handle",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盘点任务盘点处理DTO */
export interface IInventoryTaskInventoryProcessingDTO {
    /** 编辑模式 -- (暂存就传递STAGING, 提交就传递 DEFAULT) */
    editType?: EInventoryTaskInventoryProcessingDTO_editType;
    /** 任务id */
    id: string;
    /** 盘点明细 */
    detailList?: IInventoryTaskInventoryProcessingDetailsDTO[];
}
/** 盘点任务盘点处理详情DTO */
export interface IInventoryTaskInventoryProcessingDetailsDTO {
    /** 盘点仓位id */
    warehouseId?: string;
    /** 物料id */
    materialId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailSerialNumberDTO1[];
    /** 盘点数量 */
    quantity?: number;
    /** 备注 */
    remark?: string;
}
/** 盘点任务盘点明细序列号DTO_1 */
export interface IInventoryTaskInventoryDetailSerialNumberDTO1 {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EInventoryTaskInventoryProcessingDTO_editType {
    /** 默认 */
    DEFAULT = "DEFAULT",
    /** 暂存 */
    STAGING = "STAGING",
    /** 直接生效 */
    COMPLETE = "COMPLETE",
    /** 流程任务 */
    FLOW_PATH_TASK = "FLOW_PATH_TASK"
}
