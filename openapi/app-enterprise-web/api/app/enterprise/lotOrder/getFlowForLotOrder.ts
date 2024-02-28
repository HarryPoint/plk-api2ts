import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产批次订单相关/getFlowForLotUsingGET
*/
export default function fetchMethod(options: { params: { flowType?: EflowType; lotOrderId?: string; produceOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/getFlowForLotOrder",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
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

export enum EflowType {
    CREATED = "CREATED",
    ISSUE = "ISSUE",
    MOVE_IN = "MOVE_IN",
    MOVE_OUT = "MOVE_OUT",
    SCRAP = "SCRAP",
    HOLD_PAUSE = "HOLD_PAUSE",
    HOLD = "HOLD",
    RELEASE = "RELEASE",
    BACK = "BACK",
    MARGE = "MARGE",
    SPLIT = "SPLIT",
    TRANSFER = "TRANSFER",
    CHANGE_ROUTING = "CHANGE_ROUTING",
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
