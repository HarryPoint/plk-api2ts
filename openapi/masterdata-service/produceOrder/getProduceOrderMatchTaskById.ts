import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单相关/getProduceOrderMatchTaskDetailByIdUsingGET
export default function fetchMethod(params: { taskId: number }) {
    return get<IJSONResultQueryRequestForProductionOrderMatchingTasks['data']>({
      url: "/masterdata-service/produceOrder/getProduceOrderMatchTaskById",
      params,
    });
}
// JSONResult«生产订单匹配任务查询请求»
export interface IJSONResultQueryRequestForProductionOrderMatchingTasks {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrderMatchingTaskQueryRequest1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单匹配任务查询请求_1
export interface IProductionOrderMatchingTaskQueryRequest1 {
    // ID
    id: number;
    // 标准工艺匹配状态
    status: string;
    // 总数量
    totalQuantity: number;
    // 当前已处理数量
    currentProcessedQuantity: number;
    // 失败原因
    failureReason: string;
    // 匹配项
    itemList: IProductionOrderMatchingTaskQueryRequest[];
}
// 生产订单匹配任务查询请求
export interface IProductionOrderMatchingTaskQueryRequest {
    // ID
    id: number;
    // 任务ID
    matchTaskId: number;
    // 生产订单ID
    produceOrderId: number;
    // 生产订单编码
    produceOrderCode: string;
    // 标准工艺名称
    standardTechnologyName: string;
    // 标准工艺ID
    standardTechnologyId: number;
    // 状态
    status: string;
    // 错误原因
    failureReason: string;
    // 任务执行时间
    taskExecutionTime: string;
}
