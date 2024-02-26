import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarByEmployeeModeUsingPOST
*/
export default function fetchMethod(data: IEquipmentMaintenanceCalendarRequestDTO, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/getDeviceMaintainCalendarByEmployeeMode",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 设备保养日历请求DTO */
export interface IEquipmentMaintenanceCalendarRequestDTO {
    /** 设备保养计划明细ids */
    deviceMaintainDetailPlanIds?: number[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 设备ids */
    deviceIds?: number[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 保养任务ids */
    taskIds?: number[];
    /** 设备类型ids */
    deviceTypeIds?: number[];
    /** 产线ids */
    productionLineIds?: number[];
    /** 区域ids */
    areaIds?: number[];
    /** 保养类型 */
    maintainTypes?: string[];
    /** 保养人员ids */
    deviceEmployeeCapacityIds?: number[];
    /** 班组ids */
    classGroupIds?: number[];
    /** 查询状态 */
    queryStatusList?: string[];
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
    isAsc?: string;
}
/** JSONResult«分页信息«设备保养日历-人员模式响应DTO»» */
export interface IJSONResultPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«设备保养日历-人员模式响应DTO» */
export interface IPagingInformationDeviceMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IEquipmentMaintenanceCalendarPersonnelModeRespondsToDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 设备保养日历-人员模式响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeRespondsToDTO {
    /** 人员名称 */
    employeeName?: string;
    /** 班组 */
    classGroupName?: string;
    /** 部门 */
    departmentName?: string;
    /** 明细详情 */
    details?: IEquipmentMaintenanceCalendarPersonnelModeDetailsRespondToDTO[];
}
/** 设备保养日历-人员模式详情响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeDetailsRespondToDTO {
    /** 天 */
    day?: string;
    /** 时间详情 */
    dayDetails?: IEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO[];
}
/** 设备保养日历-人员模式详情时间响应DTO */
export interface IEquipmentMaintenanceCalendarPersonnelModeDetailsTimeResponseDTO {
    /** 保养任务id */
    taskId?: number;
    /** 设备保养计划id */
    deviceMaintainPlanId?: number;
    /** 设备保养计划明细id */
    deviceMaintainDetailPlanId?: number;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 保养类型 */
    maintainType?: string;
    /** 计划开始时间 */
    planTaskStartDate?: string;
    /** 计划结束时间 */
    planTaskEndDate?: string;
    /** 任务开始时间 */
    taskStartDate?: string;
    /** 任务结束时间 */
    taskEndDate?: string;
    /** 任务状态 */
    taskStatus?: string;
    /** 是否执行人 */
    isExecutor?: string;
    /** 查询状态 */
    queryStatus?: string;
}
