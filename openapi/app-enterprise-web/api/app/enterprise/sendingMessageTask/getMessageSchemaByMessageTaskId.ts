import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/getMessageSchemaByMessageTaskIdUsingGET
*/
export default function fetchMethod(options: { params: { messageTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultMessageSchemaQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingMessageTask/getMessageSchemaByMessageTaskId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«MessageSchemaQueryResponseDTO» */
export interface IJSONResultMessageSchemaQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMessageSchemaQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** MessageSchemaQueryResponseDTO */
export interface IMessageSchemaQueryResponseDTO {
    /** 消息方案 */
    messageSchema?: IMessageSchemaDTO;
    /** 业务配置 */
    formConfig?: IFormConfigDTO;
}
/** MessageSchemaDTO */
export interface IMessageSchemaDTO {
    /** ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 标题 */
    title?: string;
    /** 发送内容状态 */
    sendingContentStatus?: EMessageSchemaDTO_sendingContentStatus;
    /** 异常原因 */
    exceptionalReason?: string;
    /** 已选择的时间类型 */
    selectedTimeType?: EMessageSchemaDTO_selectedTimeType;
    /** 已选择的时间类型 */
    isRepeatSending?: EMessageSchemaDTO_isRepeatSending;
    /** 间隔时间 */
    intervalTime?: number;
    /** 间隔时间类型 */
    intervalTimeType?: EMessageSchemaDTO_intervalTimeType;
    /** 消息发送内容模板列表 */
    messageSendingContentTemplateList?: IMessageSendingContentTemplateDTO[];
    /** 消息接受人列表 */
    recipientList?: IMessageRecipientDTO[];
    /** 过滤条件列表 */
    filterConditionList?: IOriginalDataFilterConditionDTO[];
    /** 消息触发节点列表 */
    messageTriggerNodeList?: IMessageTriggerNodeDTO[];
    /** 消息类型 */
    messageType?: EMessageSchemaDTO_messageType;
    /** 时间配置 */
    timeConfig?: IMessageSchemaTimeConfigDTO;
}
/** MessageSendingContentTemplateDTO */
export interface IMessageSendingContentTemplateDTO {
    /** ID */
    id?: string;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 消息发送模式 */
    sendingMode?: EMessageSendingContentTemplateDTO_sendingMode;
    /** 是否使用消息模板 */
    isUseSmsTemplate?: EMessageSendingContentTemplateDTO_isUseSmsTemplate;
    /** 消息模板ID */
    smsTemplateId?: string;
    /** 消息内容  模板内容。  销售订单为:${SSALESORDERCODENS},这个订单有问题 */
    messageContent?: string;
    /** 字段序列号列表 */
    fieldSerialNoList?: Record<string, any>[];
    /** 字段元数据 */
    fieldMetaList?: IMessageContentFieldMetaDTO[];
    /** 是否使用配置 */
    isUseConfig?: EMessageSendingContentTemplateDTO_isUseConfig;
    /** html 内容 */
    htmlContent?: string;
    /** 邮件主题 */
    emailSubject?: string;
    /** 消息链接 */
    messageLink?: EMessageSendingContentTemplateDTO_messageLink;
}
/** MessageContentFieldMetaDTO */
export interface IMessageContentFieldMetaDTO {
    /** ID */
    id?: string;
    /** 应用编码 */
    applicationCode?: string;
    /** 当前表单字段序列号 */
    currentFormFieldSerialNo?: string;
    /** 关联应用编码 */
    associationApplicationCode?: string;
    /** 关联表单序列号 */
    associationFormFieldSerialNo?: string;
    /** 显示字段名 */
    showFieldName?: string;
    /** 引用消息模板ID */
    refMessageTemplateId?: string;
}
/** MessageRecipientDTO */
export interface IMessageRecipientDTO {
    /** ID */
    id?: string;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 接收人类型 */
    recipientType?: EMessageRecipientDTO_recipientType;
    /** 部门ID列表 */
    departmentIdList?: Record<string, any>[];
    /** 班组ID列表 */
    classGroupIdList?: Record<string, any>[];
    /** 组织字段序列号列表 */
    organizationFieldSerialList?: Record<string, any>[];
    /** 用户ID列表 */
    userIdList?: Record<string, any>[];
    /** 邮件地址列表json */
    emailAddressList?: Record<string, any>[];
    /** 部门列表 */
    departmentList?: IDepartmentResponseObject1[];
    /** 班组列表 */
    classGroupList?: IDepartmentResponseObject[];
    /** 用户列表 */
    userList?: IPersonnelResponseObject[];
    /** 组织字段列表 */
    organizationFieldList?: IFieldSerialNoToNameMappingDTO[];
}
/** 部门响应对象_1 */
export interface IDepartmentResponseObject1 {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 人员 */
    users?: IPersonnelResponseObject[];
}
/** 人员响应对象 */
export interface IPersonnelResponseObject {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: string;
    /** 邮箱 */
    email?: string;
}
/** 部门响应对象 */
export interface IDepartmentResponseObject {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 人员 */
    users?: IPersonnelResponseObject[];
}
/** FieldSerialNoToNameMappingDTO */
export interface IFieldSerialNoToNameMappingDTO {
    /** undefined */
    serialNo?: string;
    /** undefined */
    name?: string;
}
/** OriginalDataFilterConditionDTO */
export interface IOriginalDataFilterConditionDTO {
    /** ID */
    id?: string;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 表-编码 */
    tableCode?: string;
    /** 流程编码 */
    applicationCode?: string;
    /** 表单字段编码 */
    detailTableFieldCode?: string;
    /** 表字段编码 */
    fieldCode?: string;
    /** undefined */
    fieldSerialNo?: string;
    /** undefined */
    value?: Record<string, any>[];
}
/** MessageTriggerNodeDTO */
export interface IMessageTriggerNodeDTO {
    /** ID */
    id?: string;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 节点类型 */
    nodeType?: EMessageTriggerNodeDTO_nodeType;
    /** 逻辑运算符类型 */
    logicalType?: EMessageTriggerNodeDTO_logicalType;
    /** 当前触发节点条件ID */
    currentTriggerConditionId?: string;
    /** 上级触发节点ID */
    parentTriggerNodeId?: string;
    /** 当前节点表达式 */
    currentConditionExpression?: IMessageTriggerConditionDTO;
    /** 下级节点表达式列表 */
    children?: IMessageTriggerNodeDTO[];
    /** 排序 */
    order?: number;
}
/** MessageTriggerConditionDTO */
export interface IMessageTriggerConditionDTO {
    /** ID */
    id?: string;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 触发模式 */
    triggerMode?: EMessageTriggerConditionDTO_triggerMode;
    /** 消息触发动作 */
    triggerAction?: EMessageTriggerConditionDTO_triggerAction;
    /** 消息表达式类型 */
    expressionType?: EMessageTriggerConditionDTO_expressionType;
    /** 表-编码 */
    tableCode?: string;
    /** 流程字段编码 */
    applicationCode?: string;
    /** 表格字段编码 */
    detailTableFieldCode?: string;
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 字段编码 */
    fieldCode?: string;
    /** SUM(${fieldSerialNo}) / count(${fieldSerialNo}) */
    formula?: string;
    /** 公式字段列表 */
    formulaFieldList?: Record<string, any>[];
    /** 判断表达式 */
    judgeExpression?: EMessageTriggerConditionDTO_judgeExpression;
    /** 条件值 */
    value?: string;
    /** html 内容 */
    htmlContent?: string;
}
/** MessageSchemaTimeConfigDTO */
export interface IMessageSchemaTimeConfigDTO {
    /** ID */
    id?: string;
    /** 时间模式 */
    timeMode?: EMessageSchemaTimeConfigDTO_timeMode;
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: EMessageSchemaTimeConfigDTO_monthCalcTimeMode;
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: EMessageSchemaTimeConfigDTO_quarterCalcTimeMode;
    /** 每天第几天 */
    month?: number;
    /** 时间 */
    time?: string;
    /** 每半年计算模式 */
    halfYearCalcTimeMode?: EMessageSchemaTimeConfigDTO_halfYearCalcTimeMode;
    /** 消息方案ID */
    messageSchemaId?: string;
}
/** FormConfigDTO */
export interface IFormConfigDTO {
    /** ID */
    id?: string;
    /** 应用编码 */
    applicationCode?: string;
    /** 详细流程字段编码 */
    detailTableFieldCode?: string;
    /** 详细流程字段ID */
    detailTableFieldId?: string;
    /** 详细流程字段序列号 */
    detailTableFieldSerialNo?: string;
    /** 是否详细流程表 */
    isDetailFlowTable?: EFormConfigDTO_isDetailFlowTable;
    /** 是否动态表单 */
    isDynamicForm?: EFormConfigDTO_isDynamicForm;
    /** 表 - 编码 */
    tableCode?: string;
}

export enum EMessageSchemaDTO_sendingContentStatus {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 异常 */
    ABNORMAL = "ABNORMAL"
}

export enum EMessageSchemaDTO_selectedTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EMessageSchemaDTO_isRepeatSending {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSchemaDTO_intervalTimeType {
    /** 小时 */
    HOUR = "HOUR",
    /** 天 */
    DAY = "DAY"
}

export enum EMessageSchemaDTO_messageType {
    /** 条件触发 */
    CONDITION_TRIGGER = "CONDITION_TRIGGER",
    /** 定时发送 */
    SCHEDULED_SENDING = "SCHEDULED_SENDING"
}

export enum EMessageSendingContentTemplateDTO_sendingMode {
    /** 系统消息 */
    SYSTEM = "SYSTEM",
    /** 短信 */
    SMS = "SMS",
    /** 邮件 */
    EMAIL = "EMAIL"
}

export enum EMessageSendingContentTemplateDTO_isUseSmsTemplate {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSendingContentTemplateDTO_isUseConfig {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSendingContentTemplateDTO_messageLink {
    /** 应用新增页面链接 */
    ADD_PAGE = "ADD_PAGE",
    /** 应用列表页面链接 */
    LINK_PAGE = "LINK_PAGE"
}

export enum EMessageRecipientDTO_recipientType {
    /** 人员 */
    USER = "USER",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 邮件 */
    EMAIL = "EMAIL",
    /** 业务 */
    BUSINESS = "BUSINESS"
}

export enum EMessageTriggerNodeDTO_nodeType {
    /** 逻辑运算符 */
    LOGICAL_OPERATOR = "LOGICAL_OPERATOR",
    /** 条件表达式 */
    CONDITIONAL_EXPRESSION = "CONDITIONAL_EXPRESSION",
    /** 条件组 */
    CONDITION_GROUP = "CONDITION_GROUP"
}

export enum EMessageTriggerNodeDTO_logicalType {
    /** 且 */
    AND = "AND",
    /** 或 */
    OR = "OR"
}

export enum EMessageTriggerConditionDTO_triggerMode {
    /** 业务发生增减变动 */
    BUSINESS_EVENT = "BUSINESS_EVENT",
    /** 满足公式时 */
    MEET_FORMULA = "MEET_FORMULA"
}

export enum EMessageTriggerConditionDTO_triggerAction {
    /** 新增时 */
    ADD = "ADD",
    /** 删除时 */
    REMOVE = "REMOVE",
    /** 启用 */
    ENABLE = "ENABLE",
    /** 停用 */
    DISABLE = "DISABLE",
    /** 流程结束时 */
    FLOW_COMPLETE = "FLOW_COMPLETE",
    /** 流程重新提交 */
    RE_SUBMIT = "RE_SUBMIT"
}

export enum EMessageTriggerConditionDTO_expressionType {
    /** 无表达式，就是有且唯一字段 */
    NONE = "NONE",
    /** 日期函数表达式，即有NOW(), TODAY() */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 聚合函数表达式，即有SUM/MAX/MIN/AVG/COUNT/+,-,*,/ */
    MATH_FUNCTION = "MATH_FUNCTION"
}

export enum EMessageTriggerConditionDTO_judgeExpression {
    /** = */
    EQ = "EQ",
    /** > */
    GT = "GT",
    /** >= */
    GE = "GE",
    /** < */
    LT = "LT",
    /** <= */
    LE = "LE"
}

export enum EMessageSchemaTimeConfigDTO_timeMode {
    /** 每天 */
    DAY = "DAY",
    /** 每周 */
    WEEK = "WEEK",
    /** 每月 */
    MONTH = "MONTH",
    /** 每季度 */
    QUARTER = "QUARTER",
    /** 每半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 每年 */
    YEAR = "YEAR"
}

export enum EMessageSchemaTimeConfigDTO_monthCalcTimeMode {
    /** 从月初开始计算 */
    FROM_BEGINNING_OF_MONTH = "FROM_BEGINNING_OF_MONTH",
    /** 从月末开始 */
    FROM_END_OF_MONTH = "FROM_END_OF_MONTH"
}

export enum EMessageSchemaTimeConfigDTO_quarterCalcTimeMode {
    /** 从季度初第 */
    FROM_BEGINNING_OF_QUARTER = "FROM_BEGINNING_OF_QUARTER",
    /** 从月末倒数第 */
    FROM_END_OF_QUARTER = "FROM_END_OF_QUARTER"
}

export enum EMessageSchemaTimeConfigDTO_halfYearCalcTimeMode {
    /** 从半年初第 */
    FROM_BEGINNING_OF_HALF_YEAR = "FROM_BEGINNING_OF_HALF_YEAR",
    /** 从半年末倒数第 */
    FROM_END_OF_HALF_YEAR = "FROM_END_OF_HALF_YEAR"
}

export enum EFormConfigDTO_isDetailFlowTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFormConfigDTO_isDynamicForm {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
