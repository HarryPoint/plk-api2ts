import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/委外加工管理/entrustUsingPOST
export default function fetchMethod(data: IProductionOutsourcingSubmitDTO, params: { enterpriseId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/produceEntrust/entrust",
      data,
      params,
    });
}
// 生产委外加工提交DTO
export interface IProductionOutsourcingSubmitDTO {
    // 生产任务id
    produceTaskId: number;
    // 批次id
    lotOrderId: number;
    // 委外单单号
    entrustNo: string;
    // 委外数量
    totalQuantity: number;
    // 供应商id
    supplierId: number;
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
