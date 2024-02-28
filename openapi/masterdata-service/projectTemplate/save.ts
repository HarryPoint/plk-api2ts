import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/项目模板相关/saveUsingPOST_5
*/
export default function fetchMethod(options: { data: IProjectTemplateEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectTemplate/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目模板编辑请求DTO */
export interface IProjectTemplateEditRequestDTO {
    /** 项目id */
    projectId?: string;
    /** 项目模板id */
    id?: string;
    /** 项目模板名称 */
    name?: string;
    /** 项目模板大类 */
    projectCategory?: string;
    /** 项目模板简介 */
    intro?: string;
    /** 项目字段列表 */
    projectFields?: IIdCodeNameGenericTransportObject[];
    /** 项目团队是否勾选 */
    checkProjectTeam?: EProjectTemplateEditRequestDTO_checkProjectTeam;
    /** 项目成员是否勾选 */
    checkProjectMember?: EProjectTemplateEditRequestDTO_checkProjectMember;
    /** 项目角色是否勾选 */
    checkProjectRole?: EProjectTemplateEditRequestDTO_checkProjectRole;
    /** 项目计划是否勾选 */
    checkProjectPlan?: EProjectTemplateEditRequestDTO_checkProjectPlan;
    /** 项目计划字段 */
    projectPlanFields?: IIdCodeNameGenericTransportObject[];
    /** 项目计划自定义字段是否勾选 */
    checkProjectPlanCustomField?: EProjectTemplateEditRequestDTO_checkProjectPlanCustomField;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
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
    ts?: string;
}

export enum EProjectTemplateEditRequestDTO_checkProjectTeam {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTemplateEditRequestDTO_checkProjectMember {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTemplateEditRequestDTO_checkProjectRole {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTemplateEditRequestDTO_checkProjectPlan {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTemplateEditRequestDTO_checkProjectPlanCustomField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
