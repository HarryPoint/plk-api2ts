import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/ssoLoginUsingPOST
export default function fetchMethod(data: ISingleSignOnRequestDTO) {
    return http<IJSONResultLoginResponseDTO>({
        url: "/plk-uaa-service/saasAuth/ssoLogin",
        method: "post",
        data,
    });
}
// 单点登录请求 DTO
export interface ISingleSignOnRequestDTO {
    // 单点登陆系统类型
    ssoSystem: string;
    // 单点登陆目标模块
    module: string;
    // 登陆企业id
    enterpriseId: number;
    // appId
    appId: string;
    // ticket
    ticket: string;
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
