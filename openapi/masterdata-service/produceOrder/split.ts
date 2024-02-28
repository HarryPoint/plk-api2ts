import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/splitUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchOrderSplitDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceOrder/split",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单拆分DTO */
export interface IBatchOrderSplitDTO {
    /** wipRpId */
    wipRpId?: string;
    /** 原批次数量 */
    sourceCount?: number;
    /** 拆分批次信息 */
    lotOrders?: IBatchOrderDTO[];
    /** 备注 */
    remark?: string;
}
/** 批次订单DTO */
export interface IBatchOrderDTO {
    /** 批次名称 */
    lotName?: string;
    /** 批次数量 */
    lotCount?: number;
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
    ts?: string;
}
