import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/生产订单相关/getProduceOrderMatchTaskDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string } }, extraOptions?: any) {
    return http<IJSONResultQueryRequestForProductionOrderMatchingTasks>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getProduceOrderMatchTaskById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产订单匹配任务查询请求» */
export interface IJSONResultQueryRequestForProductionOrderMatchingTasks {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderMatchingTaskQueryRequest1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单匹配任务查询请求_1 */
export interface IProductionOrderMatchingTaskQueryRequest1 {
    /** ID */
    id?: string;
    /** 标准工艺匹配状态 */
    status?: EProductionOrderMatchingTaskQueryRequest1_status;
    /** 总数量 */
    totalQuantity?: string;
    /** 当前已处理数量 */
    currentProcessedQuantity?: string;
    /** 失败原因 */
    failureReason?: string;
    /** 匹配项 */
    itemList?: IProductionOrderMatchingTaskQueryRequest[];
}
/** 生产订单匹配任务查询请求 */
export interface IProductionOrderMatchingTaskQueryRequest {
    /** ID */
    id?: string;
    /** 任务ID */
    matchTaskId?: string;
    /** 生产订单ID */
    produceOrderId?: string;
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 标准工艺ID */
    standardTechnologyId?: string;
    /** 状态 */
    status?: EProductionOrderMatchingTaskQueryRequest_status;
    /** 错误原因 */
    failureReason?: string;
    /** 任务执行时间 */
    taskExecutionTime?: number;
}

export enum EProductionOrderMatchingTaskQueryRequest1_status {
    /** 未匹配 */
    UNMATCHED = "UNMATCHED",
    /** 匹配中 */
    MATCHING = "MATCHING",
    /** 匹配完成 */
    MATCH_COMPLETED = "MATCH_COMPLETED",
    /** 匹配失败 */
    MATCH_FAIL = "MATCH_FAIL"
}

export enum EProductionOrderMatchingTaskQueryRequest_status {
    /** 未匹配 */
    UNMATCHED = "UNMATCHED",
    /** 匹配中 */
    MATCHING = "MATCHING",
    /** 匹配完成 */
    MATCH_COMPLETED = "MATCH_COMPLETED",
    /** 匹配失败 */
    MATCH_FAIL = "MATCH_FAIL"
}
