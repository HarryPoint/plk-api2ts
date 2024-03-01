import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/updatePasswordUsingPOST
*/
export default function fetchMethod(options: { data: IUpdatePasswordRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/saasAuth/updatePassword",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 更新密码请求 DTO */
export interface IUpdatePasswordRequestDTO {
    /** 新密码 */
    newPassword: string;
    /** 旧密码 */
    oldPassword?: string;
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
