import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料bom消耗相关/scanMoveInBomConsumeUsingPOST
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultIncomingBomConsumptionScanResponseDTO>(
        {
            url: "/masterdata-service/moveInOutBomConsume/scanMoveInBomConsume",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料bom消耗扫描请求DTO */
export interface IFeedBomConsumptionScanRequestDTO {
    /** 编号 */
    code: string;
    /** 生产任务id */
    produceTaskId: string;
}
/** JSONResult«进料bom消耗扫描响应DTO» */
export interface IJSONResultIncomingBomConsumptionScanResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIncomingBomConsumptionScansInResponseToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料bom消耗扫描响应DTO */
export interface IIncomingBomConsumptionScansInResponseToDTO {
    /** 是否有重复 */
    hasRepeat?: EIncomingBomConsumptionScansInResponseToDTO_hasRepeat;
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

export enum EIncomingBomConsumptionScansInResponseToDTO_hasRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
