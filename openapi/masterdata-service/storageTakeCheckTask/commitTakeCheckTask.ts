import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/commitTakeCheckTaskUsingPOST
*/
export default function fetchMethod(options: { data: ISubmitTheInventoryTaskToTheDTOparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/storageTakeCheckTask/commitTakeCheckTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 盘点任务提交DTO */
export interface ISubmitTheInventoryTaskToTheDTO {
    /** 任务id */
    id?: number;
    /** 提交清单 */
    list?: IInventoryTaskSubmissionListDTO[];
}
/** 盘点任务提交清单DTO */
export interface IInventoryTaskSubmissionListDTO {
    /** 盘点仓位id */
    warehouseId?: number;
    /** 物料集 */
    materialList?: IInventoryTaskSubmissionListMaterialDTO[];
}
/** 盘点任务提交清单物料DTO */
export interface IInventoryTaskSubmissionListMaterialDTO {
    /** 物料id */
    materialId?: number;
    /** 盘点数量 */
    quantity?: number;
    /** 核对数量 */
    verifyQuantity?: number;
    /** 备注（差异原因 */
    remark?: string;
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
    ts?: number;
}
