import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/getLotOrderWipListUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchOrderWipSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBatchWipInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/produceOrder/getLotOrderWipList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单Wip搜索VO */
export interface IBatchOrderWipSearchVO {
    /** 批次id集 */
    lotOrderIds?: string[];
    /** 批次操作类型 */
    lotOpType?: EBatchOrderWipSearchVO_lotOpType;
}
/** JSONResult«List«批次Wip信息返回VO»» */
export interface IJSONResultListBatchWipInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchWipInformationIsReturnedToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次Wip信息返回VO */
export interface IBatchWipInformationIsReturnedToVO {
    /** 批次id */
    id?: string;
    /** 批次号 */
    lotOrderNo?: string;
    /** 批次名 */
    lotOrderName?: string;
    /** 批次Wip明细 */
    details?: IBatchWipDetailsAreReturnedToVO[];
}
/** 批次Wip明细返回VO */
export interface IBatchWipDetailsAreReturnedToVO {
    /** wip状态记录id */
    wipRpId?: string;
    /** 对应标准工艺路径步骤id */
    routingStepId?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** WIP类型 */
    wipType?: EBatchWipDetailsAreReturnedToVO_wipType;
    /** WIP类型描述 */
    wipTypeDesc?: string;
    /** 任务类型 */
    storageProduceType?: EBatchWipDetailsAreReturnedToVO_storageProduceType;
    /** 任务类型描述 */
    storageProduceTypeDesc?: string;
    /** 生产任务id */
    produceTaskId?: string;
    /** 生产任务编号 */
    produceTaskNo?: string;
    /** 是否可用 */
    canUse?: EBatchWipDetailsAreReturnedToVO_canUse;
    /** 数量状态 */
    quantityStatus?: EBatchWipDetailsAreReturnedToVO_quantityStatus;
    /** 数量状态描述 */
    quantityStatusDesc?: string;
    /** 数量 */
    quantity?: number;
}

export enum EBatchOrderWipSearchVO_lotOpType {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER"
}

export enum EBatchWipDetailsAreReturnedToVO_wipType {
    /** 在制前 */
    BEFORE = "BEFORE",
    /** 在制中 */
    IN = "IN"
}

export enum EBatchWipDetailsAreReturnedToVO_storageProduceType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 返工 */
    BACK = "BACK"
}

export enum EBatchWipDetailsAreReturnedToVO_canUse {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EBatchWipDetailsAreReturnedToVO_quantityStatus {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 等待质检 */
    WAIT_INSPECTION = "WAIT_INSPECTION",
    /** 质检合格 */
    INSPECTION_PASS = "INSPECTION_PASS",
    /** 质检让步接收 */
    INSPECTION_CONCESSION = "INSPECTION_CONCESSION",
    /** 质检不合格 */
    INSPECTION_NOT_PASS = "INSPECTION_NOT_PASS",
    /** 等待返工审批 */
    APPLY_BACK = "APPLY_BACK",
    /** 等待报废审批 */
    APPLY_SCRAP = "APPLY_SCRAP",
    /** 等待扣留审批 */
    HOLD = "HOLD",
    /** 委外返回 */
    ENTRUST_BACK = "ENTRUST_BACK"
}
