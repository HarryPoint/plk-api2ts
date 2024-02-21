// 安全库存物料库存配置信息搜索VO
export interface ISafetyInventoryMaterialInventoryConfigurationInformationSearchVO {
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
    // 物料id
    materialId: number;
}
// JSONResult«安全库存物料库存配置信息返回VO»
export interface IJSONResultSafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 安全库存物料库存配置信息返回VO
export interface ISafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO {
    // 安全库存下限
    lowerLimit: number;
    // 安全库存上限
    upperLimit: number;
    // 采购触发下限
    purchaseLowerLimit: number;
}