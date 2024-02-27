import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检管理/editUsingPOST_19
*/
export default function fetchMethod(options: { data: IEditTheInspectionTaskDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qualityStorageTask/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑质检任务 DTO */
export interface IEditTheInspectionTaskDTO {
    /** id，如果不传就是新增 */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 质检物料id */
    materialId?: string;
    /** 采购收货单物料明细id */
    purchaseWorkOrderDetailId?: string;
    /** 质检方案id */
    qualityInspectionPlanId: string;
    /** 质检分类id */
    qualityInspectionCategoryId: string;
    /** 是否应用编码规则 */
    isCodeRule: EEditTheInspectionTaskDTO_isCodeRule;
    /** 物料位置id */
    qualityWarehouseId?: string;
    /** 检验位置id */
    checkPositionId?: string;
    /** 处理人id */
    handleUserId: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 采购收货单id */
    purchaseWorkOrderId?: string;
    /** 质检任务类型 */
    taskType: EEditTheInspectionTaskDTO_taskType;
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
