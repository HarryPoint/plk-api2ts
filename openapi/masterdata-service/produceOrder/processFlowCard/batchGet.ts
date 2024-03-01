import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/batchGetProcessFlowCardUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProcessFlowCardDTO>(
        {
            url: "/masterdata-service/produceOrder/processFlowCard/batchGet",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProcessFlowCardDTO»» */
export interface IJSONResultListProcessFlowCardDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessFlowCardDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProcessFlowCardDTO */
export interface IProcessFlowCardDTO {
    /** undefined */
    blankingSize?: string;
    /** undefined */
    blankingWight?: string;
    /** undefined */
    createUserName?: string;
    /** undefined */
    customNumber?: string;
    /** undefined */
    customerName?: string;
    /** undefined */
    deliveryDate?: string;
    /** undefined */
    drill?: string;
    /** undefined */
    fineTurning?: string;
    /** undefined */
    flawDetection?: string;
    /** undefined */
    forgingDimensions?: string;
    /** undefined */
    heatNo?: string;
    /** undefined */
    heatTreatment?: string;
    /** undefined */
    isEmergentOrder?: string;
    /** undefined */
    machinedDimensions?: string;
    /** undefined */
    machiningTime?: string;
    /** undefined */
    orderNo?: string;
    /** undefined */
    produceOrderCode?: string;
    /** undefined */
    produceOrderId?: string;
    /** undefined */
    readyTime?: string;
    /** undefined */
    roughCar?: string;
    /** undefined */
    salesOrderCode?: string;
    /** undefined */
    serialNo?: string;
    /** undefined */
    sign?: string;
    /** undefined */
    standardSpecifications?: string;
    /** undefined */
    textureOfMaterial?: string;
    /** undefined */
    totalProduceOrderQuantity?: number;
}
