import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单甘特图相关/getPageUsingPOST_16
*/
export default function fetchMethod(options: { data: IProductionOrdersGanttChartSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionOrderGanttReturnedToVO>(
        {
            url: "/masterdata-service/produceOrderGant/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单甘特图搜索VO */
export interface IProductionOrdersGanttChartSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss */
    workingBeginTime?: string;
    /** 计划结束时间, yyyy-MM-dd HH:mm:ss */
    workingEndTime?: string;
    /** 对应物料id */
    materialIds?: string[];
    /** 创建时间 - 开始, yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 创建时间 - 结束, yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 订单状态 */
    orderStatus?: EProductionOrdersGanttChartSearchVO_orderStatus;
    /** 生产部门id */
    placeOrderCombinationId?: string;
    /** 分组方式 */
    groupType?: EProductionOrdersGanttChartSearchVO_groupType;
    /** 订单排产状态 */
    planStatus?: EProductionOrdersGanttChartSearchVO_planStatus;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«生产订单甘特返回VO» */
export interface IJSONResultProductionOrderGanttReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderGanttReturnedToVO1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单甘特返回VO_1 */
export interface IProductionOrderGanttReturnedToVO1 {
    /** 甘特图开始时间 */
    gantBeginDateTime?: number;
    /** 甘特图结束时间 */
    gantEndDateTime?: number;
    /** 生产订单分页列表数据 */
    tablePage?: IPageInformationProductionOrderGanttReturnsVO;
}
/** 分页信息«生产订单甘特返回VO» */
export interface IPageInformationProductionOrderGanttReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProductionOrderGanttReturnedToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProductionOrderGanttReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProductionOrderGanttReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 生产订单甘特返回VO */
export interface IProductionOrderGanttReturnedToVO {
    /** id */
    id?: string;
    /** 生产部门id */
    placeOrderDepartmentId?: string;
    /** 生产部门编号 */
    placeOrderDepartmentCode?: string;
    /** 生产部门名称 */
    placeOrderDepartmentName?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 订单层级 */
    level?: number;
    /** 父生产订单号 */
    parentProduceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 总生产数量 - 生产进度分母 */
    totalCount?: number;
    /** 当前生产数量 - 生产进度分子 */
    currentCount?: number;
    /** 已排产数量 */
    planedCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 累积生产报废数量 */
    produceScrapCount?: number;
    /** 当前累积转移数量 - 针对批次转移到其他生产订单 */
    currentChangeCount?: number;
    /** 任务处理数量 */
    taskCompleteQuantity?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 订单状态 */
    orderStatus?: EProductionOrderGanttReturnedToVO_orderStatus;
    /** 订单状态描述 */
    orderStatusDesc?: string;
    /** 订单排产状态 */
    planStatus?: EProductionOrderGanttReturnedToVO_planStatus;
    /** 订单排产状态描述 */
    planStatusDesc?: string;
    /** 优先级 */
    priorityLevel?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 关闭时间 */
    closeTime?: number;
    /** 其他拓展参数 */
    extData?: Record<string, Record<string, any>>;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应物料单位 */
    materialUnitId?: string;
    /** 订单类型 */
    orderType?: EProductionOrderGanttReturnedToVO_orderType;
    /** 订单类型描述 */
    orderTypeDesc?: string;
    /** 对应标准工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 对应工艺路径名称 */
    produceTechnologyRoutingName?: string;
    /** 对应工艺路径编号 */
    produceTechnologyRoutingCode?: string;
}

export enum EProductionOrdersGanttChartSearchVO_orderStatus {
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

export enum EProductionOrdersGanttChartSearchVO_groupType {
    /** 部门 */
    COMBINATION = "COMBINATION",
    /** 生产订单 */
    PRODUCE_ORDER = "PRODUCE_ORDER"
}

export enum EProductionOrdersGanttChartSearchVO_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationProductionOrderGanttReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProductionOrderGanttReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderGanttReturnedToVO_orderStatus {
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

export enum EProductionOrderGanttReturnedToVO_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EProductionOrderGanttReturnedToVO_orderType {
    /** 合同生产 */
    CONTRACT = "CONTRACT",
    /** 备库生产 */
    STANDBY = "STANDBY",
    /** 返工生产 */
    REWORK = "REWORK",
    /** 新产品实验生产 */
    TEST = "TEST",
    /** 虚拟订单 */
    VIRTUAL = "VIRTUAL",
    /** 其他订单 */
    OTHER = "OTHER",
    /** 报废补单 */
    SCRAP_SUPPLEMENT = "SCRAP_SUPPLEMENT"
}
