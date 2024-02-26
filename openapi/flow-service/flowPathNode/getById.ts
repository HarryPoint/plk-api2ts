import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程节点相关/getByIdUsingGET_5
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
    return http<IJSONResultProcessNodeDTO>(
        {
            url: "/flow-service/flowPathNode/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程节点DTO» */
export interface IJSONResultProcessNodeDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessNodeDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程节点DTO */
export interface IProcessNodeDTO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 节点业务类型 */
    businessType?: ('EXEC' | 'CONDI');
    /** 节点类型 */
    type?: ('EXECUTE' | 'APPROVAL' | 'BRANCHES' | 'CHILD');
    /** 前节点id */
    previousFlowPathNodeId?: number;
    /** 后节点id */
    nextFlowPathNodeId?: number;
    /** 父节点id - 子节点有值 */
    parentFlowPathNodeId?: number;
    /** 所属分支节点id - 子分支下的所有流程节点均属于当前子分支 */
    branchesFlowPathNodeId?: number;
    /** 名称 */
    name?: string;
    /** 名称 */
    code?: string;
    /** 序号值 */
    serialNo?: string;
    /** 审批类型 */
    approvalType?: ('ONE' | 'ALL');
    /** 是否允许回退 */
    isBack?: ('Y' | 'N');
    /** 回退类型 */
    backType?: ('ANY' | 'PREVIOUS' | 'APPOINT');
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: number;
    /** 回退流程节点序列值 - 返回指定节点时有值 */
    backFlowPathNodeSerialNo?: string;
    /** 是否是首节点 */
    isFirst?: ('Y' | 'N');
    /** 节点级别 - 节点的深度 */
    level?: number;
    /** 节点步骤 - 节点横向步骤 */
    step?: number;
    /** 排序 - 节点纵向步骤 */
    sort?: number;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: ('Y' | 'N');
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout?: ('Y' | 'N');
    /** 节点启动方式 */
    launchType?: ('MANUAL_OPERATION' | 'AUTOMATIC');
    /** 执行类型 */
    executeType?: ('ONE' | 'ALL');
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: ('Y' | 'N');
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: ('Y' | 'N');
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent?: ('Y' | 'N');
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent?: ('Y' | 'N');
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: ('Y' | 'N');
    /** 是否自定义回退按钮文案 */
    isCustomBackContent?: ('Y' | 'N');
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: ('Y' | 'N');
    /** 审批人来自 */
    approverFrom?: ('CURRENT_NODE_ASSIGNMENT' | 'PREVIOUS_NODE_ASSIGNMENT');
    /** 是否启用转交 */
    enabledTransfer?: ('Y' | 'N');
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: ('CLASSIFIED' | 'ALL');
    /** 字段权限列表 */
    permissionList?: IFlowPathNodeFormFieldPermissionsRpTreeVO[];
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
    /** 超时配置 */
    timeoutConfigList?: ITheProcessNodeTimeoutConfigurationReturnsVOForEditing[];
    /** 负责人集 */
    leaderUsers?: IProcessNodeExecutorVO[];
    /** 抄送人集 */
    carbonCopyUsers?: IProcessNodeExecutorVO[];
    /** 转交人集 */
    transferUsers?: IProcessNodeExecutorVO[];
    /** 上一节点限制指定范围 */
    previousNodeAssignmentRange?: ('NO_LIMIT' | 'LIMIT');
    /** 上个节点用户选项列表 */
    previousNodeUserOptions?: IProcessNodeExecutorVO[];
    /** 是否启用接受超时 */
    isEnabledAcceptTimeout?: ('Y' | 'N');
    /** 下节点信息 */
    nextNode?: IProcessNodeDTO;
    /** 分支子节点 */
    branches?: IProcessNodeDTO[];
    /** 条件组集 */
    condiGroups?: ITheProcessNodeConditionGroupReturnsVO1ForEditing[];
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: ('Y' | 'N');
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: ('Y' | 'N');
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: ('Y' | 'N');
    /** 是否启用表单暂存 */
    enableFormStaging?: ('Y' | 'N');
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
}
/** FlowPathNodeFormFieldPermissionsRpTreeVO */
export interface IFlowPathNodeFormFieldPermissionsRpTreeVO {
    /** undefined */
    id?: number;
    /** undefined */
    flowPathId?: number;
    /** undefined */
    flowPathNodeId?: number;
    /** undefined */
    flowPathFormFieldId?: number;
    /** 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 表单字段名称 */
    flowPathFormFieldName?: string;
    /** undefined */
    flowPathFormFieldCode?: string;
    /** undefined */
    flowPathFormFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** undefined */
    parentFlowPathFormFieldId?: number;
    /** undefined */
    parentFlowPathFormFieldCode?: string;
    /** undefined */
    isTableField?: ('Y' | 'N');
    /** undefined */
    parentFlowPathNodeFormFieldPermissionsRpId?: number;
    /** undefined */
    permissionsType?: ('EDIT' | 'READONLY' | 'HIDDEN');
    /** undefined */
    tableFormFieldPermissionsRp?: IFlowPathNodeFormFieldPermissionsRpTreeVO[];
}
/** 流程节点编辑DTO */
export interface ITheProcessNodeEditsTheDTO {
    /** id */
    id?: number;
    /** 消息触发时机 */
    triggerTiming?: ('APPROVER_COMMIT_AFTER' | 'PROCESS_NODE_COMPLETED' | 'COMMIT_TIMEOUT_BEFORE' | 'COMMIT_TIMEOUT_AFTER' | 'ACCEPTANCE_AFTER' | 'ACCEPTANCE_TIMEOUT_BEFORE' | 'ACCEPTANCE_TIMEOUT_AFTER' | 'BEGINNING_AFTER' | 'BEGINNING_TIMEOUT_BEFORE' | 'BEGINNING_TIMEOUT_AFTER' | 'RETURN_AFTER' | 'APPROVER_APPROVAL_AFTER' | 'APPROVAL_NODE_COMPLETED' | 'APPROVER_APPROVAL_REJECTED' | 'TRANSFER_AFTER');
    /** 消息配置ID列表 */
    messageConfigIdList?: number[];
    /** 是否启用消息通知 */
    isEnabledMessageNotification?: ('Y' | 'N');
    /** 引用的ID。比如超时配置 */
    refId?: number;
}
/** 流程节点超时配置针对编辑返回VO */
export interface ITheProcessNodeTimeoutConfigurationReturnsVOForEditing {
    /** id */
    id?: number;
    /** 超时的步骤类型 */
    stepType?: ('COMMITTED' | 'ACCEPT' | 'BEGINNING');
    /** 超时类型 */
    timeoutType?: ('CUSTOM' | 'FORM_FIELD');
    /** 超时值 - 超时类型为自定义时有值 */
    timeoutTimeValue?: number;
    /** 超时值类型 - 超时类型为自定义时有值 */
    timeoutTimeType?: ('DAY' | 'HOUR' | 'MINUTE');
    /** 超时表单字段id */
    timeoutFlowPathFormFieldId?: number;
    /** 超时表单字段序列值 */
    timeoutFlowPathFormFieldSerialNo?: string;
    /** 预警处理方式 */
    earlyWarningHandleType?: ('NOT_HANDLE' | 'SEND');
    /** 预警超时前发送通知 超时值 */
    earlyWarningTimeValue?: number;
    /** 预警超时前发送通知 超时值类型 */
    earlyWarningTimeType?: ('DAY' | 'HOUR' | 'MINUTE');
    /** 预警提醒人集 */
    earlyWarningUsers?: IProcessNodeExecutorVO[];
    /** 预警提醒方式 */
    earlyWarningSendType?: ('MESSAGE');
    /** 超时处理方式 */
    timeoutHandleType?: ('NOT_HANDLE' | 'AUTO');
    /** 超时后通知类型 */
    timeoutAfterSendType?: ('NOT_SEND' | 'AUTO');
    /** 超时提醒人集 */
    timeoutUsers?: IProcessNodeExecutorVO[];
    /** 超时通知方式 */
    timeoutSendType?: ('MESSAGE');
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: number;
    /** 执行人类型 */
    executorType?: ('USER' | 'ROLE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'SYS_CONTROL');
    /** 执行人系统控件类型 */
    executorSysType?: ('CREATE_BY' | 'CREATE_DEPARTMENT' | 'FLOW_PATH_TASK_PLAN');
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: number;
    /** 节点ID */
    flowPathNodeId?: number;
}
/** 流程节点条件组针对编辑返回VO_1 */
export interface ITheProcessNodeConditionGroupReturnsVO1ForEditing {
    /** id */
    id?: number;
    /** 条件集 */
    conditions?: IFlowPathNodeCondiVO[];
}
/** FlowPathNodeCondiVO */
export interface IFlowPathNodeCondiVO {
    /** undefined */
    id?: number;
    /** undefined */
    type?: ('DEFAULT' | 'FORM_FIELD');
    /** undefined */
    defaultCondi?: ('HANDLE_USER');
    /** undefined */
    flowPathFormFieldId?: number;
    /** undefined */
    flowPathFormFieldCode?: string;
    /** undefined */
    flowPathFormFieldSerialNo?: string;
    /** undefined */
    flowPathFormFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** undefined */
    compareMode?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** undefined */
    compareTargetFromSource?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** undefined */
    targetFieldId?: number;
    /** undefined */
    targetFieldSerialNo?: string;
    /** undefined */
    targetFieldCode?: string;
    /** undefined */
    compareValue?: string;
    /** undefined */
    selectCompareValue?: string[];
    /** undefined */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
    /** undefined */
    frontendMeta?: string;
}
