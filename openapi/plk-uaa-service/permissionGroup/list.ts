import { get } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/权限组相关/listUsingGET_2
export default function fetchMethod() {
    return get<IJSONResultListPermissionGroupRespondsToTheDTO['data']>({
      url: "/plk-uaa-service/permissionGroup/list",
    });
}
// JSONResult«List«权限组响应 DTO»»
export interface IJSONResultListPermissionGroupRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPermissionGroupRespondsToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 权限组响应 DTO
export interface IPermissionGroupRespondsToDTO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
}
