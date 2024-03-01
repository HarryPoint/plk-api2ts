import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/commitTakeCheckTaskUsingPOST
*/
export default function fetchMethod(options: { data: ISubmitTheInventoryTaskToTheDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/storageTakeCheckTask/commitTakeCheckTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盘点任务提交DTO */
export interface ISubmitTheInventoryTaskToTheDTO {
    /** 任务id */
    id?: string;
    /** 提交清单 */
    list?: IInventoryTaskSubmissionListDTO[];
}
/** 盘点任务提交清单DTO */
export interface IInventoryTaskSubmissionListDTO {
    /** 物料集 */
    materialList?: IInventoryTaskSubmissionListMaterialDTO[];
    /** 盘点仓位id */
    warehouseId?: string;
}
/** 盘点任务提交清单物料DTO */
export interface IInventoryTaskSubmissionListMaterialDTO {
    /** 物料id */
    materialId?: string;
    /** 盘点数量 */
    quantity?: number;
    /** 备注（差异原因 */
    remark?: string;
    /** 核对数量 */
    verifyQuantity?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
