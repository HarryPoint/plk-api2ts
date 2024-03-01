import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/流程工单相关/batchGetWorkOrderListByBusinessIdUsingGET
*/
export default function fetchMethod(options: { params: { BusinessId?: string; EnterpriseId?: string; FlowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessWorkOrderVO1>(
        {
            url: "/masterdata-service/flowPathWorkOrder/batchGetWorkOrderListByBusinessId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程工单VO»»_1 */
export interface IJSONResultListProcessWorkOrderVO1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessWorkOrderVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程工单VO */
export interface IProcessWorkOrderVO {
    /** 所属数据code */
    businessCode?: string;
    /** 业务数据id */
    businessId?: string;
    /** 完成时间 */
    completeTime?: number;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 当前所在节点id */
    currentFlowPathNodeId?: string;
    /** 当前总任务数量 - 即当前流转的任务总量 */
    currentTotalTaskCount?: string;
    /** 当前总超时任务数量 */
    currentTotalTimeoutTaskCount?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** id */
    id?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 状态 */
    status?: EProcessWorkOrderVO_status;
    /** 总耗时秒 */
    totalTime?: string;
    /** 总超时秒 */
    totalTimeoutTime?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 修改账户id */
    updateUserId?: string;
    /** 工单号 */
    workOrderCode?: string;
}

export enum EProcessWorkOrderVO_status {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}
