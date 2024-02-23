import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/设备保养日历相关/getDeviceMaintainCalendarUsingPOST
export default function fetchMethod(data: IEquipmentMaintenanceCalendarRequestDTO, extraOptions?: any) {
    return http<IJSONResultListDeviceMaintenanceCalendarResponseDTO>(
        {
            url: "/masterdata-service/deviceMaintainCalendar/getDeviceMaintainCalendar",
            method: "post",
            data,
        },
        extraOptions,
    );
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
// JSONResult«List«设备保养日历响应DTO»»
export interface IJSONResultListDeviceMaintenanceCalendarResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEquipmentMaintenanceCalendarRespondsToDTO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备保养日历响应DTO_1
export interface IEquipmentMaintenanceCalendarRespondsToDTO1 {
    // 天
    day: string;
    // 天详情
    dayDetails: IEquipmentMaintenanceCalendarRespondsToDTO[];
}
// 设备保养日历响应DTO
export interface IEquipmentMaintenanceCalendarRespondsToDTO {
    // 保养任务id
    taskId: number;
    // 设备保养计划id
    deviceMaintainPlanId: number;
    // 设备保养计划明细id
    deviceMaintainDetailPlanId: number;
    // 设备编号
    deviceCode: string;
    // 设备名称
    deviceName: string;
    // 保养计划编号
    planCode: string;
    // 任务编号
    taskCode: string;
    // 保养类型
    maintainType: string;
    // 保养方案
    maintainSchemeName: string;
    // 计划开始时间
    planTaskStartDate: string;
    // 计划结束时间
    planTaskEndDate: string;
    // 任务开始时间
    taskStartDate: string;
    // 任务结束时间
    taskEndDate: string;
    // 保养人
    deviceEmployeeCapacityNames: string[];
    // 执行人
    executorName: string;
    // 任务状态
    taskStatus: string;
    // 返回类型
    resultType: string;
    // 查询状态
    queryStatus: string;
    // 保养内容
    maintainDetails: IMaintenanceContentReturnedToDTO[];
    // 消耗备件
    maintainPartsDetails: IMaintenanceSparePartsReturnedToDTO[];
}
// 保养内容返回DTO
export interface IMaintenanceContentReturnedToDTO {
    // 保养项目
    maintainName: string;
    // 具体描述
    maintainDesc: string;
    // 保养执行记录
    executorRecord: string;
    // 保养情况
    situation: string;
    // 备注
    remark: string;
}
// 保养消耗备件返回DTO
export interface IMaintenanceSparePartsReturnedToDTO {
    // 备件id
    devicePartsId: number;
    // 备件名称
    devicePartsName: string;
    // 备件编号
    devicePartsCode: string;
    // 备件单位
    devicePartsUnit: string;
    // 单位id
    devicePartsUnitId: number;
    // 计划消耗数量
    planConsumerQuantity: number;
    // 实际消耗数量
    consumerQuantity: number;
}
