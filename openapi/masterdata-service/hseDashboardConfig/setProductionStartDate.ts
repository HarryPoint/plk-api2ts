// http://47.108.139.107:16700/doc.html#/default/Hse大屏配置相关/setProductionStartDateUsingPOST
// 生产开始日期-设置请求
export interface IProductionStartDateSetRequest {
    // 生产开始日期
    productionStartDate: string;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
