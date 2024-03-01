import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/验证码相关/sendVerCodeUsingPOST
*/
export default function fetchMethod(options: { data: ISMSVerificationCodeSendRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/verCode/sendVerCode",
            method: "POST",
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
