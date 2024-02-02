// 设置检验任务检验方式请求DTO
export interface I设置检验任务检验方式请求DTO {
    // 检验方式
    taskInspectionMethodType: string;
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
