import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养计划相关/changePlanDetailPlanStartTimeUsingPOST
*/
export default function fetchMethod(options: { data: IMaintenancePlanDetailsMaintenanceStartTimeEditDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceMaintainPlan/changePlanDetailPlanStartTime",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 保养计划明细保养开始时间编辑DTO */
export interface IMaintenancePlanDetailsMaintenanceStartTimeEditDTO {
    /** id */
    id?: string;
    /** 保养开始时间 */
    maintainStartTime?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
