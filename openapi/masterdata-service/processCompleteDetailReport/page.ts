import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/工序完成明细表/pageUsingPOST_1
*/
export default function fetchMethod(options: { data: IProcedureCompletionListQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationOperationCompletionDetailTableResponseDto>(
        {
            url: "/masterdata-service/processCompleteDetailReport/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序完成明细表查询 */
export interface IProcedureCompletionListQuery {
    /** 日期 -- 开始 */
    beginTime: number;
    /** 排班日期集合 */
    calendarDayList?: any[];
    /** 配置号 */
    configNo?: string;
    /** 当日计划完工量 */
    curPlanCompleteNumRange?: number[];
    /** 日期 -- 结束 */
    endTime: number;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 是否主订单 */
    isMaster?: EProcedureCompletionListQuery_isMaster;
    /** 是否根据排班日期查询 */
    isQueryByCalendar?: boolean;
    /** 物料id集合 */
    materialIdList?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 当日计划量 */
    planProduceNumRange?: number[];
    /** 工序ids */
    processIds?: string[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 实际完工量 */
    realProduceNumRange?: number[];
    /** 报工人员集合 */
    reportUserList?: Record<string, any>[];
    /** 任务计划开工日期 */
    taskBeginTime?: number;
    /** 任务计划开工日期 */
    taskEndTime?: number;
    /** 生产任务编号 */
    taskNo?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«工序完成明细表响应dto»» */
export interface IJSONResultPagingInformationOperationCompletionDetailTableResponseDto {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProcessCompletionDetailTableResponseDto;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工序完成明细表响应dto» */
export interface IPageInformationProcessCompletionDetailTableResponseDto {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProcessCompletionDetailTableResponseDto_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProcessCompletionDetailTableResponseDto_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProcessCompletionDetailsRespondToDto[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 工序完成明细表响应dto */
export interface IProcessCompletionDetailsRespondToDto {
    /** 当日计划完工量 */
    curPlanCompleteNum?: number;
    /** 日期 */
    day?: number;
    /** 当日计划量 */
    planProduceNum?: number;
    /** 生产工序id */
    processId?: string;
    /** 生产工序名 */
    processName?: string;
    /** 生产订单列表 */
    produceOrderList?: IProcessCompletionDetailsProductionOrderResponseDto[];
    /** 实际完工量 */
    realProduceNum?: number;
}
/** 工序完成明细表生产订单响应dto */
export interface IProcessCompletionDetailsProductionOrderResponseDto {
}

export enum EProcedureCompletionListQuery_isMaster {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProcessCompletionDetailTableResponseDto_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProcessCompletionDetailTableResponseDto_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
