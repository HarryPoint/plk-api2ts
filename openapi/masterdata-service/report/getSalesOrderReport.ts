import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/报表相关/getPageUsingPOST_26
*/
export default function fetchMethod(options: { data: IOrderProgressStatisticsQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationOrderProgressStatisticsResponseVO>(
        {
            url: "/masterdata-service/report/getSalesOrderReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 订单进度统计查询VO */
export interface IOrderProgressStatisticsQueryVO {
    /** 客户id集 */
    customerIds?: string[];
    /** 交付日期 - 开始 yyyy-MM-dd HH:mm:ss */
    deliveryDateBegin?: number;
    /** 交付日期 - 结束 yyyy-MM-dd HH:mm:ss */
    deliveryDateEnd?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单状态 */
    salesOrderStatus?: EOrderProgressStatisticsQueryVO_salesOrderStatus;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«订单进度统计响应VO»» */
export interface IJSONResultPageInformationOrderProgressStatisticsResponseVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationOrderProgressStatisticsResponseVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«订单进度统计响应VO» */
export interface IPageInformationOrderProgressStatisticsResponseVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationOrderProgressStatisticsResponseVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationOrderProgressStatisticsResponseVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IOrderProgressStatisticsRespondToVO[];
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
/** 订单进度统计响应VO */
export interface IOrderProgressStatisticsRespondToVO {
    /** 实际生产开始时间-（生产订单维度 */
    actualBeginTime?: number;
    /** 实际生产结束时间-（生产订单维度 */
    actualEndTime?: number;
    /** 订单完成进度 */
    completeRatio?: number;
    /** 生产数量-（生产订单维度 */
    convertQuantity?: number;
    /** 转生产进度 */
    convertRatio?: number;
    /** 客户id-（销售订单维度 */
    customerId?: string;
    /** 客户名称-（销售订单维度 */
    customerName?: string;
    /** 交付日期-（销售订单明细维度 */
    deliveryDate?: number;
    /** 交付剩余天数-（销售订单明细维度 */
    deliveryRemainingDays?: number;
    /** 委外数量-（生产订单维度 */
    entrustQuantity?: number;
    /** 物料编码-（销售订单明细维度 */
    materialCode?: string;
    /** 物料id-（销售订单明细维度 */
    materialId?: string;
    /** 物料名称-（销售订单明细维度 */
    materialName?: string;
    /** 实际生产完成时间-（销售订单明细维度 */
    maxActualEndTime?: number;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss-（销售订单明细维度 */
    maxPlanEndTime?: number;
    /** 实际生产开始时间-（销售订单明细维度 */
    minActualBeginTime?: number;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss-（销售订单明细维度 */
    minPlanBeginTime?: number;
    /** 计划生产开始时间-（生产订单维度 */
    planBeginTime?: number;
    /** 计划生产结束时间-（生产订单维度 */
    planEndTime?: number;
    /** 计划生产数量-（生产订单维度 */
    planQuantity?: number;
    /** 排产进度 */
    planRatio?: number;
    /** 生产物料编码-（生产订单维度 */
    produceMaterialCode?: string;
    /** 生产物料id-（生产订单维度 */
    produceMaterialId?: string;
    /** 生产物料名称-（生产订单维度 */
    produceMaterialName?: string;
    /** 生产物料规格型号-（生产订单维度 */
    produceMaterialSpec?: string;
    /** 生产订单编号-（生产订单维度 */
    produceOrderCode?: string;
    /** 排产状态-（生产订单维度 */
    produceOrderPlanStatus?: EOrderProgressStatisticsRespondToVO_produceOrderPlanStatus;
    /** 生产订单状态-（生产订单维度 */
    produceOrderStatus?: EOrderProgressStatisticsRespondToVO_produceOrderStatus;
    /** 合格产出数量-（生产订单维度 */
    produceQuantity?: number;
    /** 合格产出进度 */
    produceRatio?: number;
    /** 销售订单编号-（销售订单维度 */
    salesOrderCode?: string;
    /** 销售订单创建时间 */
    salesOrderCreateTime?: number;
    /** 销售订单状态-（销售订单维度 */
    salesOrderStatus?: EOrderProgressStatisticsRespondToVO_salesOrderStatus;
    /** 报废数量-（生产订单维度 */
    scrapQuantity?: number;
    /** 物料规格型号-（销售订单明细维度 */
    spec?: string;
    /** 已转换数量-（销售订单明细维度 */
    totalConvertQuantity?: number;
    /** 已排产生产订单数量-（销售订单明细维度 */
    totalPlanProduceOrderCount?: number;
    /** 已排产数量-（销售订单明细维度 */
    totalPlanQuantity?: number;
    /** 生产订单数量-（销售订单明细维度 */
    totalProduceOrderCount?: number;
    /** 总合格产出数量-（销售订单明细维度 */
    totalProduceQuantity?: number;
    /** 交付数量-（销售订单明细维度 */
    totalQuantity?: number;
}

export enum EOrderProgressStatisticsQueryVO_salesOrderStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    CONVERTING = "CONVERTING",
    /** 已转生产订单 */
    CONVERED = "CONVERED",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationOrderProgressStatisticsResponseVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationOrderProgressStatisticsResponseVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOrderProgressStatisticsRespondToVO_produceOrderPlanStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EOrderProgressStatisticsRespondToVO_produceOrderStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已排产 */
    PLAN = "PLAN",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 部分完成 */
    PART_COMPLETE = "PART_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

export enum EOrderProgressStatisticsRespondToVO_salesOrderStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    CONVERTING = "CONVERTING",
    /** 已转生产订单 */
    CONVERED = "CONVERED",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
