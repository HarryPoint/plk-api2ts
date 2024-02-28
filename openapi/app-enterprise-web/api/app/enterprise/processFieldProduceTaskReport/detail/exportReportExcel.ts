import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/任务汇总表(基于工序字段)/exportDetailReportExcelUsingPOST
*/
export default function fetchMethod(options: { data: ITheTaskSummaryTableSearchesVOBasedOnProcessFields }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processFieldProduceTaskReport/detail/exportReportExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务汇总表(基于工序字段)搜索VO */
export interface ITheTaskSummaryTableSearchesVOBasedOnProcessFields {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId: string;
    /** 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss */
    planStartDate?: number;
    /** 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss */
    planEndDate?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 物料ids */
    materialIds?: string[];
    /** 生产任务状态列表 */
    produceTaskStatusList?: ETheTaskSummaryTableSearchesVOBasedOnProcessFields_produceTaskStatusList_items[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
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

export enum ETheTaskSummaryTableSearchesVOBasedOnProcessFields_produceTaskStatusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
