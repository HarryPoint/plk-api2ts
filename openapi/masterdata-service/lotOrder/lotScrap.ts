import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/lotScrapUsingPOST
*/
export default function fetchMethod(options: { data: IBatchScrapDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/lotOrder/lotScrap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次报废DTO */
export interface IBatchScrapDTO {
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 备注 */
    remark?: string;
    /** 报废数量 */
    scrapCount: number;
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
