// 用户手机号码查询
export interface IQueryTheMobilePhoneNumberOfTheUser {
    // 手机号
    telephone: string;
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
