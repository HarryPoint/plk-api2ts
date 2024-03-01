import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/服务相关/modifyUsingPOST_11
*/
export default function fetchMethod(options: { data: IServiceModifyTheDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/serve/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 服务修改 DTO */
export interface IServiceModifyTheDTO {
    /** id */
    id?: string;
    /** 名称 */
    name: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
