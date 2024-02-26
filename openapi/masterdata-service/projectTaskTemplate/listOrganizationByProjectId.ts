import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务模板相关/listOrganizationByProjectIdUsingGET
*/
export default function fetchMethod(params: { projectId?: string }, extraOptions?: any) {
    return http<ITheJSONResultListProjectTaskTemplateOrganizesTheResponseDTO>(
        {
            url: "/masterdata-service/projectTaskTemplate/listOrganizationByProjectId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务模板组织响应DTO»» */
export interface ITheJSONResultListProjectTaskTemplateOrganizesTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskTemplateOrganizationRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目任务模板组织响应DTO */
export interface IProjectTaskTemplateOrganizationRespondsToTheDTO {
    /** 项目任务模板id */
    id?: number;
    /** 项目id */
    projectId?: number;
    /** 是否是通用模板 */
    isDefault?: string;
    /** 模板名称 */
    name?: string;
    /** 应用编号 */
    appCode?: string;
    /** 应用id */
    appId?: number;
    /** 组织字段集 */
    fields?: ITheProjectTaskTemplateOrganizesTheFieldResponseDTO[];
}
/** 项目任务模板组织字段响应DTO */
export interface ITheProjectTaskTemplateOrganizesTheFieldResponseDTO {
    /** 应用字段序列号 */
    appFieldSerialNo?: string;
    /** 应用字段名 */
    appFieldName?: string;
    /** 是否是表格内字段 */
    isTableField?: string;
}
