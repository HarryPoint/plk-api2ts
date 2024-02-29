import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16700/doc.html#/default/项目任务模板相关/listOrganizationByProjectIdUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListProjectTaskTemplateOrganizesTheResponseDTO>(
        {
            url: "/masterdata-service/projectTaskTemplate/listOrganizationByProjectId",
            method: "GET",
            ...options,
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
    ts?: string;
}
/** 项目任务模板组织响应DTO */
export interface IProjectTaskTemplateOrganizationRespondsToTheDTO {
    /** 项目任务模板id */
    id?: string;
    /** 项目id */
    projectId?: string;
    /** 是否是通用模板 */
    isDefault?: EProjectTaskTemplateOrganizationRespondsToTheDTO_isDefault;
    /** 模板名称 */
    name?: string;
    /** 应用编号 */
    appCode?: string;
    /** 应用id */
    appId?: string;
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
    isTableField?: ETheProjectTaskTemplateOrganizesTheFieldResponseDTO_isTableField;
}

export enum EProjectTaskTemplateOrganizationRespondsToTheDTO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProjectTaskTemplateOrganizesTheFieldResponseDTO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
