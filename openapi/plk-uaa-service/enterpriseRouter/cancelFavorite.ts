// 企业路由收藏取消请求 DTO
export interface ITheEnterpriseRoutingCollectionCancelsTheRequestDTO {
    // 路由id
    id: number;
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
