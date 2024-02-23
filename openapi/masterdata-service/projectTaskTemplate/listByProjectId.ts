import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目任务模板相关/listByProjectIdUsingGET_1
export default function fetchMethod(params: { projectId: string }) {
    return get<IJSONResultListProjectTaskTemplateRespondsToTheDTO>({
      url: "/masterdata-service/projectTaskTemplate/listByProjectId",
      params,
    });
}
// JSONResult«List«项目任务模板响应DTO»»
export interface IJSONResultListProjectTaskTemplateRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskTemplatesRespondToDtos[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务模板响应DTO
export interface IProjectTaskTemplatesRespondToDtos {
    // 项目任务模板id
    id: number;
    // 项目id
    projectId: number;
    // 是否是通用模板
    isDefault: string;
    // 模板名称
    name: string;
    // 应用编号
    appCode: string;
    // 应用id
    appId: number;
}
