import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getAllProduceTimeFeeMonthExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IMonthlyReportOfHourlyLaborFeeSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheMonthlySummaryReportOfManHourFeeIsReturnedToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getAllProduceTimeFeeMonthExportResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工时工费月度报表搜索VO */
export interface IMonthlyReportOfHourlyLaborFeeSearchVO {
    /** 查询开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 班组id集 */
    classGroupIds?: string[];
    /** 查询结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 员工id集 */
    userIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«工时工费月度汇总报表返回VO»» */
export interface IJSONResultListTheMonthlySummaryReportOfManHourFeeIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMonthlySummaryReportOfManHourPaymentIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工时工费月度汇总报表返回VO */
export interface IMonthlySummaryReportOfManHourPaymentIsReturnedToVO {
    /** 返工产出工费 */
    backFee?: number;
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
    /** 月份 */
    month?: number;
    /** 合格产出工费 */
    produceFee?: number;
    /** 合计工费 */
    totalFee?: number;
    /** 员工id */
    userId?: string;
    /** 员工姓名 */
    username?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
