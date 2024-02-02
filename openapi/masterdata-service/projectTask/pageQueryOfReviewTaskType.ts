// 项目任务分页查询响应_1
export interface I项目任务分页查询响应_1 {
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
    // 项目ID
    projectId: number;
    // 系统类型
    systemType: string;
}
// 分页排序
export interface I分页排序 {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«项目任务分页查询响应»»
export interface IJSONResult分页信息项目任务分页查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息项目任务分页查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«项目任务分页查询响应»
export interface I分页信息项目任务分页查询响应 {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I项目任务分页查询响应[];
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
// 项目任务分页查询响应
export interface I项目任务分页查询响应 {
    // Id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 任务类型ID
    projectTaskTypeId: number;
    // 任务类型
    projectTaskTypeName: string;
    // 项目阶段ID
    projectStageId: number;
    // 项目阶段名称
    projectStageName: string;
    // 不通过比较类型
    notPassCompareType: string;
    // 不通过的临界值
    notPassRuleValue: number;
    // 通过的比较类型
    passCompareType: string;
    // 通过比较值
    passRuleValue: number;
    // 带风险通过的比较类型
    takeRiskPassCompareType: string;
    // 带风险通过比较值
    takeRiskPassRuleValue: number;
    // 修改比较类型
    modifyCompareType: string;
    // 修改规则值
    modifyRuleValue: number;
    // 修改任务ID列表
    modifyTaskIdList: undefined[];
    // 修改任务列表
    modifyTaskList: IId名称VO[];
}
// Id，名称VO
export interface IId名称VO {
    // id
    id: number;
    // 名称
    name: string;
}
