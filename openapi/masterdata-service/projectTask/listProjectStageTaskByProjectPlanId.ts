import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目任务相关/listProjectStageTaskByProjectPlanIdUsingPOST
export default function fetchMethod(data: ListProjectStageTaskByProjectPlanId) {
    return http<IJSONResultListProjectTaskResponseObject4>({
        url: "/masterdata-service/projectTask/listProjectStageTaskByProjectPlanId",
        method: "post",
        data,
    });
}
// JSONResult«List«项目任务响应对象»»_4
export interface IJSONResultListProjectTaskResponseObject4 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskResponseObject10[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务响应对象_10
export interface IProjectTaskResponseObject10 {
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目阶段id
    projectStageId: number;
    // 项目计划ids
    projectPlanIds: number[];
    // 项目计划ids
    projectPlanList: IIdCodeNameGenericTransportObject[];
    // 项目阶段名称
    projectStageName: string;
    // 项目阶段来源应用编号
    projectStageFromAppCode: string;
    // 项目阶段来源应用id
    projectStageFromAppId: number;
    // 项目阶段排序
    projectStageSort: number;
    // 下级任务列表
    children: IProjectTaskResponseObject9[];
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
// 项目任务响应对象_9
export interface IProjectTaskResponseObject9 {
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
    // 任务状态
    taskStatus: string;
    // 前置任务列表
    preTaskList: IProjectTaskPreTaskResponseObject[];
    // 任务开始日期
    planBeginTime: string;
    // 任务截止日期
    planEndTime: string;
    // 优先级
    priorityName: string;
    // 项目id
    projectId: number;
    // 项目名称
    projectName: string;
    // 项目计划id
    projectPlanId: number;
    // 项目计划编号
    projectPlanCode: string;
    // 项目计划名称
    projectPlanName: string;
    // 项目阶段id
    projectStageId: number;
    // 项目阶段名称
    projectStageName: string;
    // 上级任务id
    parentId: number;
    // 上级任务名称
    parentName: string;
    // 备注
    remark: string;
    // 是否超期
    isOverdue: string;
    // 层级
    level: number;
    // 排序
    sort: number;
    // 来源应用编号
    fromAppCode: string;
    // 来源应用id
    fromAppId: number;
    // 下级任务列表
    children: IProjectTaskResponseObject9[];
    // 当前登录员工所属待办id
    currentEmployeeTodoId: number;
    // 当前登录员工所属待办状态
    currentEmployeeTodoStatus: string;
    // 状态
    status: string;
    // 数据状态 0停用，1启用，2暂存
    dataStatus: number;
    // 创建员工名称
    createUserName: string;
    // 创建部门名称
    createDeptName: string;
    // 创建时间
    createTime: string;
    // 修改员工名称
    updateUserName: string;
    // 修改部门名称
    updateDeptName: string;
    // 修改时间
    updateTime: string;
    // 超期天数(天)
    overdueDay: number;
    // 任务进度
    taskProgress: number;
    // 交付物名称
    deliverableName: string;
    // 当前节点
    processStatusName: string;
    // 任务权重
    taskWeight: number;
    // 项目计划模块是否展示
    isProjectPlanShow: string;
    // 项目任务模块是否展示
    isProjectTaskShow: string;
    // undefined
    leaderUserIds: Record<string, any>[];
    // undefined
    preTaskIds: Record<string, any>[];
    // undefined
    projectTaskTypeId: number;
    // undefined
    priority: string;
    // undefined
    createUserId: number;
    // undefined
    createDeptId: number;
    // undefined
    updateUserId: number;
    // undefined
    updateDeptId: number;
    // undefined
    processStatus: string;
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
