// JSONResult«不合格报表合计返回DTO»
export interface IJSONResult不合格报表合计返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I不合格报表合计返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不合格报表合计返回DTO
export interface I不合格报表合计返回DTO {
    // 不合格数量
    quantityOfNonConformance: number;
}
