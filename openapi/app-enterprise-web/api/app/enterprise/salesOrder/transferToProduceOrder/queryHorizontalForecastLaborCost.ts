import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/销售订单相关/queryHorizontalForecastLaborCostUsingPOST
*/
export default function fetchMethod(options: { data: IForecastLaborCost1[] }, extraOptions?: any) {
    return http<IJSONResultPredictedLaborCost>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrder/transferToProduceOrder/queryHorizontalForecastLaborCost",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 预测工费_1 */
export interface IForecastLaborCost1 {
    /** 主物料ID */
    masterMaterialId?: string;
    /** 子物料ID */
    childMaterialId?: string;
    /** 工艺路径ID */
    routingId?: string;
    /** 交付数量 */
    deliveryQuantity?: number;
    /** 销售订单ID */
    salesOrderId?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** BOM名称 */
    bomName?: string;
    /** BOM 级别 */
    bomLevel?: number;
    /** 标准工序工艺节点ID */
    standardTechnologySpecificRoutingNodeId?: string;
}
/** JSONResult«预测工费» */
export interface IJSONResultPredictedLaborCost {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IForecastedLaborCost;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 预测工费 */
export interface IForecastedLaborCost {
    /** 工序列表 */
    processList?: IIdNameNumberVO[];
    /** 订单项列表 */
    orderItemList?: IForecastLaborLevelOrderItems[];
    /** 汇总工费列表 */
    summaryLaborCostList?: IProcessLaborCostVO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** 预测工费水平订单项 */
export interface IForecastLaborLevelOrderItems {
    /** 销售订单ID */
    salesOrderId?: string;
    /** 销售订单编码 */
    salesOrderCode?: string;
    /** 主物料 */
    masterMaterial?: IForecastMaterialInfo;
    /** 子物料 */
    childMaterial?: IForecastMaterialInfo;
    /** 生产交付数量 */
    deliveryQuantity?: number;
    /** BOM名词 */
    bomName?: string;
    /** BOM 升级 */
    bomLevel?: number;
    /** 预测工费列表 */
    processLaborCostList?: IProcessLaborCostVO[];
}
/** ForecastMaterialInfo */
export interface IForecastMaterialInfo {
    /** 物料ID */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
}
/** ProcessLaborCostVO */
export interface IProcessLaborCostVO {
    /** undefined */
    processId?: string;
    /** undefined */
    processCode?: string;
    /** undefined */
    laborCost?: number;
}
