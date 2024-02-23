import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/打印模板相关/listByEnterpriseRouteIdUsingGET
export default function fetchMethod(params: { enterpriseRouteId: number }) {
    return http<IJSONResultListPrintsTheTemplateResponseObject>({
        url: "/app-enterprise-web/api/app/enterprise/printtemplate/listByEnterpriseRouteId",
        method: "get",
        params,
    });
}
// JSONResult«List«打印模板响应对象»»
export interface IJSONResultListPrintsTheTemplateResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPrintTemplateResponseObject1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 打印模板响应对象_1
export interface IPrintTemplateResponseObject1 {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 数据状态
    dataStatus: number;
    // 打印模板类型
    type: string;
    // 数据源权限码
    pcode: string;
    // 数据源名称
    name: string;
    // 数据源类型
    dataSourceType: string;
    // 父级数据源id
    parentId: number;
    // 应用流程id
    flowPathId: number;
    // 应用流程状态
    flowPathDataStatus: number;
    // 发布位置路由id
    enterpriseRouterId: number;
    // 发布位置
    publishPosition: string;
    // 发布位置路由
    publishPositionPath: string[];
    // 模板JSON结构
    printTemplateJson: string;
    // 模板字段信息
    printTemplateFields: IPrintTheTemplateResponseObject[];
    // 更新时间
    updateTime: string;
}
// 打印模板响应对象
export interface IPrintTheTemplateResponseObject {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 打印模板id
    printTemplateId: number;
    // 字段编码
    code: string;
    // 字段名称
    name: string;
    // 字段类型
    type: string;
    // 关联表单字段id
    fieldId: number;
    // 关联字段编码
    fieldCode: string;
    // 字段序列号
    serialNo: string;
    // 关联字段名称
    fieldName: string;
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
}
