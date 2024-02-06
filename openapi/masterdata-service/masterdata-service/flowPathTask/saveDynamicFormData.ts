// FlowPathTaskProcessRequestDTO
export interface IFlowPathTaskProcessRequestDTO {
    // 任务ID
    id: number;
    // 表单数据
    data: any;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
