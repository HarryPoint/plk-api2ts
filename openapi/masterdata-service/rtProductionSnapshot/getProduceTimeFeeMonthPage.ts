import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getProduceTimeFeeMonthPageUsingPOST
*/
export default function fetchMethod(options: { data: IMonthlyReportOfHourlyLaborFeeSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPageInformationMonthlySummaryReportOfLaborTimeIsReturnedToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceTimeFeeMonthPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工时工费月度报表搜索VO */
export interface IMonthlyReportOfHourlyLaborFeeSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 员工id集 */
    userIds?: number[];
    /** 班组id集 */
    classGroupIds?: number[];
    /** 查询开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 查询结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工时工费月度汇总报表返回VO»» */
export interface IJSONResultPageInformationMonthlySummaryReportOfLaborTimeIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«工时工费月度汇总报表返回VO» */
export interface IPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMonthlySummaryReportOfManHourPaymentIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 工时工费月度汇总报表返回VO */
export interface IMonthlySummaryReportOfManHourPaymentIsReturnedToVO {
    /** 月份 */
    month?: string;
    /** 员工id */
    userId?: number;
    /** 员工姓名 */
    username?: string;
    /** 班组id */
    classGroupId?: number;
    /** 班组名称 */
    classGroupName?: string;
    /** 合格产出工费 */
    produceFee?: number;
    /** 返工产出工费 */
    backFee?: number;
    /** 合计工费 */
    totalFee?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMonthlySummaryReportOfManHourFeeReturnsToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
