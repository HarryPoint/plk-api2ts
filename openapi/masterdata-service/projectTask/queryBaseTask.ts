// 项目阶段任务查询对象_1
export interface IProjectPhaseTaskQueryObject1 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 项目id
    projectId: number;
    // 项目id集
    projectIds: number[];
    // 项目计划id
    projectPlanId: number;
    // 项目计划id集
    projectPlanIds: number[];
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 名称or编号
    nameOrCode: string;
    // 是否超期（Y是 N:否）
    isOverdueList: string[];
    // 是否超期（Y是 N:否）
    isOverdueGroupList: string[];
    // 项目阶段ids列表
    projectStageIds: number[];
    // 项目任务类型ids列表
    projectTaskTypeIds: number[];
    // 任务负责人列表
    leaderUserIds: string[];
    // 任务状态（DRAFT:草稿,UN_ISSUE:未下发,UN_RECEIVE:未接受,UN_START:未开始,HANDLING:进行中,COMPLETE:已完成,NOT_PASS:未通过,CANCEL:已取消）
    taskStatusList: string[];
    // 任务状态（DRAFT:草稿,UN_ISSUE:未下发,UN_RECEIVE:未接受,UN_START:未开始,HANDLING:进行中,COMPLETE:已完成,NOT_PASS:未通过,CANCEL:已取消）
    taskStatusGroupList: string[];
    // 超期天数开始
    beginOverdueDay: number;
    // 超期天数结束
    endOverdueDay: number;
    // 任务id集
    taskIds: number[];
    // 任务查询日期 --开始日期
    endTaskTime: string;
    // 前置任务列表
    preTaskIds: string[];
    // 任务开始日期 --开始日期
    beginPlanBeginTime: string;
    // 任务开始日期 --结束日期
    endPlanBeginTime: string;
    // 任务截止日期 --开始日期
    beginPlanEndTime: string;
    // 任务截止日期 --结束日期
    endPlanEndTime: string;
    // 任务查询日期 --开始日期
    beginTaskTime: string;
    // 优先级列表
    priorityList: string[];
    // 上级任务列表
    parentIds: number[];
    // 备注
    remark: string;
    // 状态 HANDLING进行中，COMPLETE已完成，NOT_PASS未通过, STAGING暂存, INVALID作废/停用
    statusList: string[];
    // 数据状态 0停用，1启用，2暂存
    dataStatusList: number[];
    // 创建员工ids
    createUserIds: number[];
    // 创建部门ids
    createDeptIds: number[];
    // 创建时间 --开始日期
    beginCreateTime: string;
    // 创建时间 --结束日期
    endCreateTime: string;
    // 修改员工ids
    updateUserIds: number[];
    // 修改部门ids
    updateDeptIds: number[];
    // 修改时间 --开始日期
    beginUpdateTime: string;
    // 修改时间 --结束日期
    endUpdateTime: string;
    // 是否仅查询当前登录用户
    isQueryCurrentMember: string;
    // 是否展示子任务
    isShowChildTask: string;
    // 处理进度名称列表
    processStatusNames: string[];
    // 是否查询没有关联项目计划的任务
    isQueryEmptyPlanTask: string;
    // 任务权重 -- 开始
    beginTaskWeight: number;
    // 任务权重 -- 结束
    endTaskWeight: number;
    // undefined
    notEmptyCondition: boolean;
    // undefined
    processStatusCodes: string[];
    // undefined
    fromAppIds: number[];
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«List«项目任务基础查询响应对象»»
export interface IJSONResultListProjectTaskBaseQueryResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskBaseQueryResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务基础查询响应对象
export interface IProjectTaskBaseQueryResponseObject {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 任务类型
    projectTaskTypeName: string;
    // 任务负责人名称
    leaderUserNameList: string[];
    // 项目名称
    projectName: string;
}
