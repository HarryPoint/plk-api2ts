import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/报表相关/getAllSalesOrderReportExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IOrderProgressStatisticsQueryVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListExportOrderProgressStatisticsVO>(
        {
            url: "/masterdata-service/report/getAllSalesOrderReportExportResult",
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
/** JSONResult«List«订单进度统计导出VO»» */
export interface IJSONResultListExportOrderProgressStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IOrderProgressStatisticsAreDerivedVO2[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 订单进度统计导出VO_2 */
export interface IOrderProgressStatisticsAreDerivedVO2 {
    /** 客户名称 */
    customerName?: string;
    /** 销售订单中生产订单数量 */
    produceOrderCount?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单创建时间 */
    salesOrderCreateTime?: number;
    /** 销售订单明细 */
    salesOrderDetails?: IOrderProgressStatisticsAreExportedVO1[];
    /** 销售订单状态 */
    salesOrderStatus?: EOrderProgressStatisticsAreDerivedVO2_salesOrderStatus;
    /** 销售订单状态字符串 */
    salesOrderStatusDesc?: string;
}
/** 订单进度统计导出VO_1 */
export interface IOrderProgressStatisticsAreExportedVO1 {
    /** 订单完成进度 */
    completeRatio?: string;
    /** 转生产进度 */
    convertRatio?: string;
    /** 交付日期 */
    deliveryDate?: number;
    /** 交付日期字符串 */
    deliveryDateStr?: string;
    /** 交付剩余天数 */
    deliveryRemainingDays?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 实际生产完成时间 */
    maxActualEndTime?: number;
    /** 实际生产完成时间字符串 */
    maxActualEndTimeStr?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    maxPlanEndTime?: number;
    /** 计划结束时间字符串 */
    maxPlanEndTimeStr?: string;
    /** 实际生产开始时间 */
    minActualBeginTime?: number;
    /** 实际生产开始时间字符串 */
    minActualBeginTimeStr?: string;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    minPlanBeginTime?: number;
    /** 计划开始时间字符串 */
    minPlanBeginTimeStr?: string;
    /** 排产进度 */
    planRatio?: string;
    /** 生产订单 */
    produceOrders?: IOrderProgressStatisticsAreExportedToVO[];
    /** 物料规格型号 */
    spec?: string;
    /** 已转换数量 */
    totalConvertQuantity?: number;
    /** 已排产数量 */
    totalPlanQuantity?: number;
    /** 总合格产出数量 */
    totalProduceQuantity?: number;
    /** 交付数量 */
    totalQuantity?: number;
}
/** 订单进度统计导出VO */
export interface IOrderProgressStatisticsAreExportedToVO {
    /** 实际生产开始时间 */
    actualBeginTime?: number;
    /** 实际生产开始时间字符串 */
    actualBeginTimeStr?: string;
    /** 实际生产结束时间 */
    actualEndTime?: number;
    /** 实际生产结束时间字符串 */
    actualEndTimeStr?: string;
    /** 生产数量 */
    convertQuantity?: number;
    /** 委外数量 */
    entrustQuantity?: number;
    /** 计划生产开始时间 */
    planBeginTime?: number;
    /** 计划生产开始时间字符串 */
    planBeginTimeStr?: string;
    /** 计划生产结束时间 */
    planEndTime?: number;
    /** 计划生产结束时间字符串 */
    planEndTimeStr?: string;
    /** 计划生产数量 */
    planQuantity?: number;
    /** 生产物料编码 */
    produceMaterialCode?: string;
    /** 生产物料id */
    produceMaterialId?: string;
    /** 生产物料名称 */
    produceMaterialName?: string;
    /** 生产物料规格型号 */
    produceMaterialSpec?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 排产状态 */
    produceOrderPlanStatus?: EOrderProgressStatisticsAreExportedToVO_produceOrderPlanStatus;
    /** 排产状态描述 */
    produceOrderPlanStatusStr?: string;
    /** 生产订单状态 */
    produceOrderStatus?: EOrderProgressStatisticsAreExportedToVO_produceOrderStatus;
    /** 生产订单状态描述 */
    produceOrderStatusStr?: string;
    /** 合格产出数量 */
    produceQuantity?: number;
    /** 合格产出进度 */
    produceRatio?: string;
    /** 报废数量 */
    scrapQuantity?: number;
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

export enum EOrderProgressStatisticsAreDerivedVO2_salesOrderStatus {
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

export enum EOrderProgressStatisticsAreExportedToVO_produceOrderPlanStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EOrderProgressStatisticsAreExportedToVO_produceOrderStatus {
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
