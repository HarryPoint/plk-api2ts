import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养计划相关/getUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultMaintenancePlanRespondsToDTO>(
        {
            url: "/masterdata-service/deviceMaintainPlan/get",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«保养计划响应DTO» */
export interface IJSONResultMaintenancePlanRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaintenancePlanRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 保养计划响应DTO */
export interface IMaintenancePlanRespondsToDTO {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 保养计划名称 */
    name?: string;
    /** 保养计划开始日期 */
    maintainPlanStartDate?: number;
    /** 保养计划截止日期 */
    maintainPlanEndDate?: number;
    /** 保养任务提前下发时间 */
    maintainPlanIssueTime?: number;
    /** 单位 */
    maintainPlanIssueTimeUnit?: EMaintenancePlanRespondsToDTO_maintainPlanIssueTimeUnit;
    /** 备注 */
    remark?: string;
    /** 计划明细 */
    planDetailList?: IMaintenancePlanDetailsRespondToDTO[];
}
/** 保养计划明细响应DTO */
export interface IMaintenancePlanDetailsRespondToDTO {
    /** 设备id */
    deviceId?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 设备数据状态(0:停用，1:启用) */
    deviceDataStatus?: number;
    /** 设备类型id */
    deviceTypeId?: string;
    /** 设备类型名称 */
    deviceTypeName?: string;
    /** 产线id */
    productionLineId?: string;
    /** 产线名称 */
    productionLineName?: string;
    /** 所属区域id */
    areaId?: string;
    /** 所属区域 */
    areaName?: string;
    /** 保养明细 */
    planDetails?: IMaintenancePlanDetailsRespondToDTO[];
}
/** 保养计划明细项响应DTO */
export interface IMaintenancePlanDetailsRespondToDTO {
    /** 保养类型 */
    maintainType?: EMaintenancePlanDetailsRespondToDTO_maintainType;
    /** 保养方案id */
    maintainSchemeId?: string;
    /** 保养方案名称 */
    maintainSchemeName?: string;
    /** 保养时间 */
    times?: IMaintenancePlanDetailsTimeResponseDTO[];
}
/** 保养计划明细项时间响应DTO */
export interface IMaintenancePlanDetailsTimeResponseDTO {
    /** id */
    id?: string;
    /** 设备保养计划id */
    deviceMaintainPlanId?: string;
    /** 设备id */
    deviceId?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备类型id */
    deviceTypeId?: string;
    /** 产线id */
    productionLineId?: string;
    /** 所属区域id */
    areaId?: string;
    /** 保养类型 */
    maintainType?: EMaintenancePlanDetailsTimeResponseDTO_maintainType;
    /** 保养方案id */
    maintainSchemeId?: string;
    /** 保养开始时间 */
    maintainStartTime?: number;
    /** 计划明细状态 */
    planDetailStatus?: EMaintenancePlanDetailsTimeResponseDTO_planDetailStatus;
}

export enum EMaintenancePlanRespondsToDTO_maintainPlanIssueTimeUnit {
    /** 小时 */
    HOUR = "HOUR",
    /** 天 */
    DAY = "DAY",
    /** 周 */
    WEEK = "WEEK",
    /** 月 */
    MONTH = "MONTH"
}

export enum EMaintenancePlanDetailsRespondToDTO_maintainType {
    /** 年 */
    YEAR = "YEAR",
    /** 半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum EMaintenancePlanDetailsTimeResponseDTO_maintainType {
    /** 年 */
    YEAR = "YEAR",
    /** 半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum EMaintenancePlanDetailsTimeResponseDTO_planDetailStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
