import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/年度质量目标相关/checkEditInfoUsingPOST
*/
export default function fetchMethod(options: { data: IAnnualQualityObjectivesEditAndVerifyDTO }, extraOptions?: any) {
    return http<IJSONResultAnnualQualityTargetEditCheckReturnsDTO>(
        {
            url: "/masterdata-service/qmsAnnualQualityTarget/checkEditInfo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 年度质量目标编辑校验DTO */
export interface IAnnualQualityObjectivesEditAndVerifyDTO {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 年份 */
    year?: string;
    /** 明细数据 */
    details?: IEditDTOForDetailedAnnualQualityObjectives[];
}
/** 年度质量目标明细编辑DTO */
export interface IEditDTOForDetailedAnnualQualityObjectives {
    /** id */
    id?: number;
    /** 所属年度质量目标id */
    qmsAnnualQualityTargetId?: number;
    /** 所属目标项 */
    qmsTargetItemId?: number;
    /** 目标类型 */
    targetType?: EEditDTOForDetailedAnnualQualityObjectives_targetType;
    /** 定性目标值 */
    qualitativeTargetValue?: string;
    /** 定量目标值 */
    quantifyTargetValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 监视频率 */
    monitorRate?: string;
    /** 状态 */
    detailStatus?: EEditDTOForDetailedAnnualQualityObjectives_detailStatus;
}
/** JSONResult«年度质量目标编辑校验返回DTO» */
export interface IJSONResultAnnualQualityTargetEditCheckReturnsDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAnnualQualityObjectiveEditCheckReturnsDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 年度质量目标编辑校验返回DTO */
export interface IAnnualQualityObjectiveEditCheckReturnsDTO {
    /** 能否提交 */
    canSubmit?: EAnnualQualityObjectiveEditCheckReturnsDTO_canSubmit;
    /** 失败类型 */
    checkFailType?: EAnnualQualityObjectiveEditCheckReturnsDTO_checkFailType;
}

export enum EEditDTOForDetailedAnnualQualityObjectives_targetType {
    /** 定性目标 */
    QUALITATIVE_OBJECTIVE = "QUALITATIVE_OBJECTIVE",
    /** 定量目标 */
    QUANTITATIVE_OBJECTIVE = "QUANTITATIVE_OBJECTIVE"
}

export enum EEditDTOForDetailedAnnualQualityObjectives_detailStatus {
    /** 审核中 */
    AUDITING = "AUDITING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 作废 */
    INVALID = "INVALID"
}

export enum EAnnualQualityObjectiveEditCheckReturnsDTO_canSubmit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAnnualQualityObjectiveEditCheckReturnsDTO_checkFailType {
    /** 年份已存在 */
    YEAR_EXIST = "YEAR_EXIST",
    /** 存在关联质量工作计划 */
    QUALITY_WORK_PLAN_EXIT = "QUALITY_WORK_PLAN_EXIT"
}
