import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入文件相关/getImportFileUsingGET
export default function fetchMethod(params: { templateId: number }) {
    return get<IJSONResultImportFile['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/importFile/byTemplateId/get",
      params,
    });
}
// JSONResult«导入文件»
export interface IJSONResultImportFile {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IImportFile;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导入文件
export interface IImportFile {
    // ID
    id: number;
    // 文件Key
    fileKey: string;
    // 文件名
    fileName: string;
    // 状态
    status: string;
    // 错误原因
    failMessage: string;
}
