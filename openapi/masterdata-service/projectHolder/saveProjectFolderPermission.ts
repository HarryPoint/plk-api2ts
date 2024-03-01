import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件夹相关/saveProjectFolderPermissionUsingPOST
*/
export default function fetchMethod(options: { data: IProjectFolderPermissionSaveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/projectHolder/saveProjectFolderPermission",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProjectFolderPermissionSaveRequestDTO */
export interface IProjectFolderPermissionSaveRequestDTO {
    /** 权限列表 */
    permissionList?: IProjectFolderPermissionEditRequestDTO[];
    /** 文件夹ID */
    projectFolderId?: string;
    /** 项目ID */
    projectId?: string;
}
/** ProjectFolderPermissionEditRequestDTO */
export interface IProjectFolderPermissionEditRequestDTO {
    /** 组织列表 */
    organizations?: IProjectFolderOrganizationEditRequestDTO[];
    /** 权限类型 */
    permissionTypeList?: EProjectFolderPermissionEditRequestDTO_permissionTypeList_items[];
}
/** ProjectFolderOrganizationEditRequestDTO */
export interface IProjectFolderOrganizationEditRequestDTO {
    /** 组织 */
    organization?: EProjectFolderOrganizationEditRequestDTO_organization;
    /** 文件组织ID */
    organizationId?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProjectFolderPermissionEditRequestDTO_permissionTypeList_items {
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

export enum EProjectFolderOrganizationEditRequestDTO_organization {
    /** 用户 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 所有人 */
    ALL = "ALL"
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
