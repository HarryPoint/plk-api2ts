// 主表id查询VO
export interface I主表id查询VO {
    // 流程编码
    flowPathCode: string;
    // 过滤字段序列号
    filterFieldCode: string;
    // 过滤字段值
    filterFieldValue;
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
