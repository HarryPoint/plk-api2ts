// 流程表格列对应的值格式化查询DTO
export interface IFormatTheValueOfTheFlowTableColumnToQueryTheDTO {
    // 流程表单code
    flowPathCode: string;
    // 流程表单字段序列值
    flowPathFormFiledSerialNo: string;
    // 流程表单字段序列值
    flowPathFormFiledCode: string;
    // 格式化前的值
    fieldValue: string;
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
