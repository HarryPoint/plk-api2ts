// 专项工作查询请求_1
export interface I专项工作查询请求_1 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
}
// JSONResult«分页信息«专项工作查询请求»»
export interface IJSONResult分页信息专项工作查询请求 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«专项工作查询请求»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
