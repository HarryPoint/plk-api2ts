import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业权限相关/listByParentCodeUsingGET
*/
export default function fetchMethod(options: { params: { parentCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListEnterprisePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/enterprisePermission/listByParentCode",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«企业权限响应 DTO»» */
export interface IJSONResultListEnterprisePermissionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEnterprisePermissionResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业权限响应 DTO */
export interface IEnterprisePermissionResponseDTO {
    /** id */
    id?: string;
    /** 是否系统权限 */
    isSystem?: EEnterprisePermissionResponseDTO_isSystem;
    /** 名称 */
    name?: string;
    /** 原始权限码 */
    originalPermissionCode?: string;
    /** 父级权限编码 */
    parentCode?: string;
    /** 权限码 */
    permissionCode?: string;
    /** 服务code */
    serveCode?: string;
    /** 权限类型 */
    type?: EEnterprisePermissionResponseDTO_type;
}

export enum EEnterprisePermissionResponseDTO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterprisePermissionResponseDTO_type {
    /** 功能 */
    FUN = "FUN",
    /** 按钮 */
    BUTTON = "BUTTON"
}
