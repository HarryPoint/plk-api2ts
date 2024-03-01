import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务模板相关/listByProjectIdUsingGET_1
*/
export default function fetchMethod(options: { params: { ProjectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskTemplateRespondsToTheDTO>(
        {
            url: "/masterdata-service/projectTaskTemplate/listByProjectId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务模板响应DTO»» */
export interface IJSONResultListProjectTaskTemplateRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskTemplatesRespondToDtos[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务模板响应DTO */
export interface IProjectTaskTemplatesRespondToDtos {
    /** 应用编号 */
    appCode?: string;
    /** 应用id */
    appId?: string;
    /** 项目任务模板id */
    id?: string;
    /** 是否是通用模板 */
    isDefault?: EProjectTaskTemplatesRespondToDtos_isDefault;
    /** 模板名称 */
    name?: string;
    /** 项目id */
    projectId?: string;
}

export enum EProjectTaskTemplatesRespondToDtos_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
