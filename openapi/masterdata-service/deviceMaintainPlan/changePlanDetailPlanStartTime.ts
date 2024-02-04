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
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
