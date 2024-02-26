import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/getFlowPathDetailTreeUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListProcessTreeVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/getFlowPathDetailTree",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程树VO»» */
export interface IJSONResultListProcessTreeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessTreeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程树VO */
export interface IProcessTreeVO {
    /** 路由id */
    routerId?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 流程id */
    flowPathId?: number;
    /** 流程树类型 */
    treeType?: string;
    /** 字段集 */
    columns?: IProcessTreeFieldInformationIsReturnedToVO[];
    /** 子集 */
    children?: IProcessTreeVO[];
    /** 流程code */
    flowPathCode?: string;
    /** 流程类型 */
    flowPathType?: string;
}
/** 流程树字段信息返回VO */
export interface IProcessTreeFieldInformationIsReturnedToVO {
    /** 字段id */
    flowPathFormFieldId?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 序号值 */
    serialNo?: string;
    /** 是否是系统字段 */
    isSystem?: string;
    /** 字段类型 */
    flowPathFormFieldType?: string;
    /** 是否是表格内字段 */
    isTableField?: string;
    /** 选项集 传值传code，显示name */
    selector?: IFormFieldOption[];
    /** 日期类型 */
    dateType?: string;
    /** 宽度 */
    span?: number;
    /** 组织类型 */
    organizationType?: string;
    /** 关联表单编码 */
    formRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段SerialNo */
    formRpSelectorShowFieldSerialNo?: string;
    /** 是否必填 */
    isMust?: string;
}
/** FormFieldOption */
export interface IFormFieldOption {
    /** undefined */
    name?: string;
    /** undefined */
    code?: string;
    /** undefined */
    color?: string;
}
