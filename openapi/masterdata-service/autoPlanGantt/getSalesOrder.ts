import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/甘特图相关/getSalesOrderUsingPOST
*/
export default function fetchMethod(options: { data: IGanttChartSearchVO }, extraOptions?: any) {
    return http<IJSONResultSalesOrdersGanttChartBackToVO>(
        {
            url: "/masterdata-service/autoPlanGantt/getSalesOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 甘特图搜索VO */
export interface IGanttChartSearchVO {
    /** 开始日期 yyyy-MM-dd */
    beginDate: string;
    /** 结束日期 yyyy-MM-dd */
    endDate: string;
    /** 订单状态列表 */
    orderStatusList?: EGanttChartSearchVO_orderStatusList_items[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工艺路径ID列表 */
    processIdList?: string[];
    /** 生产物料ID列表 */
    produceMaterialIdList?: string[];
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«销售订单甘特图返回VO» */
export interface IJSONResultSalesOrdersGanttChartBackToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISalesOrdersGanttChartBackToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 销售订单甘特图返回VO */
export interface ISalesOrdersGanttChartBackToVO {
    /** 销售订单分页信息 */
    salesOrders?: IPageInformationSalesOrderSchedulingReturnsToVO;
    /** 全局时间占用集 */
    timeOccupies?: IOccupiedReturnVO[];
}
/** 分页信息«销售订单排期返回VO» */
export interface IPageInformationSalesOrderSchedulingReturnsToVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSalesOrderSchedulingReturnsToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSalesOrderSchedulingReturnsToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ISalesOrdersAreScheduledBackToVO[];
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
/** 销售订单排期返回VO */
export interface ISalesOrdersAreScheduledBackToVO {
    /** 销售订单明细集 */
    details?: ISalesOrderDetailsAreScheduledBackToVO[];
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单名称 */
    salesOrderName?: string;
}
/** 销售订单明细排期返回VO */
export interface ISalesOrderDetailsAreScheduledBackToVO {
    /** 交货日期 */
    deliveryDate?: number;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 生产订单集 */
    produceOrderTimes?: IProductionOrderTimeBackToVO[];
    /** 销售订单明细id */
    salesOrderDetailId?: string;
    /** 销售订单ID */
    salesOrderId?: string;
}
/** 生产订单时间返回VO */
export interface IProductionOrderTimeBackToVO {
    /** 计划开始时间 */
    beginTime?: number;
    /** 已生产数量 */
    currentCount?: number;
    /** 交付日期 */
    deliveryDate?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 是否锁定 */
    isLock?: EProductionOrderTimeBackToVO_isLock;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 生产订单状态 */
    orderStatus?: EProductionOrderTimeBackToVO_orderStatus;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产任务状态 */
    produceTaskStatus?: EProductionOrderTimeBackToVO_produceTaskStatus;
    /** 应用ID - 工序甘特图 代表 工序ID， 销售订单，则代表销售订单明细ID */
    refId?: string;
    /** 排期id */
    scheduleId?: string;
    /** 排期类型 */
    scheduleType?: EProductionOrderTimeBackToVO_scheduleType;
    /** 交付数量 */
    totalCount?: number;
}
/** 占用返回VO */
export interface IOccupiedReturnVO {
    /** 占用时间 开始 */
    beginTime?: number;
    /** 占用时间 结束 */
    endTime?: number;
    /** 排期id */
    id?: string;
    /** 占用工序编号 */
    processCode?: string;
    /** 占用工序 */
    processId?: string;
    /** 占用工序名称 */
    processName?: string;
    /** 占用原因 */
    reason?: string;
    /** 排期类型 */
    scheduleType?: EOccupiedReturnVO_scheduleType;
}

export enum EGanttChartSearchVO_orderStatusList_items {
    CREATED = "CREATED",
    PLAN = "PLAN",
    ISSUE = "ISSUE",
    PRODUCE = "PRODUCE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE",
    PART_COMPLETE = "PART_COMPLETE",
    COMPLETE = "COMPLETE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationSalesOrderSchedulingReturnsToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSalesOrderSchedulingReturnsToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderTimeBackToVO_isLock {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderTimeBackToVO_orderStatus {
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

export enum EProductionOrderTimeBackToVO_produceTaskStatus {
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

export enum EProductionOrderTimeBackToVO_scheduleType {
    /** 工序占用 */
    OCCUPY_PROCESS = "OCCUPY_PROCESS",
    /** 时间占用 */
    OCCUPY_TIME = "OCCUPY_TIME",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 生产订单 */
    ORDER = "ORDER"
}

export enum EOccupiedReturnVO_scheduleType {
    /** 工序占用 */
    OCCUPY_PROCESS = "OCCUPY_PROCESS",
    /** 时间占用 */
    OCCUPY_TIME = "OCCUPY_TIME",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 生产订单 */
    ORDER = "ORDER"
}
