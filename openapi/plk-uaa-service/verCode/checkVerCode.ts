import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/验证码相关/checkVerCodeUsingPOST
*/
export default function fetchMethod(options: { data: IVerificationCodeVerifiesTheDTO }, extraOptions?: any) {
    return http<IJSONResultIndicatesWhetherTheInformationIsDisplayed>(
        {
            url: "/plk-uaa-service/verCode/checkVerCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 验证码校验 DTO */
export interface IVerificationCodeVerifiesTheDTO {
    /** 手机号码 */
    telephone: string;
    /** 验证码 */
    verCode: string;
}
/** JSONResult«是否 信息» */
export interface IJSONResultIndicatesWhetherTheInformationIsDisplayed {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IYesNoMessage;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 是否 信息 */
export interface IYesNoMessage {
    /** 是否 */
    whether?: EYesNoMessage_whether;
}

export enum EYesNoMessage_whether {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
