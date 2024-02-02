// 财务期间查询请求
export interface I财务期间查询请求 {
    // 开始月份
    startMonth: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 开始日期 - begin
    startDateBegin: string;
    // 排序字段集
    orders: I分页排序VO[];
    // 结束日期 - end
    endDateEnd: string;
    // 期间
    periodList: string[];
    // 开始日期 - end
    startDateEnd: string;
    // 结束日期 - begin
    endDateBegin: string;
    // 天数 - Begin
    daysBegin: number;
    // 天数 - End
    daysEnd: number;
    // 结存状态列表
    balanceStatusList: string[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
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
