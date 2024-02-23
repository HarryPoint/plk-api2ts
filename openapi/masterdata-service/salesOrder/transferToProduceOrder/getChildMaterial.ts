import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/销售订单相关/getChildMaterialListUsingPOST
export default function fetchMethod(data: IProductionSubMaterialQueryRequest[]) {
    return post<IJSONResultListInformationAboutProductionSubMaterials>({
      url: "/masterdata-service/salesOrder/transferToProduceOrder/getChildMaterial",
      data,
    });
}
// 生产子物料查询请求
export interface IProductionSubMaterialQueryRequest {
    // 销售订单详细ID
    salesOrderDetailId: number;
    // 主物料总生产数量
    masterMaterialTotalProduceQuantity: number;
    // 标准生产工艺ID
    standardTechnologyId: number;
}
// JSONResult«List«生产子物料信息»»
export interface IJSONResultListInformationAboutProductionSubMaterials {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionSubMaterialInformation[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产子物料信息
export interface IProductionSubMaterialInformation {
    // 销售订单详情ID
    id: number;
    // 销售订单id
    salesOrderId: number;
    // 销售订单名称
    salesOrderName: string;
    // 销售订单号
    salesOrderCode: string;
    // 主物料id
    materialId: number;
    // 主物料名称
    materialName: string;
    // 主物料编号
    materialCode: string;
    // 主物料规格
    materialSpec: string;
    // 物料BOM-ID
    materialBomId: number;
    // 物料BOM编码
    materialBomCode: string;
    // 物料BOM名称
    materialBomName: string;
    // 交付数量
    deliveryQuantity: number;
    // 层级
    level: number;
    // 标准工艺路径具体物料节点ID
    standardTechnologySpecificRoutingNodeId: number;
    // 子物料生产信息集
    needProduceSubMaterials: ISubMaterialProductionInformationVO[];
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
