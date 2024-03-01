import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品服务相关/batchInvalidUsingPOST
*/
export default function fetchMethod(options: { data: IProductServiceOutageRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/productService/batchInvalid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产品服务停用请求对象 */
export interface IProductServiceOutageRequestObject {
    /** 产品服务id */
    ids?: string[];
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
