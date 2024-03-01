import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/服务相关/listUsingGET_3
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<ITheJSONResultListServiceRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/serve/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«服务响应 DTO»» */
export interface ITheJSONResultListServiceRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IServiceRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 服务响应 DTO */
export interface IServiceRespondsToDTO {
    /** 编码 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
