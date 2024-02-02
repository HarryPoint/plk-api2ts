// 流程任务转交人员查询DTO
export interface I流程任务转交人员查询DTO {
    // 流程id
    flowPathId: number;
    // 流程节点id
    flowPathNodeId: number;
    // 用户名称/编号
    nameOrCode: string;
    // 提交数据
    data;
    // 所属流程工单id
    flowPathWorkOrderId: number;
}
// JSONResult«List«员工响应对象»»
export interface IJSONResultList员工响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 员工响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
