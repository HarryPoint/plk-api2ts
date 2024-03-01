import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏相关/getWorkShopUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultDarkBlueWorkshopKanbanRespondsToVO>(
        {
            url: "/masterdata-service/lsShenLanSetting/getWorkShop",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«深蓝车间看板响应VO» */
export interface IJSONResultDarkBlueWorkshopKanbanRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDeepBlueWorkshopKanbanRespondsToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 深蓝车间看板响应VO */
export interface IDeepBlueWorkshopKanbanRespondsToVO {
    /** 订单完工率-右上 */
    completeRates?: IWorkshopTimelyInventoryRateRespondsToVO[];
    /** 日计划及生产进度-右下 */
    dayPlans?: IWorkshopDailyPlanAndProductionScheduleRespondToVO[];
    /** 生产概览-左上 */
    productionOverview?: IWorkshopProductionOverviewStatisticalResponseVO;
    /** 工作中心看板-左下 */
    workCenters?: IWorkCenterProductionScheduleRespondsToVO[];
}
/** 车间及时入库率响应VO */
export interface IWorkshopTimelyInventoryRateRespondsToVO {
    /** 完工率 */
    completeRate?: number;
    /** 日期 */
    date?: string;
    /** 当日完成数量 */
    dayCompleteCount?: number;
    /** 当日计划数量 */
    dayPlanCount?: number;
}
/** 车间日计划及生产进度响应VO */
export interface IWorkshopDailyPlanAndProductionScheduleRespondToVO {
    /** 完成度 */
    completePercentage?: number;
    /** 完工数量 */
    currentCount?: number;
    /** 订单号 */
    produceOrderNo?: string;
    /** 产品名称 */
    productName?: string;
    /** 订单数量 */
    totalCount?: number;
}
/** 车间生产概览统计响应VO */
export interface IWorkshopProductionOverviewStatisticalResponseVO {
    /** 当日实际完工 */
    actualQuantity?: number;
    /** 达成率 */
    completeRatio?: number;
    /** 当日计划完工 */
    planCompleteQuantity?: number;
    /** 生产订单总数 */
    produceOrderQuantity?: number;
    /** 已开工数量 */
    runningQuantity?: number;
}
/** 工作中心生产进度响应VO */
export interface IWorkCenterProductionScheduleRespondsToVO {
    /** 工作中心名称 */
    areaName?: string;
    /** 完工工序 */
    completeProcess?: string;
    /** 完工工序id */
    completeProcessId?: string;
    /** 当前工序 */
    currentProcess?: string;
    /** 当前工序id */
    currentProcessId?: string;
    /** 当前工序步骤 */
    currentRoutingStep?: number;
    /** 总工序步骤 */
    finalRoutingStep?: number;
    /** 订单号 */
    produceOrderNo?: string;
}
