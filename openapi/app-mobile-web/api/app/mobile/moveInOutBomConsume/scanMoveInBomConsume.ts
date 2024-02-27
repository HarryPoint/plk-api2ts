import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料bom消耗相关/scanMoveInBomConsumeUsingPOST
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultIncomingBomConsumptionScanResponseDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutBomConsume/scanMoveInBomConsume",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 进料bom消耗扫描请求DTO */
export interface IFeedBomConsumptionScanRequestDTO {
    /** 生产任务id */
    produceTaskId: string;
    /** 编号 */
    code: string;
}
/** JSONResult«进料bom消耗扫描响应DTO» */
export interface IJSONResultIncomingBomConsumptionScanResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIncomingBomConsumptionScansInResponseToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料bom消耗扫描响应DTO */
export interface IIncomingBomConsumptionScansInResponseToDTO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 批次id */
    lotOrderId?: string;
    /** 批次编号 */
    lotOrderCode?: string;
    /** 序列号id */
    serialNoId?: string;
    /** 序列号编号 */
    serialNoCode?: string;
    /** 是否有重复 */
    hasRepeat?: EIncomingBomConsumptionScansInResponseToDTO_hasRepeat;
}

export enum EIncomingBomConsumptionScansInResponseToDTO_hasRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
