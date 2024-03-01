import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件夹相关/getByIdUsingGET_13
*/
export default function fetchMethod(options: { params: { Id?: string; ProjectId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectFolderResponseDTO>(
        {
            url: "/masterdata-service/projectHolder/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProjectFolderResponseDTO» */
export interface IJSONResultProjectFolderResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectFolderResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProjectFolderResponseDTO */
export interface IProjectFolderResponseDTO {
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 权限列表 */
    permissionList?: IProjectFolderPermissionResponseDTO[];
    /** 项目ID */
    projectId?: string;
}
/** ProjectFolderPermissionResponseDTO */
export interface IProjectFolderPermissionResponseDTO {
    /** 组织列表 */
    organizations?: IProjectFolderOrganizationResponseDTO[];
    /** 权限类型 */
    permissionTypeList?: EProjectFolderPermissionResponseDTO_permissionTypeList_items[];
}
/** ProjectFolderOrganizationResponseDTO */
export interface IProjectFolderOrganizationResponseDTO {
    /** 组织 */
    organization?: EProjectFolderOrganizationResponseDTO_organization;
    /** 文件组织ID */
    organizationId?: string;
    /** 组织名称 */
    organizationName?: string;
}

export enum EProjectFolderPermissionResponseDTO_permissionTypeList_items {
    FOLDER_EDIT = "FOLDER_EDIT",
    FOLDER_MOVE = "FOLDER_MOVE",
    FOLDER_REMOVE = "FOLDER_REMOVE",
    UPLOAD_FILE = "UPLOAD_FILE",
    FOLDER_VIEW = "FOLDER_VIEW",
    FILE_RENAME = "FILE_RENAME",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_MOVE = "FILE_MOVE",
    FILE_REMOVE = "FILE_REMOVE"
}

export enum EProjectFolderOrganizationResponseDTO_organization {
    /** 用户 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 所有人 */
    ALL = "ALL"
}
