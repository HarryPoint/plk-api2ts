// LotSerialNumberPlanAddRequestDTO
export interface ILotSerialNumberPlanAddRequestDTO {
    // 编码
    code: string;
    // 批次方案名称
    name: string;
    // 方案类型
    planType: string;
    // 规则列表
    ruleList: LotSerialNumberPlanRuleAddRequestDTO[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
