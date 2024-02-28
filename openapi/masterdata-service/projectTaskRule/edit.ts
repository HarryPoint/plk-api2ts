import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/项目任务规则相关/editUsingPOST_14
*/
export default function fetchMethod(options: { data: IProjectTaskRuleEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectTaskRule/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目任务规则编辑请求DTO */
export interface IProjectTaskRuleEditRequestDTO {
    /** ID */
    id?: string;
    /** 项目任务ID */
    projectTaskId?: string;
    /** 任务类型 */
    taskType?: EProjectTaskRuleEditRequestDTO_taskType;
    /** 不通过比较类型 */
    notPassCompareType?: EProjectTaskRuleEditRequestDTO_notPassCompareType;
    /** 不通过的临界值 */
    notPassRuleValue?: number;
    /** 通过的比较类型 */
    passCompareType?: EProjectTaskRuleEditRequestDTO_passCompareType;
    /** 通过比较值 */
    passRuleValue?: number;
    /** 带风险通过的比较类型 */
    takeRiskPassCompareType?: EProjectTaskRuleEditRequestDTO_takeRiskPassCompareType;
    /** 带风险通过比较值 */
    takeRiskPassRuleValue?: number;
    /** 修改比较类型 */
    modifyCompareType?: EProjectTaskRuleEditRequestDTO_modifyCompareType;
    /** 修改规则值 */
    modifyRuleValue?: number;
    /** 修改任务ID列表 */
    modifyTaskIdList?: string[];
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProjectTaskRuleEditRequestDTO_taskType {
    /** 评审任务 */
    REVIEW_TASK = "REVIEW_TASK",
    /** 决策任务 */
    DECISION_TASK = "DECISION_TASK",
    /** 通用任务 */
    GENERAL_TASK = "GENERAL_TASK"
}

export enum EProjectTaskRuleEditRequestDTO_notPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRuleEditRequestDTO_passCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRuleEditRequestDTO_takeRiskPassCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EProjectTaskRuleEditRequestDTO_modifyCompareType {
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE"
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
