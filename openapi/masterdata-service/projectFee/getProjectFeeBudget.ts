import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:16700/doc.html#/default/项目费用相关/getProjectFeeBudgetUsingPOST
*/
export default function fetchMethod(options: { data: IProjectCostBudgetQueryObject }, extraOptions?: any) {
    return http<IJSONResultProjectCostBudgetResponseObject>(
        {
            url: "/masterdata-service/projectFee/getProjectFeeBudget",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目费用预算查询对象 */
export interface IProjectCostBudgetQueryObject {
    /** 执行时间 yyyy-MM-dd HH:mm:ss */
    executeTime?: number;
    /** 项目id */
    projectId?: string;
}
/** JSONResult«项目费用预算响应对象» */
export interface IJSONResultProjectCostBudgetResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectCostBudgetResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目费用预算响应对象 */
export interface IProjectCostBudgetResponseObject {
    /** 执行时间 */
    executeTime?: number;
    /** 最新项目年度预算（元） */
    lastProjectAnnualBudget?: number;
    /** 当年预算执行合计（元） */
    totalBudgetExecute?: number;
}
