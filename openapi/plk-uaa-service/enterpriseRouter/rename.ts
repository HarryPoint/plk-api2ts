// 企业路由重命名请求 DTO
export interface IEnterpriseRouteRenamingRequestDTO {
    // 路由id
    id: number;
    // 新名称
    newName: string;
    // 客户端组编码
    clientGroupCode: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
