import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/getByProduceOrderIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; produceOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBatchInformationVO>(
        {
            url: "/masterdata-service/lotOrder/getByProduceOrderId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«批次信息VO»» */
export interface IJSONResultListBatchInformationVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBatchInformationVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次信息VO */
export interface IBatchInformationVO {
    /** id */
    id?: string;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 总数量 */
    totalCount?: number;
}
