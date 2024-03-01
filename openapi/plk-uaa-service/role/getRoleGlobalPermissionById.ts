import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:18100/doc.html#/default/角色相关/getRoleGlobalPermissionByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListRoleGlobalPermissionResponseDTO>(
        {
            url: "/plk-uaa-service/role/getRoleGlobalPermissionById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«角色全局权限响应DTO»» */
export interface IJSONResultListRoleGlobalPermissionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheGlobalPermissionOfTheRoleRespondsToTheDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 角色全局权限响应DTO */
export interface ITheGlobalPermissionOfTheRoleRespondsToTheDTO {
    /** 是否已勾选 */
    isChoose?: ETheGlobalPermissionOfTheRoleRespondsToTheDTO_isChoose;
    /** 权限code */
    permissionCode?: string;
    /** 权限名 */
    permissionName?: string;
    /** 权限说明 */
    permissionRemark?: string;
    /** 权限分类 */
    permissionType?: ETheGlobalPermissionOfTheRoleRespondsToTheDTO_permissionType;
}

export enum ETheGlobalPermissionOfTheRoleRespondsToTheDTO_isChoose {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheGlobalPermissionOfTheRoleRespondsToTheDTO_permissionType {
    /** 功能 */
    FUN = "FUN",
    /** 数据 */
    DATA = "DATA"
}
