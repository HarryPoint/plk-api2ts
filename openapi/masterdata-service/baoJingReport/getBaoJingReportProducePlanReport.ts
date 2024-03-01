import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingReportProducePlanReportUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingProductionTaskGanttChartQueryObject }, extraOptions?: any) {
    return http<IJSONResultListTreasureProductionPlanGanttChartResponseObject>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportProducePlanReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶生产任务甘特图查询对象 */
export interface IBaojingProductionTaskGanttChartQueryObject {
    /** 部门id */
    departmentIds?: string[];
    /** 交货结束日期 */
    endDeliveryDate?: number;
    /** 物料id */
    materialIds?: string[];
    /** 计划结束日期 */
    planEndDate?: number;
    /** 计划开始日期 */
    planStartDate?: number;
    /** 交货开始日期 */
    startDeliveryDate?: number;
}
/** JSONResult«List«宝晶生产计划甘特图响应对象»» */
export interface IJSONResultListTreasureProductionPlanGanttChartResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingProductionPlanGanttChartResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶生产计划甘特图响应对象 */
export interface IBaojingProductionPlanGanttChartResponseObject {
    /** 完工率 */
    completionRate?: number;
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 计划数 */
    planQuantity?: number;
    /** 生产计划 */
    producePlans?: IBaojingProductionPlanResponseObject[];
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
}
/** 宝晶生产计划响应对象 */
export interface IBaojingProductionPlanResponseObject {
    /** 完工率 */
    completionRate?: number;
    /** 交货日期 */
    deliveryDate?: number;
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 计划生产明细 */
    details?: IBaojingProductionPlanDetailsResponseObject[];
    /** key */
    key?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 计划结束日期 */
    planEndDate?: number;
    /** 计划数 */
    planQuantity?: number;
    /** 计划开始日期 */
    planStartDate?: number;
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
}
/** 宝晶生产计划详情响应对象 */
export interface IBaojingProductionPlanDetailsResponseObject {
    /** 完工率 */
    completionRate?: number;
    /** 日期 */
    date?;
    /** 计划数 */
    planQuantity?: number;
    /** 未生产数 */
    unWarehousingQuantity?: number;
    /** 完成数 */
    warehousingQuantity?: number;
}
