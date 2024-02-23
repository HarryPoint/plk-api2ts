import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目任务甘特图相关/queryGanttChartUsingPOST
export default function fetchMethod(data: QueryGanttChart) {
    return post<IJSONResultListProjectTaskGanttChartPhaseResponseObject['data']>({
      url: "/masterdata-service/projectTaskGantt/queryGanttChart",
      data,
    });
}
// JSONResult«List«项目任务甘特图阶段响应对象»»
export interface IJSONResultListProjectTaskGanttChartPhaseResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskGanttChartPhaseResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务甘特图阶段响应对象
export interface IProjectTaskGanttChartPhaseResponseObject {
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目计划id
    projectPlanId: number;
    // 项目计划编号
    projectPlanCode: string;
    // 项目阶段id
    projectStageId: number;
    // 项目阶段名称
    projectStageName: string;
    // 项目阶段来源应用编号
    projectStageFromAppCode: string;
    // 项目阶段来源应用id
    projectStageFromAppId: number;
    // 项目阶段排序
    projectStageSort: number;
    // 下级任务列表
    children: IProjectTaskGanttChartTaskResponseObject[];
}
// 项目任务甘特图任务响应对象
export interface IProjectTaskGanttChartTaskResponseObject {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 任务开始日期
    planBeginTime: string;
    // 任务截止日期
    planEndTime: string;
    // 任务进度
    taskProgress: number;
    // 总周期
    totalCycle: number;
    // 已进行的天数
    doneDay: number;
    // 剩余天数
    restDay: number;
    // 任务类型
    projectTaskTypeName: string;
    // 任务负责人名称
    leaderUserNameList: string[];
    // 交付物名称
    deliverableName: string;
    // 任务状态
    taskStatus: string;
    // 当前节点
    processStatusName: string;
    // 是否超期
    isOverdue: string;
    // 超期天数(天)
    overdueDay: number;
    // 前置任务列表
    preTaskList: IProjectTaskPreTaskResponseObject[];
    // 上级任务id
    parentId: number;
    // 上级任务名称
    parentName: string;
    // 优先级
    priorityName: string;
    // 项目阶段id
    projectStageId: number;
    // 项目阶段名称
    projectStageName: string;
    // 任务下发时间
    issueTime: string;
    // 任务接收时间
    receiveTime: string;
    // 任务实际开始时间
    actualBeginTime: string;
    // 任务实际结束时间
    actualEndTime: string;
    // 任务取消时间
    cancelTime: string;
    // 任务未通过时间
    noPassTime: string;
    // 项目id
    projectId: number;
    // 项目计划id
    projectPlanId: number;
    // 项目计划编号
    projectPlanCode: string;
    // 项目计划名称
    projectPlanName: string;
    // 层级
    level: number;
    // 排序
    sort: number;
    // 应用系统类型
    appSystemType: string;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // 备注
    remark: string;
    // 更新时间
    updateTime: string;
    // 下级任务列表
    children: IProjectTaskGanttChartTaskResponseObject[];
}
// 项目任务前置任务响应对象
export interface IProjectTaskPreTaskResponseObject {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
}
