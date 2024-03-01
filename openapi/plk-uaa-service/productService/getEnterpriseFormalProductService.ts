import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品服务相关/getEnterpriseFormalProductServiceUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductServiceResponseObject>(
        {
            url: "/plk-uaa-service/productService/getEnterpriseFormalProductService",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产品服务响应对象» */
export interface IJSONResultProductServiceResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductServiceResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产品服务响应对象 */
export interface IProductServiceResponseObject {
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 到期时间 */
    expireTime?: number;
    /** 产品服务id */
    id?: string;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品类型 */
    productType?: EProductServiceResponseObject_productType;
}

export enum EProductServiceResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}
