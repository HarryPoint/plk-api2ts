import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/公共相关/getFieldDataPageSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IProcessAssociationFormSearchVO }, extraOptions?: any) {
    return http<IJSONResultProcessAssociationFormQueryReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/getFieldDataPageSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程关联表单搜索VO */
export interface IProcessAssociationFormSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 非通用：查询表单编码， 即 当flowPathFormFieldId = null时，可以 flowPathCode、fieldSerialNo联合使用来查询关联表单数据 */
    flowPathCode?: string;
    /** 通用：模糊搜索值 */
    globalSearch?: string;
    /** 通用：业务数据ID（也叫表单记录ID列表）列表 */
    businessDataIdList?: string[];
    /** 通用：来自表单过滤条件，当 值 = Y 时，系统将忽略应用引擎配置的筛选条件。 */
    fromFormFilterCondition?: EProcessAssociationFormSearchVO_fromFormFilterCondition;
    /** 非通用：查询表单id， 即 用户正在操作的关联表单。其和查询表单编码、字段序列号处于互斥 */
    flowPathFormFieldId?: string;
    /** 非通用：字段序列号， 即 当flowPathFormFieldId = null时，可以 flowPathCode、fieldSerialNo联合使用来查询关联表单数据 */
    fieldSerialNo?: string;
    /** 通用：提交项， 用户编辑的数据 */
    submitFieldsJsonObject?: Record<string, Record<string, any>>;
    /** 通用：精确匹配字段的字段编码 */
    matchingFieldCode?: string;
    /** 通用：精确匹配的值列表。1、精确匹配的字段优先是matchingFieldSerialNo。  2、再第一项不成立的时候，搜索的表.列。是关联表单显示字段的字段名、以及关联表单影响的列 */
    matchingValueList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«流程关联表单查询返回VO» */
export interface IJSONResultProcessAssociationFormQueryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessAssociationFormQueryReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程关联表单查询返回VO */
export interface ITheProcessAssociationFormQueryReturnsVO {
    /** 选择框样式 */
    style?: ETheProcessAssociationFormQueryReturnsVO_style;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 字段列表 */
    fieldList?: ITheProcessAssociationFormHeaderQueryReturnsVO[];
    /** 数据列表 */
    dataList?: IMapstringstring[];
}
/** 流程关联表单表头查询返回VO */
export interface ITheProcessAssociationFormHeaderQueryReturnsVO {
    /** code */
    code?: string;
    /** 名称 */
    name?: string;
    /** 序列号 */
    serialNo?: string;
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 表单类型 */
    formFieldType?: ETheProcessAssociationFormHeaderQueryReturnsVO_formFieldType;
    /** 日期类型 */
    dateType?: ETheProcessAssociationFormHeaderQueryReturnsVO_dateType;
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
/** Map«string,string» */
export interface IMapstringstring {
}

export enum EProcessAssociationFormSearchVO_fromFormFilterCondition {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum ETheProcessAssociationFormQueryReturnsVO_style {
    /** 高级 */
    ADVANCED = "ADVANCED",
    /** 级联 */
    CASCADE = "CASCADE"
}

export enum ETheProcessAssociationFormHeaderQueryReturnsVO_formFieldType {
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

export enum ETheProcessAssociationFormHeaderQueryReturnsVO_dateType {
    /** 年-月-日 */
    DAY = "DAY",
    /** 年-月-日 时:分 */
    MIN = "MIN",
    /** 年-月-日 时:分:秒 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年-月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}
