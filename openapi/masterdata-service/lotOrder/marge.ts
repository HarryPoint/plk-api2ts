import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/margeUsingPOST
*/
export default function fetchMethod(options: { data: IBatchOrderConsolidationDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/lotOrder/marge",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单合并DTO */
export interface IBatchOrderConsolidationDTO {
    /** 备注 */
    remark?: string;
    /** wip状态记录id集 */
    wipRpIds?: string[];
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
