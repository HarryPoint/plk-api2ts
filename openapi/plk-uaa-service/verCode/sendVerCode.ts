import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/验证码相关/sendVerCodeUsingPOST
*/
export default function fetchMethod(options: { data: ISMSVerificationCodeSendRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/verCode/sendVerCode",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 短信验证码发送请求 DTO */
export interface ISMSVerificationCodeSendRequestDTO {
    /** 手机号码 */
    account: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
