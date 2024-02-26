import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/客户端相关/listUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListTheClientRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/client/list",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«客户端响应 DTO»» */
export interface IJSONResultListTheClientRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheClientRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 客户端响应 DTO */
export interface ITheClientRespondsToTheDTO {
    /** id */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 登录类型 */
    loginType?: ('MANAGE' | 'SAAS');
    /** 客户端组 */
    clientGroup?: ITheClientGroupRespondsToTheDTO;
}
/** 客户端组响应 DTO */
export interface ITheClientGroupRespondsToTheDTO {
    /** id */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}
