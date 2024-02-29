import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产任务自定义卡片样式相关/editUsingPOST_13
*/
export default function fetchMethod(options: { data: IProductionTaskCustomCardStyleEditListObjectDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceTaskCustomCardStyle/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务自定义卡片样式编辑list对象DTO */
export interface IProductionTaskCustomCardStyleEditListObjectDTO {
    /** undefined */
    customCardStyleList?: IProductionTaskCustomCardStyleEditObjectDTO[];
}
/** 生产任务自定义卡片样式编辑对象DTO */
export interface IProductionTaskCustomCardStyleEditObjectDTO {
    /** 字段名称 */
    formFieldName?: string;
    /** 字段code */
    formFieldCode?: string;
    /** 字段类型 */
    formFieldType?: EProductionTaskCustomCardStyleEditObjectDTO_formFieldType;
    /** 字段表 */
    formFieldTable?: EProductionTaskCustomCardStyleEditObjectDTO_formFieldTable;
    /** 显示位置 */
    displayPosition?: string;
    /** 扩展元数据 */
    metaData?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProductionTaskCustomCardStyleEditObjectDTO_formFieldType {
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

export enum EProductionTaskCustomCardStyleEditObjectDTO_formFieldTable {
    /** 生产订单表 */
    PRODUCE_ORDER = "PRODUCE_ORDER",
    /** 生产任务表 */
    PRODUCE_TASK = "PRODUCE_TASK"
}
