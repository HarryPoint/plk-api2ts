// JSONResult«List«项目任务模板组织响应DTO»»
export interface IJSONResultList项目任务模板组织响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务模板组织响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务模板组织响应DTO
export interface I项目任务模板组织响应DTO {
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
    // 组织字段集
    fields: I项目任务模板组织字段响应DTO[];
}
// 项目任务模板组织字段响应DTO
export interface I项目任务模板组织字段响应DTO {
    // 应用字段序列号
    appFieldSerialNo: string;
    // 应用字段名
    appFieldName: string;
    // 是否是表格内字段
    isTableField: string;
}
