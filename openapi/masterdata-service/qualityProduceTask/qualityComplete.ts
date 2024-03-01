import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/qualityCompleteUsingPOST
*/
export default function fetchMethod(options: { data: ITheDTOCompletesTheInspectionTask, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityProduceTask/qualityComplete",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务完成 DTO */
export interface ITheDTOCompletesTheInspectionTask {
    /** 质检任务id */
    id?: string;
    /** 质检物料结果集 */
    planItemResults?: IQualityInspectionResultMaterialInformationDTO[];
}
/** 质检结果物料信息 DTO */
export interface IQualityInspectionResultMaterialInformationDTO {
    /** 质检结果类型 */
    qualityInspectionResultType?: EQualityInspectionResultMaterialInformationDTO_qualityInspectionResultType;
    /** 每项物料填的质检结果集 */
    qualityTaskMaterialItems?: IQualityInspectionResultDTO[];
}
/** 质检结果 DTO */
export interface IQualityInspectionResultDTO {
    /** 质检方案质检项关联id */
    qualityInspectionPlanItemRpId?: string;
    /** 质检值，所选的情况下传多个，其他都只传一个 */
    qualityInspectionValues?: string[];
    /** 上传图片key集合 */
    uploadImageKeys?: string[];
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

export enum EQualityInspectionResultMaterialInformationDTO_qualityInspectionResultType {
    /** 合格 */
    PASS = "PASS",
    /** 不合格 */
    NOT_PASS = "NOT_PASS",
    /** 让步接收 */
    CONCESSION = "CONCESSION"
}
