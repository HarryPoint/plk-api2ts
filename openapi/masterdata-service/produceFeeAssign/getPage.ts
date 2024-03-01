import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/费用分配相关/getPageUsingPOST_14
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheProductionCostAssignsPagingResponseObjects>(
        {
            url: "/masterdata-service/produceFeeAssign/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«生产成本分配分页响应对象»» */
export interface IJSONResultPagingInformationTheProductionCostAssignsPagingResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationTheProductionCostAllocatesPagingResponseObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«生产成本分配分页响应对象» */
export interface IPagingInformationTheProductionCostAllocatesPagingResponseObjects {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationTheProductionCostAllocatesPagingResponseObjects_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationTheProductionCostAllocatesPagingResponseObjects_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProductionCostAllocatesPagingResponseObjects[];
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
/** 生产成本分配分页响应对象 */
export interface IProductionCostAllocatesPagingResponseObjects {
    /** 分配比例 */
    assignRatio?: number;
    /** 分配标准 */
    assignStandard?: number;
    /** 期初在产数量 */
    beginPeriodInProduceQuantity?: number;
    /** 单据日期 */
    billDate?: number;
    /** 单据编号 */
    code?: string;
    /** 本期完工数量 */
    currentPeriodCompleteQuantity?: number;
    /** 本期投产数量 */
    currentPeriodDeliveryQuantity?: number;
    /** 本期完工材料成本 */
    currentPeriodRawMaterialTotalCost?: number;
    /** 期末在产品数量 */
    endPeriodInProduceQuantity?: number;
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
    /** 计划开工时间 */
    planBeginTime?: number;
    /** 计划生产数量 */
    planProduceQuantity?: number;
    /** 费用动态数据 */
    produceFeeAssignDynamicData?: Record<string, any>[];
    /** 费用分配id */
    produceFeeAssignId?: string;
    /** 费用动态数据 */
    produceFeeAssignPageDynamicDataList?: IProductionCostAllocatesDynamicDataPagingResponseObjects[];
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 入库状态 */
    stockInStatus?: EProductionCostAllocatesPagingResponseObjects_stockInStatus;
    /** 入库状态描述 */
    stockInStatusDesc?: string;
    /** 费用合计 */
    totalFee?: number;
}
/** 生产成本分配动态数据分页响应对象 */
export interface IProductionCostAllocatesDynamicDataPagingResponseObjects {
    /** 费用 */
    produceFee?: number;
    /** 费用类型code */
    produceFeeTypeCode?: string;
}

export enum EPagingInformationTheProductionCostAllocatesPagingResponseObjects_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationTheProductionCostAllocatesPagingResponseObjects_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionCostAllocatesPagingResponseObjects_stockInStatus {
    /** 未入库 */
    NONE = "NONE",
    /** 部分入库 */
    PARTIAL_STOCK_IN = "PARTIAL_STOCK_IN",
    /** 完全入库 */
    FULL_STOCK_IN = "FULL_STOCK_IN"
}
