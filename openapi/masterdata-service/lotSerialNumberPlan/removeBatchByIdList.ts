import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/批次方案相关/removeBatchByIdListUsingPOST
export default function fetchMethod(data: ILotSerialNumberPlanBatchRemoveRequestDTO) {
    return post<IJSONResultstring1>({
      url: "/masterdata-service/lotSerialNumberPlan/removeBatchByIdList",
      data,
    });
}
// LotSerialNumberPlanBatchRemoveRequestDTO
export interface ILotSerialNumberPlanBatchRemoveRequestDTO {
    // idList
    idList: number[];
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
