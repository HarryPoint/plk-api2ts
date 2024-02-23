import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getUserTelephoneExistUsingPOST
export default function fetchMethod(data: IQueryTheMobilePhoneNumberOfTheUser, extraOptions?: any) {
    return http<IJSONResultIndicatesWhetherTheInformationIsDisplayed>(
        {
            url: "/plk-uaa-service/saasAuth/getUserTelephoneExist",
            method: "post",
            data,
        },
        extraOptions,
    );
}
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
