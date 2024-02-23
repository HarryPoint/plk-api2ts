import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产订单相关/getLotOrderWipListUsingPOST_1
export default function fetchMethod(data: IBatchOrderWipSearchVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListBatchWipInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/produceOrder/getLotOrderWipList",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 批次订单Wip搜索VO
export interface IBatchOrderWipSearchVO {
    // 批次id集
    lotOrderIds: number[];
    // 批次操作类型
    lotOpType: string;
}
// JSONResult«List«批次Wip信息返回VO»»
export interface IJSONResultListBatchWipInformationIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBatchWipInformationIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次Wip信息返回VO
export interface IBatchWipInformationIsReturnedToVO {
    // 批次id
    id: number;
    // 批次号
    lotOrderNo: string;
    // 批次名
    lotOrderName: string;
    // 批次Wip明细
    details: IBatchWipDetailsAreReturnedToVO[];
}
// 批次Wip明细返回VO
export interface IBatchWipDetailsAreReturnedToVO {
    // wip状态记录id
    wipRpId: number;
    // 对应标准工艺路径步骤id
    routingStepId: number;
    // 工艺路径步骤
    routingStep: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // WIP类型
    wipType: string;
    // WIP类型描述
    wipTypeDesc: string;
    // 任务类型
    storageProduceType: string;
    // 任务类型描述
    storageProduceTypeDesc: string;
    // 生产任务id
    produceTaskId: number;
    // 生产任务编号
    produceTaskNo: string;
    // 是否可用
    canUse: string;
    // 数量状态
    quantityStatus: string;
    // 数量状态描述
    quantityStatusDesc: string;
    // 数量
    quantity: number;
}
