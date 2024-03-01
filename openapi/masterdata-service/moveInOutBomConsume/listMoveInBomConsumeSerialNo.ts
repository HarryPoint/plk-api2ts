import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料bom消耗相关/listMoveInBomConsumeSerialNoUsingPOST
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionSerialNumberQueryDTO }, extraOptions?: any) {
    return http<IJSONResultListIncomingBomConsumptionSerialNumberRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutBomConsume/listMoveInBomConsumeSerialNo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料bom消耗序列号查询DTO */
export interface IFeedBomConsumptionSerialNumberQueryDTO {
    /** 批次号、物料编号、序列号 */
    code?: string;
    /** 生产任务id */
    produceTaskId: string;
}
/** JSONResult«List«进料bom消耗序列号响应DTO»» */
export interface IJSONResultListIncomingBomConsumptionSerialNumberRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFeedBomConsumptionSerialNumberRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料bom消耗序列号响应DTO */
export interface IFeedBomConsumptionSerialNumberRespondsToDTO {
    /** 批次编号 */
    lotOrderCode?: string;
    /** 批次id */
    lotOrderId?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 序列号编号 */
    serialNoCode?: string;
    /** 序列号id */
    serialNoId?: string;
}
