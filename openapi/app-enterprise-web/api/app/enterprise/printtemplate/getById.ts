import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/打印模板相关/getByIdUsingGET_12
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultPrintsTheTemplateResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/printtemplate/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«打印模板响应对象» */
export interface IJSONResultPrintsTheTemplateResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPrintTemplateResponseObject1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 打印模板响应对象_1 */
export interface IPrintTemplateResponseObject1 {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 打印模板类型 */
    type?: EPrintTemplateResponseObject1_type;
    /** 数据源权限码 */
    pcode?: string;
    /** 数据源名称 */
    name?: string;
    /** 数据源类型 */
    dataSourceType?: EPrintTemplateResponseObject1_dataSourceType;
    /** 父级数据源id */
    parentId?: string;
    /** 应用流程id */
    flowPathId?: string;
    /** 应用流程状态 */
    flowPathDataStatus?: number;
    /** 发布位置路由id */
    enterpriseRouterId?: string;
    /** 发布位置 */
    publishPosition?: string;
    /** 发布位置路由 */
    publishPositionPath?: string[];
    /** 模板JSON结构 */
    printTemplateJson?: string;
    /** 模板字段信息 */
    printTemplateFields?: IPrintTheTemplateResponseObject[];
    /** 更新时间 */
    updateTime?: number;
}
/** 打印模板响应对象 */
export interface IPrintTheTemplateResponseObject {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 打印模板id */
    printTemplateId?: string;
    /** 字段编码 */
    code?: string;
    /** 字段名称 */
    name?: string;
    /** 字段类型 */
    type?: EPrintTheTemplateResponseObject_type;
    /** 关联表单字段id */
    fieldId?: string;
    /** 关联字段编码 */
    fieldCode?: string;
    /** 字段序列号 */
    serialNo?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** 文本内容 */
    textContent?: string;
    /** 是否表格内字段 */
    isTableField?: EPrintTheTemplateResponseObject_isTableField;
    /** 扫码类型 */
    scanCodeType?: EPrintTheTemplateResponseObject_scanCodeType;
    /** 扫码内容 */
    scanCodeContent?: string;
    /** 图片key */
    imageKey?: string;
    /** 线条方向 */
    lineDirection?: EPrintTheTemplateResponseObject_lineDirection;
    /** 页眉内容 */
    headerContent?: string;
    /** 页脚内容 */
    footerContent?: string;
    /** 字段配置 */
    fieldConfig?: string;
}

export enum EPrintTemplateResponseObject1_type {
    /** 打印列表类型 */
    LIST = "LIST",
    /** 打印单据类型 */
    FORM = "FORM",
    /** 打印明细类型 */
    FORM_DETAIL = "FORM_DETAIL"
}

export enum EPrintTemplateResponseObject1_dataSourceType {
    /** 动态表单 */
    DYNAMIC_FORM = "DYNAMIC_FORM",
    /** 功能 */
    FUN = "FUN",
    /** 报表 */
    REPORT = "REPORT"
}

export enum EPrintTheTemplateResponseObject_type {
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

export enum EPrintTheTemplateResponseObject_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPrintTheTemplateResponseObject_scanCodeType {
    /** 表单字段 */
    FORM_FIELD = "FORM_FIELD",
    /** 自定义内容 */
    CUSTOM = "CUSTOM",
    /** 表单添加跳转链接 */
    ADD_FORM_URL = "ADD_FORM_URL"
}

export enum EPrintTheTemplateResponseObject_lineDirection {
    /** 横向 */
    TRANSVERSE = "TRANSVERSE",
    /** 纵向 */
    LONGITUDINAL = "LONGITUDINAL"
}
