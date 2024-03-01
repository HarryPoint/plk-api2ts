import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/路由相关/getAllAppSystemTypeUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListNameEncodesTheResponseDTO>(
        {
            url: "/plk-uaa-service/router/getAllAppSystemType",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«名称编码响应 DTO»» */
export interface IJSONResultListNameEncodesTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: INameEncodingResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 名称编码响应 DTO */
export interface INameEncodingResponseDTO {
    /** 编号 */
    code: string;
    /** 名称 */
    name: string;
}
