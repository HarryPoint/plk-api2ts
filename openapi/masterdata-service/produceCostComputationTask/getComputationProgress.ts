import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.139.107:16700/doc.html#/default/生产成本核算任务相关/getComputationProgressUsingGET
*/
export default function fetchMethod(options: { params: { computationTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionCostAccountingProgressResponseObjectDTO>(
        {
            url: "/masterdata-service/produceCostComputationTask/getComputationProgress",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产成本核算进度响应对象DTO» */
export interface IJSONResultProductionCostAccountingProgressResponseObjectDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionCostAccountingProgressResponseObjectDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产成本核算进度响应对象DTO */
export interface IProductionCostAccountingProgressResponseObjectDTO {
    /** 总数 */
    totalCount?: number;
    /** 成功数量 */
    successCount?: number;
    /** 失败数量 */
    failedCount?: number;
    /** 失败原因 */
    failedReason?: string;
}
