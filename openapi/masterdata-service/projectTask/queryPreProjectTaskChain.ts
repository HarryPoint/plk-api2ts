// JSONResult«List«项目任务链路节点»»
export interface IJSONResultList项目任务链路节点 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务链路节点[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务链路节点
export interface I项目任务链路节点 {
    // 任务id
    id: number;
    // 任务名称
    name: string;
    // 任务编号
    code: string;
    // 前置任务
    preTaskIds: undefined[];
}
