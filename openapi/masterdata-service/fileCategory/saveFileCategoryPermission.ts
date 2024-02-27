import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件分类相关/saveFileCategoryPermissionUsingPOST
*/
export default function fetchMethod(options: { data: IFileCategoryPermissionSaveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/fileCategory/saveFileCategoryPermission",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FileCategoryPermissionSaveRequestDTO */
export interface IFileCategoryPermissionSaveRequestDTO {
    /** 文件分类ID */
    fileCategoryId?: string;
    /** 权限列表 */
    permissionList?: IFileCategoryPermissionEditRequestDTO[];
}
/** FileCategoryPermissionEditRequestDTO */
export interface IFileCategoryPermissionEditRequestDTO {
    /** 权限类型 */
    permissionTypeList?: EFileCategoryPermissionEditRequestDTO_permissionTypeList_items[];
    /** 组织列表 */
    organizations?: IFileCategoryOrganizationEditRequestDTO[];
}
/** FileCategoryOrganizationEditRequestDTO */
export interface IFileCategoryOrganizationEditRequestDTO {
    /** 组织 */
    organization?: EFileCategoryOrganizationEditRequestDTO_organization;
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

export enum EFileCategoryPermissionEditRequestDTO_permissionTypeList_items {
    CATEGORY_EDIT = "CATEGORY_EDIT",
    CATEGORY_MOVE = "CATEGORY_MOVE",
    CATEGORY_REMOVE = "CATEGORY_REMOVE",
    UPLOAD_FILE = "UPLOAD_FILE",
    CATEGORY_VIEW = "CATEGORY_VIEW",
    FILE_RENAME = "FILE_RENAME",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_MOVE = "FILE_MOVE",
    FILE_REMOVE = "FILE_REMOVE"
}

export enum EFileCategoryOrganizationEditRequestDTO_organization {
    /** 用户 */
    USER = "USER",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 角色 */
    ROLE = "ROLE",
    /** 所有人 */
    ALL = "ALL"
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
