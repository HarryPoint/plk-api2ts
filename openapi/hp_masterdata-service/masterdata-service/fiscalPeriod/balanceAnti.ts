// 财务期间反结存请求
export interface ICounterbalanceRequestForFinancialPeriod {
    // ID
    id: number;
}
// JSONResult«boolean»
export interface IJSONResultboolean {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: boolean;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
