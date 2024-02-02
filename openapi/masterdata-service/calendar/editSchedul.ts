// 日历排班VO
export interface I日历排班VO {
    // 排班天数集
    scheduleDays: 日历排班天数VO[];
    // 开始日期 yyyy-MM-dd
    beginDate: string;
    // 循环天数
    loopDay: number;
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
