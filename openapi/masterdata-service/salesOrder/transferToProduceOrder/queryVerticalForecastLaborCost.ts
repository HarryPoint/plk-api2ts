import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/销售订单相关/queryVerticalForecastLaborCostUsingPOST
*/
export default function fetchMethod(options: { data: IForecastLaborCost1[] }, extraOptions?: any) {
    return http<IJSONResultListPredictsWorkCosts>(
        {
            url: "/masterdata-service/salesOrder/transferToProduceOrder/queryVerticalForecastLaborCost",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 预测工费_1 */
export interface IForecastLaborCost1 {
    /** BOM 级别 */
    bomLevel?: number;
    /** BOM名称 */
    bomName?: string;
    /** 子物料ID */
    childMaterialId?: string;
    /** 交付数量 */
    deliveryQuantity?: number;
    /** 主物料ID */
    masterMaterialId?: string;
    /** 工艺路径ID */
    routingId?: string;
    /** 销售订单ID */
    salesOrderId?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 标准工序工艺节点ID */
    standardTechnologySpecificRoutingNodeId?: string;
}
/** JSONResult«List«预测工费»» */
export interface IJSONResultListPredictsWorkCosts {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IForecastLaborCost2[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 预测工费_2 */
export interface IForecastLaborCost2 {
    /** BOM 升级 */
    bomLevel?: number;
    /** BOM名词 */
    bomName?: string;
    /** 子物料 */
    childMaterial?: IForecastMaterialInfo;
    /** 生产交付数量 */
    deliveryQuantity?: number;
    /** 工费 */
    laborCost?: number;
    /** 主物料 */
    masterMaterial?: IForecastMaterialInfo;
    /** 工序ID */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 销售订单ID */
    salesOrderId?: string;
}
/** ForecastMaterialInfo */
export interface IForecastMaterialInfo {
    /** 物料编码 */
    materialCode?: string;
    /** 物料ID */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
}
