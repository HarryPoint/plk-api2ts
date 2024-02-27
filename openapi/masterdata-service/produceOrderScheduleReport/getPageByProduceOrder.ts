import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/订单排产报表/getPageByProduceOrderUsingPOST
*/
export default function fetchMethod(options: { data: IProductionSchedulingOrderSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationSchedulingProductionOrderReportVOProductionOrderDimension>(
        {
            url: "/masterdata-service/produceOrderScheduleReport/getPageByProduceOrder",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产排产订单搜索VO */
export interface IProductionSchedulingOrderSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 父级订单编号 */
    parentProduceOrderCode?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 物料id集合 */
    materialIds?: string[];
    /** 计划开始日期查询开始时间 */
    startTimeOfBeginTime?: number;
    /** 计划开始日期查询结束时间 */
    endTimeOfBeginTime?: number;
    /** 排产方式集合 */
    planTypeList?: EProductionSchedulingOrderSearchVO_planTypeList_items[];
    /** 计划结束日期查询结束时间 */
    endTimeOfEndTime?: number;
    /** 计划结束日期查询开始时间 */
    startTimeOfEndTime?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«排产订单报表VO(生产订单维度)»» */
export interface IJSONResultPageInformationSchedulingProductionOrderReportVOProductionOrderDimension {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationSchedulingOrderReportVOProductionOrderDimension;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«排产订单报表VO(生产订单维度)» */
export interface IPageInformationSchedulingOrderReportVOProductionOrderDimension {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProductionSchedulingOrderReportVOProductionOrderDimension[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSchedulingOrderReportVOProductionOrderDimension_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSchedulingOrderReportVOProductionOrderDimension_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 排产订单报表VO(生产订单维度) */
export interface IProductionSchedulingOrderReportVOProductionOrderDimension {
    /** 生产订单id */
    id?: string;
    /** 生产订单号 */
    code?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 计划交付日期 */
    deliveryDate?: number;
    /** 优先级 */
    priorityLevel?: number;
    /** 对应标准工艺路径id */
    routingId?: string;
    /** 工艺路径 */
    routingName?: string;
    /** 交付数量 */
    totalCount?: number;
    /** 排产状态描述 */
    planStatusDesc?: string;
    /** 排产方式描述 */
    planTypeDesc?: string;
    /** 订单计划开始日期 */
    beginTime?: number;
    /** 订单计划结束时间 */
    endTime?: number;
    /** 计划产量列表 */
    orderDayPlanQuantityList?: IIdcodenameIndicatesTheValueVO[];
    /** 工序完成进度列表 */
    routingStepCompleteProgressList?: IIdcodenameIndicatesTheValueVO[];
    /** 工序步骤计划列表 */
    routingStepPlanList?: IProductionSchedulingOrderReportProcessStepPlanVO[];
}
/** Id，code, name, 值VO */
export interface IIdcodenameIndicatesTheValueVO {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 值 */
    value?: number;
}
/** 排产订单报表工序步骤计划VO */
export interface IProductionSchedulingOrderReportProcessStepPlanVO {
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序名称 */
    processName?: string;
    /** 生产数量 -- 产能 */
    capacityProduceQuantity?: number;
    /** 生产时间 -- 产能 */
    capacityProduceTime?: number;
    /** 时间单位 -- 产能 */
    capacityTimeType?: EProductionSchedulingOrderReportProcessStepPlanVO_capacityTimeType;
    /** 时间单位 -- 准备耗时 */
    readyTimeUnit?: EProductionSchedulingOrderReportProcessStepPlanVO_readyTimeUnit;
    /** 准备耗时 -- 准备耗时 */
    readyTime?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 计划产量列表 */
    routingStepPlanDayQuantityList?: IIdcodenameIndicatesTheValueVO[];
}

export enum EProductionSchedulingOrderSearchVO_planTypeList_items {
    NOT_PLAN = "NOT_PLAN",
    AUTO = "AUTO",
    HAND = "HAND",
    VAGUE = "VAGUE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationSchedulingOrderReportVOProductionOrderDimension_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSchedulingOrderReportVOProductionOrderDimension_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionSchedulingOrderReportProcessStepPlanVO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProductionSchedulingOrderReportProcessStepPlanVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
