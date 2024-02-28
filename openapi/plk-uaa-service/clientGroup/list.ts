import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/客户端组相关/listUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListTheClientGroupRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/clientGroup/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«客户端组响应 DTO»» */
export interface IJSONResultListTheClientGroupRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheClientGroupRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 客户端组响应 DTO */
export interface ITheClientGroupRespondsToTheDTO {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}
