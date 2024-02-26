import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件分类相关/getByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultFileClassificationDetailsResponseDTO>(
        {
            url: "/masterdata-service/fileCategory/getById",
            method: "get",
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
    ts?: number;
}
/** 文件分类明细响应DTO */
export interface IFileClassificationDetailsRespondToDTO {
    /** ID */
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: number;
    /** 权限列表 */
    permissionList?: IFileCategoryPermissionResponseDTO[];
}
/** FileCategoryPermissionResponseDTO */
export interface IFileCategoryPermissionResponseDTO {
    /** 权限类型 */
    permissionTypeList?: ('CATEGORY_EDIT' | 'CATEGORY_MOVE' | 'CATEGORY_REMOVE' | 'UPLOAD_FILE' | 'CATEGORY_VIEW' | 'FILE_RENAME' | 'FILE_DOWNLOAD' | 'FILE_MOVE' | 'FILE_REMOVE')[];
    /** 组织列表 */
    organizations?: IFileCategoryOrganizationResponseDTO[];
}
/** FileCategoryOrganizationResponseDTO */
export interface IFileCategoryOrganizationResponseDTO {
    /** 组织 */
    organization?: ('USER' | 'DEPARTMENT' | 'ROLE' | 'ALL');
    /** 文件组织ID */
    organizationId?: number;
    /** 组织名称 */
    organizationName?: string;
}
