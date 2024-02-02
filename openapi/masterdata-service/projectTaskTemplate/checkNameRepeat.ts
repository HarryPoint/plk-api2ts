// 项目任务模板名称重复校验请求DTO
export interface I项目任务模板名称重复校验请求DTO {
    // 项目id
    projectId: number;
    // 应用流程id
    flowPathId: number;
    // 应用流程名称
    flowPathName: string;
}
// JSONResult«string»_1
export interface IJSONResultstring_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
