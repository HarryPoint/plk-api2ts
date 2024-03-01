import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/流程工单相关/getPreviewInfoByIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessOrderPreviewInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/flowPathWorkOrder/getPreviewInfoById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程工单预览信息返回VO» */
export interface IJSONResultProcessOrderPreviewInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessTicketPreviewInformationIsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程工单预览信息返回VO */
export interface IProcessTicketPreviewInformationIsReturnedToVO {
    /** 业务数据code */
    businessCode?: string;
    /** 业务数据id */
    businessId?: string;
    /** 关闭类型 */
    closeType?: EProcessTicketPreviewInformationIsReturnedToVO_closeType;
    /** 关闭类型描述 */
    closeTypeDesc?: string;
    /** 提交人部门id */
    createDeptId?: string;
    /** 提交人部门名称 */
    createDeptName?: string;
    /** 提交时间 */
    createTime?: number;
    /** 提交用户id */
    createUserId?: string;
    /** 提交人姓名 */
    createUsername?: string;
    /** 当前节点id */
    currentFlowPathNodeId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** id */
    id?: string;
    /** 状态 */
    status?: EProcessTicketPreviewInformationIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 工单号 */
    workOrderCode?: string;
}

export enum EProcessTicketPreviewInformationIsReturnedToVO_closeType {
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已拒绝 */
    REFUSE = "REFUSE"
}

export enum EProcessTicketPreviewInformationIsReturnedToVO_status {
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
