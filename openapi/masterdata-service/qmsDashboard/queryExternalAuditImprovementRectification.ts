// ImprovementRecificationQueryRequestDTO
export interface IImprovementRecificationQueryRequestDTO {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«改进整改率»
export interface IJSONResult改进整改率 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 改进整改率;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
