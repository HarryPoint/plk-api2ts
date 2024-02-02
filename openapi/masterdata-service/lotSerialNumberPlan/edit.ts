// LotSerialNumberPlanEditRequestDTO
export interface ILotSerialNumberPlanEditRequestDTO {
    // 请选择方案ID
    id: number;
    // 编码
    code: string;
    // 批次方案名称
    name: string;
    // 方案类型
    planType: string;
    // 规则列表
    ruleList: LotSerialNumberPlanRuleEditRequestDTO[];
}
// JSONResult«string»_1
export interface IJSONResultstring_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
