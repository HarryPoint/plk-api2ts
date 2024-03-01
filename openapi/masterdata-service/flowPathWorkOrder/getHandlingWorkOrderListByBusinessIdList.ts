import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/流程工单相关/getHandlingWorkOrderListByBusinessIdListUsingGET
*/
export default function fetchMethod(options: { data: IHandlingWorkOrderQueryRequest, params: { EnterpriseId?: string } }, extraOptions?: any) {
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
    /** 业务数据ID列表 */
    businessIdList?: string[];
    /** 应用ID */
    flowPathId?: string;
}
/** JSONResult«List«流程工单VO»» */
export interface IJSONResultListProcessWorkorderVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessWorkOrderVO1[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程工单VO_1 */
export interface IProcessWorkOrderVO1 {
    /** undefined */
    businessCode?: string;
    /** undefined */
    businessId?: string;
    /** undefined */
    code?: string;
    /** undefined */
    completeTime?: number;
    /** undefined */
    currentFlowPathNodeId?: string;
    /** undefined */
    currentTotalTaskCount?: string;
    /** undefined */
    currentTotalTimeoutTaskCount?: string;
    /** undefined */
    enterpriseId?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathVersionId?: string;
    /** undefined */
    flowPathVersionRank?: number;
    /** undefined */
    id?: string;
    /** undefined */
    planBeginTime?: number;
    /** undefined */
    processStatus?: string;
    /** undefined */
    status?: EProcessWorkOrderVO1_status;
    /** undefined */
    totalTime?: string;
    /** undefined */
    totalTimeoutTime?: string;
}

export enum EProcessWorkOrderVO1_status {
    HANDLING = "HANDLING",
    COMPLETE = "COMPLETE",
    NOT_PASS = "NOT_PASS",
    STAGING = "STAGING",
    INVALID = "INVALID"
}
