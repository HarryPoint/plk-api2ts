import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/getProduceOrderEndProcessUsingPOST
*/
export default function fetchMethod(options: { data: IQueryVOForTheLastStepOfTheProductionOrder, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheLastProcessVOOfTheProductionOrder>(
        {
            url: "/masterdata-service/produceOrder/getProduceOrderEndProcess",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单最后一道工序查询VO */
export interface IQueryVOForTheLastStepOfTheProductionOrder {
    /** 物料ids */
    materialIds?: string[];
    /** 物料种类 */
    materialType?: string;
}
/** JSONResult«List«生产订单最后一道工序VO»» */
export interface IJSONResultListTheLastProcessVOOfTheProductionOrder {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheLastStepOfProductionOrderVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单最后一道工序VO */
export interface ITheLastStepOfProductionOrderVO {
    /** 生产订单id */
    orderId?: string;
    /** 物料id */
    materialId?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料种类 */
    materialType?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 生产订单的工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 生产订单的生产工艺工艺路径最后一个工艺步骤id */
    endProduceTechnologyRoutingStepId?: string;
    /** 最后一个工艺步骤对应的工序id */
    endProcessId?: string;
}
