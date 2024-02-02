// 专项工作查询请求_1
export interface I专项工作查询请求_1 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
}
// 分页排序
export interface I分页排序 {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«专项工作查询请求»»
export interface IJSONResult分页信息专项工作查询请求 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息专项工作查询请求;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«专项工作查询请求»
export interface I分页信息专项工作查询请求 {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I专项工作查询请求[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 专项工作查询请求
export interface I专项工作查询请求 {
    // ID
    id: number;
    // 专项工作名称
    specialWorkName: string;
    // 计划数
    planTotalQuantity: number;
    // 计划完成数
    planCompletedQuantity: number;
    // 完成率
    completedRate: number;
}
