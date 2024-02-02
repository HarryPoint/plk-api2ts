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
    orders: 分页排序VO[];
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
// JSONResult«分页信息«财务期间查询响应»»
export interface IJSONResult分页信息财务期间查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«财务期间查询响应»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
