import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectFeeReportUsingPOST
*/
export default function fetchMethod(data: QueryProjectFeeReport, extraOptions?: any) {
    return http<IJSONResultPagingInformationItemCostReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectFeeReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目费用报表响应对象»» */
export interface IJSONResultPagingInformationItemCostReportResponseObject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPageInformationItemCostReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«项目费用报表响应对象» */
export interface IPageInformationItemCostReportResponseObject {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IProjectExpenseReportResponseObject[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** 项目费用报表响应对象 */
export interface IProjectExpenseReportResponseObject {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 项目id */
    projectId: number;
    /** 项目名称 */
    projectName: string;
    /** 项目编号 */
    projectCode: string;
    /** 项目类型id */
    projectTypeId: number;
    /** 项目类型名称 */
    projectTypeName: string;
    /** 项目大类 */
    projectCategory: string;
    /** 项目大类名称 */
    projectCategoryName: string;
    /** 项目经理名称 */
    projectManagerName: string;
    /** 是否超期 */
    isOverdue: string;
    /** 超期天数(天) */
    overdueDay: number;
    /** 状态 */
    status: string;
    /** 来源应用编号 */
    fromAppCode: string;
    /** 来源应用id */
    fromAppId: number;
    /** undefined */
    projectManagerId: number;
    /** 项目年度预算（元） */
    projectAnnualBudget: number;
    /** 执行年月 */
    executeTime: string;
    /** 本月预算执行（元） */
    budgetExecute: number;
    /** 本月预算执行率 */
    budgetExecuteRate: number;
    /** 月度资金计划（元） */
    monthFundPlan: number;
    /** 月度资金计划执行（元） */
    monthFundPlanExecute: number;
    /** 月度资金计划执行率 */
    monthFundPlanExecuteRate: number;
    /** 填报人名称 */
    reportUserName: string;
    /** 填报部门名称 */
    reportDeptName: string;
    /** 填报时间 */
    reportTime: string;
    /** undefined */
    reportUserId: number;
    /** undefined */
    reportDeptId: number;
}
