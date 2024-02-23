import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/用户账号相关/changeEnterpriseUserRoleUsingPOST
export default function fetchMethod(data: IRequestForAnEnterpriseUserToChangeRoles) {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/user/changeEnterpriseUserRole",
        method: "post",
        data,
    });
}
// 企业用户更换角色请求
export interface IRequestForAnEnterpriseUserToChangeRoles {
    // id
    id: number;
    // 更换角色id集
    roleIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
