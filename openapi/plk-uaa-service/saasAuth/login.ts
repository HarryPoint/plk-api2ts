import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/loginUsingPOST_1
export default function fetchMethod(data: ILoginRequestDTO) {
    return http<IJSONResultLoginResponseDTO>({
        url: "/plk-uaa-service/saasAuth/login",
        method: "post",
        data,
    });
}
// 登录请求 DTO
export interface ILoginRequestDTO {
    // 账号
    account: string;
    // 密码
    password: string;
    // 客户端编码
    clientCode: string;
}
// JSONResult«登录响应 DTO»
export interface IJSONResultLoginResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILoginRespondsToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 登录响应 DTO
export interface ILoginRespondsToDTO {
    // token
    accessToken: string;
}
