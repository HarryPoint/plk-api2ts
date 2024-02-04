// 项目概况查询dto
export interface I项目概况查询dto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«List«项目阶段分布响应对象»»
export interface IJSONResultList项目阶段分布响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目阶段分布响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目阶段分布响应对象
export interface I项目阶段分布响应对象 {
    // 项目阶段名称
    projectStageName: string;
    // 项目阶段id
    projectStageId: number;
    // 项目阶段排序
    sort: number;
    // 项目任务列表
    projectTaskList: I项目阶段任务分布响应对象[];
}
// 项目阶段任务分布响应对象
export interface I项目阶段任务分布响应对象 {
    // 项目任务类型id
    projectTaskTypeId: number;
    // 项目任务类型编号
    projectTaskTypeCode: string;
    // 项目任务类型名称
    projectTaskTypeName: string;
    // 项目任务名称
    projectTaskName: string;
    // 项目任务id
    projectTaskId: number;
    // 项目任务开始日期
    planBeginTime: string;
    // 项目任务状态
    taskStatus: string;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
}
