import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/客户相关/getSelectorUsingGET
export function fetchMethod(params: { enterpriseId: number }) {
    return get({
      url: "/masterdata-service/customer/getSelector",
      params,
    });
}
// JSONResult«List«客户选择返回VO»»
export interface IJSONResultListClientSelectsToReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheCustomerChoosesToReturnToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 客户选择返回VO
export interface ITheCustomerChoosesToReturnToVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
