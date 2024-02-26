import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/checkPasswordUsingPOST
*/
export default function fetchMethod(options: { data: IPasswordVerificationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultIndicatesWhetherTheInformationIsDisplayed>(
        {
            url: "/plk-uaa-service/saasAuth/checkPassword",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 密码校验请求 DTO */
export interface IPasswordVerificationRequestDTO {
    /** 密码 */
    password: string;
}
/** JSONResult«是否 信息» */
export interface IJSONResultIndicatesWhetherTheInformationIsDisplayed {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IYesNoMessage;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 是否 信息 */
export interface IYesNoMessage {
    /** 是否 */
    whether?: ('Y' | 'N');
}
