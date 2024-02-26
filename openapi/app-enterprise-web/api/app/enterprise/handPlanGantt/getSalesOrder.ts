import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/手动排产甘特图相关/getSalesOrderUsingPOST_1
*/
export default function fetchMethod(options: { data: IGanttChartSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationSalesOrderManualSchedulingGanttChartReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/handPlanGantt/getSalesOrder",
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
/** JSONResult«分页信息«销售订单手动排产甘特图返回VO»» */
export interface IJSONResultPageInformationSalesOrderManualSchedulingGanttChartReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«销售订单手动排产甘特图返回VO» */
export interface IPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISalesOrderManualSchedulingGanttChartBackToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 销售订单手动排产甘特图返回VO */
export interface ISalesOrderManualSchedulingGanttChartBackToVO {
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 销售订单明细 */
    details?: IManualSchedulingSalesOrderDetailsGanttChartBackToVO[];
}
/** 手动排产销售订单明细甘特图返回VO */
export interface IManualSchedulingSalesOrderDetailsGanttChartBackToVO {
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售明细id */
    salesOrderDetailId?: number;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 交付日期 */
    deliveryDate?: string;
    /** 生产订单集 */
    produceOrders?: IProductionOrderManualSchedulingGanttChartBackToVO[];
}
/** 生产订单手动排产甘特图返回VO */
export interface IProductionOrderManualSchedulingGanttChartBackToVO {
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单id */
    salesOrderId?: number;
    /** 销售明细id */
    salesOrderDetailId?: number;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 交付数量 */
    totalCount?: number;
    /** 已生产数量 */
    currentCount?: number;
    /** 交付日期 */
    deliveryDate?: string;
    /** 生产订单状态 */
    orderStatus?: EProductionOrderManualSchedulingGanttChartBackToVO_orderStatus;
    /** 计划开始日期 */
    beginTime?: string;
    /** 计划结束日期 */
    endTime?: string;
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

export enum EPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPaginationInformationSalesOrdersManualSchedulingGanttChartReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderManualSchedulingGanttChartBackToVO_orderStatus {
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
