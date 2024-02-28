import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/lotScrapUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchScrapDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceOrder/lotScrap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次报废DTO */
export interface IBatchScrapDTO {
    /** wipRpId */
    wipRpId: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 报废数量 */
    scrapCount: number;
    /** 备注 */
    remark?: string;
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
