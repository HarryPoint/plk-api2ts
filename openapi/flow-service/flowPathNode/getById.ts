import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程节点相关/getByIdUsingGET_5
*/
export default function fetchMethod(params: { enterpriseId: number; id: number }, extraOptions?: any) {
    return http<IJSONResultProcessNodeDTO>(
        {
            url: "/flow-service/flowPathNode/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«流程节点DTO» */
export interface IJSONResultProcessNodeDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProcessNodeDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 流程节点DTO */
export interface IProcessNodeDTO {
    /** id */
    id: number;
    /** 所属企业id */
    enterpriseId: number;
    /** 所属流程id */
    flowPathId: number;
    /** 所属流程版本id */
    flowPathVersionId: number;
    /** 流程版本号 */
    flowPathVersionRank: number;
    /** 节点业务类型 */
    businessType: string;
    /** 节点类型 */
    type: string;
    /** 前节点id */
    previousFlowPathNodeId: number;
    /** 后节点id */
    nextFlowPathNodeId: number;
    /** 父节点id - 子节点有值 */
    parentFlowPathNodeId: number;
    /** 所属分支节点id - 子分支下的所有流程节点均属于当前子分支 */
    branchesFlowPathNodeId: number;
    /** 名称 */
    name: string;
    /** 名称 */
    code: string;
    /** 序号值 */
    serialNo: string;
    /** 审批类型 */
    approvalType: string;
    /** 是否允许回退 */
    isBack: string;
    /** 回退类型 */
    backType: string;
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId: number;
    /** 回退流程节点序列值 - 返回指定节点时有值 */
    backFlowPathNodeSerialNo: string;
    /** 是否是首节点 */
    isFirst: string;
    /** 节点级别 - 节点的深度 */
    level: number;
    /** 节点步骤 - 节点横向步骤 */
    step: number;
    /** 排序 - 节点纵向步骤 */
    sort: number;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent: string;
    /** 自定义提交按钮文案 */
    customSubmitContent: string;
    /** 是否开启超时设置 */
    enabledTimeout: string;
    /** 节点启动方式 */
    launchType: string;
    /** 执行类型 */
    executeType: string;
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent: string;
    /** 自定义接受按钮文案 */
    customAcceptContent: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton: string;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent: string;
    /** 自定义同意按钮文案 */
    customPassApprovalContent: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent: string;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton: string;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent: string;
    /** 自定义回退按钮文案 */
    customBackContent: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton: string;
    /** 审批人来自 */
    approverFrom: string;
    /** 是否启用转交 */
    enabledTransfer: string;
    /** 自定义转交按钮文案 */
    customTransferContent: string;
    /** 转交人员范围 */
    transferScopeType: string;
    /** 字段权限列表 */
    permissionList: IFlowPathNodeFormFieldPermissionsRpTreeVO[];
    /** 消息配置列表 */
    messageConfigList: ITheProcessNodeEditsTheDTO[];
    /** 超时配置 */
    timeoutConfigList: ITheProcessNodeTimeoutConfigurationReturnsVOForEditing[];
    /** 负责人集 */
    leaderUsers: IProcessNodeExecutorVO[];
    /** 抄送人集 */
    carbonCopyUsers: IProcessNodeExecutorVO[];
    /** 转交人集 */
    transferUsers: IProcessNodeExecutorVO[];
    /** 上一节点限制指定范围 */
    previousNodeAssignmentRange: string;
    /** 上个节点用户选项列表 */
    previousNodeUserOptions: IProcessNodeExecutorVO[];
    /** 是否启用接受超时 */
    isEnabledAcceptTimeout: string;
    /** 下节点信息 */
    nextNode: IProcessNodeDTO;
    /** 分支子节点 */
    branches: IProcessNodeDTO[];
    /** 条件组集 */
    condiGroups: ITheProcessNodeConditionGroupReturnsVO1ForEditing[];
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: string;
    /** 自定义流程开始按钮文案 */
    customBeginningContent: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton: string;
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout: string;
    /** 是否启用表单暂存 */
    enableFormStaging: string;
    /** 自定义表单暂存文本 */
    customFormStagingContent: string;
}
/** FlowPathNodeFormFieldPermissionsRpTreeVO */
export interface IFlowPathNodeFormFieldPermissionsRpTreeVO {
    /** undefined */
    id: number;
    /** undefined */
    flowPathId: number;
    /** undefined */
    flowPathNodeId: number;
    /** undefined */
    flowPathFormFieldId: number;
    /** 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 表单字段名称 */
    flowPathFormFieldName: string;
    /** undefined */
    flowPathFormFieldCode: string;
    /** undefined */
    flowPathFormFieldType: string;
    /** undefined */
    parentFlowPathFormFieldId: number;
    /** undefined */
    parentFlowPathFormFieldCode: string;
    /** undefined */
    isTableField: string;
    /** undefined */
    parentFlowPathNodeFormFieldPermissionsRpId: number;
    /** undefined */
    permissionsType: string;
    /** undefined */
    tableFormFieldPermissionsRp: IFlowPathNodeFormFieldPermissionsRpTreeVO[];
}
/** 流程节点编辑DTO */
export interface ITheProcessNodeEditsTheDTO {
    /** id */
    id: number;
    /** 消息触发时机 */
    triggerTiming: string;
    /** 消息配置ID列表 */
    messageConfigIdList: number[];
    /** 是否启用消息通知 */
    isEnabledMessageNotification: string;
    /** 引用的ID。比如超时配置 */
    refId: number;
}
/** 流程节点超时配置针对编辑返回VO */
export interface ITheProcessNodeTimeoutConfigurationReturnsVOForEditing {
    /** id */
    id: number;
    /** 超时的步骤类型 */
    stepType: string;
    /** 超时类型 */
    timeoutType: string;
    /** 超时值 - 超时类型为自定义时有值 */
    timeoutTimeValue: number;
    /** 超时值类型 - 超时类型为自定义时有值 */
    timeoutTimeType: string;
    /** 超时表单字段id */
    timeoutFlowPathFormFieldId: number;
    /** 超时表单字段序列值 */
    timeoutFlowPathFormFieldSerialNo: string;
    /** 预警处理方式 */
    earlyWarningHandleType: string;
    /** 预警超时前发送通知 超时值 */
    earlyWarningTimeValue: number;
    /** 预警超时前发送通知 超时值类型 */
    earlyWarningTimeType: string;
    /** 预警提醒人集 */
    earlyWarningUsers: IProcessNodeExecutorVO[];
    /** 预警提醒方式 */
    earlyWarningSendType: string;
    /** 超时处理方式 */
    timeoutHandleType: string;
    /** 超时后通知类型 */
    timeoutAfterSendType: string;
    /** 超时提醒人集 */
    timeoutUsers: IProcessNodeExecutorVO[];
    /** 超时通知方式 */
    timeoutSendType: string;
    /** 消息配置列表 */
    messageConfigList: ITheProcessNodeEditsTheDTO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 执行人id */
    executorId: number;
    /** 执行人类型 */
    executorType: string;
    /** 执行人系统控件类型 */
    executorSysType: string;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo: string;
    /** flowPathId */
    flowPathId: number;
    /** 节点ID */
    flowPathNodeId: number;
}
/** 流程节点条件组针对编辑返回VO_1 */
export interface ITheProcessNodeConditionGroupReturnsVO1ForEditing {
    /** id */
    id: number;
    /** 条件集 */
    conditions: IFlowPathNodeCondiVO[];
}
/** FlowPathNodeCondiVO */
export interface IFlowPathNodeCondiVO {
    /** undefined */
    id: number;
    /** undefined */
    type: string;
    /** undefined */
    defaultCondi: string;
    /** undefined */
    flowPathFormFieldId: number;
    /** undefined */
    flowPathFormFieldCode: string;
    /** undefined */
    flowPathFormFieldSerialNo: string;
    /** undefined */
    flowPathFormFieldType: string;
    /** undefined */
    compareMode: string;
    /** undefined */
    compareTargetFromSource: string;
    /** undefined */
    targetFieldId: number;
    /** undefined */
    targetFieldSerialNo: string;
    /** undefined */
    targetFieldCode: string;
    /** undefined */
    compareValue: string;
    /** undefined */
    selectCompareValue: string[];
    /** undefined */
    dateDynamicRange: string;
    /** undefined */
    frontendMeta: string;
}
