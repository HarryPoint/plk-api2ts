import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/文件分类相关/getByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFileClassificationDetailsResponseDTO>(
        {
            url: "/masterdata-service/fileCategory/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«文件分类明细响应DTO» */
export interface IJSONResultFileClassificationDetailsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 文件分类明细响应DTO */
export interface IFileClassificationDetailsRespondToDTO {
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 权限列表 */
    permissionList?: IFileCategoryPermissionResponseDTO[];
}
/** FileCategoryPermissionResponseDTO */
export interface IFileCategoryPermissionResponseDTO {
    /** 权限类型 */
    permissionTypeList?: EFileCategoryPermissionResponseDTO_permissionTypeList_items[];
    /** 组织列表 */
    organizations?: IFileCategoryOrganizationResponseDTO[];
}
/** FileCategoryOrganizationResponseDTO */
export interface IFileCategoryOrganizationResponseDTO {
    /** 组织 */
    organization?: EFileCategoryOrganizationResponseDTO_organization;
    /** 文件组织ID */
    organizationId?: string;
    /** 组织名称 */
    organizationName?: string;
}

export enum EFileCategoryPermissionResponseDTO_permissionTypeList_items {
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

export enum EFileCategoryOrganizationResponseDTO_organization {
    /** 用户 */
    USER = "USER",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 角色 */
    ROLE = "ROLE",
    /** 所有人 */
    ALL = "ALL"
}
