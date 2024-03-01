import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/生产成本核算表相关/getPageUsingPOST_12
*/
export default function fetchMethod(options: { data: IProductionCostingPagingRequestObject }, extraOptions?: any) {
    return http<IJSONResultPageInformationPageResponseObjectForProductionCosting>(
        {
            url: "/masterdata-service/produceCostComputationReport/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产成本核算分页请求对象 */
export interface IProductionCostingPagingRequestObject {
    /** 期初在产品 - 数量 - 开始数量 */
    beginBeginPeriodInProduceQuantity?: number;
    /** 期初在产品 - 总成本 - 开始成本 */
    beginBeginPeriodInProduceTotalCost?: number;
    /** 本期完工 - 数量 - 开始数量 */
    beginCurrentPeriodCompleteQuantity?: number;
    /** 本期完工 - 总成本 - 开始总成本 */
    beginCurrentPeriodCompleteTotalCost?: number;
    /** 本期完工 - 单位成本 - 开始单位成本 */
    beginCurrentPeriodCompleteUnitCost?: number;
    /** 本期投产 - 费用 - 开始费用 */
    beginCurrentPeriodDeliveryFee?: number;
    /** 本期投产 - 材料成本 - 开始成本 */
    beginCurrentPeriodDeliveryMaterialCost?: number;
    /** 本期投产 - 数量 - 开始数量 */
    beginCurrentPeriodDeliveryQuantity?: number;
    /** 本期投产 - 总成本 - 开始总成本 */
    beginCurrentPeriodDeliveryTotalCost?: number;
    /** 期末在产品 - 数量 - 开始数量 */
    beginEndPeriodInProduceQuantity?: number;
    /** 期末在产品 - 总成本 - 开始总成本 */
    beginEndPeriodInProduceTotalCost?: number;
    /** 计划开始时间查询开始时间 */
    beginPlanBeginTime?: number;
    /** 期初在产品 - 数量 - 结束数量 */
    endBeginPeriodInProduceQuantity?: number;
    /** 期初在产品 - 总成本 - 结束成本 */
    endBeginPeriodInProduceTotalCost?: number;
    /** 本期完工 - 数量 - 结束数量 */
    endCurrentPeriodCompleteQuantity?: number;
    /** 本期完工 - 总成本 - 结束总成本 */
    endCurrentPeriodCompleteTotalCost?: number;
    /** 本期完工 - 单位成本 - 结束单位成本 */
    endCurrentPeriodCompleteUnitCost?: number;
    /** 本期投产 - 费用 - 结束费用 */
    endCurrentPeriodDeliveryFee?: number;
    /** 本期投产 - 材料成本 - 结束成本 */
    endCurrentPeriodDeliveryMaterialCost?: number;
    /** 本期投产 - 数量 - 结束数量 */
    endCurrentPeriodDeliveryQuantity?: number;
    /** 本期投产 - 总成本 - 结束总成本 */
    endCurrentPeriodDeliveryTotalCost?: number;
    /** 期末在产品 - 数量 - 结束数量 */
    endEndPeriodInProduceQuantity?: number;
    /** 期末在产品 - 总成本 - 结束总成本 */
    endEndPeriodInProduceTotalCost?: number;
    /** 计划开始时间查询结束时间 */
    endPlanBeginTime?: number;
    /** 导出字段集 */
    exportFields?: string[];
    /** 期间id集合 */
    fiscalPeriodIdList?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 物料id集合 */
    materialIdList?: string[];
    /** 物料规格 */
    materialSpec?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«生产成本核算分页响应对象»» */
export interface IJSONResultPageInformationPageResponseObjectForProductionCosting {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProductionCostAccountingPageResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产成本核算分页响应对象» */
export interface IPageInformationProductionCostAccountingPageResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProductionCostAccountingPageResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProductionCostAccountingPageResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionCostingPagingResponseObject[];
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
/** 生产成本核算分页响应对象 */
export interface IProductionCostingPagingResponseObject {
    /** 期初在产品 - 数量 */
    beginPeriodInProduceQuantity?: number;
    /** 期初在产品 - 总成本 */
    beginPeriodInProduceTotalCost?: number;
    /** 本期完工 - 数量 */
    currentPeriodCompleteQuantity?: number;
    /** 本期完工 - 总成本 */
    currentPeriodCompleteTotalCost?: number;
    /** 本期完工 - 单位成本 */
    currentPeriodCompleteUnitCost?: number;
    /** 本期投产 - 费用 */
    currentPeriodDeliveryFee?: number;
    /** 本期投产 - 材料成本 */
    currentPeriodDeliveryMaterialCost?: number;
    /** 本期投产 - 数量 */
    currentPeriodDeliveryQuantity?: number;
    /** 本期投产 - 总成本 */
    currentPeriodDeliveryTotalCost?: number;
    /** 期末在产品 - 数量 */
    endPeriodInProduceQuantity?: number;
    /** 期末在产品 - 总成本 */
    endPeriodInProduceTotalCost?: number;
    /** 所属期间 */
    fiscalPeriodDate?: string;
    /** 所属期间id */
    fiscalPeriodId?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProductionCostAccountingPageResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProductionCostAccountingPageResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
