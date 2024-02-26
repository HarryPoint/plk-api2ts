import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/模糊排产相关/getProduceOrderPageUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationProductionOrderReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/vaguePlan/getProduceOrderPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单搜索VO */
export interface IProductionOrderSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 订单类型 */
    orderType?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss */
    workingBeginTime?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 对应物料id */
    materialId?: number;
    /** 订单排产状态 */
    planStatus?: string;
    /** 创建时间 - 开始, yyyy-MM-dd HH:mm:ss */
    createBeginTime?: string;
    /** 计划结束时间, yyyy-MM-dd HH:mm:ss */
    workingEndTime?: string;
    /** 生产部门id */
    placeOrderDepartmentId?: number;
    /** 创建时间 - 结束, yyyy-MM-dd HH:mm:ss */
    createEndTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«分页信息«生产订单返回VO»» */
export interface IJSONResultPageInformationProductionOrderReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationProductionOrderReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«生产订单返回VO» */
export interface IPageInformationProductionOrderReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProductionOrderReturnsVO2[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 生产订单返回VO_2 */
export interface IProductionOrderReturnsVO2 {
    /** id */
    id?: number;
    /** 生产订单号 */
    code?: string;
    /** 订单层级 */
    level?: number;
    /** 父生产订单号 */
    parentProduceOrderCode?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 订单类型 */
    orderType?: string;
    /** 订单类型描述 */
    orderTypeDesc?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应标准工艺路径id */
    routingId?: number;
    /** 对应工艺路径名称 */
    routingName?: string;
    /** 对应工艺路径编号 */
    routingCode?: string;
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
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 实际结束时间 */
    actualEndTime?: string;
    /** 订单状态 */
    orderStatus?: string;
    /** 订单状态描述 */
    orderStatusDesc?: string;
    /** 订单排产状态 */
    planStatus?: string;
    /** 订单排产状态描述 */
    planStatusDesc?: string;
    /** 优先级 */
    priorityLevel?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 关闭时间 */
    closeTime?: string;
    /** 其他拓展参数 */
    extData?: Record<string, Record<string, any>>;
    /** 生产部门id */
    placeOrderDepartmentId?: number;
    /** 生产部门编号 */
    placeOrderDepartmentCode?: string;
    /** 生产部门名称 */
    placeOrderDepartmentName?: string;
}
