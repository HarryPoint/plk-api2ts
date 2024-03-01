import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/进出料bom消耗相关/listEmployeeToDayLastMoveInBomConsumeByProduceTaskIdUsingGET
*/
export default function fetchMethod(options: { params: { produceTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultListRespondsToTheDTOForTheLastInputBom>(
        {
            url: "/masterdata-service/moveInOutBomConsume/listEmployeeToDayLastMoveInBomConsumeByProduceTaskId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«上一次进料录入bom消耗响应DTO»» */
export interface IJSONResultListRespondsToTheDTOForTheLastInputBom {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILastInputBomConsumesResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 上一次进料录入bom消耗响应DTO */
export interface ILastInputBomConsumesResponseDTO {
    /** 物料实际消耗数 */
    actualQuantity?: number;
    /** 外部码 */
    externalCodes?: string[];
    /** 批次信息 */
    lotOrders?: ILastInputBomConsumesBatchResponseDTO[];
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 单位消耗 */
    totalConsumeCount?: number;
}
/** 上一次进料录入bom消耗批次响应DTO */
export interface ILastInputBomConsumesBatchResponseDTO {
    /** 批次编号 */
    lotOrderCode?: string;
    /** 批次id */
    lotOrderId?: string;
}
