import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/应用相关/getPrintTemplateSelectorUsingGET
export default function fetchMethod(params: { flowPathId: number }) {
    return http<IJSONResultListProcessPrintTemplateReturnsVO>({
        url: "/app-enterprise-web/api/app/enterprise/application/getPrintTemplateSelector",
        method: "get",
        params,
    });
}
// JSONResult«List«流程打印模板返回VO»»
export interface IJSONResultListProcessPrintTemplateReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessPrintTemplateReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程打印模板返回VO
export interface IProcessPrintTemplateReturnsVO {
    // 模板id
    id: number;
    // 模板名称
    name: string;
    // 模板结构代码
    templateStructure: string;
    // 打印类型
    printType: string;
    // 打印类型描述
    printTypeDesc: string;
}
