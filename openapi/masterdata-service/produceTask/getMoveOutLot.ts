import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getMoveOutLotUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListwipRespondsToDtoForIncomingAndOutgoingMaterials>(
        {
            url: "/masterdata-service/produceTask/getMoveOutLot",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«wip可进出料响应dto»» */
export interface IJSONResultListwipRespondsToDtoForIncomingAndOutgoingMaterials {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IWipCanRespondToDto[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** wip可进出料响应dto */
export interface IWipCanRespondToDto {
    /** 批次id -- 有批次时有值 */
    lotOrderId?: string;
    /** 批次名称  -- 有批次时有值 */
    lotName?: string;
    /** 批次号  -- 有批次时有值 */
    lotNo?: string;
    /** 原始数量 -- 有批次时为批次原始数量，无批次时为任务计划量 */
    totalQuantity?: number;
    /** wip库存创建时间 - 进料批次的的首次来料时间 */
    wmRpCreateTime?: number;
    /** 可委外数量 */
    canEntrustQuantity?: number;
    /** 可操作数量 */
    canOptQuantity?: number;
    /** wip状态信息集 */
    wipQuantityStatusList?: IWipQuantityStatusInformationResponseObject[];
}
/** Wip数量状态信息响应对象 */
export interface IWipQuantityStatusInformationResponseObject {
    /** wip状态记录id */
    wipRpId?: string;
    /** 数量 */
    quantity?: number;
    /** wip数量状态 */
    quantityStatus?: EWipQuantityStatusInformationResponseObject_quantityStatus;
    /** wip数量状态描述 */
    quantityStatusDesc?: string;
    /** 是否可用 */
    canUse?: EWipQuantityStatusInformationResponseObject_canUse;
    /** wip库存创建时间 - 进料批次的的首次来料时间 */
    wmRpCreateTime?: number;
    /** 可委外数量 */
    canEntrustQuantity?: number;
    /** 可操作数量 */
    canOptQuantity?: number;
    /** 是否锁定 */
    isLock?: EWipQuantityStatusInformationResponseObject_isLock;
}

export enum EWipQuantityStatusInformationResponseObject_quantityStatus {
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

export enum EWipQuantityStatusInformationResponseObject_canUse {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWipQuantityStatusInformationResponseObject_isLock {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
