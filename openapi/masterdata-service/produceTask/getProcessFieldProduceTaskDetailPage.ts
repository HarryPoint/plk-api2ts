import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProcessFieldProduceTaskDetailPageUsingPOST
*/
export default function fetchMethod(options: { data: ITheTaskSummaryTableSearchesVOBasedOnProcessFieldsparams: { enterpriseId?: number, extraOptions?: any) {
    return http<ITheJSONResultPageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO>(
        {
            url: "/masterdata-service/produceTask/getProcessFieldProduceTaskDetailPage",
            method: "post",
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
    processId: number;
    /** 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss */
    planStartDate?: string;
    /** 开始日期(计划生产日期) yyyy-MM-dd HH:mm:ss */
    planEndDate?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 物料ids */
    materialIds?: number[];
    /** 生产任务状态列表 */
    produceTaskStatusList?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL')[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«任务汇总表(基于工序字段)明细信息VO» */
export interface IThePageInformationTaskSummaryTableIsBasedOnProcessFieldDetailsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheTaskSummaryTableIsBasedOnProcessFieldDetailsVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 任务汇总表(基于工序字段)明细信息VO */
export interface ITheTaskSummaryTableIsBasedOnProcessFieldDetailsVO {
    /** 生产任务id */
    produceTaskId?: string;
    /** 计划生产日期 */
    planTime?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 数量 */
    quantity?: number;
    /** 动态字段值列表 */
    fieldValueList?: IProcedureFieldValueVO[];
    /** 生产任务状态 */
    produceTaskStatus?: ('WAIT' | 'PRODUCE' | 'PAUSE' | 'STOP' | 'CLOSE' | 'CANCEL');
}
/** 工序字段值VO */
export interface IProcedureFieldValueVO {
    /** 字段编号 */
    code?: string;
    /** 字段值 */
    value?: string;
}
