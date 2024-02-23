import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/深蓝大屏相关/getWorkShopUsingGET
export default function fetchMethod(params: { enterpriseId: number }) {
    return http<IJSONResultDarkBlueWorkshopKanbanRespondsToVO>({
        url: "/masterdata-service/lsShenLanSetting/getWorkShop",
        method: "get",
        params,
    });
}
// JSONResult«深蓝车间看板响应VO»
export interface IJSONResultDarkBlueWorkshopKanbanRespondsToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDeepBlueWorkshopKanbanRespondsToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 深蓝车间看板响应VO
export interface IDeepBlueWorkshopKanbanRespondsToVO {
    // 生产概览-左上
    productionOverview: IWorkshopProductionOverviewStatisticalResponseVO;
    // 订单完工率-右上
    completeRates: IWorkshopTimelyInventoryRateRespondsToVO[];
    // 日计划及生产进度-右下
    dayPlans: IWorkshopDailyPlanAndProductionScheduleRespondToVO[];
    // 工作中心看板-左下
    workCenters: IWorkCenterProductionScheduleRespondsToVO[];
}
// 车间生产概览统计响应VO
export interface IWorkshopProductionOverviewStatisticalResponseVO {
    // 生产订单总数
    produceOrderQuantity: number;
    // 已开工数量
    runningQuantity: number;
    // 当日计划完工
    planCompleteQuantity: number;
    // 当日实际完工
    actualQuantity: number;
    // 达成率
    completeRatio: number;
}
// 车间及时入库率响应VO
export interface IWorkshopTimelyInventoryRateRespondsToVO {
    // 日期
    date: string;
    // 当日完成数量
    dayCompleteCount: number;
    // 当日计划数量
    dayPlanCount: number;
    // 完工率
    completeRate: number;
}
// 车间日计划及生产进度响应VO
export interface IWorkshopDailyPlanAndProductionScheduleRespondToVO {
    // 订单号
    produceOrderNo: string;
    // 产品名称
    productName: string;
    // 订单数量
    totalCount: number;
    // 完工数量
    currentCount: number;
    // 完成度
    completePercentage: number;
}
// 工作中心生产进度响应VO
export interface IWorkCenterProductionScheduleRespondsToVO {
    // 订单号
    produceOrderNo: string;
    // 工作中心名称
    areaName: string;
    // 当前工序
    currentProcess: string;
    // 完工工序
    completeProcess: string;
    // 完工工序id
    completeProcessId: number;
    // 当前工序id
    currentProcessId: number;
    // 当前工序步骤
    currentRoutingStep: number;
    // 总工序步骤
    finalRoutingStep: number;
}
