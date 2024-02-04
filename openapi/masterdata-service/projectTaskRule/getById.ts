// JSONResult«项目任务规则明细响应DTO»
export interface IJSONResult项目任务规则明细响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目任务规则明细响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务规则明细响应DTO
export interface I项目任务规则明细响应DTO {
    // ID
    id: number;
    // 项目任务ID
    projectTaskId: number;
    // 任务类型
    taskType: string;
    // 不通过比较类型
    notPassCompareType: string;
    // 不通过的临界值
    notPassRuleValue: number;
    // 通过的比较类型
    passCompareType: string;
    // 通过比较值
    passRuleValue: number;
    // 带风险通过的比较类型
    takeRiskPassCompareType: string;
    // 带风险通过比较值
    takeRiskPassRuleValue: number;
    // 修改比较类型
    modifyCompareType: string;
    // 修改规则值
    modifyRuleValue: number;
    // 修改任务ID列表
    modifyTaskIdList: number[];
    // 修改任务列表
    modifyTaskList: IIdNameVO[];
    // 最终评审或决策结果
    finalReviewOrReviewResult: string;
}
// Id，名称VO
export interface IIdNameVO {
    // id
    id: number;
    // 名称
    name: string;
}
