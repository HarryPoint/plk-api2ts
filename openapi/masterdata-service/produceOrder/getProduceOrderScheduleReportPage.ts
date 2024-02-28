import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/getProduceOrderScheduleReportPageUsingPOST
*/
export default function fetchMethod(options: { data: IProductionSchedulingOrderSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationReportProductionOrderReturnsVO>(
        {
            url: "/masterdata-service/produceOrder/getProduceOrderScheduleReportPage",
            method: "POST",
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
/** JSONResult«分页信息«报表生产订单返回VO»» */
export interface IJSONResultPagingInformationReportProductionOrderReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationReportProductionOrderReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«报表生产订单返回VO» */
export interface IPageInformationReportProductionOrderReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IReportProductionOrdersBackToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationReportProductionOrderReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationReportProductionOrderReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 报表生产订单返回VO */
export interface IReportProductionOrdersBackToVO {
    /** id */
    id?: string;
    /** 生产订单号 */
    code?: string;
    /** 父生产订单号 */
    parentProduceOrderCode?: string;
    /** 销售单id */
    salesOrderId?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 销售详情id */
    salesOrderDetailId?: string;
    /** 销售详情物料名称 */
    salesOrderMaterialName?: string;
    /** 订单类型描述 */
    orderTypeDesc?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 交付日期 */
    deliveryDate?: number;
    /** 交付数量 */
    totalCount?: number;
    /** 优先级 */
    priorityLevel?: number;
    /** 订单排产状态 */
    planStatus?: EReportProductionOrdersBackToVO_planStatus;
    /** 订单排产状态描述 */
    planStatusDesc?: string;
    /** 订单排产方式 */
    planType?: EReportProductionOrdersBackToVO_planType;
    /** 订单排产方式描述 */
    planTypeDesc?: string;
    /** 订单计划开始日期 */
    beginTime?: number;
    /** 订单计划结束时间 */
    endTime?: number;
    /** 对应标准工艺路径id */
    routingId?: string;
    /** 生产工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径名称 */
    routingName?: string;
    /** 对应工艺路径编号 */
    routingCode?: string;
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

export enum EPageInformationReportProductionOrderReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationReportProductionOrderReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportProductionOrdersBackToVO_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EReportProductionOrdersBackToVO_planType {
    /** 未排产 */
    NOT_PLAN = "NOT_PLAN",
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}
