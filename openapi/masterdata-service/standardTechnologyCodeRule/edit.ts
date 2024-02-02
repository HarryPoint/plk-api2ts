// 标准工艺编码规则请求 DTO
export interface I标准工艺编码规则请求DTO {
    // id
    id: number;
    // 名称
    name: string;
    // 规则明细
    details: 标准工艺编码规则明细请求 DTO[];
// JSONResult«id信息»
export interface IJSONResultid信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: id信息;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}

}
