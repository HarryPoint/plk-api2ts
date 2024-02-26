import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产质检管理/qualityCompleteUsingPOST
*/
export default function fetchMethod(data: ITheDTOCompletesTheInspectionTask, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qualityProduceTask/qualityComplete",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 质检任务完成 DTO */
export interface ITheDTOCompletesTheInspectionTask {
    /** 质检任务id */
    id?: number;
    /** 质检物料结果集 */
    planItemResults?: IQualityInspectionResultMaterialInformationDTO[];
}
/** 质检结果物料信息 DTO */
export interface IQualityInspectionResultMaterialInformationDTO {
    /** 质检结果类型 */
    qualityInspectionResultType?: string;
    /** 每项物料填的质检结果集 */
    qualityTaskMaterialItems?: IQualityInspectionResultDTO[];
}
/** 质检结果 DTO */
export interface IQualityInspectionResultDTO {
    /** 质检方案质检项关联id */
    qualityInspectionPlanItemRpId?: number;
    /** 质检值，所选的情况下传多个，其他都只传一个 */
    qualityInspectionValues?: string[];
    /** 上传图片key集合 */
    uploadImageKeys?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
