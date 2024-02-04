// HandlingWorkOrderQueryRequest
export interface IHandlingWorkOrderQueryRequest {
    // 应用ID
    flowPathId: number;
    // 业务数据ID列表
    businessIdList: number[];
}
// JSONResult«List«流程工单VO»»
export interface IJSONResultList流程工单VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I流程工单VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程工单VO_1
export interface I流程工单VO_1 {
    // undefined
    id: number;
    // undefined
    enterpriseId: number;
    // undefined
    code: string;
    // undefined
    businessId: number;
    // undefined
    businessCode: string;
    // undefined
    flowPathId: number;
    // undefined
    flowPathVersionId: number;
    // undefined
    flowPathVersionRank: number;
    // undefined
    currentFlowPathNodeId: number;
    // undefined
    planBeginTime: string;
    // undefined
    status: string;
    // undefined
    processStatus: string;
    // undefined
    completeTime: string;
    // undefined
    totalTime: number;
    // undefined
    totalTimeoutTime: number;
    // undefined
    currentTotalTaskCount: number;
    // undefined
    currentTotalTimeoutTaskCount: number;
}
