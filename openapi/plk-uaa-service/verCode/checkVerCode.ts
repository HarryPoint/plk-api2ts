// 验证码校验 DTO
export interface IVerificationCodeVerifiesTheDTO {
    // 手机号码
    telephone: string;
    // 验证码
    verCode: string;
}
// JSONResult«是否 信息»
export interface IJSONResultIndicatesWhetherTheInformationIsDisplayed {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IYesNoMessage;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 是否 信息
export interface IYesNoMessage {
    // 是否
    whether: string;
}
