import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/客户相关/getSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListClientSelectsToReturnVO>(
        {
            url: "/masterdata-service/customer/getSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«客户选择返回VO»» */
export interface IJSONResultListClientSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheCustomerChoosesToReturnToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 客户选择返回VO */
export interface ITheCustomerChoosesToReturnToVO {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
