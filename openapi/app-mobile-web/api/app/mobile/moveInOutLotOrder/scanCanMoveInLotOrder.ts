import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料批次相关/scanCanMoveInLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IDtoCanBeCheckedByBatchScanning }, extraOptions?: any) {
    return http<IJSONResultCanRespondToDtoWithIncomingBatch>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutLotOrder/scanCanMoveInLotOrder",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 可进出料批次扫描查询dto */
export interface IDtoCanBeCheckedByBatchScanning {
    /** 生产任务id */
    produceTaskId: number;
    /** 编号 */
    code: string;
}
/** JSONResult«可进料批次响应dto» */
export interface IJSONResultCanRespondToDtoWithIncomingBatch {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICanRespondToDtoWithIncomingBatch;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 可进料批次响应dto */
export interface ICanRespondToDtoWithIncomingBatch {
    /** 批次id */
    id?: number;
    /** 批次号 */
    lotOrderCode?: string;
    /** 需进料数量 */
    needOptQuantity?: number;
    /** 可进料数量 */
    canOptQuantity?: number;
    /** 来料时间 */
    wmRpCreateTime?: string;
}
