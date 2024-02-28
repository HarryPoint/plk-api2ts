import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/batchGetLotNoUsingPOST
*/
export default function fetchMethod(options: { data: IBatchSerialNumberRequestDTO }, extraOptions?: any) {
    return http<IJSONResultBatchNumberUsesDTO>(
        {
            url: "/masterdata-service/lotOrder/batchGetLotNo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次/序列号申请DTO */
export interface IBatchSerialNumberRequestDTO {
    /** 批次/序列号方案id */
    lotSerialNumPlanId?: string;
    /** 需申请数量 */
    needQuantity?: number;
    /** 生产订单id */
    produceOrderId?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单明细id */
    salesOrderDetailId?: string;
    /** 物料id */
    materialId?: string;
    /** 索引开始位置 */
    latestOffset?: number;
    /** 连续申请方案id */
    continuousLotSerialNumPlanId?: string;
    /** 连续申请数量 */
    continuousApplyQuantity?: number;
}
/** JSONResult«批次号使用DTO» */
export interface IJSONResultBatchNumberUsesDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheBatchNumberUsesDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次号使用DTO */
export interface ITheBatchNumberUsesDTO {
    /** 异常批次号 */
    lotSerialNoErrorList?: ITheBatchNumberUsesAnAbnormalDTO[];
    /** 批次号 */
    lotSerialNoList?: string[];
    /** 偏移量 */
    offset?: number;
    /** 错误信息 */
    commonErrorInfo?: string;
}
/** 批次号使用异常DTO */
export interface ITheBatchNumberUsesAnAbnormalDTO {
    /** 批次号 */
    lotSerialNo?: string;
    /** 异常信息集合 */
    errorMsgList?: string[];
}
