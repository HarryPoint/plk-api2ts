import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16500/doc.html#/default/流程节点相关/getByIdsUsingPOST_1
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProcessNodeVO>(
        {
            url: "/flow-service/flowPathNode/getByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程节点VO»» */
export interface IJSONResultListProcessNodeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessNodeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程节点VO */
export interface IProcessNodeVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 节点业务类型 */
    businessType?: EProcessNodeVO_businessType;
    /** 节点类型 */
    type?: EProcessNodeVO_type;
    /** 前节点id */
    previousFlowPathNodeId?: string;
    /** 后节点id */
    nextFlowPathNodeId?: string;
    /** 父节点id - 子节点有值 */
    parentFlowPathNodeId?: string;
    /** 所属分支节点id - 子分支下的所有流程节点均属于当前子分支 */
    branchesFlowPathNodeId?: string;
    /** 名称 */
    name?: string;
    /** 名称 */
    code?: string;
    /** 序号值 */
    serialNo?: string;
    /** 审批类型 */
    approvalType?: EProcessNodeVO_approvalType;
    /** 是否允许回退 */
    isBack?: EProcessNodeVO_isBack;
    /** 回退类型 */
    backType?: EProcessNodeVO_backType;
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: string;
    /** 是否是首节点 */
    isFirst?: EProcessNodeVO_isFirst;
    /** 节点级别 - 节点的深度 */
    level?: number;
    /** 节点步骤 - 节点横向步骤 */
    step?: number;
    /** 排序 - 节点纵向步骤 */
    sort?: number;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: EProcessNodeVO_isCustomSubmitContent;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout?: EProcessNodeVO_enabledTimeout;
    /** 节点启动方式 */
    launchType?: EProcessNodeVO_launchType;
    /** 执行类型 */
    executeType?: EProcessNodeVO_executeType;
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: EProcessNodeVO_isCustomAcceptContent;
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: EProcessNodeVO_isShowAcceptButton;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent?: EProcessNodeVO_isCustomPassApprovalContent;
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent?: EProcessNodeVO_isCustomRefuseApprovalContent;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: EProcessNodeVO_isShowRefuseButton;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent?: EProcessNodeVO_isCustomBackContent;
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: EProcessNodeVO_isShowBackButton;
    /** 审批人来自 */
    approverFrom?: EProcessNodeVO_approverFrom;
    /** 是否启用转交 */
    enabledTransfer?: EProcessNodeVO_enabledTransfer;
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: EProcessNodeVO_transferScopeType;
    /** 是否启用表单暂存 */
    enableFormStaging?: EProcessNodeVO_enableFormStaging;
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: EProcessNodeVO_isCustomBeginningContent;
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: EProcessNodeVO_isShowBeginningButton;
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: EProcessNodeVO_isEnabledBeginningTimeout;
}

export enum EProcessNodeVO_businessType {
    /** 执行 */
    EXEC = "EXEC",
    /** 条件 */
    CONDI = "CONDI"
}

export enum EProcessNodeVO_type {
    /** 执行节点 */
    EXECUTE = "EXECUTE",
    /** 审批节点 */
    APPROVAL = "APPROVAL",
    /** 分支节点 */
    BRANCHES = "BRANCHES",
    /** 子分支节点 */
    CHILD = "CHILD"
}

export enum EProcessNodeVO_approvalType {
    /** 一位负责人通过或者拒绝即可 */
    ONE = "ONE",
    /** 需所有负责人通过，任意一位拒绝将无法通过 */
    ALL = "ALL"
}

export enum EProcessNodeVO_isBack {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_backType {
    /** 之前所有节点 */
    ANY = "ANY",
    /** 返回上一节点 */
    PREVIOUS = "PREVIOUS",
    /** 返回指定节点 */
    APPOINT = "APPOINT"
}

export enum EProcessNodeVO_isFirst {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isCustomSubmitContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_enabledTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_launchType {
    /** 手动 */
    MANUAL_OPERATION = "MANUAL_OPERATION",
    /** 自动 */
    AUTOMATIC = "AUTOMATIC"
}

export enum EProcessNodeVO_executeType {
    /** 只需一位执行人提交流程 */
    ONE = "ONE",
    /** 需所有执行人提交流程 */
    ALL = "ALL"
}

export enum EProcessNodeVO_isCustomAcceptContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isShowAcceptButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isCustomPassApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isCustomRefuseApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isShowRefuseButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isCustomBackContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isShowBackButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_approverFrom {
    /** 当前节点指定 */
    CURRENT_NODE_ASSIGNMENT = "CURRENT_NODE_ASSIGNMENT",
    /** 上一个节点指定 */
    PREVIOUS_NODE_ASSIGNMENT = "PREVIOUS_NODE_ASSIGNMENT"
}

export enum EProcessNodeVO_enabledTransfer {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_transferScopeType {
    /** 指定范围 */
    CLASSIFIED = "CLASSIFIED",
    /** 不限范围 */
    ALL = "ALL"
}

export enum EProcessNodeVO_enableFormStaging {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isCustomBeginningContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isShowBeginningButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeVO_isEnabledBeginningTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
