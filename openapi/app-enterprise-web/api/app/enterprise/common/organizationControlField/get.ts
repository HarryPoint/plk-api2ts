import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/公共相关/getOrganizationControlFieldsUsingGET
*/
export default function fetchMethod(options: { params: { flowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListOrganizationControlFieldVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/organizationControlField/get",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«OrganizationControlFieldVO»» */
export interface IJSONResultListOrganizationControlFieldVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOrganizationControlFieldVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** OrganizationControlFieldVO */
export interface IOrganizationControlFieldVO {
    /** id */
    id?: string;
    /** 所属流程id */
    appId?: string;
    /** 编码 */
    code?: string;
    /** 序列 */
    serialNo?: string;
    /** 名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 类型 */
    type?: EOrganizationControlFieldVO_type;
    /** 组织类型 */
    organizationType?: EOrganizationControlFieldVO_organizationType;
    /** 是否是表格内字段 */
    isTableField?: EOrganizationControlFieldVO_isTableField;
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: string;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
    /** 父级流程表单名称 */
    parentFlowPathFormFieldName?: string;
}

export enum EOrganizationControlFieldVO_type {
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

export enum EOrganizationControlFieldVO_organizationType {
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

export enum EOrganizationControlFieldVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
