import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/年度质量目标相关/checkEditInfoUsingPOST
*/
export default function fetchMethod(data: IAnnualQualityObjectivesEditAndVerifyDTO, extraOptions?: any) {
    return http<IJSONResultAnnualQualityTargetEditCheckReturnsDTO>(
        {
            url: "/masterdata-service/qmsAnnualQualityTarget/checkEditInfo",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 年度质量目标编辑校验DTO */
export interface IAnnualQualityObjectivesEditAndVerifyDTO {
    /** id */
    id: number;
    /** 编号 */
    code: string;
    /** 年份 */
    year: string;
    /** 明细数据 */
    details: IEditDTOForDetailedAnnualQualityObjectives[];
}
/** 年度质量目标明细编辑DTO */
export interface IEditDTOForDetailedAnnualQualityObjectives {
    /** id */
    id: number;
    /** 所属年度质量目标id */
    qmsAnnualQualityTargetId: number;
    /** 所属目标项 */
    qmsTargetItemId: number;
    /** 目标类型 */
    targetType: string;
    /** 定性目标值 */
    qualitativeTargetValue: string;
    /** 定量目标值 */
    quantifyTargetValue: string;
    /** 计算公式 */
    formula: string;
    /** 监视频率 */
    monitorRate: string;
    /** 状态 */
    detailStatus: string;
}
/** JSONResult«年度质量目标编辑校验返回DTO» */
export interface IJSONResultAnnualQualityTargetEditCheckReturnsDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IAnnualQualityObjectiveEditCheckReturnsDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 年度质量目标编辑校验返回DTO */
export interface IAnnualQualityObjectiveEditCheckReturnsDTO {
    /** 能否提交 */
    canSubmit: string;
    /** 失败类型 */
    checkFailType: string;
}
