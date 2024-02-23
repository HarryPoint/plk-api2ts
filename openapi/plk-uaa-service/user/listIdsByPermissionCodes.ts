import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/用户账号相关/listIdsByPermissionCodesUsingPOST
export default function fetchMethod(data: IQueryByPermissionCodeSetUserIdQueryObjects) {
    return post<IJSONResultListlong['data']>({
      url: "/plk-uaa-service/user/listIdsByPermissionCodes",
      data,
    });
}
// 按权限码集查询用户id 查询对象
export interface IQueryByPermissionCodeSetUserIdQueryObjects {
    // 权限码集
    permissionCodes: string[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
