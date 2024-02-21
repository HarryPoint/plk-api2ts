// JSONResult«List«排产步骤基础返回VO»»
export interface IJSONResultListReturnsVOBasedOnTheSchedulingStep {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISchedulingStepBaseReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 排产步骤基础返回VO
export interface ISchedulingStepBaseReturnsVO {
    // 步骤排产id
    id: number;
    // 工艺路径步骤id
    routingStepId: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 计划开始时间
    beginTime: string;
    // 计划结束时间
    endTime: string;
}
