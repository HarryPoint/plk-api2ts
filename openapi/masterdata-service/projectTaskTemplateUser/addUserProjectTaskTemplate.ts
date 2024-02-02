// 项目任务模板用户添加请求DTO
export interface I项目任务模板用户添加请求DTO {
    // 项目id
    projectId: number;
    // 项目任务模板id
    projectTaskTemplateId: number;
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
