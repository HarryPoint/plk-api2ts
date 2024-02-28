import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/生产成本核算任务相关/addTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionCostingTaskAddsRequestObject }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceCostComputationTask/addTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产成本核算任务添加请求对象 */
export interface IProductionCostingTaskAddsRequestObject {
    /** 财务期间id */
    fiscalPeriodId: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
