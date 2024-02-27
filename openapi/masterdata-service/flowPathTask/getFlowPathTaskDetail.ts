import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/流程任务相关/getFlowPathTaskDetailUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessTaskDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/flowPathTask/getFlowPathTaskDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程任务明细返回VO» */
export interface IJSONResultProcessTaskDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessTaskDetailsAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程任务明细返回VO */
export interface IProcessTaskDetailsAreReturnedToVO {
    /** id */
    id?: string;
    /** 任务类型 */
    type?: EProcessTaskDetailsAreReturnedToVO_type;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 任务号 */
    taskNo?: string;
    /** 所属流程工单id */
    flowPathWorkOrderId?: string;
    /** 所属流程工单号 */
    flowPathWorkOrderCode?: string;
    /** 流程工单发起人id */
    workOrderCreateUserId?: string;
    /** 工单发起部门id */
    workOrderCreateCombinationId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程名称(计划名称) */
    flowPathName?: string;
    /** 流程编号 */
    flowPathCode?: string;
    /** 所属流程节点id */
    flowPathNodeId?: string;
    /** 所属流程节点名称 */
    flowPathNodeName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 实际开始时间 */
    actualBeginTime?: number;
    /** 执行人id */
    handleUserId?: string;
    /** 处理时间 - 状态为已处理、已关闭时有值 */
    handleTime?: number;
    /** 状态 */
    status?: EProcessTaskDetailsAreReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 执行人id */
    executorId?: string;
    /** 超时开始时间 */
    timeoutBeginTime?: number;
    /** 任务接受状态 */
    acceptStatus?: EProcessTaskDetailsAreReturnedToVO_acceptStatus;
    /** 开始状态 */
    beginningStatus?: EProcessTaskDetailsAreReturnedToVO_beginningStatus;
    /** 开始时间 */
    beginningTime?: number;
    /** 单据创建人名称 */
    workOrderCreateUsername?: string;
    /** 任务状态 */
    modelTaskStatus?: EProcessTaskDetailsAreReturnedToVO_modelTaskStatus;
    /** 任务状态描述 */
    modelTaskStatusDesc?: string;
    /** 自定义字段 */
    customValues?: IWorkOrderDetailsReturnInformationVO[];
    /** 创建部门 */
    createDeptName?: string;
    /** 工单信息 */
    workOrder?: IProcessTicketPreviewInformationIsReturnedToVO;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: EProcessTaskDetailsAreReturnedToVO_isCustomSubmitContent;
    /** 是否允许回退 */
    isBack?: EProcessTaskDetailsAreReturnedToVO_isBack;
    /** 回退类型 */
    backType?: EProcessTaskDetailsAreReturnedToVO_backType;
    /** 审批回退节点选择集 */
    backFlowPathNodeSelector?: IIdNameNumberVO[];
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: EProcessTaskDetailsAreReturnedToVO_isCustomAcceptContent;
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: EProcessTaskDetailsAreReturnedToVO_isShowAcceptButton;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent: EProcessTaskDetailsAreReturnedToVO_isCustomPassApprovalContent;
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent: EProcessTaskDetailsAreReturnedToVO_isCustomRefuseApprovalContent;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: EProcessTaskDetailsAreReturnedToVO_isShowRefuseButton;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent: EProcessTaskDetailsAreReturnedToVO_isCustomBackContent;
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: EProcessTaskDetailsAreReturnedToVO_isShowBackButton;
    /** 审批意见/执行情况 */
    notes?: string;
}
/** 工单明细数据返回信息VO */
export interface IWorkOrderDetailsReturnInformationVO {
    /** 列code */
    code?: string;
    /** 列值 */
    value?: Record<string, any>;
}
/** 流程工单预览信息返回VO */
export interface IProcessTicketPreviewInformationIsReturnedToVO {
    /** id */
    id?: string;
    /** 工单号 */
    workOrderCode?: string;
    /** 提交用户id */
    createUserId?: string;
    /** 提交人姓名 */
    createUsername?: string;
    /** 提交人部门id */
    createDeptId?: string;
    /** 提交人部门名称 */
    createDeptName?: string;
    /** 提交时间 */
    createTime?: number;
    /** 状态 */
    status?: EProcessTicketPreviewInformationIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 关闭类型 */
    closeType?: EProcessTicketPreviewInformationIsReturnedToVO_closeType;
    /** 关闭类型描述 */
    closeTypeDesc?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 当前节点id */
    currentFlowPathNodeId?: string;
    /** 业务数据id */
    businessId?: string;
    /** 业务数据code */
    businessCode?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}

export enum EProcessTaskDetailsAreReturnedToVO_type {
    /** 执行任务 */
    EXECUTE = "EXECUTE",
    /** 审批任务 */
    APPROVAL = "APPROVAL"
}

export enum EProcessTaskDetailsAreReturnedToVO_status {
    /** 待处理 */
    WAIT = "WAIT",
    /** 已处理 */
    HANDLED = "HANDLED",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EProcessTaskDetailsAreReturnedToVO_acceptStatus {
    /** 已接受 */
    ACCEPTED = "ACCEPTED",
    /** 待接受 */
    WAIT_ACCEPT = "WAIT_ACCEPT"
}

export enum EProcessTaskDetailsAreReturnedToVO_beginningStatus {
    /** 未开始 */
    NOT_BEGUN = "NOT_BEGUN",
    /** 已开始 */
    BEGUN = "BEGUN"
}

export enum EProcessTaskDetailsAreReturnedToVO_modelTaskStatus {
    /** 待接受 */
    WAIT_ACCEPT = "WAIT_ACCEPT",
    /** 待处理 */
    WAIT_HANDLE = "WAIT_HANDLE",
    /** 待审批 */
    WAIT_APPROVE = "WAIT_APPROVE",
    /** 已超时 */
    TIMEOUT = "TIMEOUT",
    /** 已处理 */
    HANDLED = "HANDLED"
}

export enum EProcessTaskDetailsAreReturnedToVO_isCustomSubmitContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isBack {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_backType {
    /** 之前所有节点 */
    ANY = "ANY",
    /** 返回上一节点 */
    PREVIOUS = "PREVIOUS",
    /** 返回指定节点 */
    APPOINT = "APPOINT"
}

export enum EProcessTaskDetailsAreReturnedToVO_isCustomAcceptContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isShowAcceptButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isCustomPassApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isCustomRefuseApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isShowRefuseButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isCustomBackContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessTaskDetailsAreReturnedToVO_isShowBackButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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

export enum EProcessTicketPreviewInformationIsReturnedToVO_closeType {
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已拒绝 */
    REFUSE = "REFUSE"
}
