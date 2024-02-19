// 保存企业字段分隔规则
export interface ISaveTheEnterpriseFieldSeparationRule {
    // 表定义
    tableDefine: IAssociationTableDefinition;
    // 字段定义
    fieldDefine: IAssociatedFieldDefinition;
    // 模板
    template: IAssociationTemplate;
    // 分隔字符
    splitChar: string;
}
// 关联表定义
export interface IAssociationTableDefinition {
    // undefined
    code: string;
}
// 关联字段定义
export interface IAssociatedFieldDefinition {
    // undefined
    code: string;
}
// 关联模板
export interface IAssociationTemplate {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    name: string;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
