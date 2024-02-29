import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/getPrintTemplateSelectorUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPrintTemplateReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/getPrintTemplateSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程打印模板返回VO»» */
export interface IJSONResultListProcessPrintTemplateReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPrintTemplateReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程打印模板返回VO */
export interface IProcessPrintTemplateReturnsVO {
    /** 模板id */
    id?: string;
    /** 模板名称 */
    name?: string;
    /** 模板结构代码 */
    templateStructure?: string;
    /** 打印类型 */
    printType?: EProcessPrintTemplateReturnsVO_printType;
    /** 打印类型描述 */
    printTypeDesc?: string;
}

export enum EProcessPrintTemplateReturnsVO_printType {
    /** 单行 */
    SINGLE_LINE = "SINGLE_LINE",
    /** 多行 */
    MULTI_LINE = "MULTI_LINE"
}
