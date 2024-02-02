// 客户情况统计输入条件
export interface I客户情况统计输入条件 {
    // 客户ID列表
    customerIdList: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 跟进ID列表
    salesOrderIdList: number[];
}
// JSONResult«分页信息«客户情况统计»»
export interface IJSONResult分页信息客户情况统计 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«客户情况统计»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
