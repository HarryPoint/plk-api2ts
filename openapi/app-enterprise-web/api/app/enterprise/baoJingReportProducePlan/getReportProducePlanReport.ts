import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶生产计划报表/getBaoJingReportProducePlanReportUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingProductionTaskGanttChartQueryObject }, extraOptions?: any) {
    return http<IJSONResultListTreasureProductionPlanGanttChartResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportProducePlan/getReportProducePlanReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶生产任务甘特图查询对象 */
export interface IBaojingProductionTaskGanttChartQueryObject {
    /** 物料id */
    materialIds?: string[];
    /** 部门id */
    departmentIds?: string[];
    /** 计划开始日期 */
    planStartDate?: number;
    /** 计划结束日期 */
    planEndDate?: number;
    /** 交货开始日期 */
    startDeliveryDate?: number;
    /** 交货结束日期 */
    endDeliveryDate?: number;
}
/** JSONResult«List«宝晶生产计划甘特图响应对象»» */
export interface IJSONResultListTreasureProductionPlanGanttChartResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBaojingProductionPlanGanttChartResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶生产计划甘特图响应对象 */
export interface IBaojingProductionPlanGanttChartResponseObject {
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 计划数 */
    planQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完工率 */
    completionRate?: number;
    /** 生产计划 */
    producePlans?: IBaojingProductionPlanResponseObject[];
}
/** 宝晶生产计划响应对象 */
export interface IBaojingProductionPlanResponseObject {
    /** key */
    key?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 计划数 */
    planQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完工率 */
    completionRate?: number;
    /** 计划开始日期 */
    planStartDate?: number;
    /** 计划结束日期 */
    planEndDate?: number;
    /** 交货日期 */
    deliveryDate?: number;
    /** 计划生产明细 */
    details?: IBaojingProductionPlanDetailsResponseObject[];
}
/** 宝晶生产计划详情响应对象 */
export interface IBaojingProductionPlanDetailsResponseObject {
    /** 计划数 */
    planQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完工率 */
    completionRate?: number;
    /** 日期 */
    date?;
}
