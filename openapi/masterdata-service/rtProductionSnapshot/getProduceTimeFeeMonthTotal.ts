import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getProduceTimeFeeMonthTotalUsingPOST
*/
export default function fetchMethod(options: { data: IMonthlyReportOfHourlyLaborFeeSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMonthlySummaryStatisticalReportOfManHourFeeReturnedToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceTimeFeeMonthTotal",
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
/** JSONResult«工时工费月度汇总统计报表返回VO» */
export interface IJSONResultMonthlySummaryStatisticalReportOfManHourFeeReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMonthlySummaryStatisticalReportOfManHourFeeIsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工时工费月度汇总统计报表返回VO */
export interface IMonthlySummaryStatisticalReportOfManHourFeeIsReturnedToVO {
    /** 返工产出工费 */
    backFee?: number;
    /** 合格产出工费 */
    produceFee?: number;
    /** 合计工费 */
    totalFee?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
