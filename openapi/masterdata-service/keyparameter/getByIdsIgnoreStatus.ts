// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«关键参数下拉选择列表搜索响应DTO»»
export interface IJSONResultList关键参数下拉选择列表搜索响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 关键参数下拉选择列表搜索响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
