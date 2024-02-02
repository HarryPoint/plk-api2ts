// JSONResult«List«工艺路径步骤选择VO»»
export interface IJSONResultList工艺路径步骤选择VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工艺路径步骤选择VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺路径步骤选择VO
export interface I工艺路径步骤选择VO {
    // id
    id: number;
    // 对应步骤
    routingStep: number;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
    // 对应工序编号
    processCode: string;
}
