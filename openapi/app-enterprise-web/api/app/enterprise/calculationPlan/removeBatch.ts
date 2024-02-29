import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16400/doc.html#/default/计算方案相关/removeBatchUsingPOST
*/
export default function fetchMethod(options: { data: ICalculationSchemeDeleteRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calculationPlan/removeBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案删除请求DTO */
export interface ICalculationSchemeDeleteRequestDTO {
    /** 计算方案ID列表 */
    idList?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
