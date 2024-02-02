// JSONResult«文件分类明细响应DTO»
export interface IJSONResult文件分类明细响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I文件分类明细响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 文件分类明细响应DTO
export interface I文件分类明细响应DTO {
    // ID
    id: number;
    // 分类名称
    name: string;
    // 上级ID
    parentId: number;
    // 权限列表
    permissionList: IFileCategoryPermissionResponseDTO[];
}
// FileCategoryPermissionResponseDTO
export interface IFileCategoryPermissionResponseDTO {
    // 权限类型
    permissionTypeList: string[];
    // 组织列表
    organizations: IFileCategoryOrganizationResponseDTO[];
}
// FileCategoryOrganizationResponseDTO
export interface IFileCategoryOrganizationResponseDTO {
    // 组织
    organization: string;
    // 文件组织ID
    organizationId: number;
    // 组织名称
    organizationName: string;
}
