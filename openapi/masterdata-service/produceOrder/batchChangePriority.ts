import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单相关/batchChangePriorityUsingPOST
export default function fetchMethod(data: IProductionOrderChangePriorityDTO[], params: { enterpriseId: number }) {
    return post<IJSONResultobject>({
      url: "/masterdata-service/produceOrder/batchChangePriority",
      data,
      params,
    });
}
// 生产订单变更优先级DTO
export interface IProductionOrderChangePriorityDTO {
    // 生产订单id
    produceOrderId: number;
    // 订单优先级
    priorityLevel: number;
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
