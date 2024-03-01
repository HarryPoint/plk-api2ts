import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/applyForQualityUsingPOST
*/
export default function fetchMethod(options: { data: IApplyForTheDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceTask/applyForQuality",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检申请DTO */
export interface IApplyForTheDTO {
    /** 成品物料信息 */
    finishedMaterial: IFillInTheDTOForFinishedMaterials;
    /** 批次id */
    lotOrderId: string;
    /** 生产任务id */
    produceTaskId: string;
    /** wip状态记录id */
    wipRpId: string;
}
/** 成品物料填写DTO */
export interface IFillInTheDTOForFinishedMaterials {
    /** 实际数(质检数) */
    actualQuantity?: number;
    /** 再次申请质检数 */
    applyQualityAgainQuantity?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
