import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目模板相关/queryProjectInfoUsingGET
*/
export default function fetchMethod(options: { params: { projectTemplateId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectTemplateProjectInformationRespondsToTheDTO>(
        {
            url: "/masterdata-service/projectTemplate/queryProjectInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目模板项目信息响应DTO» */
export interface IJSONResultProjectTemplateProjectInformationRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTemplateProjectInformationRespondsToTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目模板项目信息响应DTO */
export interface IProjectTemplateProjectInformationRespondsToTheDTO {
    /** 项目数据 */
    projectData?: Record<string, Record<string, any>>;
    /** 项目取值字段 */
    projectExtractDataFields?: IIdCodeNameGenericTransportObject[];
    /** 项目模板id */
    projectTemplateId?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
