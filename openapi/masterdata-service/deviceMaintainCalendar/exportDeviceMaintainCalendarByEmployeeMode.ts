import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备保养日历相关/exportDeviceMaintainCalendarByEmployeeModeUsingPOST
*/
export default function fetchMethod(data: IEquipmentMaintenanceCalendarRequestDTO, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/exportDeviceMaintainCalendarByEmployeeMode",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 设备保养日历请求DTO */
export interface IEquipmentMaintenanceCalendarRequestDTO {
    /** 设备保养计划明细ids */
    deviceMaintainDetailPlanIds: number[];
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 设备ids */
    deviceIds: number[];
    /** 排序字段集 */
    orders: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys: string[];
    /** 导出字段集 */
    exportFields: string[];
    /** 保养任务ids */
    taskIds: number[];
    /** 设备类型ids */
    deviceTypeIds: number[];
    /** 产线ids */
    productionLineIds: number[];
    /** 区域ids */
    areaIds: number[];
    /** 保养类型 */
    maintainTypes: string[];
    /** 保养人员ids */
    deviceEmployeeCapacityIds: number[];
    /** 班组ids */
    classGroupIds: number[];
    /** 查询状态 */
    queryStatusList: string[];
    /** 保养计划编号 */
    planCode: string;
    /** 计划开始时间 */
    beginPlanTaskStartDate: string;
    /** 计划结束时间 */
    endPlanTaskStartDate: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column: string;
    /** 是否正序排列，默认Y */
    isAsc: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
