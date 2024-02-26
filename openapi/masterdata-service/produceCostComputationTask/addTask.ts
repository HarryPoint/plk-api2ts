import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产成本核算任务相关/addTaskUsingPOST
*/
export default function fetchMethod(options: { data: IProductionCostingTaskAddsRequestObject }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceCostComputationTask/addTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产成本核算任务添加请求对象 */
export interface IProductionCostingTaskAddsRequestObject {
    /** 财务期间id */
    fiscalPeriodId: number;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
