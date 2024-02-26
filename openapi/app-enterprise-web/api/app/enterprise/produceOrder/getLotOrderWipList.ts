import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/getLotOrderWipListUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchOrderWipSearchVO }, extraOptions?: any) {
    return http<IJSONResultListBatchWipInformationIsReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getLotOrderWipList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单Wip搜索VO */
export interface IBatchOrderWipSearchVO {
    /** 批次id集 */
    lotOrderIds?: number[];
    /** 批次操作类型 */
    lotOpType?: ('SCRAP' | 'MARGE' | 'SPLIT' | 'TRANSFER');
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
    ts?: number;
}
/** 批次Wip信息返回VO */
export interface IBatchWipInformationIsReturnedToVO {
    /** 批次id */
    id?: number;
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
    wipRpId?: number;
    /** 对应标准工艺路径步骤id */
    routingStepId?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** WIP类型 */
    wipType?: ('BEFORE' | 'IN');
    /** WIP类型描述 */
    wipTypeDesc?: string;
    /** 任务类型 */
    storageProduceType?: ('PRODUCE' | 'BACK');
    /** 任务类型描述 */
    storageProduceTypeDesc?: string;
    /** 生产任务id */
    produceTaskId?: number;
    /** 生产任务编号 */
    produceTaskNo?: string;
    /** 是否可用 */
    canUse?: ('Y' | 'N');
    /** 数量状态 */
    quantityStatus?: ('NORMAL' | 'WAIT_INSPECTION' | 'INSPECTION_PASS' | 'INSPECTION_CONCESSION' | 'INSPECTION_NOT_PASS' | 'APPLY_BACK' | 'APPLY_SCRAP' | 'HOLD' | 'ENTRUST_BACK');
    /** 数量状态描述 */
    quantityStatusDesc?: string;
    /** 数量 */
    quantity?: number;
}
