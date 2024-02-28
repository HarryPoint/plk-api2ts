import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/流程节点相关/getByIdUsingGET_5
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessNodeDTO>(
        {
            url: "/flow-service/flowPathNode/getById",
            method: "GET",
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
    ts?: string;
}
/** 流程节点DTO */
export interface IProcessNodeDTO {
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
    businessType?: EProcessNodeDTO_businessType;
    /** 节点类型 */
    type?: EProcessNodeDTO_type;
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
    approvalType?: EProcessNodeDTO_approvalType;
    /** 是否允许回退 */
    isBack?: EProcessNodeDTO_isBack;
    /** 回退类型 */
    backType?: EProcessNodeDTO_backType;
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: string;
    /** 回退流程节点序列值 - 返回指定节点时有值 */
    backFlowPathNodeSerialNo?: string;
    /** 是否是首节点 */
    isFirst?: EProcessNodeDTO_isFirst;
    /** 节点级别 - 节点的深度 */
    level?: number;
    /** 节点步骤 - 节点横向步骤 */
    step?: number;
    /** 排序 - 节点纵向步骤 */
    sort?: number;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: EProcessNodeDTO_isCustomSubmitContent;
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout?: EProcessNodeDTO_enabledTimeout;
    /** 节点启动方式 */
    launchType?: EProcessNodeDTO_launchType;
    /** 执行类型 */
    executeType?: EProcessNodeDTO_executeType;
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: EProcessNodeDTO_isCustomAcceptContent;
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: EProcessNodeDTO_isShowAcceptButton;
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent?: EProcessNodeDTO_isCustomPassApprovalContent;
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent?: EProcessNodeDTO_isCustomRefuseApprovalContent;
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: EProcessNodeDTO_isShowRefuseButton;
    /** 是否自定义回退按钮文案 */
    isCustomBackContent?: EProcessNodeDTO_isCustomBackContent;
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: EProcessNodeDTO_isShowBackButton;
    /** 审批人来自 */
    approverFrom?: EProcessNodeDTO_approverFrom;
    /** 是否启用转交 */
    enabledTransfer?: EProcessNodeDTO_enabledTransfer;
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: EProcessNodeDTO_transferScopeType;
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
    previousNodeAssignmentRange?: EProcessNodeDTO_previousNodeAssignmentRange;
    /** 上个节点用户选项列表 */
    previousNodeUserOptions?: IProcessNodeExecutorVO[];
    /** 是否启用接受超时 */
    isEnabledAcceptTimeout?: EProcessNodeDTO_isEnabledAcceptTimeout;
    /** 下节点信息 */
    nextNode?: IProcessNodeDTO;
    /** 分支子节点 */
    branches?: IProcessNodeDTO[];
    /** 条件组集 */
    condiGroups?: ITheProcessNodeConditionGroupReturnsVO1ForEditing[];
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: EProcessNodeDTO_isCustomBeginningContent;
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: EProcessNodeDTO_isShowBeginningButton;
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: EProcessNodeDTO_isEnabledBeginningTimeout;
    /** 是否启用表单暂存 */
    enableFormStaging?: EProcessNodeDTO_enableFormStaging;
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
}
/** FlowPathNodeFormFieldPermissionsRpTreeVO */
export interface IFlowPathNodeFormFieldPermissionsRpTreeVO {
    /** undefined */
    id?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathNodeId?: string;
    /** undefined */
    flowPathFormFieldId?: string;
    /** 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 表单字段名称 */
    flowPathFormFieldName?: string;
    /** undefined */
    flowPathFormFieldCode?: string;
    /** undefined */
    flowPathFormFieldType?: EFlowPathNodeFormFieldPermissionsRpTreeVO_flowPathFormFieldType;
    /** undefined */
    parentFlowPathFormFieldId?: string;
    /** undefined */
    parentFlowPathFormFieldCode?: string;
    /** undefined */
    isTableField?: EFlowPathNodeFormFieldPermissionsRpTreeVO_isTableField;
    /** undefined */
    parentFlowPathNodeFormFieldPermissionsRpId?: string;
    /** undefined */
    permissionsType?: EFlowPathNodeFormFieldPermissionsRpTreeVO_permissionsType;
    /** undefined */
    tableFormFieldPermissionsRp?: IFlowPathNodeFormFieldPermissionsRpTreeVO[];
}
/** 流程节点编辑DTO */
export interface ITheProcessNodeEditsTheDTO {
    /** id */
    id?: string;
    /** 消息触发时机 */
    triggerTiming?: ETheProcessNodeEditsTheDTO_triggerTiming;
    /** 消息配置ID列表 */
    messageConfigIdList?: string[];
    /** 是否启用消息通知 */
    isEnabledMessageNotification?: ETheProcessNodeEditsTheDTO_isEnabledMessageNotification;
    /** 引用的ID。比如超时配置 */
    refId?: string;
}
/** 流程节点超时配置针对编辑返回VO */
export interface ITheProcessNodeTimeoutConfigurationReturnsVOForEditing {
    /** id */
    id?: string;
    /** 超时的步骤类型 */
    stepType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_stepType;
    /** 超时类型 */
    timeoutType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutType;
    /** 超时值 - 超时类型为自定义时有值 */
    timeoutTimeValue?: number;
    /** 超时值类型 - 超时类型为自定义时有值 */
    timeoutTimeType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutTimeType;
    /** 超时表单字段id */
    timeoutFlowPathFormFieldId?: string;
    /** 超时表单字段序列值 */
    timeoutFlowPathFormFieldSerialNo?: string;
    /** 预警处理方式 */
    earlyWarningHandleType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningHandleType;
    /** 预警超时前发送通知 超时值 */
    earlyWarningTimeValue?: number;
    /** 预警超时前发送通知 超时值类型 */
    earlyWarningTimeType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningTimeType;
    /** 预警提醒人集 */
    earlyWarningUsers?: IProcessNodeExecutorVO[];
    /** 预警提醒方式 */
    earlyWarningSendType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningSendType;
    /** 超时处理方式 */
    timeoutHandleType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutHandleType;
    /** 超时后通知类型 */
    timeoutAfterSendType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutAfterSendType;
    /** 超时提醒人集 */
    timeoutUsers?: IProcessNodeExecutorVO[];
    /** 超时通知方式 */
    timeoutSendType?: ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutSendType;
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: string;
    /** 执行人类型 */
    executorType?: EProcessNodeExecutorVO_executorType;
    /** 执行人系统控件类型 */
    executorSysType?: EProcessNodeExecutorVO_executorSysType;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: string;
    /** 节点ID */
    flowPathNodeId?: string;
}
/** 流程节点条件组针对编辑返回VO_1 */
export interface ITheProcessNodeConditionGroupReturnsVO1ForEditing {
    /** id */
    id?: string;
    /** 条件集 */
    conditions?: IFlowPathNodeCondiVO[];
}
/** FlowPathNodeCondiVO */
export interface IFlowPathNodeCondiVO {
    /** undefined */
    id?: string;
    /** undefined */
    type?: EFlowPathNodeCondiVO_type;
    /** undefined */
    defaultCondi?: EFlowPathNodeCondiVO_defaultCondi;
    /** undefined */
    flowPathFormFieldId?: string;
    /** undefined */
    flowPathFormFieldCode?: string;
    /** undefined */
    flowPathFormFieldSerialNo?: string;
    /** undefined */
    flowPathFormFieldType?: EFlowPathNodeCondiVO_flowPathFormFieldType;
    /** undefined */
    compareMode?: EFlowPathNodeCondiVO_compareMode;
    /** undefined */
    compareTargetFromSource?: EFlowPathNodeCondiVO_compareTargetFromSource;
    /** undefined */
    targetFieldId?: string;
    /** undefined */
    targetFieldSerialNo?: string;
    /** undefined */
    targetFieldCode?: string;
    /** undefined */
    compareValue?: string;
    /** undefined */
    selectCompareValue?: string[];
    /** undefined */
    dateDynamicRange?: EFlowPathNodeCondiVO_dateDynamicRange;
    /** undefined */
    frontendMeta?: string;
}

export enum EProcessNodeDTO_businessType {
    /** 执行 */
    EXEC = "EXEC",
    /** 条件 */
    CONDI = "CONDI"
}

export enum EProcessNodeDTO_type {
    /** 执行节点 */
    EXECUTE = "EXECUTE",
    /** 审批节点 */
    APPROVAL = "APPROVAL",
    /** 分支节点 */
    BRANCHES = "BRANCHES",
    /** 子分支节点 */
    CHILD = "CHILD"
}

export enum EProcessNodeDTO_approvalType {
    /** 一位负责人通过或者拒绝即可 */
    ONE = "ONE",
    /** 需所有负责人通过，任意一位拒绝将无法通过 */
    ALL = "ALL"
}

export enum EProcessNodeDTO_isBack {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_backType {
    /** 之前所有节点 */
    ANY = "ANY",
    /** 返回上一节点 */
    PREVIOUS = "PREVIOUS",
    /** 返回指定节点 */
    APPOINT = "APPOINT"
}

export enum EProcessNodeDTO_isFirst {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isCustomSubmitContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_enabledTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_launchType {
    /** 手动 */
    MANUAL_OPERATION = "MANUAL_OPERATION",
    /** 自动 */
    AUTOMATIC = "AUTOMATIC"
}

export enum EProcessNodeDTO_executeType {
    /** 只需一位执行人提交流程 */
    ONE = "ONE",
    /** 需所有执行人提交流程 */
    ALL = "ALL"
}

export enum EProcessNodeDTO_isCustomAcceptContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isShowAcceptButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isCustomPassApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isCustomRefuseApprovalContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isShowRefuseButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isCustomBackContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isShowBackButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_approverFrom {
    /** 当前节点指定 */
    CURRENT_NODE_ASSIGNMENT = "CURRENT_NODE_ASSIGNMENT",
    /** 上一个节点指定 */
    PREVIOUS_NODE_ASSIGNMENT = "PREVIOUS_NODE_ASSIGNMENT"
}

export enum EProcessNodeDTO_enabledTransfer {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_transferScopeType {
    /** 指定范围 */
    CLASSIFIED = "CLASSIFIED",
    /** 不限范围 */
    ALL = "ALL"
}

export enum EProcessNodeDTO_previousNodeAssignmentRange {
    /** 不限制 */
    NO_LIMIT = "NO_LIMIT",
    /** 指定限制 */
    LIMIT = "LIMIT"
}

export enum EProcessNodeDTO_isEnabledAcceptTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isCustomBeginningContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isShowBeginningButton {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_isEnabledBeginningTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessNodeDTO_enableFormStaging {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathNodeFormFieldPermissionsRpTreeVO_flowPathFormFieldType {
    INPUT_TEXT = "INPUT_TEXT",
    TEXTAREA = "TEXTAREA",
    NUMBER = "NUMBER",
    DATE = "DATE",
    SELECTOR = "SELECTOR",
    CHECKBOX = "CHECKBOX",
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    FILE_UPLOAD = "FILE_UPLOAD",
    TABLE = "TABLE",
    FORM_RP = "FORM_RP",
    FORM_RP_MULTI = "FORM_RP_MULTI",
    CODE = "CODE",
    ADDRESS = "ADDRESS",
    POSITION = "POSITION",
    EMAIL = "EMAIL",
    MOBILE = "MOBILE",
    ID_CARD = "ID_CARD",
    RICH_TEXT = "RICH_TEXT",
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    DESC_TEXT = "DESC_TEXT",
    SPLIT_LINE = "SPLIT_LINE",
    LOT_NO = "LOT_NO",
    SERIAL_NO = "SERIAL_NO",
    FORMULA = "FORMULA"
}

export enum EFlowPathNodeFormFieldPermissionsRpTreeVO_isTableField {
    Y = "Y",
    N = "N"
}

export enum EFlowPathNodeFormFieldPermissionsRpTreeVO_permissionsType {
    EDIT = "EDIT",
    READONLY = "READONLY",
    HIDDEN = "HIDDEN"
}

export enum ETheProcessNodeEditsTheDTO_triggerTiming {
    /** 处理人提交后 */
    APPROVER_COMMIT_AFTER = "APPROVER_COMMIT_AFTER",
    /** 处理节点完成后 */
    PROCESS_NODE_COMPLETED = "PROCESS_NODE_COMPLETED",
    /** 提交超时前 */
    COMMIT_TIMEOUT_BEFORE = "COMMIT_TIMEOUT_BEFORE",
    /** 提交超时后 */
    COMMIT_TIMEOUT_AFTER = "COMMIT_TIMEOUT_AFTER",
    /** 接受后 */
    ACCEPTANCE_AFTER = "ACCEPTANCE_AFTER",
    /** 接受超时前 */
    ACCEPTANCE_TIMEOUT_BEFORE = "ACCEPTANCE_TIMEOUT_BEFORE",
    /** 接受超时后 */
    ACCEPTANCE_TIMEOUT_AFTER = "ACCEPTANCE_TIMEOUT_AFTER",
    /** 开始后 */
    BEGINNING_AFTER = "BEGINNING_AFTER",
    /** 开始超时前 */
    BEGINNING_TIMEOUT_BEFORE = "BEGINNING_TIMEOUT_BEFORE",
    /** 开始超时后 */
    BEGINNING_TIMEOUT_AFTER = "BEGINNING_TIMEOUT_AFTER",
    /** 退回后 */
    RETURN_AFTER = "RETURN_AFTER",
    /** 审批人同意后 */
    APPROVER_APPROVAL_AFTER = "APPROVER_APPROVAL_AFTER",
    /** 审批人节点完成后 */
    APPROVAL_NODE_COMPLETED = "APPROVAL_NODE_COMPLETED",
    /** 审批人拒绝后 */
    APPROVER_APPROVAL_REJECTED = "APPROVER_APPROVAL_REJECTED",
    /** 转交后 */
    TRANSFER_AFTER = "TRANSFER_AFTER"
}

export enum ETheProcessNodeEditsTheDTO_isEnabledMessageNotification {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_stepType {
    /** 提交 */
    COMMITTED = "COMMITTED",
    /** 接受 */
    ACCEPT = "ACCEPT",
    /** 开始 */
    BEGINNING = "BEGINNING"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutType {
    /** 自定义 */
    CUSTOM = "CUSTOM",
    /** 来自流程表单 */
    FORM_FIELD = "FORM_FIELD"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutTimeType {
    /** 天 */
    DAY = "DAY",
    /** 小时 */
    HOUR = "HOUR",
    /** 分钟 */
    MINUTE = "MINUTE"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningHandleType {
    /** 不做任何处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 提前发送预警通知 */
    SEND = "SEND"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningTimeType {
    /** 天 */
    DAY = "DAY",
    /** 小时 */
    HOUR = "HOUR",
    /** 分钟 */
    MINUTE = "MINUTE"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_earlyWarningSendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutHandleType {
    /** 不做任何处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 自动提交 */
    AUTO = "AUTO"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutAfterSendType {
    /** 不做任何处理 */
    NOT_SEND = "NOT_SEND",
    /** 自动通知 */
    AUTO = "AUTO"
}

export enum ETheProcessNodeTimeoutConfigurationReturnsVOForEditing_timeoutSendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum EProcessNodeExecutorVO_executorType {
    /** 员工 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 系统控件 */
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EProcessNodeExecutorVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}

export enum EFlowPathNodeCondiVO_type {
    DEFAULT = "DEFAULT",
    FORM_FIELD = "FORM_FIELD"
}

export enum EFlowPathNodeCondiVO_defaultCondi {
    HANDLE_USER = "HANDLE_USER"
}

export enum EFlowPathNodeCondiVO_flowPathFormFieldType {
    INPUT_TEXT = "INPUT_TEXT",
    TEXTAREA = "TEXTAREA",
    NUMBER = "NUMBER",
    DATE = "DATE",
    SELECTOR = "SELECTOR",
    CHECKBOX = "CHECKBOX",
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    FILE_UPLOAD = "FILE_UPLOAD",
    TABLE = "TABLE",
    FORM_RP = "FORM_RP",
    FORM_RP_MULTI = "FORM_RP_MULTI",
    CODE = "CODE",
    ADDRESS = "ADDRESS",
    POSITION = "POSITION",
    EMAIL = "EMAIL",
    MOBILE = "MOBILE",
    ID_CARD = "ID_CARD",
    RICH_TEXT = "RICH_TEXT",
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    DESC_TEXT = "DESC_TEXT",
    SPLIT_LINE = "SPLIT_LINE",
    LOT_NO = "LOT_NO",
    SERIAL_NO = "SERIAL_NO",
    FORMULA = "FORMULA"
}

export enum EFlowPathNodeCondiVO_compareMode {
    EQ = "EQ",
    NE = "NE",
    GT = "GT",
    GE = "GE",
    LT = "LT",
    LE = "LE",
    IN = "IN",
    NOT_IN = "NOT_IN",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    RANGE = "RANGE",
    NOT_RANGE = "NOT_RANGE",
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    CONTAINER = "CONTAINER",
    NOT_CONTAINER = "NOT_CONTAINER",
    REGEXP = "REGEXP",
    NOT_REGEXP = "NOT_REGEXP",
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    JSON_IS_NULL = "JSON_IS_NULL",
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EFlowPathNodeCondiVO_compareTargetFromSource {
    FORM_RP = "FORM_RP",
    CURRENT = "CURRENT",
    CUSTOM = "CUSTOM",
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EFlowPathNodeCondiVO_dateDynamicRange {
    YESTERDAY = "YESTERDAY",
    TODAY = "TODAY",
    LAST_WEEK = "LAST_WEEK",
    THIS_WEEK = "THIS_WEEK",
    LAST_MONTH = "LAST_MONTH",
    THIS_MONTH = "THIS_MONTH",
    LAST_YEAR = "LAST_YEAR",
    THIS_YEAR = "THIS_YEAR"
}
