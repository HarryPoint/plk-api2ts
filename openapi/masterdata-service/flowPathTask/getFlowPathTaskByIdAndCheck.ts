import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/流程任务相关/getFlowPathTaskByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessTaskReturnsVO>(
        {
            url: "/masterdata-service/flowPathTask/getFlowPathTaskByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程任务返回VO» */
export interface IJSONResultProcessTaskReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProcessTaskReturnsToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程任务返回VO */
export interface ITheProcessTaskReturnsToVO {
    /** 接受状态 */
    acceptStatus?: ETheProcessTaskReturnsToVO_acceptStatus;
    /** 任务接受时间 */
    acceptTime?: number;
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 审批状态 */
    approvalStatus?: ETheProcessTaskReturnsToVO_approvalStatus;
    /** 所属企业id */
    enterpriseId?: string;
    /** 执行状态 */
    executeStatus?: ETheProcessTaskReturnsToVO_executeStatus;
    /** 所属流程id */
    flowPathId?: string;
    /** 流程节点id */
    flowPathNodeId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 所属流程工单编号 */
    flowPathWorkOrderCode?: string;
    /** 所属流程工单id */
    flowPathWorkOrderId?: string;
    /** 处理时间 - 状态为已处理、已关闭时有值 */
    handleTime?: number;
    /** 执行人id */
    handleUserId?: string;
    /** id */
    id?: string;
    /** 审批意见/执行情况 */
    notes?: string;
    /** 状态 */
    status?: ETheProcessTaskReturnsToVO_status;
    /** 任务号 */
    taskNo?: string;
    /** 超时开始时间 */
    timeoutBeginTime?: number;
    /** 总耗时秒 */
    totalTime?: string;
    /** 总超时秒 */
    totalTimeoutTime?: string;
    /** 任务类型 */
    type?: ETheProcessTaskReturnsToVO_type;
    /** 工单发起部门id */
    workOrderCreateCombinationId?: string;
    /** 流程工单发起人id */
    workOrderCreateUserId?: string;
}

export enum ETheProcessTaskReturnsToVO_acceptStatus {
    /** 已接受 */
    ACCEPTED = "ACCEPTED",
    /** 待接受 */
    WAIT_ACCEPT = "WAIT_ACCEPT"
}

export enum ETheProcessTaskReturnsToVO_approvalStatus {
    /** 同意 */
    PASS = "PASS",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 回退 */
    BACK = "BACK"
}

export enum ETheProcessTaskReturnsToVO_executeStatus {
    /** 正常执行 */
    HANDLE = "HANDLE",
    /** 回退 */
    BACK = "BACK"
}

export enum ETheProcessTaskReturnsToVO_status {
    /** 待处理 */
    WAIT = "WAIT",
    /** 已处理 */
    HANDLED = "HANDLED",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum ETheProcessTaskReturnsToVO_type {
    /** 执行任务 */
    EXECUTE = "EXECUTE",
    /** 审批任务 */
    APPROVAL = "APPROVAL"
}
