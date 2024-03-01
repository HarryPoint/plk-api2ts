import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getQualityLotUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListWipBatchInformationVO>(
        {
            url: "/masterdata-service/produceTask/getQualityLot",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Wip批次信息VO»» */
export interface IJSONResultListWipBatchInformationVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IWipBatchInformationVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Wip批次信息VO */
export interface IWipBatchInformationVO {
    /** 可委外数量 */
    canEntrustQuantity?: number;
    /** 可操作数量 */
    canOptQuantity?: number;
    /** 批次id */
    id?: string;
    /** 批次名称 */
    lotName?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次原始数量 */
    totalCount?: number;
    /** wip状态信息集 */
    wips?: IWipQuantityStatusVO[];
    /** wip库存创建时间 - 进料批次的的首次来料时间 */
    wmRpCreateTime?: number;
}
/** Wip数量状态信息VO */
export interface IWipQuantityStatusVO {
    /** 可委外数量 */
    canEntrustQuantity?: number;
    /** 可操作数量 */
    canOptQuantity?: number;
    /** 是否可用 */
    canUse?: EWipQuantityStatusVO_canUse;
    /** 是否锁定 */
    isLock?: EWipQuantityStatusVO_isLock;
    /** 数量 */
    quantity?: number;
    /** wip数量状态 */
    quantityStatus?: EWipQuantityStatusVO_quantityStatus;
    /** wip数量状态描述 */
    quantityStatusDesc?: string;
    /** wip状态记录id */
    wipRpId?: string;
    /** wip库存创建时间 - 进料批次的的首次来料时间 */
    wmRpCreateTime?: number;
}

export enum EWipQuantityStatusVO_canUse {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWipQuantityStatusVO_isLock {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWipQuantityStatusVO_quantityStatus {
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
