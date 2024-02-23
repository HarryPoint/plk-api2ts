import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/企业权限相关/listByParentCodeUsingGET
export default function fetchMethod(params: { parentCode: string }, extraOptions?: any) {
    return http<IJSONResultListEnterprisePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/enterprisePermission/listByParentCode",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«企业权限响应 DTO»»
export interface IJSONResultListEnterprisePermissionResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEnterprisePermissionResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 企业权限响应 DTO
export interface IEnterprisePermissionResponseDTO {
    // id
    id: number;
    // 服务code
    serveCode: string;
    // 是否系统权限
    isSystem: string;
    // 名称
    name: string;
    // 权限码
    permissionCode: string;
    // 原始权限码
    originalPermissionCode: string;
    // 父级权限编码
    parentCode: string;
    // 权限类型
    type: string;
}
