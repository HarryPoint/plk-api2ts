// JSONResult«List«项目任务模板响应DTO»»
export interface IJSONResultList项目任务模板响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务模板响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务模板响应DTO
export interface I项目任务模板响应DTO {
    // 项目任务模板id
    id: number;
    // 项目id
    projectId: number;
    // 是否是通用模板
    isDefault: string;
    // 模板名称
    name: string;
    // 应用编号
    appCode: string;
    // 应用id
    appId: number;
}
