import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务规则相关/addUsingPOST_5
*/
export default function fetchMethod(options: { data: IProjectTaskRulesAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/projectTaskRule/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务规则新增请求DTO */
export interface IProjectTaskRulesAddRequestDTO {
    /** 项目任务ID */
    projectTaskId?: string;
    /** 任务类型 */
    taskType?: EProjectTaskRulesAddRequestDTO_taskType;
    /** 不通过比较类型 */
    notPassCompareType?: EProjectTaskRulesAddRequestDTO_notPassCompareType;
    /** 不通过的临界值 */
    notPassRuleValue?: number;
    /** 通过的比较类型 */
    passCompareType?: EProjectTaskRulesAddRequestDTO_passCompareType;
    /** 通过比较值 */
    passRuleValue?: number;
    /** 带风险通过的比较类型 */
    takeRiskPassCompareType?: EProjectTaskRulesAddRequestDTO_takeRiskPassCompareType;
    /** 带风险通过比较值 */
    takeRiskPassRuleValue?: number;
    /** 修改比较类型 */
    modifyCompareType?: EProjectTaskRulesAddRequestDTO_modifyCompareType;
    /** 修改规则值 */
    modifyRuleValue?: number;
    /** 修改任务ID列表 */
    modifyTaskIdList?: string[];
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProjectTaskRulesAddRequestDTO_taskType {
    /** 评审任务 */
    REVIEW_TASK = "REVIEW_TASK",
    /** 决策任务 */
    DECISION_TASK = "DECISION_TASK",
    /** 通用任务 */
    GENERAL_TASK = "GENERAL_TASK"
}

export enum EProjectTaskRulesAddRequestDTO_notPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesAddRequestDTO_passCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesAddRequestDTO_takeRiskPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRulesAddRequestDTO_modifyCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}
