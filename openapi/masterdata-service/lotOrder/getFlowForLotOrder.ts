import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产批次订单相关/getFlowForLotUsingPOST
*/
export default function fetchMethod(options: { data: IBatchOrderHistorySearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO>(
        {
            url: "/masterdata-service/lotOrder/getFlowForLotOrder",
            method: "post",
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
/** JSONResult«List«批次订单流水基本信息响应DTO»» */
export interface IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchOrderFlowBasicInformationResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批次订单流水基本信息响应DTO */
export interface IBatchOrderFlowBasicInformationResponseDTO {
    /** id */
    id?: string;
    /** 流水类型 */
    flowType?: EBatchOrderFlowBasicInformationResponseDTO_flowType;
    /** 当前流水类型描述 */
    flowTypeDesc?: string;
    /** 操作时间 */
    createTime?: number;
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
