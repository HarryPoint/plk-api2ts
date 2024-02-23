import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入模板相关/getByIdUsingGET_6
export default function fetchMethod(params: { id: number }) {
    return get<IJSONResultImportTemplate['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/importTemplate/getById",
      params,
    });
}
// JSONResult«导入模板»
export interface IJSONResultImportTemplate {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IImportTemplate;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导入模板
export interface IImportTemplate {
    // ID
    id: number;
    // 模板编码
    code: string;
    // 模板名称
    name: string;
    // 文件key
    fileKey: string;
    // 表定义
    tableDefine: IAssociationTableDefinition;
    // 是否预设模板模板
    presetTemplate: boolean;
    // 应用
    application: IApplicationDTO;
    // 描述
    desc: string;
}
// 关联表定义
export interface IAssociationTableDefinition {
    // undefined
    code: string;
}
// ApplicationDTO
export interface IApplicationDTO {
    // undefined
    id: number;
    // undefined
    code: string;
}
