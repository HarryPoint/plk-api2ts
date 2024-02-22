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
// JSONResult«List«CustomerFollowUpCalendarOutputVO»»
export interface IJSONResultListCustomerFollowUpCalendarOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICustomerFollowUpCalendarOutputVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CustomerFollowUpCalendarOutputVO
export interface ICustomerFollowUpCalendarOutputVO {
    // 业务数据ID
    refId: number;
    // 日历类型
    calendarType: string;
    // 发生时间
    dateOfOccurrence: string;
    // 客户信息
    customer: Record<string, Record<string, any>>;
    // 跟进人
    createUserId: Record<string, Record<string, any>>;
    // 创建人
    createTime: string;
    // 流程ID
    flowPathId: number;
}
