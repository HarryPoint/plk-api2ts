import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/打印模板相关/editUsingPOST_15
export default function fetchMethod(data: IPrintTheTemplateRequestObject) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/printtemplate/edit",
        method: "post",
        data,
    });
}
// 打印模板请求对象
export interface IPrintTheTemplateRequestObject {
    // id
    id: number;
    // 模板名称
    name: string;
    // 数据源id
    dataSourceId: number;
    // 企业路由id
    enterpriseRouterIds: number[];
    // 模板类型
    type: string;
    // 画布大小类型
    canvasSizeType: string;
    // 画布高
    height: number;
    // 画布宽
    width: number;
    // 画布方向类型
    canvasDirectionType: string;
    // 每页添加表头表尾
    sameHeaderTail: string;
    // 每页添加表格列名称
    sameColumn: string;
    // 是否需要一页纸张打印多个模板
    mutiTemplate: string;
    // 背景图片key
    bgPicKey: string;
    // 模板JSON结构
    printTemplateJson: Record<string, Record<string, any>>;
    // 模板字段集合
    printTemplateFields: IPrintTheTemplateFieldRequestObject[];
}
// 打印模板字段请求对象
export interface IPrintTheTemplateFieldRequestObject {
    // id
    id: number;
    // 字段编码
    code: string;
    // 字段名称
    name: string;
    // 字段类型
    type: string;
    // 数据源id
    dataSourceId: number;
    // 关联表单字段id
    fieldId: number;
    // 关联字段编码
    fieldCode: string;
    // 关联字段名称
    fieldName: string;
    // serialNo
    serialNo: string;
    // 文本内容
    textContent: string;
    // 是否表格内字段
    isTableField: string;
    // 扫码类型
    scanCodeType: string;
    // 扫码内容
    scanCodeContent: string;
    // 图片key
    imageKey: string;
    // 线条方向
    lineDirection: string;
    // 页眉内容
    headerContent: string;
    // 页脚内容
    footerContent: string;
    // 字段配置
    fieldConfig: string;
    // 表单字段数值格式类型
    formFieldNumberFormat: string;
    // 子表字段
    childPrintTemplateFields: IPrintTheTemplateFieldRequestObject[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
