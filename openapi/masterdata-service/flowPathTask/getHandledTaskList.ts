// 流程任务处理结果查询VO
export interface I流程任务处理结果查询VO {
    // 业务流程系统类型
    flowPathSystemType: string;
    // 业务数据ID列表
    businessDataId: number;
}
// JSONResult«List«流程任务处理结果VO»»
export interface IJSONResultList流程任务处理结果VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I流程任务处理结果VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程任务处理结果VO
export interface I流程任务处理结果VO {
    // 任务类型
    type: string;
    // 任务号
    taskNo: string;
    // 所属流程节点名称
    flowPathNodeName: string;
    // 处理人id
    handleUserId: number;
    // 处理人名称
    handleUserName: string;
    // 处理时间
    handleTime: string;
    // 审批状态
    approvalStatus: string;
    // 执行状态
    executeStatus: string;
    // 审批意见/执行情况
    notes: string;
}
