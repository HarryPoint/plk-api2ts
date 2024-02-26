import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/removeBatchUsingPOST
*/
export default function fetchMethod(options: { data: ICalculationSchemeDeleteRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/calculationPlan/removeBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案删除请求DTO */
export interface ICalculationSchemeDeleteRequestDTO {
    /** 计算方案ID列表 */
    idList?: number[];
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
    ts?: number;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
