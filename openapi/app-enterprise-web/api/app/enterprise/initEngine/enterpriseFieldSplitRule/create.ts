import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎-企业字段分割规则/saveEnterpriseFieldSplitRuleUsingPOST
export default function fetchMethod(data: IEnterpriseFieldSplittingRule) {
    return http<IJSONResultstring>({
        url: "/app-enterprise-web/api/app/enterprise/initEngine/enterpriseFieldSplitRule/create",
        method: "post",
        data,
    });
}
// 企业字段拆分规则
export interface IEnterpriseFieldSplittingRule {
    // ID
    id: number;
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
