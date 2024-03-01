import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/费用分配相关/queryCurrentPeriodQuantityCollectUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListCollectsPageResponseObjectsForFinishedAndFinishedProducts>(
        {
            url: "/masterdata-service/produceFeeAssign/queryCurrentPeriodQuantityCollect",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«完工及产成品归集分页响应对象»» */
export interface IJSONResultListCollectsPageResponseObjectsForFinishedAndFinishedProducts {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 完工及产成品归集分页响应对象 */
export interface ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects {
    /** 期初在产数量 */
    beginPeriodInProduceQuantity?: number;
    /** 本期完工数量 */
    currentPeriodCompleteQuantity?: number;
    /** 本期投产数量 */
    currentPeriodDeliveryQuantity?: number;
    /** 本期完工原材料成本 = 本期原材料总成本 * (本期完工数量/计划生产数量) */
    currentPeriodRawMaterialTotalCost?: number;
    /** 期末在产数量 */
    endPeriodInProduceQuantity?: number;
    /** id */
    id?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位编号 */
    materialUnitCode?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 物料单位名称 */
    materialUnitName?: string;
    /** 计划开工日期 */
    planBeginTime?: number;
    /** 计划完工日期 */
    planEndTime?: number;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 本期原材料总成本 = (领料总成本 - 退料总成本) */
    rawMaterialTotalCost?: number;
    /** 入库状态 */
    stockInStatus?: ETheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects_stockInStatus;
}

export enum ETheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects_stockInStatus {
    /** 未入库 */
    NONE = "NONE",
    /** 部分入库 */
    PARTIAL_STOCK_IN = "PARTIAL_STOCK_IN",
    /** 完全入库 */
    FULL_STOCK_IN = "FULL_STOCK_IN"
}
