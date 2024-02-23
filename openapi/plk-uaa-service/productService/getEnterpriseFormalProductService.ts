import { get } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/产品服务相关/getEnterpriseFormalProductServiceUsingGET
export default function fetchMethod(params: { enterpriseId: number }) {
    return get<IJSONResultProductServiceResponseObject['data']>({
      url: "/plk-uaa-service/productService/getEnterpriseFormalProductService",
      params,
    });
}
// JSONResult«产品服务响应对象»
export interface IJSONResultProductServiceResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductServiceResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产品服务响应对象
export interface IProductServiceResponseObject {
    // 产品服务id
    id: number;
    // 产品类型
    productType: string;
    // 到期时间
    expireTime: string;
    // 账号数
    availableAccountQuantity: number;
    // 产品模块数组
    productModuleArray: string[];
}
