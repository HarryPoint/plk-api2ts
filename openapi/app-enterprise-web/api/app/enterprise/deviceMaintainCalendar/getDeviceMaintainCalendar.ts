import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentMaintenanceCalendarRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListDeviceMaintenanceCalendarResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceMaintainCalendar/getDeviceMaintainCalendar",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备保养日历请求DTO */
export interface IEquipmentMaintenanceCalendarRequestDTO {
    /** 设备保养计划明细ids */
    deviceMaintainDetailPlanIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 设备ids */
    deviceIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 保养任务ids */
    taskIds?: string[];
    /** 设备类型ids */
    deviceTypeIds?: string[];
    /** 产线ids */
    productionLineIds?: string[];
    /** 区域ids */
    areaIds?: string[];
    /** 保养类型 */
    maintainTypes?: string[];
    /** 保养人员ids */
    deviceEmployeeCapacityIds?: string[];
    /** 班组ids */
    classGroupIds?: string[];
    /** 查询状态 */
    queryStatusList?: EEquipmentMaintenanceCalendarRequestDTO_queryStatusList_items[];
    /** 保养计划编号 */
    planCode?: string;
    /** 计划开始时间 */
    beginPlanTaskStartDate?: string;
    /** 计划结束时间 */
    endPlanTaskStartDate?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«List«设备保养日历响应DTO»» */
export interface IJSONResultListDeviceMaintenanceCalendarResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEquipmentMaintenanceCalendarRespondsToDTO1[];
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
    /** 保养任务id */
    taskId?: string;
    /** 设备保养计划id */
    deviceMaintainPlanId?: string;
    /** 设备保养计划明细id */
    deviceMaintainDetailPlanId?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 保养计划编号 */
    planCode?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 保养类型 */
    maintainType?: EEquipmentMaintenanceCalendarRespondsToDTO_maintainType;
    /** 保养方案 */
    maintainSchemeName?: string;
    /** 计划开始时间 */
    planTaskStartDate?: number;
    /** 计划结束时间 */
    planTaskEndDate?: number;
    /** 任务开始时间 */
    taskStartDate?: number;
    /** 任务结束时间 */
    taskEndDate?: number;
    /** 保养人 */
    deviceEmployeeCapacityNames?: string[];
    /** 执行人 */
    executorName?: string;
    /** 任务状态 */
    taskStatus?: EEquipmentMaintenanceCalendarRespondsToDTO_taskStatus;
    /** 返回类型 */
    resultType?: EEquipmentMaintenanceCalendarRespondsToDTO_resultType;
    /** 查询状态 */
    queryStatus?: EEquipmentMaintenanceCalendarRespondsToDTO_queryStatus;
    /** 保养内容 */
    maintainDetails?: IMaintenanceContentReturnedToDTO[];
    /** 消耗备件 */
    maintainPartsDetails?: IMaintenanceSparePartsReturnedToDTO[];
}
/** 保养内容返回DTO */
export interface IMaintenanceContentReturnedToDTO {
    /** 保养项目 */
    maintainName?: string;
    /** 具体描述 */
    maintainDesc?: string;
    /** 保养执行记录 */
    executorRecord?: string;
    /** 保养情况 */
    situation?: EMaintenanceContentReturnedToDTO_situation;
    /** 备注 */
    remark?: string;
}
/** 保养消耗备件返回DTO */
export interface IMaintenanceSparePartsReturnedToDTO {
    /** 备件id */
    devicePartsId?: string;
    /** 备件名称 */
    devicePartsName?: string;
    /** 备件编号 */
    devicePartsCode?: string;
    /** 备件单位 */
    devicePartsUnit?: string;
    /** 单位id */
    devicePartsUnitId?: string;
    /** 计划消耗数量 */
    planConsumerQuantity?: number;
    /** 实际消耗数量 */
    consumerQuantity?: number;
}

export enum EEquipmentMaintenanceCalendarRequestDTO_queryStatusList_items {
    PLAN = "PLAN",
    WAIT = "WAIT",
    HANDLING = "HANDLING",
    CANCEL = "CANCEL",
    COMPLETE = "COMPLETE",
    OVERDUE = "OVERDUE"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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

export enum EEquipmentMaintenanceCalendarRespondsToDTO_resultType {
    /** 保养计划 */
    MAINTAIN_PLAN = "MAINTAIN_PLAN",
    /** 保养任务 */
    MAINTAIN_TASK = "MAINTAIN_TASK"
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

export enum EMaintenanceContentReturnedToDTO_situation {
    /** 未完成 */
    UN_COMPLETE = "UN_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
