// 进出料信息查询DTO
export interface I进出料信息查询DTO {
    // 任务id
    taskId: number;
}
// JSONResult«进出料信息响应对象»
export interface IJSONResult进出料信息响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进出料信息响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
