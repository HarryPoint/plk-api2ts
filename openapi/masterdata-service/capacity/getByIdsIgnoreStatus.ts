// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«产能下拉选择列表搜索响应对象»»
export interface IJSONResultList产能下拉选择列表搜索响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I产能下拉选择列表搜索响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产能下拉选择列表搜索响应对象
export interface I产能下拉选择列表搜索响应对象 {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
