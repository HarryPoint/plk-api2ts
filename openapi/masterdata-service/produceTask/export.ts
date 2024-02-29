import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/exportUsingPOST_22
*/
export default function fetchMethod(options: { data: IExportTheDTOOfAProductionTask, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceTask/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务导出DTO */
export interface IExportTheDTOOfAProductionTask {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 对应工序id */
    processIds?: string[];
    /** 任务号 */
    taskNo?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 对应物料id */
    materialIds?: string[];
    /** 任务类型描述 */
    typeDesc?: string;
    /** 任务下发方式 */
    issueType?: EExportTheDTOOfAProductionTask_issueType;
    /** 任务下发方式描述 */
    issueTypeDesc?: string;
    /** 任务类型 */
    type?: EExportTheDTOOfAProductionTask_type;
    /** 计划开始-结束时间 yyyy-MM-dd HH:mm:ss */
    startEndTime?: string;
    /** 任务状态 */
    statusList?: EExportTheDTOOfAProductionTask_statusList_items[];
    /** 任务优先级 */
    priorityLevel?: number;
    /** 创建开始时间 yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 计划开始-开始时间 yyyy-MM-dd HH:mm:ss */
    startBeginTime?: string;
    /** 计划结束-开始时间 yyyy-MM-dd HH:mm:ss */
    endBeginTime?: string;
    /** 计划结束-结束时间 yyyy-MM-dd HH:mm:ss */
    endEndTime?: string;
    /** 创建结束时间 yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 导出字段code */
    exportFieldCodes?: string[];
    /** 可操作项 */
    canOpItem?: EExportTheDTOOfAProductionTask_canOpItem;
    /** 生产订单字段搜索 */
    produceOrderSearchList?: IProcessDataDetailsSearchVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
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

export enum EExportTheDTOOfAProductionTask_issueType {
    /** 排产下发 */
    PLAN = "PLAN",
    /** 直接下发 */
    DIRECT = "DIRECT"
}

export enum EExportTheDTOOfAProductionTask_type {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum EExportTheDTOOfAProductionTask_statusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EExportTheDTOOfAProductionTask_canOpItem {
    /** 进料 */
    CAN_MOVE_IN = "CAN_MOVE_IN",
    /** 质检 */
    CAN_QUALITY = "CAN_QUALITY",
    /** 出料 */
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}
