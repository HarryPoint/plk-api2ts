import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/打印数据源相关/getFieldsByDataSourceIdUsingGET
*/
export default function fetchMethod(options: { params: { dataSourceId?: string; printTemplateType?: EprintTemplateType } }, extraOptions?: any) {
    return http<IJSONResultListDataSourceFieldResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/datasource/getFieldsByDataSourceId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«数据源字段响应对象»» */
export interface IJSONResultListDataSourceFieldResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataSourceFieldResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 数据源字段响应对象 */
export interface IDataSourceFieldResponseObject {
    /** id/流程表单字段id */
    id?: number;
    /** 父级id */
    parentId?: number;
    /** 父级serialNo */
    parentSerialNo?: string;
    /** 所属企业id */
    enterpriseId?: number;
    /** 数据源id */
    dataSourceId?: number;
    /** 字段编码 */
    fieldCode?: string;
    /** serialNo */
    serialNo?: string;
    /** 字段名称 */
    fieldName?: string;
    /** 字段类型 */
    fieldType?: EDataSourceFieldResponseObject_fieldType;
    /** 是否子表字段 */
    isTableField?: EDataSourceFieldResponseObject_isTableField;
    /** 是否(列表、详情页面)查询时隐藏 */
    isQueryHidden?: EDataSourceFieldResponseObject_isQueryHidden;
    /** 原数据排序 */
    sort?: number;
    /** 明细字段集合 */
    childDataSourceFields?: IDataSourceFieldResponseObject[];
}

export enum EprintTemplateType {
    LIST = "LIST",
    FORM = "FORM",
    FORM_DETAIL = "FORM_DETAIL"
}

export enum EDataSourceFieldResponseObject_fieldType {
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

export enum EDataSourceFieldResponseObject_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataSourceFieldResponseObject_isQueryHidden {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
