import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/getFlowPathDetailTreeUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
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
    treeType?: EProcessTreeVO_treeType;
    /** 字段集 */
    columns?: IProcessTreeFieldInformationIsReturnedToVO[];
    /** 子集 */
    children?: IProcessTreeVO[];
    /** 流程code */
    flowPathCode?: string;
    /** 流程类型 */
    flowPathType?: EProcessTreeVO_flowPathType;
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
    isSystem?: EProcessTreeFieldInformationIsReturnedToVO_isSystem;
    /** 字段类型 */
    flowPathFormFieldType?: EProcessTreeFieldInformationIsReturnedToVO_flowPathFormFieldType;
    /** 是否是表格内字段 */
    isTableField?: EProcessTreeFieldInformationIsReturnedToVO_isTableField;
    /** 选项集 传值传code，显示name */
    selector?: IFormFieldOption[];
    /** 日期类型 */
    dateType?: EProcessTreeFieldInformationIsReturnedToVO_dateType;
    /** 宽度 */
    span?: number;
    /** 组织类型 */
    organizationType?: EProcessTreeFieldInformationIsReturnedToVO_organizationType;
    /** 关联表单编码 */
    formRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段SerialNo */
    formRpSelectorShowFieldSerialNo?: string;
    /** 是否必填 */
    isMust?: EProcessTreeFieldInformationIsReturnedToVO_isMust;
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

export enum EProcessTreeVO_treeType {
    /** 菜单 */
    MENU = "MENU",
    /** 流程 */
    FLOW = "FLOW",
    /** 流程明细表 */
    FLOW_TABLE = "FLOW_TABLE"
}

export enum EProcessTreeVO_flowPathType {
    /** 单据 */
    BILL = "BILL",
    /** 基础数据 */
    DATA = "DATA",
    /** 多级基础数据 */
    TREE_DATA = "TREE_DATA",
    /** 页面 */
    PAGE = "PAGE"
}

export enum EProcessTreeFieldInformationIsReturnedToVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTreeFieldInformationIsReturnedToVO_flowPathFormFieldType {
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

export enum EProcessTreeFieldInformationIsReturnedToVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTreeFieldInformationIsReturnedToVO_dateType {
    /** 年 */
    DAY = "DAY",
    /** 年 */
    MIN = "MIN",
    /** 年 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EProcessTreeFieldInformationIsReturnedToVO_organizationType {
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

export enum EProcessTreeFieldInformationIsReturnedToVO_isMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
