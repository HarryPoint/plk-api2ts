// JSONResult«List«项目计划响应对象»»
export interface ITheJSONResultListProjectPlansTheResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectPlanResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目计划响应对象
export interface IProjectPlanResponseObject {
    // 项目计划id
    id: number;
    // 计划编号
    code: string;
    // 计划名称
    name: string;
    // 计划状态
    planStatus: string;
    // 流程状态
    status: string;
    // 计划开始日期
    planBeginTime: string;
    // 计划结束日期
    planEndTime: string;
    // 项目id
    projectId: number;
}
