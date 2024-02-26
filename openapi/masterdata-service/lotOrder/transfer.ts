import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/transferUsingPOST
*/
export default function fetchMethod(options: { data: IBatchTransferToOtherProductionOrderDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/lotOrder/transfer",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次转移到其他生产订单DTO */
export interface IBatchTransferToOtherProductionOrderDTO {
    /** wipRpId */
    wipRpId: number;
    /** 转移生产订单id */
    transferProduceOrderId: number;
    /** 转移生产工艺路径步骤id */
    produceTechnologyRoutingStepId: number;
    /** 备注 */
    remark?: string;
    /** 是否自动创建一个补充生产订单 */
    isAutoCreateOrder: EBatchTransferToOtherProductionOrderDTO_isAutoCreateOrder;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EBatchTransferToOtherProductionOrderDTO_isAutoCreateOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
