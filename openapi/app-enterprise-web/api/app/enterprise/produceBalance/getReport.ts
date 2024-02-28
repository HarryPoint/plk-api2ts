import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/生产结存报表相关/getReportUsingPOST_6
*/
export default function fetchMethod(options: { data: IProductionBalanceStatisticsReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultProductionBalanceMaterialStatisticsReportReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceBalance/getReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产结存统计报表搜索VO */
export interface IProductionBalanceStatisticsReportSearchVO {
    /** 工序id集 */
    processIds?: string[];
    /** 物料id */
    materialId?: string;
    /** 开始日期 yyyy-MM-dd HH:mm:ss */
    beginDate?: string;
    /** 结束日期 yyyy-MM-dd HH:mm:ss */
    endDate?: string;
}
/** JSONResult«生产结存物料统计报表返回VO» */
export interface IJSONResultProductionBalanceMaterialStatisticsReportReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionBalanceMaterialStatisticsReportReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产结存物料统计报表返回VO */
export interface IProductionBalanceMaterialStatisticsReportReturnedToVO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 报表返回数据集 */
    reportResults?: ITheProductionBalanceStatisticsReportIsReturnedToVO[];
}
/** 生产结存统计报表返回VO */
export interface ITheProductionBalanceStatisticsReportIsReturnedToVO {
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 前日结存成品数 */
    preDayFinishBalanceQuantity?: number;
    /** 前日结存半成品数 */
    preDaySemiBalanceQuantity?: number;
    /** 前日结存返工品数 */
    preDayBackBalanceQuantity?: number;
    /** 接收数合计 */
    totalReceiveQuantity?: number;
    /** 产出数合计 */
    totalProduceQuantity?: number;
    /** 转出数 - 合格转出合计 */
    totalRollOutProduceQuantity?: number;
    /** 转出数 - 返工转出合计 */
    totalRollOutBackQuantity?: number;
    /** 转出数 - 委外转出合计 */
    totalRollOutProduceEntrustQuantity?: number;
    /** 当天结存成品数 */
    finishBalanceQuantity?: number;
    /** 当天结存半成品数 */
    semiBalanceQuantity?: number;
    /** 当天结存返工品数 */
    backBalanceQuantity?: number;
    /** 当天结存不良品数 */
    scrapBalanceQuantity?: number;
    /** 当天结存良品率 */
    yieldRate?: number;
    /** 日期信息集 */
    dateList?: IProductionBalanceStatisticsDateReportReturnsVO[];
}
/** 生产结存统计日期报表返回VO */
export interface IProductionBalanceStatisticsDateReportReturnsVO {
    /** 日期 */
    produceDate?: number;
    /** 前日结存成品数 */
    preDayFinishBalanceQuantity?: number;
    /** 前日结存半成品数 */
    preDaySemiBalanceQuantity?: number;
    /** 前日结存返工品数 */
    preDayBackBalanceQuantity?: number;
    /** 接收数 */
    receiveQuantity?: number;
    /** 产出数 */
    produceQuantity?: number;
    /** 转出数 */
    rollOutQuantity?: number;
    /** 转出数 - 合格转出 */
    rollOutProduceQuantity?: number;
    /** 转出数 - 返工转出 */
    rollOutBackQuantity?: number;
    /** 转出数 - 委外转出 */
    rollOutProduceEntrustQuantity?: number;
    /** 当天结存成品数 */
    finishBalanceQuantity?: number;
    /** 当天结存半成品数 */
    semiBalanceQuantity?: number;
    /** 当天结存返工品数 */
    backBalanceQuantity?: number;
    /** 当天结存不良品数 */
    scrapBalanceQuantity?: number;
    /** 当天结存良品率 */
    yieldRate?: number;
}
