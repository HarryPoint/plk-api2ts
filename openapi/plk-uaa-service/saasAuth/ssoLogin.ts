import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/ssoLoginUsingPOST
*/
export default function fetchMethod(options: { data: ISingleSignOnRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLoginResponseDTO>(
        {
            url: "/plk-uaa-service/saasAuth/ssoLogin",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 单点登录请求 DTO */
export interface ISingleSignOnRequestDTO {
    /** appId */
    appId: string;
    /** 登陆企业id */
    enterpriseId: string;
    /** 单点登陆目标模块 */
    module?: ESingleSignOnRequestDTO_module;
    /** 单点登陆系统类型 */
    ssoSystem: ESingleSignOnRequestDTO_ssoSystem;
    /** ticket */
    ticket: string;
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

export enum ESingleSignOnRequestDTO_module {
    /** 质量模块 */
    QMS = "QMS",
    /** 项目模块 */
    PROJECT = "PROJECT"
}

export enum ESingleSignOnRequestDTO_ssoSystem {
    /** 普朗克云平台 */
    PLK = "PLK",
    /** 金蝶云之家 */
    KING_DEE_YZJ = "KING_DEE_YZJ"
}
