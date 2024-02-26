import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品服务相关/getEnterpriseTrialOnProductServiceUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultProductServiceResponseObject>(
        {
            url: "/plk-uaa-service/productService/getEnterpriseTrialOnProductService",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产品服务响应对象» */
export interface IJSONResultProductServiceResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductServiceResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 产品服务响应对象 */
export interface IProductServiceResponseObject {
    /** 产品服务id */
    id?: number;
    /** 产品类型 */
    productType?: ('MES');
    /** 到期时间 */
    expireTime?: string;
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 产品模块数组 */
    productModuleArray?: string[];
}
