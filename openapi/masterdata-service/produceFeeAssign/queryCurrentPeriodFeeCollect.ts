import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/费用分配相关/queryCurrentPeriodFeeCollectUsingGET
export default function fetchMethod() {
    return get<IJSONResultListDetailedResponseDTOForCostCollection>({
      url: "/masterdata-service/produceFeeAssign/queryCurrentPeriodFeeCollect",
    });
}
// JSONResult«List«费用归集明细响应DTO»»
export interface IJSONResultListDetailedResponseDTOForCostCollection {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExpenseCollectionDetailsRespondToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 费用归集明细响应DTO
export interface IExpenseCollectionDetailsRespondToDTO {
    // 费用归集明细id
    id: number;
    // 费用类型id
    produceFeeTypeId: number;
    // 费用编码
    produceFeeCode: string;
    // 费用名称
    produceFeeName: string;
    // 费用金额
    fee: number;
    // 所属期间
    periodDate: string;
    // 指定生产订单
    produceOrderId: number;
}
