import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getFlowPathDataAuthDetailListUsingPOST
*/
export default function fetchMethod(options: { data: IProcessRoleDataPermissionDetailsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
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
    roleIds?: string[];
    /** 流程id */
    flowPathId?: string;
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
    ts?: string;
}
/** 流程角色数据权限详情VO */
export interface IProcessRoleDataPermissionDetailsVO {
    /** 数据权限类型 */
    dataAuthType?: EProcessRoleDataPermissionDetailsVO_dataAuthType;
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
    fieldType?: EProcessRoleDataPermissionFieldDetailsVO_fieldType;
    /** 字段组织类型 */
    fieldOrganizationType?: EProcessRoleDataPermissionFieldDetailsVO_fieldOrganizationType;
    /** 是否是表格内字段 */
    isTableField?: EProcessRoleDataPermissionFieldDetailsVO_isTableField;
    /** 父级流程表单code - 表格内字段有值 */
    parentFlowPathFormFieldCode?: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
}

export enum EProcessRoleDataPermissionDetailsVO_dataAuthType {
    SELF = "SELF",
    DEPT = "DEPT",
    ALL = "ALL",
    FLOW_FIELD = "FLOW_FIELD"
}

export enum EProcessRoleDataPermissionFieldDetailsVO_fieldType {
    /** 单行文字 */
    INPUT_TEXT = "INPUT_TEXT",
    /** 多行文字 */
    TEXTAREA = "TEXTAREA",
    /** 数字 */
    NUMBER = "NUMBER",
    /** 日期 */
    DATE = "DATE",
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX",
    /** 图片上传 */
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    /** 附件上传 */
    FILE_UPLOAD = "FILE_UPLOAD",
    /** 表格 */
    TABLE = "TABLE",
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 关联表单多选 */
    FORM_RP_MULTI = "FORM_RP_MULTI",
    /** 流水号 */
    CODE = "CODE",
    /** 地址 */
    ADDRESS = "ADDRESS",
    /** 定位 */
    POSITION = "POSITION",
    /** 电子邮箱 */
    EMAIL = "EMAIL",
    /** 手机号码 */
    MOBILE = "MOBILE",
    /** 身份证号码 */
    ID_CARD = "ID_CARD",
    /** 富文本 */
    RICH_TEXT = "RICH_TEXT",
    /** 关联查询 */
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    /** 说明文字 */
    DESC_TEXT = "DESC_TEXT",
    /** 分隔符 */
    SPLIT_LINE = "SPLIT_LINE",
    /** 批次号 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 自定义公式 */
    FORMULA = "FORMULA"
}

export enum EProcessRoleDataPermissionFieldDetailsVO_fieldOrganizationType {
    /** 非组织 */
    NONE = "NONE",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 人员 */
    USER = "USER",
    /** 处理人 */
    PROCESSOR = "PROCESSOR"
}

export enum EProcessRoleDataPermissionFieldDetailsVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
