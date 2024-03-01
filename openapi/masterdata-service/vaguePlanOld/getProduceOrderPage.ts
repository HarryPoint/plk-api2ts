import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/模糊排产相关/getProduceOrderPageUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionOrderReturnsVO>(
        {
            url: "/masterdata-service/vaguePlanOld/getProduceOrderPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单搜索VO */
export interface IProductionOrderSearchVO {
    /** 创建时间 - 开始, yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 创建时间 - 结束, yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
    /** 对应物料id */
    materialId?: string;
    /** 订单状态 */
    orderStatus?: EProductionOrderSearchVO_orderStatus;
    /** 订单类型 */
    orderType?: EProductionOrderSearchVO_orderType;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产部门id */
    placeOrderDepartmentId?: string;
    /** 订单排产状态 */
    planStatus?: EProductionOrderSearchVO_planStatus;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss */
    workingBeginTime?: string;
    /** 计划结束时间, yyyy-MM-dd HH:mm:ss */
    workingEndTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«生产订单返回VO»» */
export interface IJSONResultPageInformationProductionOrderReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProductionOrderReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产订单返回VO» */
export interface IPageInformationProductionOrderReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProductionOrderReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProductionOrderReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionOrderReturnsVO2[];
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
/** 生产订单返回VO_2 */
export interface IProductionOrderReturnsVO2 {
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 实际结束时间 */
    actualEndTime?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 关闭时间 */
    closeTime?: number;
    /** 生产订单号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 当前累积转移数量 - 针对批次转移到其他生产订单 */
    currentChangeCount?: number;
    /** 当前生产数量 - 生产进度分子 */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 其他拓展参数 */
    extData?: Record<string, Record<string, any>>;
    /** id */
    id?: string;
    /** 订单层级 */
    level?: number;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 订单状态 */
    orderStatus?: EProductionOrderReturnsVO2_orderStatus;
    /** 订单状态描述 */
    orderStatusDesc?: string;
    /** 订单类型 */
    orderType?: EProductionOrderReturnsVO2_orderType;
    /** 订单类型描述 */
    orderTypeDesc?: string;
    /** 父生产订单号 */
    parentProduceOrderCode?: string;
    /** 生产部门编号 */
    placeOrderDepartmentCode?: string;
    /** 生产部门id */
    placeOrderDepartmentId?: string;
    /** 生产部门名称 */
    placeOrderDepartmentName?: string;
    /** 订单排产状态 */
    planStatus?: EProductionOrderReturnsVO2_planStatus;
    /** 订单排产状态描述 */
    planStatusDesc?: string;
    /** 已排产数量 */
    planedCount?: number;
    /** 优先级 */
    priorityLevel?: number;
    /** 累积生产报废数量 */
    produceScrapCount?: number;
    /** 对应工艺路径编号 */
    routingCode?: string;
    /** 对应标准工艺路径id */
    routingId?: string;
    /** 对应工艺路径名称 */
    routingName?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 任务处理数量 */
    taskCompleteQuantity?: number;
    /** 总生产数量 - 生产进度分母 */
    totalCount?: number;
}

export enum EProductionOrderSearchVO_orderStatus {
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

export enum EProductionOrderSearchVO_orderType {
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

export enum EProductionOrderSearchVO_planStatus {
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

export enum EPageInformationProductionOrderReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProductionOrderReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderReturnsVO2_orderStatus {
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

export enum EProductionOrderReturnsVO2_orderType {
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

export enum EProductionOrderReturnsVO2_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}
