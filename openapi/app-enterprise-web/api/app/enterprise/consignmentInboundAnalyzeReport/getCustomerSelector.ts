import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶寄售入库报表相关/getCustomerSelectorUsingGET_1
export default function fetchMethod() {
    return get<IJSONResultListClientSelectsToReturnVO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/consignmentInboundAnalyzeReport/getCustomerSelector",
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
