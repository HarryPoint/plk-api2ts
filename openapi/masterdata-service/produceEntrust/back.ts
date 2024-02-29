import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/委外加工管理/backUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOutsourcingDesignatedProcessingDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    /** 委外记录id */
    id: string;
    /** 投料步骤id */
    produceTechnologyRoutingStepId: string;
    /** 供应商id */
    supplierId?: string;
    /** 实际投料数量(委外合格产出) */
    backQuantity: number;
    /** 报废数量 */
    scrapQuantity: number;
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
