import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备保养计划相关/listByPlanDateRangeUsingPOST
*/
export default function fetchMethod(data: IScheduleStartEndDateQueryTheDTO, extraOptions?: any) {
    return http<IJSONResultListMaintenancePlanRespondsToTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceMaintainPlan/listByPlanDateRange",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 计划开始结束日期查询DTO */
export interface IScheduleStartEndDateQueryTheDTO {
    /** planId */
    planId: number;
    /** 计划开始日期 */
    planStartDate: string;
    /** 计划结束日期 */
    planEndDate: string;
}
/** JSONResult«List«保养计划响应DTO»» */
export interface IJSONResultListMaintenancePlanRespondsToTheDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IMaintenancePlanRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 保养计划响应DTO */
export interface IMaintenancePlanRespondsToDTO {
    /** id */
    id: number;
    /** 编号 */
    code: string;
    /** 保养计划名称 */
    name: string;
    /** 保养计划开始日期 */
    maintainPlanStartDate: string;
    /** 保养计划截止日期 */
    maintainPlanEndDate: string;
    /** 保养任务提前下发时间 */
    maintainPlanIssueTime: number;
    /** 单位 */
    maintainPlanIssueTimeUnit: string;
    /** 备注 */
    remark: string;
    /** 计划明细 */
    planDetailList: IMaintenancePlanDetailsRespondToDTO[];
}
/** 保养计划明细响应DTO */
export interface IMaintenancePlanDetailsRespondToDTO {
    /** 设备id */
    deviceId: number;
    /** 设备编号 */
    deviceCode: string;
    /** 设备名称 */
    deviceName: string;
    /** 设备数据状态(0:停用，1:启用) */
    deviceDataStatus: number;
    /** 设备类型id */
    deviceTypeId: number;
    /** 设备类型名称 */
    deviceTypeName: string;
    /** 产线id */
    productionLineId: number;
    /** 产线名称 */
    productionLineName: string;
    /** 所属区域id */
    areaId: number;
    /** 所属区域 */
    areaName: string;
    /** 保养明细 */
    planDetails: IMaintenancePlanDetailsRespondToDTO[];
}
/** 保养计划明细项响应DTO */
export interface IMaintenancePlanDetailsRespondToDTO {
    /** 保养类型 */
    maintainType: string;
    /** 保养方案id */
    maintainSchemeId: number;
    /** 保养方案名称 */
    maintainSchemeName: string;
    /** 保养时间 */
    times: IMaintenancePlanDetailsTimeResponseDTO[];
}
/** 保养计划明细项时间响应DTO */
export interface IMaintenancePlanDetailsTimeResponseDTO {
    /** id */
    id: number;
    /** 设备保养计划id */
    deviceMaintainPlanId: number;
    /** 设备id */
    deviceId: number;
    /** 设备编号 */
    deviceCode: string;
    /** 设备类型id */
    deviceTypeId: number;
    /** 产线id */
    productionLineId: number;
    /** 所属区域id */
    areaId: number;
    /** 保养类型 */
    maintainType: string;
    /** 保养方案id */
    maintainSchemeId: number;
    /** 保养开始时间 */
    maintainStartTime: string;
    /** 计划明细状态 */
    planDetailStatus: string;
}
