import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务规则相关/getByIdUsingGET_14
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectTaskRuleDetailResponseDTO>(
        {
            url: "/masterdata-service/projectTaskRule/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目任务规则明细响应DTO» */
export interface IJSONResultProjectTaskRuleDetailResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskRulesDetailResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务规则明细响应DTO */
export interface IProjectTaskRulesDetailResponseDTO {
    /** ID */
    id?: string;
    /** 项目任务ID */
    projectTaskId?: string;
    /** 任务类型 */
    taskType?: EProjectTaskRulesDetailResponseDTO_taskType;
    /** 不通过比较类型 */
    notPassCompareType?: EProjectTaskRulesDetailResponseDTO_notPassCompareType;
    /** 不通过的临界值 */
    notPassRuleValue?: number;
    /** 通过的比较类型 */
    passCompareType?: EProjectTaskRulesDetailResponseDTO_passCompareType;
    /** 通过比较值 */
    passRuleValue?: number;
    /** 带风险通过的比较类型 */
    takeRiskPassCompareType?: EProjectTaskRulesDetailResponseDTO_takeRiskPassCompareType;
    /** 带风险通过比较值 */
    takeRiskPassRuleValue?: number;
    /** 修改比较类型 */
    modifyCompareType?: EProjectTaskRulesDetailResponseDTO_modifyCompareType;
    /** 修改规则值 */
    modifyRuleValue?: number;
    /** 修改任务ID列表 */
    modifyTaskIdList?: string[];
    /** 修改任务列表 */
    modifyTaskList?: IIdNameVO[];
    /** 最终评审或决策结果 */
    finalReviewOrReviewResult?: string;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
}

export enum EProjectTaskRulesDetailResponseDTO_taskType {
    /** 评审任务 */
    REVIEW_TASK = "REVIEW_TASK",
    /** 决策任务 */
    DECISION_TASK = "DECISION_TASK",
    /** 通用任务 */
    GENERAL_TASK = "GENERAL_TASK"
}

export enum EProjectTaskRulesDetailResponseDTO_notPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesDetailResponseDTO_passCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesDetailResponseDTO_takeRiskPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesDetailResponseDTO_modifyCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}
