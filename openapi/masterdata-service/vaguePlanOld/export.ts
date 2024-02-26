import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/模糊排产相关/exportUsingPOST_33
*/
export default function fetchMethod(options: { data: IProductionOrderSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/vaguePlanOld/export",
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
    orderType?: EProductionOrderSearchVO_orderType;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss */
    workingBeginTime?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 订单状态 */
    orderStatus?: EProductionOrderSearchVO_orderStatus;
    /** 对应物料id */
    materialId?: number;
    /** 订单排产状态 */
    planStatus?: EProductionOrderSearchVO_planStatus;
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
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
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
