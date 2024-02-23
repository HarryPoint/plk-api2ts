import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/设备保养计划相关/changePlanDetailPlanStartTimeUsingPOST
export default function fetchMethod(data: IMaintenancePlanDetailsMaintenanceStartTimeEditDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/deviceMaintainPlan/changePlanDetailPlanStartTime",
        method: "post",
        data,
    });
}
// 保养计划明细保养开始时间编辑DTO
export interface IMaintenancePlanDetailsMaintenanceStartTimeEditDTO {
    // id
    id: number;
    // 保养开始时间
    maintainStartTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
