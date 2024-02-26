import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/流程任务相关/getFlowPathTaskByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
    return http<IJSONResultProcessTaskReturnsVO>(
        {
            url: "/masterdata-service/flowPathTask/getFlowPathTaskByIdAndCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程任务返回VO» */
export interface IJSONResultProcessTaskReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessTaskReturnsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程任务返回VO */
export interface ITheProcessTaskReturnsToVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 任务类型 */
    type?: ('EXECUTE' | 'APPROVAL');
    /** 任务号 */
    taskNo?: string;
    /** 所属流程工单id */
    flowPathWorkOrderId?: number;
    /** 所属流程工单编号 */
    flowPathWorkOrderCode?: string;
    /** 流程工单发起人id */
    workOrderCreateUserId?: number;
    /** 工单发起部门id */
    workOrderCreateCombinationId?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 流程节点id */
    flowPathNodeId?: number;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 执行人id */
    handleUserId?: number;
    /** 处理时间 - 状态为已处理、已关闭时有值 */
    handleTime?: string;
    /** 总耗时秒 */
    totalTime?: number;
    /** 超时开始时间 */
    timeoutBeginTime?: string;
    /** 总超时秒 */
    totalTimeoutTime?: number;
    /** 状态 */
    status?: ('WAIT' | 'HANDLED' | 'CLOSE');
    /** 审批状态 */
    approvalStatus?: ('PASS' | 'REFUSE' | 'BACK');
    /** 执行状态 */
    executeStatus?: ('HANDLE' | 'BACK');
    /** 接受状态 */
    acceptStatus?: ('ACCEPTED' | 'WAIT_ACCEPT');
    /** 审批意见/执行情况 */
    notes?: string;
    /** 任务接受时间 */
    acceptTime?: string;
}
