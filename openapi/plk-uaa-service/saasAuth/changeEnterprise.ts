import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/changeEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation1 }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/saasAuth/changeEnterprise",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** Id 信息_1 */
export interface IIdInformation1 {
    /** id */
    id: string;
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
