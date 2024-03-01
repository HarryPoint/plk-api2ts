import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/verifyUsingPOST
*/
export default function fetchMethod(options: { data: ICheckTheDTOForInventoryTasks, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/storageTakeCheckTask/verify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盘点任务核对DTO */
export interface ICheckTheDTOForInventoryTasks {
    /** 盘点核对详情 */
    detailList?: IInventoryTaskCheckDetailsDTO[];
    /** 编辑模式 -- (暂存就传递STAGING, 提交就传递 DEFAULT) */
    editType?: ECheckTheDTOForInventoryTasks_editType;
    /** 任务id */
    id: string;
}
/** 盘点任务核对详情DTO */
export interface IInventoryTaskCheckDetailsDTO {
    /** 差异原因 */
    differenceReason?: string;
    /** 详情id */
    id?: string;
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailSerialNumberDTO1[];
    /** 核对数量 */
    verifyQuantity?: number;
}
/** 盘点任务盘点明细序列号DTO_1 */
export interface IInventoryTaskInventoryDetailSerialNumberDTO1 {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
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

export enum ECheckTheDTOForInventoryTasks_editType {
    /** 默认 */
    DEFAULT = "DEFAULT",
    /** 暂存 */
    STAGING = "STAGING",
    /** 直接生效 */
    COMPLETE = "COMPLETE",
    /** 流程任务 */
    FLOW_PATH_TASK = "FLOW_PATH_TASK"
}
