import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/模糊排产相关/exportUsingPOST_56
*/
export default function fetchMethod(options: { data: IProductionOrderSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/vaguePlan/export",
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
