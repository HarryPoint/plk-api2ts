// 动态数据无状态删除请求对象
export interface I动态数据无状态删除请求对象 {
    // 删除明细
    removeDetails: I动态数据无状态删除明细请求对象[];
}
// 动态数据无状态删除明细请求对象
export interface I动态数据无状态删除明细请求对象 {
    // 流程id
    flowPathId: number;
    // 动态数据id集合
    formRecordIdList: number[];
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
