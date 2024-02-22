import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/流程工单相关/updateStagingUsingPOST
export function fetchMethod(params: { enterpriseId: number; id: number }) {
    return post({
      url: "/masterdata-service/flowPathWorkOrder/updateStaging",
      params,
    });
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
