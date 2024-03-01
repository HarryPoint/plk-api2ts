import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/单位相关/getSelectorUsingGET_9
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdNameVO>(
        {
            url: "/masterdata-service/unit/getSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称VO»» */
export interface IJSONResultListIdNameVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdNameVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
