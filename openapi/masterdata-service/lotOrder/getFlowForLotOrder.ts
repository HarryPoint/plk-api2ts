import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/getFlowForLotUsingPOST
*/
export default function fetchMethod(options: { data: IBatchOrderHistorySearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO>(
        {
            url: "/masterdata-service/lotOrder/getFlowForLotOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单流水搜索VO */
export interface IBatchOrderHistorySearchVO {
    /** 流水类型 */
    flowType?: EBatchOrderHistorySearchVO_flowType;
    /** 批次订单id */
    lotOrderId?: string;
    /** 生产订单id */
    produceOrderId?: string;
}
/** JSONResult«List«批次订单流水基本信息响应DTO»» */
export interface IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBatchOrderFlowBasicInformationResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次订单流水基本信息响应DTO */
export interface IBatchOrderFlowBasicInformationResponseDTO {
    /** 操作时间 */
    createTime?: number;
    /** 流水类型 */
    flowType?: EBatchOrderFlowBasicInformationResponseDTO_flowType;
    /** 当前流水类型描述 */
    flowTypeDesc?: string;
    /** id */
    id?: string;
    /** 描述 */
    remark?: string;
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

export enum EBatchOrderFlowBasicInformationResponseDTO_flowType {
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
