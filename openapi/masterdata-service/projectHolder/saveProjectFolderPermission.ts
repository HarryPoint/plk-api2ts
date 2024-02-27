import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目文件夹相关/saveProjectFolderPermissionUsingPOST
*/
export default function fetchMethod(options: { data: IProjectFolderPermissionSaveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectHolder/saveProjectFolderPermission",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ProjectFolderPermissionSaveRequestDTO */
export interface IProjectFolderPermissionSaveRequestDTO {
    /** 文件夹ID */
    projectFolderId?: string;
    /** 项目ID */
    projectId?: string;
    /** 权限列表 */
    permissionList?: IProjectFolderPermissionEditRequestDTO[];
}
/** ProjectFolderPermissionEditRequestDTO */
export interface IProjectFolderPermissionEditRequestDTO {
    /** 权限类型 */
    permissionTypeList?: EProjectFolderPermissionEditRequestDTO_permissionTypeList_items[];
    /** 组织列表 */
    organizations?: IProjectFolderOrganizationEditRequestDTO[];
}
/** ProjectFolderOrganizationEditRequestDTO */
export interface IProjectFolderOrganizationEditRequestDTO {
    /** 组织 */
    organization?: EProjectFolderOrganizationEditRequestDTO_organization;
    /** 文件组织ID */
    organizationId?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
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

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
