import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/委外加工管理/backUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOutsourcingDesignatedProcessingDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceEntrust/back",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产委外指定加工DTO */
export interface IProductionOutsourcingDesignatedProcessingDTO {
    /** 实际投料数量(委外合格产出) */
    backQuantity: number;
    /** 委外记录id */
    id: string;
    /** 投料步骤id */
    produceTechnologyRoutingStepId: string;
    /** 报废数量 */
    scrapQuantity: number;
    /** 供应商id */
    supplierId?: string;
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
