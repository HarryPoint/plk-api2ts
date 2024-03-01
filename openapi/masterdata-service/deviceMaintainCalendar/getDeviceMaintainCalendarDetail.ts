import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarDetailUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentMaintenanceCalendarDetailsRequestDTO }, extraOptions?: any) {
    return http<IJSONResultDeviceMaintenanceCalendarRespondsToDTO>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/getDeviceMaintainCalendarDetail",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备保养日历详情请求DTO */
export interface IEquipmentMaintenanceCalendarDetailsRequestDTO {
    /** 设备保养计划明细id */
    deviceMaintainDetailPlanId?: string;
    /** 保养任务id */
    taskId?: string;
}
/** JSONResult«设备保养日历响应DTO» */
export interface IJSONResultDeviceMaintenanceCalendarRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEquipmentMaintenanceCalendarRespondsToDTO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备保养日历响应DTO_1 */
export interface IEquipmentMaintenanceCalendarRespondsToDTO1 {
    /** 天 */
    day?;
    /** 天详情 */
    dayDetails?: IEquipmentMaintenanceCalendarRespondsToDTO[];
}
/** 设备保养日历响应DTO */
export interface IEquipmentMaintenanceCalendarRespondsToDTO {
    /** 设备编号 */
    deviceCode?: string;
    /** 保养人 */
    deviceEmployeeCapacityNames?: string[];
    /** 设备保养计划明细id */
    deviceMaintainDetailPlanId?: string;
    /** 设备保养计划id */
    deviceMaintainPlanId?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 执行人 */
    executorName?: string;
    /** 保养内容 */
    maintainDetails?: IMaintenanceContentReturnedToDTO[];
    /** 消耗备件 */
    maintainPartsDetails?: IMaintenanceSparePartsReturnedToDTO[];
    /** 保养方案 */
    maintainSchemeName?: string;
    /** 保养类型 */
    maintainType?: EEquipmentMaintenanceCalendarRespondsToDTO_maintainType;
    /** 保养计划编号 */
    planCode?: string;
    /** 计划结束时间 */
    planTaskEndDate?: number;
    /** 计划开始时间 */
    planTaskStartDate?: number;
    /** 查询状态 */
    queryStatus?: EEquipmentMaintenanceCalendarRespondsToDTO_queryStatus;
    /** 返回类型 */
    resultType?: EEquipmentMaintenanceCalendarRespondsToDTO_resultType;
    /** 任务编号 */
    taskCode?: string;
    /** 任务结束时间 */
    taskEndDate?: number;
    /** 保养任务id */
    taskId?: string;
    /** 任务开始时间 */
    taskStartDate?: number;
    /** 任务状态 */
    taskStatus?: EEquipmentMaintenanceCalendarRespondsToDTO_taskStatus;
}
/** 保养内容返回DTO */
export interface IMaintenanceContentReturnedToDTO {
    /** 保养执行记录 */
    executorRecord?: string;
    /** 具体描述 */
    maintainDesc?: string;
    /** 保养项目 */
    maintainName?: string;
    /** 备注 */
    remark?: string;
    /** 保养情况 */
    situation?: EMaintenanceContentReturnedToDTO_situation;
}
/** 保养消耗备件返回DTO */
export interface IMaintenanceSparePartsReturnedToDTO {
    /** 实际消耗数量 */
    consumerQuantity?: number;
    /** 备件编号 */
    devicePartsCode?: string;
    /** 备件id */
    devicePartsId?: string;
    /** 备件名称 */
    devicePartsName?: string;
    /** 备件单位 */
    devicePartsUnit?: string;
    /** 单位id */
    devicePartsUnitId?: string;
    /** 计划消耗数量 */
    planConsumerQuantity?: number;
}

export enum EEquipmentMaintenanceCalendarRespondsToDTO_maintainType {
    /** 年 */
    YEAR = "YEAR",
    /** 半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum EEquipmentMaintenanceCalendarRespondsToDTO_queryStatus {
    /** 保养计划 */
    PLAN = "PLAN",
    /** 待执行任务 */
    WAIT = "WAIT",
    /** 进行中任务 */
    HANDLING = "HANDLING",
    /** 已取消任务 */
    CANCEL = "CANCEL",
    /** 已完成任务 */
    COMPLETE = "COMPLETE",
    /** 超期任务 */
    OVERDUE = "OVERDUE"
}

export enum EEquipmentMaintenanceCalendarRespondsToDTO_resultType {
    /** 保养计划 */
    MAINTAIN_PLAN = "MAINTAIN_PLAN",
    /** 保养任务 */
    MAINTAIN_TASK = "MAINTAIN_TASK"
}

export enum EEquipmentMaintenanceCalendarRespondsToDTO_taskStatus {
    /** 待执行 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

export enum EMaintenanceContentReturnedToDTO_situation {
    /** 未完成 */
    UN_COMPLETE = "UN_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
