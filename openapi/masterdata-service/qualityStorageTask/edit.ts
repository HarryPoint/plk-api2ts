import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检管理/editUsingPOST_19
*/
export default function fetchMethod(options: { data: IEditTheInspectionTaskDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityStorageTask/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑质检任务 DTO */
export interface IEditTheInspectionTaskDTO {
    /** 检验位置id */
    checkPositionId?: string;
    /** 处理人id */
    handleUserId: string;
    /** id，如果不传就是新增 */
    id?: string;
    /** 是否应用编码规则 */
    isCodeRule: EEditTheInspectionTaskDTO_isCodeRule;
    /** 质检物料id */
    materialId?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 采购收货单物料明细id */
    purchaseWorkOrderDetailId?: string;
    /** 采购收货单id */
    purchaseWorkOrderId?: string;
    /** 质检分类id */
    qualityInspectionCategoryId: string;
    /** 质检方案id */
    qualityInspectionPlanId: string;
    /** 物料位置id */
    qualityWarehouseId?: string;
    /** 任务号 */
    taskNo?: string;
    /** 质检任务类型 */
    taskType: EEditTheInspectionTaskDTO_taskType;
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

export enum EEditTheInspectionTaskDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEditTheInspectionTaskDTO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}
