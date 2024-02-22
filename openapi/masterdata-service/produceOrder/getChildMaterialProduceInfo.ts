// http://47.108.139.107:16700/doc.html#/default/生产订单相关/getChildMaterialProduceInfoUsingPOST
// 子物料生产信息查询请求DTO
export interface ISubMaterialProductionInformationQueryRequestDTO {
    // 标准工艺ID
    standardTechnologyId: number;
    // 生产订单ID
    produceOrderId: number;
}
// JSONResult«子生产订单信息查询响应»
export interface IJSONResultChildProductionOrderInformationQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISubProductionOrderInformationQueryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 子生产订单信息查询响应
export interface ISubProductionOrderInformationQueryResponse {
    // 子物料生产信息集
    childMaterialProduces: ISubMaterialProductionInformationVO[];
    // 生产所需要的其他物料信息
    produceOtherMaterials: IMaterialMasterDataBasicInformationIsReturnedToVO[];
}
// 子物料生产信息VO
export interface ISubMaterialProductionInformationVO {
    // 子物料生产信息指向的标准工艺节点ID（用于后续标准用户输入的生产信息应该给到那个子订单）
    standardTechnologyNodeId: number;
    // 物料bom明细id
    materialBomDetailId: number;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料单位
    materialUnit: string;
    // 物料库存数
    materialStorageCount: number;
    // 物料计算消耗数量
    totalConsumeCount: number;
    // 总生产数量
    totalCount: number;
    // 需求数量
    demandQuantity: number;
    // 层级
    level: number;
    // 父级物料id
    parentMaterialId: number;
    // 父级物料名称
    parentMaterialName: string;
    // 父级物料编号
    parentMaterialCode: string;
    // 父级物料bomId
    parentMaterialBomId: number;
    // 父级物料bom名称
    parentMaterialBomName: string;
    // 父级物料bom编号
    parentMaterialBomCode: string;
    // 优先级
    priorityLevel: number;
    // 工艺路径名称
    routingName: string;
    // 工艺路径ID
    routingId: number;
    // 标准工艺路径具体物料节点ID
    standardTechnologySpecificRoutingNodeId: number;
    // 计划结束时间
    endTime: string;
    // 计划开始时间
    beginTime: string;
    // 序列号方案id
    serialNoSchemeId: number;
    // 批次方案id
    lotSchemeId: number;
    // 启用序列号
    enableSerialNo: string;
    // 启用批次
    enableLot: string;
    // 启用批次
    enableQualityTraceability: string;
}
// 物料主数据基础信息返回VO
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料单位
    unit: string;
    // 版次号
    issueCode: string;
    // 物料规格
    spec: string;
    // 计量单位id
    unitId: number;
    // 库存可使用数
    storageUseQuantity: number;
}
