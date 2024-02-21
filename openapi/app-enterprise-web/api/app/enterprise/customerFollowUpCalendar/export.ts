// CustomerFollowUpCalendarInputVO
export interface ICustomerFollowUpCalendarInputVO {
    // 跟进人用户ID
    followUpUserId: string;
    // 客户ID
    customerId: string;
    // 日历类型
    calendarType: string;
    // 填报月份，格式 yyyy-MM-dd HH:mm:ss
    fillingMonth: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
