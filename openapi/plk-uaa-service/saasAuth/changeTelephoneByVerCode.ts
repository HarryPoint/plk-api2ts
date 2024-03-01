import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/changeTelephoneByVerCodeUsingPOST
*/
export default function fetchMethod(options: { data: IUpdateMobileNumberAccordingToVerificationCodeRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/saasAuth/changeTelephoneByVerCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 根据验证码更新手机号码请求 DTO */
export interface IUpdateMobileNumberAccordingToVerificationCodeRequestDTO {
    /** 新手机号码 */
    newTelephone: string;
    /** 新手机验证码 */
    newVerCode: string;
    /** 原手机验证码 */
    oldVerCode?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
