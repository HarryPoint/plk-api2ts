import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/transferUsingPOST
*/
export default function fetchMethod(data: IBatchTransferToOtherProductionOrderDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/transfer",
            method: "post",
            data,
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
    remark: string;
    /** 是否自动创建一个补充生产订单 */
    isAutoCreateOrder: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
