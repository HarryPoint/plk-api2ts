// 完工及产成品归集保存请求对象
export interface I完工及产成品归集保存请求对象 {
    // 财务期间id
    fiscalPeriodId: number;
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
