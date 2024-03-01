import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16700/doc.html#/default/盼盼大屏相关/getProduceLargeScreenUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultPanpanProducesLargeScreenResponseDtos>(
        {
            url: "/masterdata-service/lsPanPanSetting/getProduceLargeScreen",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«盼盼生产大屏响应DTO» */
export interface IJSONResultPanpanProducesLargeScreenResponseDtos {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPanpanProducesLargeScreenResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 盼盼生产大屏响应DTO */
export interface IPanpanProducesLargeScreenResponseDTO {
    /** 7天各工序产能分析 */
    capacities?: IPanpanProductionLargeScreen7DaysProcessCapacityResponseDTO[];
    /** 加急订单跟踪 */
    emergencyOrders?: IPanpanProductionLargeScreenExpeditedOrderResponseDTO[];
    /** 延期订单跟踪 */
    overdueOrders?: IPanpanProductionLargeScreenBackOrderResponseDTO[];
    /** 当月生产数据 */
    thisMonthProduce?: IPanpanProductionLargeScreenDayProductionResponseDTO;
    /** 当日生产概览 */
    todayProduce?: IPanpanProductionLargeScreenDayProductionResponseDTO1;
}
/** 盼盼生产大屏7天工序产能响应DTO */
export interface IPanpanProductionLargeScreen7DaysProcessCapacityResponseDTO {
    /** 返工数 */
    backQuantity?: number;
    /** 返工率 */
    backRatio?: number;
    /** 产能利用率 */
    capacityRatio?: number;
    /** 产出数 */
    completeQuantity?: number;
    /** 良品率 */
    goodProductRatio?: number;
    /** 在制数 */
    inProduceQuantity?: number;
    /** 计划数 */
    orderCount?: number;
    /** 延期数 */
    overdueQuantity?: number;
    /** 延期率 */
    overdueRatio?: number;
    /** 工序 */
    processName?: string;
    /** 报废数 */
    scrapQuantity?: number;
    /** 累计产能（计划完成率） */
    totalCapacity?: number;
}
/** 盼盼生产大屏加急订单响应DTO */
export interface IPanpanProductionLargeScreenExpeditedOrderResponseDTO {
    /** 配置 */
    configNo?: string;
    /** 投产日期 */
    createDate?: string;
    /** 现在工序 */
    currentProcess?: string;
    /** 父级生产订单编码 */
    parentProduceOrderCode?: string;
    /** 计划完成日期 */
    planCompleteDate?: string;
    /** 生产数量 */
    planQuantity?: number;
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 产品名称 */
    productName?: string;
    /** 剩余工作日 */
    remainDayCount?: number;
}
/** 盼盼生产大屏延期订单响应DTO */
export interface IPanpanProductionLargeScreenBackOrderResponseDTO {
    /** 已完成数量 */
    completeQuantity?: number;
    /** 配置 */
    configNo?: string;
    /** 投产日期 */
    createDate?: string;
    /** 是否主订单 */
    isMaster?: EPanpanProductionLargeScreenBackOrderResponseDTO_isMaster;
    /** 订单状态 */
    orderStatus?: EPanpanProductionLargeScreenBackOrderResponseDTO_orderStatus;
    /** 延期天数 */
    overdueDayCount?: number;
    /** 延期工序id */
    overdueProcessId?: string;
    /** 延期工序名称 */
    overdueProcessName?: string;
    /** 延期原因 */
    overdueReason?: string;
    /** 生产数量 */
    planQuantity?: number;
    /** 订单编码 */
    produceOrderCode?: string;
    /** 完成进度 */
    produceProgress?: number;
    /** 产品名称 */
    productName?: string;
}
/** 盼盼生产大屏当日生产响应DTO */
export interface IPanpanProductionLargeScreenDayProductionResponseDTO {
    /** 本月完工数量 */
    completeOrderCount?: number;
    /** 本月计划完工率 */
    completeRatio?: number;
    /** 本月订单数量 */
    orderCount?: number;
    /** 本月计划数量 */
    planQuantity?: number;
}
/** 盼盼生产大屏当日生产响应DTO_1 */
export interface IPanpanProductionLargeScreenDayProductionResponseDTO1 {
    /** 实际完工量 */
    completeQuantity?: number;
    /** 在制量 */
    inProduceQuantity?: number;
    /** 计划排产量 */
    planPlanQuantity?: number;
    /** 生产进度 */
    produceProgress?: number;
    /** 当日各工序完工率 */
    todayProcesses?: IPanpanProductionOfLargeScreenOnTheSameDayProcessProductionResponseDTO[];
}
/** 盼盼生产大屏当日工序生产响应DTO */
export interface IPanpanProductionOfLargeScreenOnTheSameDayProcessProductionResponseDTO {
    /** 完工数量 */
    completeQuantity?: number;
    /** 工序完工率 */
    completeRatio?: number;
    /** 计划数量 */
    planQuantity?: number;
    /** 工序名称 */
    processName?: string;
}

export enum EPanpanProductionLargeScreenBackOrderResponseDTO_isMaster {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPanpanProductionLargeScreenBackOrderResponseDTO_orderStatus {
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
