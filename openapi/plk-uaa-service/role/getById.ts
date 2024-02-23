import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/角色相关/getByIdUsingGET_1
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultResponseToRoleInformation>({
        url: "/plk-uaa-service/role/getById",
        method: "get",
        params,
    });
}
// JSONResult«角色信息响应»
export interface IJSONResultResponseToRoleInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRoleMessageResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 角色信息响应
export interface IRoleMessageResponse {
    // 数据状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 是否是超级管理员
    isManage: string;
    // 是否是管理员
    isAdmin: string;
    // 描述
    description: string;
    // 应用级别
    applicationLevel: string;
    // 服务对象ID
    serviceObjectId: number;
    // 服务业务ID
    serviceBusinessId: number;
}
