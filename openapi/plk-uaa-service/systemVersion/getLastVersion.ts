import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/系统版本相关/getLastVersionUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSystemVersionResponseDTO>(
        {
            url: "/plk-uaa-service/systemVersion/getLastVersion",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«系统版本响应 DTO» */
export interface IJSONResultSystemVersionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISystemVersionRespondsToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 系统版本响应 DTO */
export interface ISystemVersionRespondsToDTO {
    /** 版本码 */
    versionCode?: string;
}
