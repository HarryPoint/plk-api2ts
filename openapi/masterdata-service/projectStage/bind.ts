// 项目阶段绑定请求对象
export interface ITheProjectPhaseBindsTheRequestObject {
    // 项目阶段id
    projectStageId: number;
    // 项目计划id
    projectPlanId: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
