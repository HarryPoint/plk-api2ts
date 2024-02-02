// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«部门VO»»
export interface IJSONResultList部门VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 部门VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
