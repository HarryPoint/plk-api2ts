import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:16700/doc.html#/default/项目角色配置相关/getForPageUsingPOST_17
*/
export default function fetchMethod(options: { data: IProjectRoleConfigureTheQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectRoleConfigurationReturnObject>(
        {
            url: "/masterdata-service/projectRoleConfig/list",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目角色配置查询对象 */
export interface IProjectRoleConfigureTheQueryObject {
    /** 查询配置code集 */
    codes?: string[];
    /** 项目id */
    projectId?: string;
    /** 项目角色id */
    projectRoleIds?: string[];
}
/** JSONResult«List«项目角色配置返回对象»» */
export interface IJSONResultListProjectRoleConfigurationReturnObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectRoleConfigurationReturnsTheObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目角色配置返回对象 */
export interface ITheProjectRoleConfigurationReturnsTheObject {
    /** 配置code */
    code?: string;
    /** 配置值 */
    configValue?: string;
    /** 配置名称 */
    name?: string;
}
