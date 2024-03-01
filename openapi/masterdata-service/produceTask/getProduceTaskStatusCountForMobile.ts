import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getProduceTaskStatusCountForMobileUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskQueryDTOForMobileEnd }, extraOptions?: any) {
    return http<IJSONResultNumberOfProductionTaskStatesReturnedForTheMobileEnd>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskStatusCountForMobile",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务查询DTO(针对移动端) */
export interface IProductionTaskQueryDTOForMobileEnd {
    /** 开始时间 yyyy-MM-dd HH:mm:dd */
    beginTime?: string;
    /** 生产订单号/生产任务编号(扫码查询时默认为生产订单号) */
    codeSearch?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:dd */
    endTime?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 物料id */
    materialIds?: string[];
    /** 任务进站关键参数是否需要填写 */
    moveInKeyParameterFillNeeds?: EProductionTaskQueryDTOForMobileEnd_moveInKeyParameterFillNeeds;
    /** 任务出站关键参数是否需要填写 */
    moveOutKeyParameterFillNeeds?: EProductionTaskQueryDTOForMobileEnd_moveOutKeyParameterFillNeeds;
    /** 生产任务可操作类型 */
    optTypes?: EProductionTaskQueryDTOForMobileEnd_optTypes_items[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 计划生产数量最高数量 */
    planProduceMaxQuantity?: number;
    /** 计划生产数量最低数量 */
    planProduceMinQuantity?: number;
    /** 工序id */
    processId: string;
    /** 工序id集合 */
    processIds?: string[];
    /** undefined */
    produceOrderIds?: string[];
    /** 生产订单字段搜索 */
    produceOrderSearchList?: IProcessDataDetailsSearchVO[];
    /** 查询类型 */
    queryType?: EProductionTaskQueryDTOForMobileEnd_queryType;
    /** 任务状态 */
    statusList?: EProductionTaskQueryDTOForMobileEnd_statusList_items[];
    /** 生产任务编号集合(扫码查询切换进出料查询时传参) */
    taskNos?: string[];
    /** 任务类型 */
    types?: EProductionTaskQueryDTOForMobileEnd_types_items[];
    /** undefined */
    userId?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
}
/** JSONResult«生产任务状态数量返回(针对移动端)» */
export interface IJSONResultNumberOfProductionTaskStatesReturnedForTheMobileEnd {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: INumberOfProductionTaskStatesReturnedForTheMobileEnd;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务状态数量返回(针对移动端) */
export interface INumberOfProductionTaskStatesReturnedForTheMobileEnd {
    /** 已关闭数量 */
    closeQuantity?: string;
    /** 生产中数量 */
    produceQuantity?: string;
    /** 待处理数量 */
    waitQuantity?: string;
}

export enum EProductionTaskQueryDTOForMobileEnd_moveInKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskQueryDTOForMobileEnd_moveOutKeyParameterFillNeeds {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionTaskQueryDTOForMobileEnd_optTypes_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EProductionTaskQueryDTOForMobileEnd_queryType {
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 模具 */
    MOLD = "MOLD"
}

export enum EProductionTaskQueryDTOForMobileEnd_statusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EProductionTaskQueryDTOForMobileEnd_types_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
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
