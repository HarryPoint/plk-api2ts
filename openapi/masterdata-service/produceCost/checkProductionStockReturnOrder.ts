import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产成本相关/checkProductionStockReturnOrderUsingGET
*/
export default function fetchMethod(options: { params: { fiscalPeriodId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionCostAccountingDocumentStatusVerificationResponseDTO>(
        {
            url: "/masterdata-service/produceCost/checkProductionStockReturnOrder",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产成本核算单据状态校验响应DTO»» */
export interface IJSONResultListProductionCostAccountingDocumentStatusVerificationResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionCostAccountingDocumentStatusCheckResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产成本核算单据状态校验响应DTO */
export interface IProductionCostAccountingDocumentStatusCheckResponseDTO {
    /** 单据id */
    billId?: number;
    /** 单据编号 */
    billCode?: string;
    /** 当前处理人 */
    handleUserNames?: string[];
    /** 待办id */
    todoId?: number;
    /** 待办对应的流程任务id */
    flowPathTaskId?: number;
}
