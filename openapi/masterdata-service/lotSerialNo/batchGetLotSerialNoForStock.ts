import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16700/doc.html#/default/批次|序列号相关/batchGetLotSerialNoForStockUsingPOST
*/
export default function fetchMethod(options: { data: IBatchSerialNumberRequestDTO }, extraOptions?: any) {
    return http<IJSONResultBatchNumberUsesDTO>(
        {
            url: "/masterdata-service/lotSerialNo/batchGetLotSerialNoForStock",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次/序列号申请DTO */
export interface IBatchSerialNumberRequestDTO {
    /** 连续申请数量 */
    continuousApplyQuantity?: number;
    /** 连续申请方案id */
    continuousLotSerialNumPlanId?: string;
    /** 索引开始位置 */
    latestOffset?: number;
    /** 批次/序列号方案id */
    lotSerialNumPlanId?: string;
    /** 物料id */
    materialId?: string;
    /** 需申请数量 */
    needQuantity?: number;
    /** 生产订单id */
    produceOrderId?: string;
    /** 销售订单明细id */
    salesOrderDetailId?: string;
    /** 销售订单id */
    salesOrderId?: string;
}
/** JSONResult«批次号使用DTO» */
export interface IJSONResultBatchNumberUsesDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheBatchNumberUsesDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次号使用DTO */
export interface ITheBatchNumberUsesDTO {
    /** 错误信息 */
    commonErrorInfo?: string;
    /** 异常批次号 */
    lotSerialNoErrorList?: ITheBatchNumberUsesAnAbnormalDTO[];
    /** 批次号 */
    lotSerialNoList?: string[];
    /** 偏移量 */
    offset?: number;
}
/** 批次号使用异常DTO */
export interface ITheBatchNumberUsesAnAbnormalDTO {
    /** 异常信息集合 */
    errorMsgList?: string[];
    /** 批次号 */
    lotSerialNo?: string;
}
