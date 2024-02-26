import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务规则相关/getByIdUsingGET_12
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
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
    ts?: number;
}
/** 项目任务规则明细响应DTO */
export interface IProjectTaskRulesDetailResponseDTO {
    /** ID */
    id?: number;
    /** 项目任务ID */
    projectTaskId?: number;
    /** 任务类型 */
    taskType?: ('REVIEW_TASK' | 'DECISION_TASK' | 'GENERAL_TASK');
    /** 不通过比较类型 */
    notPassCompareType?: ('GT' | 'GE');
    /** 不通过的临界值 */
    notPassRuleValue?: number;
    /** 通过的比较类型 */
    passCompareType?: ('GT' | 'GE');
    /** 通过比较值 */
    passRuleValue?: number;
    /** 带风险通过的比较类型 */
    takeRiskPassCompareType?: ('GT' | 'GE');
    /** 带风险通过比较值 */
    takeRiskPassRuleValue?: number;
    /** 修改比较类型 */
    modifyCompareType?: ('GT' | 'GE');
    /** 修改规则值 */
    modifyRuleValue?: number;
    /** 修改任务ID列表 */
    modifyTaskIdList?: number[];
    /** 修改任务列表 */
    modifyTaskList?: IIdNameVO[];
    /** 最终评审或决策结果 */
    finalReviewOrReviewResult?: string;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
}
