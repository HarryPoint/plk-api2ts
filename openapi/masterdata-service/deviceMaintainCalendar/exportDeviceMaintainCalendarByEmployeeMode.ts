import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养日历相关/exportDeviceMaintainCalendarByEmployeeModeUsingPOST
*/
export default function fetchMethod(options: { data: IEquipmentMaintenanceCalendarRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/exportDeviceMaintainCalendarByEmployeeMode",
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
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
