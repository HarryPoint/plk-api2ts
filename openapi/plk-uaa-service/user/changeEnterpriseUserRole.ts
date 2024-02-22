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
