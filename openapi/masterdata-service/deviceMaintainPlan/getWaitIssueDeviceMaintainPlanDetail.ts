import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备保养计划相关/getWaitIssueDeviceMaintainPlanDetailUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IMaintenancePlanDetailsToBeDeliveredResponseDTO[]>(
        {
            url: "/masterdata-service/deviceMaintainPlan/getWaitIssueDeviceMaintainPlanDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** 保养计划明细待下发响应DTO */
export interface IMaintenancePlanDetailsToBeDeliveredResponseDTO {
    /** id */
    id?: number;
    /** 设备保养计划id */
    deviceMaintainPlanId?: number;
    /** 设备id */
    deviceId?: number;
    /** 设备编号 */
    deviceCode?: string;
    /** 设备类型id */
    deviceTypeId?: number;
    /** 所属区域id */
    areaId?: number;
    /** 保养类型 */
    maintainType?: EMaintenancePlanDetailsToBeDeliveredResponseDTO_maintainType;
    /** 保养方案id */
    maintainSchemeId?: number;
    /** 保养开始时间 */
    maintainStartTime?: string;
    /** 计划明细状态 */
    planDetailStatus?: EMaintenancePlanDetailsToBeDeliveredResponseDTO_planDetailStatus;
}

export enum EMaintenancePlanDetailsToBeDeliveredResponseDTO_maintainType {
    /** 年 */
    YEAR = "YEAR",
    /** 半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum EMaintenancePlanDetailsToBeDeliveredResponseDTO_planDetailStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
