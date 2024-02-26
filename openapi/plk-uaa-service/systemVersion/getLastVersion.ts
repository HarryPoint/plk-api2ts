import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/系统版本相关/getLastVersionUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultSystemVersionResponseDTO>(
        {
            url: "/plk-uaa-service/systemVersion/getLastVersion",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«系统版本响应 DTO» */
export interface IJSONResultSystemVersionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISystemVersionRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 系统版本响应 DTO */
export interface ISystemVersionRespondsToDTO {
    /** 版本码 */
    versionCode?: string;
}
