import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/流程工单相关/getHandlingWorkOrderListByBusinessIdListUsingGET
*/
export default function fetchMethod(options: { data: IHandlingWorkOrderQueryRequest, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessWorkorderVO>(
        {
            url: "/masterdata-service/flowPathWorkOrder/getHandlingWorkOrderListByBusinessIdList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** HandlingWorkOrderQueryRequest */
export interface IHandlingWorkOrderQueryRequest {
    /** 应用ID */
    flowPathId?: string;
    /** 业务数据ID列表 */
    businessIdList?: string[];
}
/** JSONResult«List«流程工单VO»» */
export interface IJSONResultListProcessWorkorderVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessWorkOrderVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程工单VO_1 */
export interface IProcessWorkOrderVO1 {
    /** undefined */
    id?: string;
    /** undefined */
    enterpriseId?: string;
    /** undefined */
    code?: string;
    /** undefined */
    businessId?: string;
    /** undefined */
    businessCode?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathVersionId?: string;
    /** undefined */
    flowPathVersionRank?: number;
    /** undefined */
    currentFlowPathNodeId?: string;
    /** undefined */
    planBeginTime?: number;
    /** undefined */
    status?: EProcessWorkOrderVO1_status;
    /** undefined */
    processStatus?: string;
    /** undefined */
    completeTime?: number;
    /** undefined */
    totalTime?: string;
    /** undefined */
    totalTimeoutTime?: string;
    /** undefined */
    currentTotalTaskCount?: string;
    /** undefined */
    currentTotalTimeoutTaskCount?: string;
}

export enum EProcessWorkOrderVO1_status {
    HANDLING = "HANDLING",
    COMPLETE = "COMPLETE",
    NOT_PASS = "NOT_PASS",
    STAGING = "STAGING",
    INVALID = "INVALID"
}
