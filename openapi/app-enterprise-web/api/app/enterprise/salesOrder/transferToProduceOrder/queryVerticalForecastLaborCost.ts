import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/销售订单相关/queryVerticalForecastLaborCostUsingPOST
export default function fetchMethod(data: IForecastLaborCost1[], extraOptions?: any) {
    return http<IJSONResultListPredictsWorkCosts>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrder/transferToProduceOrder/queryVerticalForecastLaborCost",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 预测工费_1
export interface IForecastLaborCost1 {
    // 主物料ID
    masterMaterialId: number;
    // 子物料ID
    childMaterialId: number;
    // 工艺路径ID
    routingId: number;
    // 交付数量
    deliveryQuantity: number;
    // 销售订单ID
    salesOrderId: number;
    // 销售订单编号
    salesOrderNo: string;
    // BOM名称
    bomName: string;
    // BOM 级别
    bomLevel: number;
    // 标准工序工艺节点ID
    standardTechnologySpecificRoutingNodeId: number;
}
// JSONResult«List«预测工费»»
export interface IJSONResultListPredictsWorkCosts {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IForecastLaborCost2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 预测工费_2
export interface IForecastLaborCost2 {
    // 销售订单ID
    salesOrderId: number;
    // 销售订单编码
    salesOrderCode: string;
    // 主物料
    masterMaterial: IForecastMaterialInfo;
    // 子物料
    childMaterial: IForecastMaterialInfo;
    // 工序ID
    processId: number;
    // 工序名称
    processName: string;
    // 生产交付数量
    deliveryQuantity: number;
    // 工费
    laborCost: number;
    // BOM名词
    bomName: string;
    // BOM 升级
    bomLevel: number;
}
// ForecastMaterialInfo
export interface IForecastMaterialInfo {
    // 物料ID
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
}
