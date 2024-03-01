import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/检验项相关/computeSampleSizeUsingPOST
*/
export default function fetchMethod(options: { data: ICheckItemCalculatesDTO }, extraOptions?: any) {
    return http<ITheJSONResultCheckItemCalculatesTheResponseDTO>(
        {
            url: "/masterdata-service/qmsInspectionItems/computeSampleSize",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 检验项计算DTO */
export interface ICheckItemCalculatesDTO {
    /** 检验方式 */
    inspectionMethodType?: ECheckItemCalculatesDTO_inspectionMethodType;
    /** 抽样标准id */
    qmsSamplingStandardsId?: string;
    /** 样本量 */
    sampleSize?: number;
}
/** JSONResult«检验项计算响应DTO» */
export interface ITheJSONResultCheckItemCalculatesTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheTestItemCalculatesTheResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 检验项计算响应DTO */
export interface ITheTestItemCalculatesTheResponseDTO {
    /** undefined */
    ac?: number;
    /** undefined */
    batchRangeEndValue?: number;
    /** undefined */
    batchRangeStartValue?: number;
    /** undefined */
    inspectionSampleSize?: number;
    /** undefined */
    percentage?: number;
    /** undefined */
    qmsSamplingStandardsId?: string;
    /** undefined */
    re?: number;
    /** undefined */
    sampleSize?: number;
    /** undefined */
    samplingStandardsAql?: string;
    /** undefined */
    samplingStandardsCharacterCode?: string;
    /** undefined */
    samplingStandardsLevel?: string;
}

export enum ECheckItemCalculatesDTO_inspectionMethodType {
    /** 抽检 */
    SPOT_CHECK = "SPOT_CHECK",
    /** 全检 */
    ALL_CHECK = "ALL_CHECK"
}
