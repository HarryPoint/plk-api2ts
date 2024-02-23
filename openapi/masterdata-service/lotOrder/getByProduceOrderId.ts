import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/getByProduceOrderIdUsingGET
export default function fetchMethod(params: { enterpriseId: number; produceOrderId: number }) {
    return get<IJSONResultListBatchInformationVO['data']>({
      url: "/masterdata-service/lotOrder/getByProduceOrderId",
      params,
    });
}
// JSONResult«List«批次信息VO»»
export interface IJSONResultListBatchInformationVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchInformationVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次信息VO
export interface IBatchInformationVO {
    // id
    id: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 总数量
    totalCount: number;
}
