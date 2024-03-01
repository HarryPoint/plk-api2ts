import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/委外加工管理/entrustUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOutsourcingSubmitDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceEntrust/entrust",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产委外加工提交DTO */
export interface IProductionOutsourcingSubmitDTO {
    /** 委外单单号 */
    entrustNo?: string;
    /** 批次id */
    lotOrderId: string;
    /** 生产任务id */
    produceTaskId: string;
    /** 供应商id */
    supplierId?: string;
    /** 委外数量 */
    totalQuantity: number;
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
