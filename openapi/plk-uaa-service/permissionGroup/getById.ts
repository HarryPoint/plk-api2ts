import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/权限组相关/getByIdUsingPOST_1
export default function fetchMethod(data: IIdInformation, extraOptions?: any) {
    return http<IJSONResultPermissionGroupAndPermissionResponseDTO>(
        {
            url: "/plk-uaa-service/permissionGroup/getById",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// Id 信息
export interface IIdInformation {
    // id
    id: number;
}
// JSONResult«权限组及权限响应 DTO»
export interface IJSONResultPermissionGroupAndPermissionResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPermissionGroupsAndPermissionResponseDtos;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 权限组及权限响应 DTO
export interface IPermissionGroupsAndPermissionResponseDtos {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 权限码id集
    permissionIds: number[];
}
