import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/transferUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchTransferToOtherProductionOrderDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceOrder/transfer",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次转移到其他生产订单DTO */
export interface IBatchTransferToOtherProductionOrderDTO {
    /** 是否自动创建一个补充生产订单 */
    isAutoCreateOrder: EBatchTransferToOtherProductionOrderDTO_isAutoCreateOrder;
    /** 转移生产工艺路径步骤id */
    produceTechnologyRoutingStepId: string;
    /** 备注 */
    remark?: string;
    /** 转移生产订单id */
    transferProduceOrderId: string;
    /** wipRpId */
    wipRpId: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EBatchTransferToOtherProductionOrderDTO_isAutoCreateOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
