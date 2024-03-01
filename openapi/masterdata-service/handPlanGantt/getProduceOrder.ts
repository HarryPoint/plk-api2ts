import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/手动甘特图相关/getProduceOrderUsingPOST_1
*/
export default function fetchMethod(options: { data: IGanttChartSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionOrderManualSchedulingGanttChartReturnsVO>(
        {
            url: "/masterdata-service/handPlanGantt/getProduceOrder",
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
/** JSONResult«分页信息«生产订单手动排产甘特图返回VO»» */
export interface IJSONResultPageInformationProductionOrderManualSchedulingGanttChartReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产订单手动排产甘特图返回VO» */
export interface IPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionOrderManualSchedulingGanttChartBackToVO[];
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
/** 生产订单手动排产甘特图返回VO */
export interface IProductionOrderManualSchedulingGanttChartBackToVO {
    /** 计划开始日期 */
    beginTime?: number;
    /** 已生产数量 */
    currentCount?: number;
    /** 交付日期 */
    deliveryDate?: number;
    /** 计划结束日期 */
    endTime?: number;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 生产订单状态 */
    orderStatus?: EProductionOrderManualSchedulingGanttChartBackToVO_orderStatus;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 销售明细id */
    salesOrderDetailId?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 交付数量 */
    totalCount?: number;
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

export enum EPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProductionOrdersManualSchedulingGanttChartReturnsVO_hasPreviousPage {
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
