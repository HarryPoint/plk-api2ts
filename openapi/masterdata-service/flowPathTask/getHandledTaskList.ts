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
    data: 流程任务处理结果VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
