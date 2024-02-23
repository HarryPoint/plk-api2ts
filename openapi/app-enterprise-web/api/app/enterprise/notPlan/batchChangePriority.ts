import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/未排产订单相关/batchChangePriorityUsingPOST
export default function fetchMethod(data: IProductionOrderChangePriorityDTO[]) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/notPlan/batchChangePriority",
        method: "post",
        data,
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
