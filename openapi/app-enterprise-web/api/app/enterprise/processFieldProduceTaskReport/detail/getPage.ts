import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/任务汇总表(基于工序字段)/getDetailPageUsingPOST
*/
export default function fetchMethod(options: { data: ITheTaskSummaryTableSearchesVOBasedOnProcessFields }, extraOptions?: any) {
    return http<ITheJSONResultPageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processFieldProduceTaskReport/detail/getPage",
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
/** JSONResult«分页信息«任务汇总表(基于工序字段)明细信息VO»» */
export interface ITheJSONResultPageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«任务汇总表(基于工序字段)明细信息VO» */
export interface IThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheTaskSummaryTableIsBasedOnProcessFieldDetailsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 任务汇总表(基于工序字段)明细信息VO */
export interface ITheTaskSummaryTableIsBasedOnProcessFieldDetailsVO {
    /** 生产任务id */
    produceTaskId?: string;
    /** 计划生产日期 */
    planTime?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 数量 */
    quantity?: number;
    /** 动态字段值列表 */
    fieldValueList?: IProcedureFieldValueVO[];
    /** 生产任务状态 */
    produceTaskStatus?: ETheTaskSummaryTableIsBasedOnProcessFieldDetailsVO_produceTaskStatus;
}
/** 工序字段值VO */
export interface IProcedureFieldValueVO {
    /** 字段编号 */
    code?: string;
    /** 字段值 */
    value?: string;
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

export enum EThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheTaskSummaryTableIsBasedOnProcessFieldDetailsVO_produceTaskStatus {
    /** 待处理 */
    WAIT = "WAIT",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 暂停中 */
    PAUSE = "PAUSE",
    /** 停止 */
    STOP = "STOP",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 已取消 */
    CANCEL = "CANCEL"
}
