// JSONResult«批次号使用DTO»_1
export interface IJSONResult批次号使用DTO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I批次号使用DTO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次号使用DTO_1
export interface I批次号使用DTO_1 {
    // 异常批次号
    lotSerialNoErrorList: I批次号使用异常DTO[];
}
// 批次号使用异常DTO
export interface I批次号使用异常DTO {
    // 批次号
    lotSerialNo: string;
    // 异常信息集合
    errorMsgList: string[];
}
