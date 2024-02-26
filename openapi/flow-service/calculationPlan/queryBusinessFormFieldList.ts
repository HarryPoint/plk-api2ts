import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/queryBusinessFormFieldListUsingPOST
*/
export default function fetchMethod(options: { data: IFormFieldQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListFormFieldQueryResponseDTO>(
        {
            url: "/flow-service/calculationPlan/queryBusinessFormFieldList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FormFieldQueryRequestDTO */
export interface IFormFieldQueryRequestDTO {
    /** 应用ID */
    appId?: number;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: EFormFieldQueryRequestDTO_isDetailFlow;
}
/** JSONResult«List«FormFieldQueryResponseDTO»» */
export interface IJSONResultListFormFieldQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormFieldQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FormFieldQueryResponseDTO */
export interface IFormFieldQueryResponseDTO {
    /** ID */
    id?: number;
    /** 编码 */
    code?: string;
    /** 序列号 */
    serialNo?: string;
    /** 名称 */
    name?: string;
    /** 表单字段类型 */
    formFieldType?: EFormFieldQueryResponseDTO_formFieldType;
}

export enum EFormFieldQueryRequestDTO_isDetailFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFormFieldQueryResponseDTO_formFieldType {
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
