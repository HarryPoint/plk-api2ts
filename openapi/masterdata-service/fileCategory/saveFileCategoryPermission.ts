import { http } from '@/api/http';

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
    fileCategoryId?: number;
    /** 权限列表 */
    permissionList?: IFileCategoryPermissionEditRequestDTO[];
}
/** FileCategoryPermissionEditRequestDTO */
export interface IFileCategoryPermissionEditRequestDTO {
    /** 权限类型 */
    permissionTypeList?: ('CATEGORY_EDIT' | 'CATEGORY_MOVE' | 'CATEGORY_REMOVE' | 'UPLOAD_FILE' | 'CATEGORY_VIEW' | 'FILE_RENAME' | 'FILE_DOWNLOAD' | 'FILE_MOVE' | 'FILE_REMOVE')[];
    /** 组织列表 */
    organizations?: IFileCategoryOrganizationEditRequestDTO[];
}
/** FileCategoryOrganizationEditRequestDTO */
export interface IFileCategoryOrganizationEditRequestDTO {
    /** 组织 */
    organization?: ('USER' | 'DEPARTMENT' | 'ROLE' | 'ALL');
    /** 文件组织ID */
    organizationId?: number;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
