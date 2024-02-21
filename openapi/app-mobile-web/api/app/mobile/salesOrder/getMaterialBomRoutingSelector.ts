// JSONResult«List«MaterialBomRoutingVO»»
export interface IJSONResultListMaterialBomRoutingVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialBomRoutingVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// MaterialBomRoutingVO
export interface IMaterialBomRoutingVO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 工艺路径id
    routingId: number;
    // 工艺路径名称
    routingName: string;
    // 工艺路径编码
    routingCode: string;
}
