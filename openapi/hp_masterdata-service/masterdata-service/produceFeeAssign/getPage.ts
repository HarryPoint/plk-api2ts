// JSONResult«分页信息«生产成本分配分页响应对象»»
export interface IJSONResultPagingInformationTheProductionCostAssignsPagingResponseObjects {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationTheProductionCostAllocatesPagingResponseObjects;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«生产成本分配分页响应对象»
export interface IPagingInformationTheProductionCostAllocatesPagingResponseObjects {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProductionCostAllocatesPagingResponseObjects[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 生产成本分配分页响应对象
export interface IProductionCostAllocatesPagingResponseObjects {
    // 费用分配id
    produceFeeAssignId: number;
    // 单据编号
    code: string;
    // 单据日期
    billDate: string;
    // 生产订单编号
    produceOrderCode: string;
    // 入库状态
    stockInStatus: string;
    // 入库状态描述
    stockInStatusDesc: string;
    // 计划开工时间
    planBeginTime: string;
    // 计划生产数量
    planProduceQuantity: number;
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
    // 期初在产数量
    beginPeriodInProduceQuantity: number;
    // 本期投产数量
    currentPeriodDeliveryQuantity: number;
    // 本期完工数量
    currentPeriodCompleteQuantity: number;
    // 期末在产品数量
    endPeriodInProduceQuantity: number;
    // 本期完工材料成本
    currentPeriodRawMaterialTotalCost: number;
    // 分配标准
    assignStandard: number;
    // 分配比例
    assignRatio: number;
    // 费用动态数据
    produceFeeAssignDynamicData: any[];
    // 费用动态数据
    produceFeeAssignPageDynamicDataList: IProductionCostAllocatesDynamicDataPagingResponseObjects[];
    // 费用合计
    totalFee: number;
}
// 生产成本分配动态数据分页响应对象
export interface IProductionCostAllocatesDynamicDataPagingResponseObjects {
    // 费用类型code
    produceFeeTypeCode: string;
    // 费用
    produceFee: number;
}
