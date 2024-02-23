import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarByDeviceModeUsingPOST
export default function fetchMethod(data: IEquipmentMaintenanceCalendarRequestDTO) {
    return post<IJSONResultPagingInformationDeviceMaintenanceCalendarDeviceModeRespondsToDTO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/deviceMaintainCalendar/getDeviceMaintainCalendarByDeviceMode",
      data,
    });
}
// 设备保养日历请求DTO
export interface IEquipmentMaintenanceCalendarRequestDTO {
    // 设备保养计划明细ids
    deviceMaintainDetailPlanIds: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 设备ids
    deviceIds: number[];
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 保养任务ids
    taskIds: number[];
    // 设备类型ids
    deviceTypeIds: number[];
    // 产线ids
    productionLineIds: number[];
    // 区域ids
    areaIds: number[];
    // 保养类型
    maintainTypes: string[];
    // 保养人员ids
    deviceEmployeeCapacityIds: number[];
    // 班组ids
    classGroupIds: number[];
    // 查询状态
    queryStatusList: string[];
    // 保养计划编号
    planCode: string;
    // 计划开始时间
    beginPlanTaskStartDate: string;
    // 计划结束时间
    endPlanTaskStartDate: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«设备保养日历-设备模式响应DTO»»
export interface IJSONResultPagingInformationDeviceMaintenanceCalendarDeviceModeRespondsToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationDeviceMaintenanceCalendarDeviceModeRespondsToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«设备保养日历-设备模式响应DTO»
export interface IPagingInformationDeviceMaintenanceCalendarDeviceModeRespondsToDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDeviceMaintenanceCalendarDeviceModeRespondsToDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 设备保养日历-设备模式响应DTO
export interface IDeviceMaintenanceCalendarDeviceModeRespondsToDTO {
    // 设备编号
    deviceCode: string;
    // 设备名称
    deviceName: string;
    // 设备类型
    deviceTypeName: string;
    // 产线
    productionLineName: string;
    // 区域
    areaName: string;
    // 明细详情
    details: IDeviceMaintenanceCalendarDeviceModeDetailsRespondToDTO[];
}
// 设备保养日历-设备模式详情响应DTO
export interface IDeviceMaintenanceCalendarDeviceModeDetailsRespondToDTO {
    // 保养类型
    maintainType: string;
    // 时间详情
    timeDetails: IDeviceMaintenanceCalendarDeviceModeDetailsTimeResponseDTO[];
}
// 设备保养日历-设备模式详情时间响应DTO
export interface IDeviceMaintenanceCalendarDeviceModeDetailsTimeResponseDTO {
    // 保养任务id
    taskId: number;
    // 设备保养计划id
    deviceMaintainPlanId: number;
    // 设备保养计划明细id
    deviceMaintainDetailPlanId: number;
    // 计划开始时间
    planTaskStartDate: string;
    // 计划结束时间
    planTaskEndDate: string;
    // 任务开始时间
    taskStartDate: string;
    // 任务结束时间
    taskEndDate: string;
    // 任务状态
    taskStatus: string;
    // 返回类型
    resultType: string;
    // 查询状态
    queryStatus: string;
}
