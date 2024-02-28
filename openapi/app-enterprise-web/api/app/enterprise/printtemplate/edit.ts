import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/打印模板相关/editUsingPOST_15
*/
export default function fetchMethod(options: { data: IPrintTheTemplateRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/printtemplate/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 打印模板请求对象 */
export interface IPrintTheTemplateRequestObject {
    /** id */
    id?: string;
    /** 模板名称 */
    name?: string;
    /** 数据源id */
    dataSourceId?: string;
    /** 企业路由id */
    enterpriseRouterIds?: string[];
    /** 模板类型 */
    type?: EPrintTheTemplateRequestObject_type;
    /** 画布大小类型 */
    canvasSizeType?: EPrintTheTemplateRequestObject_canvasSizeType;
    /** 画布高 */
    height?: number;
    /** 画布宽 */
    width?: number;
    /** 画布方向类型 */
    canvasDirectionType?: EPrintTheTemplateRequestObject_canvasDirectionType;
    /** 每页添加表头表尾 */
    sameHeaderTail?: EPrintTheTemplateRequestObject_sameHeaderTail;
    /** 每页添加表格列名称 */
    sameColumn?: EPrintTheTemplateRequestObject_sameColumn;
    /** 是否需要一页纸张打印多个模板 */
    mutiTemplate?: EPrintTheTemplateRequestObject_mutiTemplate;
    /** 背景图片key */
    bgPicKey?: string;
    /** 模板JSON结构 */
    printTemplateJson?: Record<string, Record<string, any>>;
    /** 模板字段集合 */
    printTemplateFields?: IPrintTheTemplateFieldRequestObject[];
}
/** 打印模板字段请求对象 */
export interface IPrintTheTemplateFieldRequestObject {
    /** id */
    id?: string;
    /** 字段编码 */
    code?: string;
    /** 字段名称 */
    name?: string;
    /** 字段类型 */
    type?: EPrintTheTemplateFieldRequestObject_type;
    /** 数据源id */
    dataSourceId?: string;
    /** 关联表单字段id */
    fieldId?: string;
    /** 关联字段编码 */
    fieldCode?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** serialNo */
    serialNo?: string;
    /** 文本内容 */
    textContent?: string;
    /** 是否表格内字段 */
    isTableField?: EPrintTheTemplateFieldRequestObject_isTableField;
    /** 扫码类型 */
    scanCodeType?: EPrintTheTemplateFieldRequestObject_scanCodeType;
    /** 扫码内容 */
    scanCodeContent?: string;
    /** 图片key */
    imageKey?: string;
    /** 线条方向 */
    lineDirection?: EPrintTheTemplateFieldRequestObject_lineDirection;
    /** 页眉内容 */
    headerContent?: string;
    /** 页脚内容 */
    footerContent?: string;
    /** 字段配置 */
    fieldConfig?: string;
    /** 表单字段数值格式类型 */
    formFieldNumberFormat?: EPrintTheTemplateFieldRequestObject_formFieldNumberFormat;
    /** 子表字段 */
    childPrintTemplateFields?: IPrintTheTemplateFieldRequestObject[];
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

export enum EPrintTheTemplateRequestObject_type {
    /** 打印列表类型 */
    LIST = "LIST",
    /** 打印单据类型 */
    FORM = "FORM",
    /** 打印明细类型 */
    FORM_DETAIL = "FORM_DETAIL"
}

export enum EPrintTheTemplateRequestObject_canvasSizeType {
    /** A3 */
    A3 = "A3",
    /** A4 */
    A4 = "A4",
    /** A5 */
    A5 = "A5",
    /** A6 */
    A6 = "A6",
    /** 自定义 */
    CUSTOM = "CUSTOM"
}

export enum EPrintTheTemplateRequestObject_canvasDirectionType {
    /** 横向 */
    TRANSVERSE = "TRANSVERSE",
    /** 纵向 */
    LONGITUDINAL = "LONGITUDINAL"
}

export enum EPrintTheTemplateRequestObject_sameHeaderTail {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPrintTheTemplateRequestObject_sameColumn {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPrintTheTemplateRequestObject_mutiTemplate {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPrintTheTemplateFieldRequestObject_type {
    /** 字段 */
    FIELD = "FIELD",
    /** 文本 */
    TEXT = "TEXT",
    /** 表格 */
    TABLE = "TABLE",
    /** 条形码 */
    BAR_CODE = "BAR_CODE",
    /** 二维码 */
    QR_CODE = "QR_CODE",
    /** 图片 */
    IMAGE = "IMAGE",
    /** 线条 */
    LINE = "LINE",
    /** 页眉 */
    HEADER = "HEADER",
    /** 页脚 */
    FOOTER = "FOOTER",
    /** 页码 */
    PAGE_NO = "PAGE_NO"
}

export enum EPrintTheTemplateFieldRequestObject_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPrintTheTemplateFieldRequestObject_scanCodeType {
    /** 表单字段 */
    FORM_FIELD = "FORM_FIELD",
    /** 自定义内容 */
    CUSTOM = "CUSTOM",
    /** 表单添加跳转链接 */
    ADD_FORM_URL = "ADD_FORM_URL"
}

export enum EPrintTheTemplateFieldRequestObject_lineDirection {
    /** 横向 */
    TRANSVERSE = "TRANSVERSE",
    /** 纵向 */
    LONGITUDINAL = "LONGITUDINAL"
}

export enum EPrintTheTemplateFieldRequestObject_formFieldNumberFormat {
    /** % */
    F1 = "F1",
    /** ￥ */
    F2 = "F2",
    /** $ */
    F3 = "F3",
    /** 金额大写 */
    F4 = "F4"
}
