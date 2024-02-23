import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/进出料批次相关/listCanExceptionLotOrderUsingPOST
export default function fetchMethod(data: IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches) {
    return http<IJSONResultListHandlesBatchResponseDtosAbnormally>({
        url: "/app-mobile-web/api/app/mobile/moveInOutLotOrder/listCanExceptionLotOrder",
        method: "post",
        data,
    });
}
// 可进出料批次查询dto
export interface IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches {
    // 生产任务id
    produceTaskId: number;
    // 批次号
    lotOrderCode: string;
}
// JSONResult«List«可异常处理批次响应dto»»
export interface IJSONResultListHandlesBatchResponseDtosAbnormally {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchResponseDtosCanBeHandledAbnormally[];
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
