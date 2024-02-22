import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/费用分配相关/queryCurrentPeriodQuantityCollectUsingGET
export function fetchMethod() {
    return get({
      url: "/masterdata-service/produceFeeAssign/queryCurrentPeriodQuantityCollect",
    });
}
// JSONResult«List«完工及产成品归集分页响应对象»»
export interface IJSONResultListCollectsPageResponseObjectsForFinishedAndFinishedProducts {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 完工及产成品归集分页响应对象
export interface ITheFinishedAndFinishedProductsAreCollectedAsPagingResponseObjects {
    // id
    id: number;
    // 生产订单id
    produceOrderId: number;
    // 生产订单编号
    produceOrderCode: string;
    // 入库状态
    stockInStatus: string;
    // 计划开工日期
    planBeginTime: string;
    // 计划完工日期
    planEndTime: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 物料单位id
    materialUnitId: number;
    // 物料单位名称
    materialUnitName: string;
    // 物料单位编号
    materialUnitCode: string;
    // 计划生产数量
    planProduceQuantity: number;
    // 期初在产数量
    beginPeriodInProduceQuantity: number;
    // 本期投产数量
    currentPeriodDeliveryQuantity: number;
    // 本期完工数量
    currentPeriodCompleteQuantity: number;
    // 期末在产数量
    endPeriodInProduceQuantity: number;
    // 本期原材料总成本 = (领料总成本 - 退料总成本)
    rawMaterialTotalCost: number;
    // 本期完工原材料成本 = 本期原材料总成本 * (本期完工数量/计划生产数量)
    currentPeriodRawMaterialTotalCost: number;
}
