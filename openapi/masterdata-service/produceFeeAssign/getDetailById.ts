import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/费用分配相关/getDetailByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionCostAllocationResponseObject>(
        {
            url: "/masterdata-service/produceFeeAssign/getDetailById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产成本分配响应对象» */
export interface IJSONResultProductionCostAllocationResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionCostAllocatesResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产成本分配响应对象 */
export interface IProductionCostAllocatesResponseObjects {
    /** id */
    id?: string;
    /** 单据编号 */
    code?: string;
    /** 单据日期 */
    billDate?: number;
    /** 当前期间 */
    fiscalPeriod?: IDurationResponseObject;
    /** 分配信息 */
    produceFeeAssignDetailList?: IProductionCostAllocationDetailResponseObject[];
    /** 费用信息 */
    produceFeeCollectDetailList?: IExpenseCollectionDetailsRespondToDTO[];
}
/** 期间响应对象 */
export interface IDurationResponseObject {
    /** 期间Id */
    id?: string;
    /** 期间 */
    period?: string;
    /** 开始日期 */
    startDate?: number;
    /** 结束日期 */
    endDate?: number;
    /** 是否当前期间 */
    isCurrentFiscalPeriod?: EDurationResponseObject_isCurrentFiscalPeriod;
}
/** 生产成本分配明细响应对象 */
export interface IProductionCostAllocationDetailResponseObject {
    /** id */
    id?: string;
    /** 生产费用分配id */
    produceFeeAssignId?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 入库状态 */
    stockInStatus?: EProductionCostAllocationDetailResponseObject_stockInStatus;
    /** 计划开工日期 */
    planBeginTime?: number;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
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
    /** 期末在产品数量 */
    endPeriodInProduceQuantity?: number;
    /** 本期完工材料成本 */
    currentPeriodRawMaterialTotalCost?: number;
    /** 分配标准 */
    assignStandard?: number;
    /** 分配比例 */
    assignRatio?: number;
    /** 动态费用分配信息 */
    produceFeeAssignDynamicData?: IProductionCostAllocationDynamicData[];
    /** 费用合计 */
    totalFee?: number;
}
/** 生产成本分配动态数据 */
export interface IProductionCostAllocationDynamicData {
    /** 费用类型id */
    produceFeeTypeId?: string;
    /** 费用类型code */
    produceFeeTypeCode?: string;
    /** 费用 */
    produceFee?: number;
}
/** 费用归集明细响应DTO */
export interface IExpenseCollectionDetailsRespondToDTO {
    /** 费用归集明细id */
    id?: string;
    /** 费用类型id */
    produceFeeTypeId?: string;
    /** 费用编码 */
    produceFeeCode?: string;
    /** 费用名称 */
    produceFeeName?: string;
    /** 费用金额 */
    fee?: number;
    /** 所属期间 */
    periodDate?: number;
    /** 指定生产订单 */
    produceOrderId?: string;
}

export enum EDurationResponseObject_isCurrentFiscalPeriod {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionCostAllocationDetailResponseObject_stockInStatus {
    /** 未入库 */
    NONE = "NONE",
    /** 部分入库 */
    PARTIAL_STOCK_IN = "PARTIAL_STOCK_IN",
    /** 完全入库 */
    FULL_STOCK_IN = "FULL_STOCK_IN"
}
