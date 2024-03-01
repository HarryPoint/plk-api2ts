import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/loginUsingPOST_1
*/
export default function fetchMethod(options: { data: ILoginRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLoginResponseDTO>(
        {
            url: "/plk-uaa-service/saasAuth/login",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 登录请求 DTO */
export interface ILoginRequestDTO {
    /** 账号 */
    account: string;
    /** 客户端编码 */
    clientCode: string;
    /** 密码 */
    password: string;
}
/** JSONResult«登录响应 DTO» */
export interface IJSONResultLoginResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILoginRespondsToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 登录响应 DTO */
export interface ILoginRespondsToDTO {
    /** token */
    accessToken?: string;
}
