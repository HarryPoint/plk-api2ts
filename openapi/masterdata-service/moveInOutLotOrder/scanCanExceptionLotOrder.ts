import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/进出料批次相关/scanCanExceptionLotOrderUsingPOST
export function fetchMethod(data: IDtoCanBeCheckedByBatchScanning) {
    return post({
      url: "/masterdata-service/moveInOutLotOrder/scanCanExceptionLotOrder",
      data,
    });
}
// 可进出料批次扫描查询dto
export interface IDtoCanBeCheckedByBatchScanning {
    // 生产任务id
    produceTaskId: number;
    // 编号
    code: string;
}
// JSONResult«可异常处理批次响应dto»
export interface IJSONResultHandlesBatchResponseDtosAbnormally {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchResponseDtosCanBeHandledAbnormally;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 可异常处理批次响应dto
export interface IBatchResponseDtosCanBeHandledAbnormally {
    // 批次id
    id: number;
    // 批次号
    lotOrderCode: string;
    // 可异常处理数量
    canOptQuantity: number;
}
