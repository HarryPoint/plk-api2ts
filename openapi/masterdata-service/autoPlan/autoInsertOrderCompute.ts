import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/自动排产订单相关/autoInsertOrderComputeUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderAutomaticInsertionDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultSchedulingResultVO>(
        {
            url: "/masterdata-service/autoPlan/autoInsertOrderCompute",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单自动插单DTO */
export interface IProductionOrderAutomaticInsertionDTO {
    /** 插单位置 */
    insertOrderPosition?: EProductionOrderAutomaticInsertionDTO_insertOrderPosition;
    /** 插单类型 */
    insertOrderType?: EProductionOrderAutomaticInsertionDTO_insertOrderType;
    /** 插单生产订单id */
    insertProduceOrderId?: string;
    /** 插单时间 yyyy-MM-dd HH:mm:ss */
    insertTime?: string;
    /** 是否正向排产 */
    isAsc?: EProductionOrderAutomaticInsertionDTO_isAsc;
    /** 是否考虑自动提前 */
    isAutoMoveUp?: EProductionOrderAutomaticInsertionDTO_isAutoMoveUp;
    /** 是否倒序排产 */
    isDesc?: EProductionOrderAutomaticInsertionDTO_isDesc;
    /** 待排产订单id集 */
    waitProduceOrderIds?: string[];
}
/** JSONResult«排产计算结果VO» */
export interface IJSONResultSchedulingResultVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICalculationResultOfSchedulingVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 排产计算结果VO */
export interface ICalculationResultOfSchedulingVO {
    /** 正向排产结果分析 */
    ascAnalysis?: ITheResultsOfSchedulingCalculationWereAnalyzedVO;
    /** 正向排产结果 */
    ascList?: IUnscheduledProductionOrdersAreReturnedToVO[];
    /** 正向顺延订单 */
    ascPostponeList?: IUnscheduledProductionOrdersAreReturnedToVO[];
    /** 倒序排产结果分析 */
    descAnalysis?: ITheResultsOfSchedulingCalculationWereAnalyzedVO;
    /** 倒序排产结果 */
    descList?: IUnscheduledProductionOrdersAreReturnedToVO[];
    /** 倒序顺延订单 */
    descPostponeList?: IUnscheduledProductionOrdersAreReturnedToVO[];
}
/** 排产计算结果分析VO */
export interface ITheResultsOfSchedulingCalculationWereAnalyzedVO {
    /** 影响订单个数 */
    affectOrderCount?: number;
    /** 排产方式 */
    autoPlanType?: ETheResultsOfSchedulingCalculationWereAnalyzedVO_autoPlanType;
    /** 可增加工时日期集 */
    canPlusDays?: any[];
    /** 是否按期交付 */
    isOnTime?: ETheResultsOfSchedulingCalculationWereAnalyzedVO_isOnTime;
    /** 还需增加工时(小时) */
    needPlusTime?: number;
    /** 超期订单个数 */
    overdueOrderCount?: number;
    /** 超期原因分析集 */
    overdueReasons?: string[];
    /** 超期原因类型集 */
    overdueTypes?: ETheResultsOfSchedulingCalculationWereAnalyzedVO_overdueTypes_items[];
}
/** 未排产生产订单返回VO */
export interface IUnscheduledProductionOrdersAreReturnedToVO {
    /** 订单计划开始日期 */
    beginTime?: string;
    /** 生产订单编号 */
    code?: string;
    /** 订单当前计划开始日期 */
    currentBeginTime?: string;
    /** 订单当前计划结束日期 */
    currentEndTime?: string;
    /** 计划交付日期 */
    deliveryDate?: string;
    /** 订单计划结束日期 */
    endTime?: string;
    /** id */
    id?: string;
    /** 是否加急 */
    isEmergentOrder?: EUnscheduledProductionOrdersAreReturnedToVO_isEmergentOrder;
    /** 生产物料编号 */
    materialCode?: string;
    /** 生产物料id */
    materialId?: string;
    /** 生产物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 父级订单编号 */
    parentProduceOrderCode?: string;
    /** 排产状态 */
    planStatus?: EUnscheduledProductionOrdersAreReturnedToVO_planStatus;
    /** 排产状态描述 */
    planStatusDesc?: string;
    /** 订单优先级 */
    priorityLevel?: number;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 步骤集 */
    steps?: IUnscheduledProductionOrderStepReturnToVO[];
    /** 交付数量 */
    totalCount?: number;
}
/** 未排产订单步骤返回VO */
export interface IUnscheduledProductionOrderStepReturnToVO {
    /** 工序计划开始日期 */
    beginTime?: string;
    /** 产能-生产数量 */
    capacityProduceQuantity?: number;
    /** 产能-生产时间 */
    capacityProduceTime?: number;
    /** 产能-时间类型 */
    capacityTimeType?: EUnscheduledProductionOrderStepReturnToVO_capacityTimeType;
    /** 工序当前计划开始日期 */
    currentBeginTime?: string;
    /** 工序当前计划结束日期 */
    currentEndTime?: string;
    /** 工序计划结束日期 */
    endTime?: string;
    /** id */
    id?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EUnscheduledProductionOrderStepReturnToVO_readyTimeUnit;
}

export enum EProductionOrderAutomaticInsertionDTO_insertOrderPosition {
    /** 之前 */
    BEFORE = "BEFORE",
    /** 之后 */
    AFTER = "AFTER"
}

export enum EProductionOrderAutomaticInsertionDTO_insertOrderType {
    /** 按时间选择 */
    TIME = "TIME",
    /** 按订单选择 */
    ORDER = "ORDER"
}

export enum EProductionOrderAutomaticInsertionDTO_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderAutomaticInsertionDTO_isAutoMoveUp {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderAutomaticInsertionDTO_isDesc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheResultsOfSchedulingCalculationWereAnalyzedVO_autoPlanType {
    /** 正向排产 */
    ASC = "ASC",
    /** 倒序排产 */
    DESC = "DESC"
}

export enum ETheResultsOfSchedulingCalculationWereAnalyzedVO_isOnTime {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheResultsOfSchedulingCalculationWereAnalyzedVO_overdueTypes_items {
    PROCESS = "PROCESS",
    OCCUPY = "OCCUPY",
    CAPACITY = "CAPACITY"
}

export enum EUnscheduledProductionOrdersAreReturnedToVO_isEmergentOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EUnscheduledProductionOrdersAreReturnedToVO_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EUnscheduledProductionOrderStepReturnToVO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EUnscheduledProductionOrderStepReturnToVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
