import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectStageDistributeUsingPOST
export function fetchMethod(data: IProjectOverviewQueryDto) {
    return post({
      url: "/masterdata-service/projectOverview/queryProjectStageDistribute",
      data,
    });
}
// 项目概况查询dto
export interface IProjectOverviewQueryDto {
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
export interface IJSONResultListProjectPhaseDistributesResponseObjects {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProjectPhaseDistributesTheResponseObjects[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目阶段分布响应对象
export interface ITheProjectPhaseDistributesTheResponseObjects {
    // 项目阶段名称
    projectStageName: string;
    // 项目阶段id
    projectStageId: number;
    // 项目阶段排序
    sort: number;
    // 项目任务列表
    projectTaskList: IProjectPhaseTasksDistributeResponseObjects[];
}
// 项目阶段任务分布响应对象
export interface IProjectPhaseTasksDistributeResponseObjects {
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
