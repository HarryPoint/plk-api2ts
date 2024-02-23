import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/文件分类相关/saveFileCategoryPermissionUsingPOST
export default function fetchMethod(data: IFileCategoryPermissionSaveRequestDTO) {
    return http<IJSONResultstring1>({
        url: "/masterdata-service/fileCategory/saveFileCategoryPermission",
        method: "post",
        data,
    });
}
// FileCategoryPermissionSaveRequestDTO
export interface IFileCategoryPermissionSaveRequestDTO {
    // 文件分类ID
    fileCategoryId: number;
    // 权限列表
    permissionList: IFileCategoryPermissionEditRequestDTO[];
}
// FileCategoryPermissionEditRequestDTO
export interface IFileCategoryPermissionEditRequestDTO {
    // 权限类型
    permissionTypeList: string[];
    // 组织列表
    organizations: IFileCategoryOrganizationEditRequestDTO[];
}
// FileCategoryOrganizationEditRequestDTO
export interface IFileCategoryOrganizationEditRequestDTO {
    // 组织
    organization: string;
    // 文件组织ID
    organizationId: number;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
