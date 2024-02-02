// 项目任务分页查询响应_1
export interface I项目任务分页查询响应_1 {
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
    // 项目ID
    projectId: number;
    // 系统类型
    systemType: string;
}
// JSONResult«分页信息«项目任务分页查询响应»»
export interface IJSONResult分页信息项目任务分页查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«项目任务分页查询响应»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
