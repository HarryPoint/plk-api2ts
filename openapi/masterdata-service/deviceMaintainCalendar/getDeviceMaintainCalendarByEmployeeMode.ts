import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarByEmployeeModeUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentMaintenanceCalendarRequestDTO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/getDeviceMaintainCalendarByEmployeeMode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备保养日历请求DTO */
export interface IEquipmentMaintenanceCalendarRequestDTO {
    /** 区域ids */
    areaIds?: string[];
    /** 计划开始时间 */
    beginPlanTaskStartDate?: string;
    /** 班组ids */
    classGroupIds?: string[];
    /** 保养人员ids */
    deviceEmployeeCapacityIds?: string[];
    /** 设备ids */
    deviceIds?: string[];
    /** 设备保养计划明细ids */
    deviceMaintainDetailPlanIds?: string[];
    /** 设备类型ids */
    deviceTypeIds?: string[];
    /** 计划结束时间 */
    endPlanTaskStartDate?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 保养类型 */
    maintainTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 保养计划编号 */
    planCode?: string;
    /** 产线ids */
    productionLineIds?: string[];
    /** 查询状态 */
    queryStatusList?: EEquipmentMaintenanceCalendarRequestDTO_queryStatusList_items[];
    /** 保养任务ids */
    taskIds?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«设备保养日历-人员模式响应DTO»» */
export interface IJSONResultPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«设备保养日历-人员模式响应DTO» */
export interface IPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IEquipmentMaintenanceCalendarPersonnelModeRespondsToDTO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 设备保养日历-人员模式响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 班组 */
    classGroupName?: string;
    /** 部门 */
    departmentName?: string;
    /** 明细详情 */
    details?: IEquipmentMaintenanceCalendarPersonnelModeDetailsRespondToDTO[];
    /** 人员名称 */
    employeeName?: string;
}
/** 设备保养日历-人员模式详情响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeDetailsRespondToDTO {
    /** 天 */
    day?;
    /** 时间详情 */
    dayDetails?: IEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO[];
}
/** 设备保养日历-人员模式详情时间响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO {
    /** 设备编号 */
    deviceCode?: string;
    /** 设备保养计划明细id */
    deviceMaintainDetailPlanId?: string;
    /** 设备保养计划id */
    deviceMaintainPlanId?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 是否执行人 */
    isExecutor?: EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_isExecutor;
    /** 保养类型 */
    maintainType?: EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_maintainType;
    /** 计划结束时间 */
    planTaskEndDate?: number;
    /** 计划开始时间 */
    planTaskStartDate?: number;
    /** 查询状态 */
    queryStatus?: EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_queryStatus;
    /** 任务结束时间 */
    taskEndDate?: number;
    /** 保养任务id */
    taskId?: string;
    /** 任务开始时间 */
    taskStartDate?: number;
    /** 任务状态 */
    taskStatus?: EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_taskStatus;
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

export enum EPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_isExecutor {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_maintainType {
    /** 年 */
    YEAR = "YEAR",
    /** 半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_queryStatus {
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

export enum EEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO_taskStatus {
    /** 待执行 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
