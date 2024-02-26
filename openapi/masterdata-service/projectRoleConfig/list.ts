import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目角色配置相关/getForPageUsingPOST_16
*/
export default function fetchMethod(options: { data: IProjectRoleConfigureTheQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectRoleConfigurationReturnObject>(
        {
            url: "/masterdata-service/projectRoleConfig/list",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目角色配置查询对象 */
export interface IProjectRoleConfigureTheQueryObject {
    /** 项目id */
    projectId?: number;
    /** 项目角色id */
    projectRoleIds?: number[];
    /** 查询配置code集 */
    codes?: string[];
}
/** JSONResult«List«项目角色配置返回对象»» */
export interface IJSONResultListProjectRoleConfigurationReturnObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectRoleConfigurationReturnsTheObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目角色配置返回对象 */
export interface ITheProjectRoleConfigurationReturnsTheObject {
    /** 配置code */
    code?: string;
    /** 配置名称 */
    name?: string;
    /** 配置值 */
    configValue?: string;
}
