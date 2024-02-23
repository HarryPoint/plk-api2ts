import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/权限相关/listTreeUsingPOST
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListPermissionGroupsAndPermissionTreesRespondToDtos>(
        {
            url: "/plk-uaa-service/permission/listTreeByGroup",
            method: "post",
        },
        extraOptions,
    );
}
// JSONResult«List«权限组及权限树响应 DTO»»
export interface IJSONResultListPermissionGroupsAndPermissionTreesRespondToDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPermissionGroupsAndPermissionTreesRespondToDtos[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 权限组及权限树响应 DTO
export interface IPermissionGroupsAndPermissionTreesRespondToDtos {
    // 权限组id
    id: number;
    // 权限组编码
    code: string;
    // 权限组名称
    name: string;
    // 权限树
    permissionTree: IThePermissionTreeRespondsToTheDTO[];
}
// 权限树响应 DTO
export interface IThePermissionTreeRespondsToTheDTO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 服务编码
    serveCode: string;
    // 父级编码
    parentCode: string;
    // 权限类型
    type: string;
    // 系统应用类型
    applicationSystemType: string;
    // 应用级别
    applicationLevel: string;
    // 子集
    children: IThePermissionTreeRespondsToTheDTO[];
}
