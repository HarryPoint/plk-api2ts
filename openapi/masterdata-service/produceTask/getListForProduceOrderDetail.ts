import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产任务相关/getListForProduceOrderDetailUsingGET
export default function fetchMethod(params: { enterpriseId: number; produceOrderId: number }, extraOptions?: any) {
    return http<IJSONResultListProductionOrderDetailsProductionTaskVO>(
        {
            url: "/masterdata-service/produceTask/getListForProduceOrderDetail",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«生产订单详情 - 生产任务VO»»
export interface IJSONResultListProductionOrderDetailsProductionTaskVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrderDetailsProductionTaskVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单详情 - 生产任务VO
export interface IProductionOrderDetailsProductionTaskVO {
    // 生产任务id
    id: number;
    // 任务号
    taskNo: string;
    // 任务下发时间
    issueTime: string;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
    // 对应工序编号
    processCode: string;
    // 计划开始时间
    beginTime: string;
    // 计划结束时间
    endTime: string;
    // 计划生产数量 - 任务进度分母
    planProduceQuantity: number;
    // 当前完成数量 - 任务进度分子(合格数量)
    currentCompleteQuantity: number;
    // 任务进度分子(补单数量)
    supplementCompleteQuantity: number;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 进料数量
    moveInQuantity: number;
    // 出料数量
    moveOutQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 返工数量
    backQuantity: number;
}
