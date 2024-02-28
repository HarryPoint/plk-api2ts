import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/listLotOrderFlowDetailUsingPOST
*/
export default function fetchMethod(options: { data: IBatchOrderHistorySearchVO }, extraOptions?: any) {
    return http<IJSONResultListBatchOrderDetailedInformationRespondsToDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/listLotOrderFlowDetail",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单流水搜索VO */
export interface IBatchOrderHistorySearchVO {
    /** 生产订单id */
    produceOrderId?: string;
    /** 批次订单id */
    lotOrderId?: string;
    /** 流水类型 */
    flowType?: EBatchOrderHistorySearchVO_flowType;
}
/** JSONResult«List«批次订单流水明细信息响应DTO»» */
export interface IJSONResultListBatchOrderDetailedInformationRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchOrderFlowDetailsRespondToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次订单流水明细信息响应DTO */
export interface IBatchOrderFlowDetailsRespondToDTO {
    /** id */
    id?: string;
    /** 流水类型 */
    flowType?: EBatchOrderFlowDetailsRespondToDTO_flowType;
    /** 操作时间 */
    opTime?: number;
    /** 操作员姓名 */
    opUserName?: string;
    /** 批次号 */
    lotOrderNo?: string;
    /** 操作数量 */
    opQuantity?: number;
    /** 异常类型名称 -- 针对报废、暂扣、返工 */
    produceAbnormalName?: string;
    /** 当前处理状态 -- 针对返工、报废 */
    curHandleStatus?: EBatchOrderFlowDetailsRespondToDTO_curHandleStatus;
    /** 操作单号 -- 针对委外就是委外单号 */
    opCode?: string;
}

export enum EBatchOrderHistorySearchVO_flowType {
    /** 创建 */
    CREATED = "CREATED",
    /** 下发 */
    ISSUE = "ISSUE",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 报废 */
    SCRAP = "SCRAP",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 扣留 */
    HOLD = "HOLD",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER",
    /** 切换工艺路径 */
    CHANGE_ROUTING = "CHANGE_ROUTING",
    /** 委外加工 */
    ENTRUST = "ENTRUST"
}

export enum EBatchOrderFlowDetailsRespondToDTO_flowType {
    /** 创建 */
    CREATED = "CREATED",
    /** 下发 */
    ISSUE = "ISSUE",
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 报废 */
    SCRAP = "SCRAP",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 扣留 */
    HOLD = "HOLD",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 合并 */
    MARGE = "MARGE",
    /** 拆分 */
    SPLIT = "SPLIT",
    /** 转移 */
    TRANSFER = "TRANSFER",
    /** 切换工艺路径 */
    CHANGE_ROUTING = "CHANGE_ROUTING",
    /** 委外加工 */
    ENTRUST = "ENTRUST"
}

export enum EBatchOrderFlowDetailsRespondToDTO_curHandleStatus {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}
