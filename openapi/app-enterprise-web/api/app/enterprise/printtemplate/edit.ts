import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/打印模板相关/editUsingPOST_15
*/
export default function fetchMethod(options: { data: IPrintTheTemplateRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/printtemplate/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 打印模板请求对象 */
export interface IPrintTheTemplateRequestObject {
    /** id */
    id?: number;
    /** 模板名称 */
    name?: string;
    /** 数据源id */
    dataSourceId?: number;
    /** 企业路由id */
    enterpriseRouterIds?: number[];
    /** 模板类型 */
    type?: ('LIST' | 'FORM' | 'FORM_DETAIL');
    /** 画布大小类型 */
    canvasSizeType?: ('A3' | 'A4' | 'A5' | 'A6' | 'CUSTOM');
    /** 画布高 */
    height?: number;
    /** 画布宽 */
    width?: number;
    /** 画布方向类型 */
    canvasDirectionType?: ('TRANSVERSE' | 'LONGITUDINAL');
    /** 每页添加表头表尾 */
    sameHeaderTail?: ('Y' | 'N');
    /** 每页添加表格列名称 */
    sameColumn?: ('Y' | 'N');
    /** 是否需要一页纸张打印多个模板 */
    mutiTemplate?: ('Y' | 'N');
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
    id?: number;
    /** 字段编码 */
    code?: string;
    /** 字段名称 */
    name?: string;
    /** 字段类型 */
    type?: ('FIELD' | 'TEXT' | 'TABLE' | 'BAR_CODE' | 'QR_CODE' | 'IMAGE' | 'LINE' | 'HEADER' | 'FOOTER' | 'PAGE_NO');
    /** 数据源id */
    dataSourceId?: number;
    /** 关联表单字段id */
    fieldId?: number;
    /** 关联字段编码 */
    fieldCode?: string;
    /** 关联字段名称 */
    fieldName?: string;
    /** serialNo */
    serialNo?: string;
    /** 文本内容 */
    textContent?: string;
    /** 是否表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 扫码类型 */
    scanCodeType?: ('FORM_FIELD' | 'CUSTOM' | 'ADD_FORM_URL');
    /** 扫码内容 */
    scanCodeContent?: string;
    /** 图片key */
    imageKey?: string;
    /** 线条方向 */
    lineDirection?: ('TRANSVERSE' | 'LONGITUDINAL');
    /** 页眉内容 */
    headerContent?: string;
    /** 页脚内容 */
    footerContent?: string;
    /** 字段配置 */
    fieldConfig?: string;
    /** 表单字段数值格式类型 */
    formFieldNumberFormat?: ('F1' | 'F2' | 'F3' | 'F4');
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
    ts?: number;
}
