// 上报反馈处理变更状态DTO
export interface IReportTheDTOToHandleTheChangeStatus {
    // 生产处理id
    id: number;
    // 处理意见
    handleRemark: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
