// id集 信息
export interface IIdSetInformation {
    // id集
    ids: number[];
}
// JSONResult«List«角色及用户id信息响应»»
export interface IJSONResultListResponseToTheRoleAndUserIdInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRoleAndUserIdInformationResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 角色及用户id信息响应
export interface IRoleAndUserIdInformationResponse {
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
    // 用户id
    userId: number;
}
