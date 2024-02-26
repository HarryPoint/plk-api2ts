import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getBaoJingReportProducePlanReportUsingPOST
*/
export default function fetchMethod(data: IBaojingProductionTaskGanttChartQueryObject, extraOptions?: any) {
    return http<IJSONResultListTreasureProductionPlanGanttChartResponseObject>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingReportProducePlanReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 宝晶生产任务甘特图查询对象 */
export interface IBaojingProductionTaskGanttChartQueryObject {
    /** 物料id */
    materialIds?: number[];
    /** 部门id */
    departmentIds?: number[];
    /** 计划开始日期 */
    planStartDate?: string;
    /** 计划结束日期 */
    planEndDate?: string;
    /** 交货开始日期 */
    startDeliveryDate?: string;
    /** 交货结束日期 */
    endDeliveryDate?: string;
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
    ts?: number;
}
/** 宝晶生产计划甘特图响应对象 */
export interface IBaojingProductionPlanGanttChartResponseObject {
    /** 部门id */
    departmentId?: number;
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
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 部门id */
    departmentId?: number;
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
    planStartDate?: string;
    /** 计划结束日期 */
    planEndDate?: string;
    /** 交货日期 */
    deliveryDate?: string;
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
    date?: string;
}
