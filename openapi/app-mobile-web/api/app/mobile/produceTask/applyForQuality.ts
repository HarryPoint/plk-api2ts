import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/applyForQualityUsingPOST
*/
export default function fetchMethod(options: { data: IApplyForTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/applyForQuality",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检申请DTO */
export interface IApplyForTheDTO {
    /** 生产任务id */
    produceTaskId: number;
    /** 批次id */
    lotOrderId: number;
    /** wip状态记录id */
    wipRpId: number;
    /** 成品物料信息 */
    finishedMaterial: IFillInTheDTOForFinishedMaterials;
}
/** 成品物料填写DTO */
export interface IFillInTheDTOForFinishedMaterials {
    /** 实际数(质检数) */
    actualQuantity?: number;
    /** 再次申请质检数 */
    applyQualityAgainQuantity?: number;
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
