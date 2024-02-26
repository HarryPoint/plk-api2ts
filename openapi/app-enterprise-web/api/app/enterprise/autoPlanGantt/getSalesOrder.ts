import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/getSalesOrderUsingPOST
*/
export default function fetchMethod(options: { data: IGanttChartSearchVO }, extraOptions?: any) {
    return http<IJSONResultSalesOrdersGanttChartBackToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/getSalesOrder",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 甘特图搜索VO */
export interface IGanttChartSearchVO {
    /** 开始日期 yyyy-MM-dd */
    beginDate: string;
    /** 当前页面 */
    pageNo?: number;
    /** 结束日期 yyyy-MM-dd */
    endDate: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 工艺路径ID列表 */
    processIdList?: number[];
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 生产物料ID列表 */
    produceMaterialIdList?: number[];
    /** 订单状态列表 */
    orderStatusList?: EGanttChartSearchVO_orderStatusList_items[];
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISalesOrdersGanttChartBackToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 销售订单甘特图返回VO */
export interface ISalesOrdersGanttChartBackToVO {
    /** 全局时间占用集 */
    timeOccupies?: IOccupiedReturnVO[];
    /** 销售订单分页信息 */
    salesOrders?: IPageInformationSalesOrderSchedulingReturnsToVO;
}
/** 占用返回VO */
export interface IOccupiedReturnVO {
    /** 排期id */
    id?: number;
    /** 占用工序 */
    processId?: number;
    /** 占用工序名称 */
    processName?: string;
    /** 占用工序编号 */
    processCode?: string;
    /** 占用时间 开始 */
    beginTime?: string;
    /** 占用时间 结束 */
    endTime?: string;
    /** 占用原因 */
    reason?: string;
    /** 排期类型 */
    scheduleType?: EOccupiedReturnVO_scheduleType;
}
/** 分页信息«销售订单排期返回VO» */
export interface IPageInformationSalesOrderSchedulingReturnsToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISalesOrdersAreScheduledBackToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSalesOrderSchedulingReturnsToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSalesOrderSchedulingReturnsToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 销售订单排期返回VO */
export interface ISalesOrdersAreScheduledBackToVO {
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售订单名称 */
    salesOrderName?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单明细集 */
    details?: ISalesOrderDetailsAreScheduledBackToVO[];
}
/** 销售订单明细排期返回VO */
export interface ISalesOrderDetailsAreScheduledBackToVO {
    /** 销售订单明细id */
    salesOrderDetailId?: number;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 交货日期 */
    deliveryDate?: string;
    /** 销售订单ID */
    salesOrderId?: number;
    /** 生产订单集 */
    produceOrderTimes?: IProductionOrderTimeBackToVO[];
}
/** 生产订单时间返回VO */
export interface IProductionOrderTimeBackToVO {
    /** 排期id */
    scheduleId?: number;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单状态 */
    orderStatus?: EProductionOrderTimeBackToVO_orderStatus;
    /** 交付数量 */
    totalCount?: number;
    /** 已生产数量 */
    currentCount?: number;
    /** 交付日期 */
    deliveryDate?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 应用ID - 工序甘特图 代表 工序ID， 销售订单，则代表销售订单明细ID */
    refId?: number;
    /** 是否锁定 */
    isLock?: EProductionOrderTimeBackToVO_isLock;
    /** 排期类型 */
    scheduleType?: EProductionOrderTimeBackToVO_scheduleType;
    /** 生产任务状态 */
    produceTaskStatus?: EProductionOrderTimeBackToVO_produceTaskStatus;
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

export enum EPageInformationSalesOrderSchedulingReturnsToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSalesOrderSchedulingReturnsToVO_hasNextPage {
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

export enum EProductionOrderTimeBackToVO_isLock {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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
