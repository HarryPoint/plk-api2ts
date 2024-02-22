// http://47.108.139.107:16700/doc.html#/default/项目简报相关/queryFillingProjectTaskUsingGET
// JSONResult«List«项目任务响应对象»»
export interface IJSONResultListProjectTaskResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务响应对象
export interface IProjectTaskResponseObject {
    // 任务id
    id: number;
    // 任务编码
    code: string;
    // 任务名称
    name: string;
    // 任务负责人
    leaderUserIds: Record<string, any>[];
    // 任务负责人
    leaderUserList: IIdCodeNameGenericTransportObject[];
    // 任务进度
    taskProgress: number;
    // 任务状态
    taskStatus: string;
    // 任务状态描述
    taskStatusDesc: string;
    // 是否超期
    isOverdue: string;
    // 任务类型id
    projectTaskTypeId: number;
    // 任务类型
    projectTaskTypeName: string;
    // 任务开始日期
    planBeginTime: string;
    // 任务截止日期
    planEndTime: string;
    // 上级任务id
    parentId: number;
    // 上级任务名称
    parentName: string;
    // 前置任务ids
    preTaskIds: Record<string, any>[];
    // 前置任务列表
    preTaskList: IIdCodeNameGenericTransportObject[];
    // 项目阶段id
    projectStageId: number;
    // 项目阶段名称
    projectStageName: string;
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 交付物名称
    deliverableName: string;
    // 完成事项
    completeItem: string;
    // 问题与措施
    issueAndMeasure: string;
    // undefined
    sort: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
