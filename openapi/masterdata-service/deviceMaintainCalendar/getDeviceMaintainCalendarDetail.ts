// 设备保养日历详情请求DTO
export interface I设备保养日历详情请求DTO {
    // 保养任务id
    taskId: number;
    // 设备保养计划明细id
    deviceMaintainDetailPlanId: number;
}
// JSONResult«设备保养日历响应DTO»
export interface IJSONResult设备保养日历响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备保养日历响应DTO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
