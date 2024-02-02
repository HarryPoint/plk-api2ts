// 流程结构搜索VO
export interface I流程结构搜索VO {
    // 流程任务id
    flowPathTaskId: number;
    // 数据id
    id: number;
}
// JSONResult«巡检计划动态数据响应dto»
export interface IJSONResult巡检计划动态数据响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 巡检计划动态数据响应dto;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
