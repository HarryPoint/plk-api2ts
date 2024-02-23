import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单相关/queryCanCloseBatchUsingPOST
export default function fetchMethod(data: IProduceOrderBatchCloseRequestDTO) {
    return post<IJSONResultListlong['data']>({
      url: "/masterdata-service/produceOrder/queryCanCloseBatch",
      data,
    });
}
// ProduceOrderBatchCloseRequestDTO
export interface IProduceOrderBatchCloseRequestDTO {
    // 生产订单ID列表
    produceOrderIdList: number[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
