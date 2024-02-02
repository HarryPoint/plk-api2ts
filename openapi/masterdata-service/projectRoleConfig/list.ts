// 项目角色配置查询对象
export interface I项目角色配置查询对象 {
    // 项目id
    projectId: number;
    // 项目角色id
    projectRoleIds: number[];
    // 查询配置code集
    codes: string[];
}
// JSONResult«List«项目角色配置返回对象»»
export interface IJSONResultList项目角色配置返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目角色配置返回对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
