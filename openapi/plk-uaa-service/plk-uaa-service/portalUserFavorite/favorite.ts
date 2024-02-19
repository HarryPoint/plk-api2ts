// PortalUserFavoriteRequestDTO
export interface IPortalUserFavoriteRequestDTO {
    // Qms门户id
    qmsPortalId: number;
    // Hse门户id
    hsePortalId: number;
    // 路由id
    routerId: number;
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
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
