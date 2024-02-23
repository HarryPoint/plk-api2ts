import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/产品服务相关/batchInvalidUsingPOST
export default function fetchMethod(data: IProductServiceOutageRequestObject) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/productService/batchInvalid",
      data,
    });
}
// 产品服务停用请求对象
export interface IProductServiceOutageRequestObject {
    // 产品服务id
    ids: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
