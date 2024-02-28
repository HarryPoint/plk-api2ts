import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/生产任务相关/entrustUsingPOST_1
*/
export default function fetchMethod(options: { data: IProductionOutsourcingSubmitDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/entrust",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产委外加工提交DTO */
export interface IProductionOutsourcingSubmitDTO {
    /** 生产任务id */
    produceTaskId: string;
    /** 批次id */
    lotOrderId: string;
    /** 委外单单号 */
    entrustNo?: string;
    /** 委外数量 */
    totalQuantity: number;
    /** 供应商id */
    supplierId?: string;
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
