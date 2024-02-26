import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料bom消耗相关/listMoveInBomConsumeSerialNoUsingPOST
*/
export default function fetchMethod(data: IFeedBomConsumptionSerialNumberQueryDTO, extraOptions?: any) {
    return http<IJSONResultListIncomingBomConsumptionSerialNumberRespondsToDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutBomConsume/listMoveInBomConsumeSerialNo",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 进料bom消耗序列号查询DTO */
export interface IFeedBomConsumptionSerialNumberQueryDTO {
    /** 生产任务id */
    produceTaskId: number;
    /** 批次号、物料编号、序列号 */
    code: string;
}
/** JSONResult«List«进料bom消耗序列号响应DTO»» */
export interface IJSONResultListIncomingBomConsumptionSerialNumberRespondsToDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IFeedBomConsumptionSerialNumberRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 进料bom消耗序列号响应DTO */
export interface IFeedBomConsumptionSerialNumberRespondsToDTO {
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: number;
    /** 物料编号 */
    materialCode: number;
    /** 批次id */
    lotOrderId: number;
    /** 批次编号 */
    lotOrderCode: number;
    /** 序列号id */
    serialNoId: number;
    /** 序列号编号 */
    serialNoCode: number;
}
