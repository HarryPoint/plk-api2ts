import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/流程任务相关/getFlowPathTaskDetailUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
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
    ts?: number;
}
/** 流程任务明细返回VO */
export interface IProcessTaskDetailsAreReturnedToVO {
    /** id */
    id?: number;
    /** 任务类型 */
    type?: string;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 任务号 */
    taskNo?: string;
    /** 所属流程工单id */
    flowPathWorkOrderId?: number;
    /** 所属流程工单号 */
    flowPathWorkOrderCode?: string;
    /** 流程工单发起人id */
    workOrderCreateUserId?: number;
    /** 工单发起部门id */
    workOrderCreateCombinationId?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程名称(计划名称) */
    flowPathName?: string;
    /** 流程编号 */
    flowPathCode?: string;
    /** 所属流程节点id */
    flowPathNodeId?: number;
    /** 所属流程节点名称 */
    flowPathNodeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 实际开始时间 */
    actualBeginTime?: string;
    /** 执行人id */
    handleUserId?: number;
    /** 处理时间 - 状态为已处理、已关闭时有值 */
    handleTime?: string;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 执行人id */
    executorId?: number;
    /** 超时开始时间 */
    timeoutBeginTime?: string;
    /** 任务接受状态 */
    acceptStatus?: string;
    /** 开始状态 */
    beginningStatus?: string;
    /** 开始时间 */
    beginningTime?: string;
    /** 单据创建人名称 */
    workOrderCreateUsername?: string;
    /** 任务状态 */
    modelTaskStatus?: string;
    /** 任务状态描述 */
    modelTaskStatusDesc?: string;
    /** 自定义字段 */
    customValues?: IWorkOrderDetailsReturnInformationVO[];
    /** 创建部门 */
    createDeptName?: string;
    /** 工单信息 */
    workOrder?: IProcessTicketPreviewInformationIsReturnedToVO;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: string;
    /** 是否允许回退 */
    isBack?: string;
    /** 回退类型 */
    backType?: string;
    /** 审批回退节点选择集 */
    backFlowPathNodeSelector?: IIdNameNumberVO[];
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: string;
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: string;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent: string;
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent: string;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: string;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent: string;
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: string;
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
    id?: number;
    /** 工单号 */
    workOrderCode?: string;
    /** 提交用户id */
    createUserId?: number;
    /** 提交人姓名 */
    createUsername?: string;
    /** 提交人部门id */
    createDeptId?: number;
    /** 提交人部门名称 */
    createDeptName?: string;
    /** 提交时间 */
    createTime?: string;
    /** 状态 */
    status?: string;
    /** 状态描述 */
    statusDesc?: string;
    /** 关闭类型 */
    closeType?: string;
    /** 关闭类型描述 */
    closeTypeDesc?: string;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 当前节点id */
    currentFlowPathNodeId?: number;
    /** 业务数据id */
    businessId?: number;
    /** 业务数据code */
    businessCode?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
