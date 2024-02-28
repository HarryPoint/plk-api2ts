import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/设备保养计划相关/changePlanDetailPlanStartTimeUsingPOST
*/
export default function fetchMethod(options: { data: IMaintenancePlanDetailsMaintenanceStartTimeEditDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceMaintainPlan/changePlanDetailPlanStartTime",
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
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
