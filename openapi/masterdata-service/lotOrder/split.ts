import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/splitUsingPOST
*/
export default function fetchMethod(options: { data: IBatchOrderSplitDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/lotOrder/split",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单拆分DTO */
export interface IBatchOrderSplitDTO {
    /** 拆分批次信息 */
    lotOrders?: IBatchOrderDTO[];
    /** 备注 */
    remark?: string;
    /** 原批次数量 */
    sourceCount?: number;
    /** wipRpId */
    wipRpId?: string;
}
/** 批次订单DTO */
export interface IBatchOrderDTO {
    /** 批次数量 */
    lotCount?: number;
    /** 批次名称 */
    lotName?: string;
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
