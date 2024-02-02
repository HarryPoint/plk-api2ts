// JSONResult«List«生产任务自定义卡片样式响应对象DTO»»
export interface IJSONResultList生产任务自定义卡片样式响应对象DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产任务自定义卡片样式响应对象DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务自定义卡片样式响应对象DTO
export interface I生产任务自定义卡片样式响应对象DTO {
    // id
    id: number;
    // 字段名称
    formFieldName: string;
    // 字段code
    formFieldCode: string;
    // 字段类型
    formFieldType: string;
    // 字段表
    formFieldTable: string;
    // 显示位置
    displayPosition: string;
    // 扩展元数据
    metaData: string;
}
