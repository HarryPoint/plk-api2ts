import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料bom消耗相关/scanMoveInBomConsumeMaterialUsingPOST
*/
export default function fetchMethod(options: { data: IFeedBomConsumptionScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultIncomingBomConsumedMaterialScanRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutBomConsume/scanMoveInBomConsumeMaterial",
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
/** JSONResult«进料bom消耗物料扫描响应DTO» */
export interface IJSONResultIncomingBomConsumedMaterialScanRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIncomingBomConsumedMaterialScanRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料bom消耗物料扫描响应DTO */
export interface IIncomingBomConsumedMaterialScanRespondsToDTO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
}
