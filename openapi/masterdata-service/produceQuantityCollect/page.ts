import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/完工及产成品归集相关/pageUsingPOST_3
*/
export default function fetchMethod(options: { data: Page }, extraOptions?: any) {
    return http<IJSONResultCollectsPagingResponseObjectsForCompletedPagingInformationAndFinishedProducts>(
        {
            url: "/masterdata-service/produceQuantityCollect/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«完工及产成品归集分页响应对象»» */
export interface IJSONResultCollectsPagingResponseObjectsForCompletedPagingInformationAndFinishedProducts {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationCompletedAndFinishedProductsAreCollectedAsPagingResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«完工及产成品归集分页响应对象» */
export interface IPagingInformationCompletedAndFinishedProductsAreCollectedAsPagingResponseObjects {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects[];
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
/** 完工及产成品归集分页响应对象 */
export interface ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects {
    /** id */
    id?: number;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 入库状态 */
    stockInStatus?: string;
    /** 计划开工日期 */
    planBeginTime?: string;
    /** 计划完工日期 */
    planEndTime?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: number;
    /** 物料单位名称 */
    materialUnitName?: string;
    /** 物料单位编号 */
    materialUnitCode?: string;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 期初在产数量 */
    beginPeriodInProduceQuantity?: number;
    /** 本期投产数量 */
    currentPeriodDeliveryQuantity?: number;
    /** 本期完工数量 */
    currentPeriodCompleteQuantity?: number;
    /** 期末在产数量 */
    endPeriodInProduceQuantity?: number;
    /** 本期原材料总成本 = (领料总成本 - 退料总成本) */
    rawMaterialTotalCost?: number;
    /** 本期完工原材料成本 = 本期原材料总成本 * (本期完工数量/计划生产数量) */
    currentPeriodRawMaterialTotalCost?: number;
}
