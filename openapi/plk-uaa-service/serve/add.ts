import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/服务相关/addUsingPOST_10
*/
export default function fetchMethod(options: { data: IServiceAddedADTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/serve/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 服务新增 DTO */
export interface IServiceAddedADTO {
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
