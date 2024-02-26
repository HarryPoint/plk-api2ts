import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getFlowPathDataAuthDetailListUsingPOST
*/
export default function fetchMethod(options: { data: IProcessRoleDataPermissionDetailsSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListProcessRoleDataPermissionDetailsVO>(
        {
            url: "/flow-service/flowPath/dataAuth/detail/list",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程角色数据权限详情搜索VO */
export interface IProcessRoleDataPermissionDetailsSearchVO {
    /** 角色id集 */
    roleIds?: number[];
    /** 流程id */
    flowPathId?: number;
}
/** JSONResult«List«流程角色数据权限详情VO»» */
export interface IJSONResultListProcessRoleDataPermissionDetailsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessRoleDataPermissionDetailsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程角色数据权限详情VO */
export interface IProcessRoleDataPermissionDetailsVO {
    /** 数据权限类型 */
    dataAuthType?: ('SELF' | 'DEPT' | 'ALL' | 'FLOW_FIELD');
    /** 流程角色数据权限字段详情列表 */
    flowPathDataAuthFieldDetailList?: IProcessRoleDataPermissionFieldDetailsVO[];
}
/** 流程角色数据权限字段详情VO */
export interface IProcessRoleDataPermissionFieldDetailsVO {
    /** 流程表单字段序列号 */
    flowPathFieldSerialNo?: string;
    /** 流程表单字段编号 */
    flowPathFieldCode?: string;
    /** 字段类型 */
    fieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 字段组织类型 */
    fieldOrganizationType?: ('NONE' | 'CLASS_GROUP' | 'DEPARTMENT' | 'USER' | 'PROCESSOR');
    /** 是否是表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 父级流程表单code - 表格内字段有值 */
    parentFlowPathFormFieldCode?: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
}
