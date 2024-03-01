import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目角色相关/listUsingGET_7
*/
export default function fetchMethod(options: { params: { ProjectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectRoleResponseDTO>(
        {
            url: "/masterdata-service/projectRole/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProjectRoleResponseDTO»» */
export interface IJSONResultListProjectRoleResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectRoleResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProjectRoleResponseDTO */
export interface IProjectRoleResponseDTO {
    /** 项目角色编码 */
    code?: string;
    /** 项目角色ID */
    id?: string;
    /** 项目角色名称 */
    name?: string;
}
