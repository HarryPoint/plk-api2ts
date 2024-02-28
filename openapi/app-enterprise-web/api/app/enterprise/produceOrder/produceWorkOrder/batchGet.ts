import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产订单相关/batchGetProduceWorkOrderUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProduceWorkOrderVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/produceWorkOrder/batchGet",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceWorkOrderVO»» */
export interface IJSONResultListProduceWorkOrderVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceWorkOrderVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceWorkOrderVO */
export interface IProduceWorkOrderVO {
    /** 生产订单ID */
    produceOrderId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 计划生产数量 */
    planQuantity?: number;
    /** 生产订单号 */
    produceOrderNo?: string;
    /** 销售订单号 */
    salesOrderNo?: string;
    /** 计划开工日期 */
    beginTime?: number;
    /** 计划完工日期 */
    endTime?: number;
    /** 是否急单 */
    isEmergentOrder?: EProduceWorkOrderVO_isEmergentOrder;
    /** 订单类型 */
    orderType?: EProduceWorkOrderVO_orderType;
    /** 订单类型描述 */
    orderTypeDesc?: string;
    /** 工序信息 */
    processList?: IProduceWorkOrderProcessVO[];
    /** 生产相关信息 */
    produceCustomInfo?: IProduceWorkOrderCustomFieldDataVO[];
}
/** ProduceWorkOrderProcessVO */
export interface IProduceWorkOrderProcessVO {
    /** 生产任务ID */
    produceTaskId?: string;
    /** 生产任务号 */
    produceTaskNo?: string;
    /** 区域编码 */
    areaCode?: string;
    /** 区域名称 */
    areaName?: string;
    /** 工序编码 */
    processCode?: string;
    /** 工序名称 */
    processName?: string;
    /** 任务下发时间 */
    taskIssueTime?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划完成时间 */
    endTime?: number;
}
/** ProduceWorkOrderCustomFieldDataVO */
export interface IProduceWorkOrderCustomFieldDataVO {
    /** 自定义字段编码 */
    code?: string;
    /** 自定义字段名称 */
    name?: string;
    /** 值 */
    value?: string;
}

export enum EProduceWorkOrderVO_isEmergentOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceWorkOrderVO_orderType {
    /** 合同生产 */
    CONTRACT = "CONTRACT",
    /** 备库生产 */
    STANDBY = "STANDBY",
    /** 返工生产 */
    REWORK = "REWORK",
    /** 新产品实验生产 */
    TEST = "TEST",
    /** 虚拟订单 */
    VIRTUAL = "VIRTUAL",
    /** 其他订单 */
    OTHER = "OTHER",
    /** 报废补单 */
    SCRAP_SUPPLEMENT = "SCRAP_SUPPLEMENT"
}
