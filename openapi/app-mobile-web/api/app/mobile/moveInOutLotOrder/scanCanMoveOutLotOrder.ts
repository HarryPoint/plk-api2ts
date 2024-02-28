import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:17400/doc.html#/default/进出料批次相关/scanCanMoveOutLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IDtoCanBeCheckedByBatchScanning }, extraOptions?: any) {
    return http<IJSONResultReleasableBatchResponseDto>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutLotOrder/scanCanMoveOutLotOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 可进出料批次扫描查询dto */
export interface IDtoCanBeCheckedByBatchScanning {
    /** 生产任务id */
    produceTaskId: string;
    /** 编号 */
    code: string;
}
/** JSONResult«可出料批次响应dto» */
export interface IJSONResultReleasableBatchResponseDto {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IReleasableBatchResponseDto;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 可出料批次响应dto */
export interface IReleasableBatchResponseDto {
    /** 批次id */
    id?: string;
    /** 批次号 */
    lotOrderCode?: string;
    /** 可出料数量 */
    canOptQuantity?: number;
}
