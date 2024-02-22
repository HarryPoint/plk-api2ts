// http://47.108.139.107:16700/doc.html#/default/费用分配相关/editUsingPOST_11
// 生产费用分配编辑DTO
export interface IProductionExpensesAllocationEditDTO {
    // id
    id: number;
    // 单据编号
    code: string;
    // 单据日期
    billDate: string;
    // 当前期间id
    currentFiscalPeriodId: number;
    // 数量归集id
    produceQuantityCollectIds: number[];
    // 分配信息
    produceFeeAssignDetailList: IProductionExpenseAllocationDetailsEditDTO[];
    // 费用信息
    produceFeeCollectDetailList: ICostCollectionDetailResponseDTO1[];
    // undefined
    isDeleted: string;
}
// 生产费用分配明细编辑DTO
export interface IProductionExpenseAllocationDetailsEditDTO {
    // id
    id: number;
    // 生产费用分配id
    produceFeeAssignId: number;
    // 生产订单id
    produceOrderId: number;
    // 生产订单编号
    produceOrderCode: string;
    // 入库状态
    stockInStatus: string;
    // 计划开工日期
    planBeginTime: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 计划生产数量
    planProduceQuantity: number;
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
    // 动态费用分配信息
    produceFeeAssignDynamicData: IProductionCostAllocationDynamicData[];
    // 费用合计
    totalFee: number;
    // undefined
    isDeleted: string;
}
// 生产成本分配动态数据
export interface IProductionCostAllocationDynamicData {
    // 费用类型id
    produceFeeTypeId: number;
    // 费用类型code
    produceFeeTypeCode: string;
    // 费用
    produceFee: number;
}
// 费用归集明细响应DTO_1
export interface ICostCollectionDetailResponseDTO1 {
    // 费用归集明细id
    id: number;
    // 费用类型id
    produceFeeTypeId: number;
    // 费用编码
    produceFeeCode: string;
    // 费用名称
    produceFeeName: string;
    // 费用金额
    fee: number;
    // 所属期间
    periodDate: string;
    // 指定生产订单
    produceOrderId: number;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
