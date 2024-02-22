// http://47.108.139.107:16700/doc.html#/default/财务期间相关/getFiscalPeriodStartMonthUsingGET
// JSONResult«设置期间开始月份Response»
export interface IJSONResultSetsResponseDuringTheStartMonth {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISetResponseDuringStartMonth;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设置期间开始月份Response
export interface ISetResponseDuringStartMonth {
    // ID
    startMonth: string;
}
