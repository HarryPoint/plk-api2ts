import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/addUsingPOST_5
*/
export default function fetchMethod(options: { data: IMessageSchemaAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/messageSchema/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** MessageSchemaAddRequestDTO */
export interface IMessageSchemaAddRequestDTO {
    /** 消息方案 */
    messageSchema?: IMessageSchemaAddDTO;
    /** 业务配置 */
    formConfig?: IFormConfigAddDTO;
}
/** MessageSchemaAddDTO */
export interface IMessageSchemaAddDTO {
    /** 编码 */
    code?: string;
    /** 标题 */
    title?: string;
    /** 已选择的时间类型 */
    selectedTimeType?: EMessageSchemaAddDTO_selectedTimeType;
    /** 是否重复发送 */
    isRepeatSending?: EMessageSchemaAddDTO_isRepeatSending;
    /** 间隔时间 */
    intervalTime?: number;
    /** 间隔时间类型 */
    intervalTimeType?: EMessageSchemaAddDTO_intervalTimeType;
    /** 消息发送内容模板列表 */
    messageSendingContentTemplateList?: IMessageSendingContentTemplateAddDTO[];
    /** 消息接受人列表 */
    recipientList?: IMessageRecipientAddDTO[];
    /** 过滤条件列表 */
    filterConditionList?: IOriginalDataFilterConditionAddDTO[];
    /** 消息触发节点列表 */
    messageTriggerNodeList?: IMessageTriggerNodeAddDTO[];
    /** 消息类型 */
    messageType?: EMessageSchemaAddDTO_messageType;
    /** 时间配置 */
    timeConfig?: IMessageSchemaTimeConfigAddDTO;
}
/** MessageSendingContentTemplateAddDTO */
export interface IMessageSendingContentTemplateAddDTO {
    /** 消息发送模式 */
    sendingMode?: EMessageSendingContentTemplateAddDTO_sendingMode;
    /** 是否使用消息模板 */
    isUseSmsTemplate?: EMessageSendingContentTemplateAddDTO_isUseSmsTemplate;
    /** 消息模板ID */
    smsTemplateId?: string;
    /** 消息内容  模板内容。  销售订单为:${SSALESORDERCODENS},这个订单有问题 */
    messageContent?: string;
    /** undefined */
    fieldSerialNoList?: Record<string, any>[];
    /** 字段元数据 */
    fieldMetaList?: IMessageContentFieldMetaAddDTO[];
    /** 是否使用配置 */
    isUseConfig?: EMessageSendingContentTemplateAddDTO_isUseConfig;
    /** html 内容 */
    htmlContent?: string;
    /** 邮件主题 */
    emailSubject?: string;
    /** 消息链接 */
    messageLink?: EMessageSendingContentTemplateAddDTO_messageLink;
}
/** MessageContentFieldMetaAddDTO */
export interface IMessageContentFieldMetaAddDTO {
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
}
/** MessageRecipientAddDTO */
export interface IMessageRecipientAddDTO {
    /** 接收人类型 */
    recipientType?: EMessageRecipientAddDTO_recipientType;
    /** 部门ID列表 */
    departmentIdList?: Record<string, any>[];
    /** 班组ID列表 */
    classGroupIdList?: Record<string, any>[];
    /** 组织字段序列号列表 */
    organizationFieldSerialList?: Record<string, any>[];
    /** 用户ID列表 */
    userIdList?: Record<string, any>[];
    /** 邮箱列表 */
    emailAddressList?: Record<string, any>[];
}
/** OriginalDataFilterConditionAddDTO */
export interface IOriginalDataFilterConditionAddDTO {
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
/** MessageTriggerNodeAddDTO */
export interface IMessageTriggerNodeAddDTO {
    /** 节点类型 */
    nodeType?: EMessageTriggerNodeAddDTO_nodeType;
    /** 逻辑运算符类型 */
    logicalType?: EMessageTriggerNodeAddDTO_logicalType;
    /** 当前触发节点条件ID */
    currentTriggerConditionId?: string;
    /** 上级触发节点ID */
    parentTriggerNodeId?: string;
    /** 当前节点表达式 */
    currentConditionExpression?: IMessageTriggerConditionAddDTO;
    /** 下级节点表达式列表 */
    children?: IMessageTriggerNodeAddDTO[];
}
/** MessageTriggerConditionAddDTO */
export interface IMessageTriggerConditionAddDTO {
    /** 触发模式 */
    triggerMode?: EMessageTriggerConditionAddDTO_triggerMode;
    /** 消息触发动作 */
    triggerAction?: EMessageTriggerConditionAddDTO_triggerAction;
    /** 消息表达式类型 */
    expressionType?: EMessageTriggerConditionAddDTO_expressionType;
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
    /** 公式字段列表。字段 ["fieldSerialNo"...] */
    formulaFieldList?: Record<string, any>[];
    /** 判断表达式 */
    judgeExpression?: EMessageTriggerConditionAddDTO_judgeExpression;
    /** 条件值 */
    value?: string;
    /** html 内容 */
    htmlContent?: string;
}
/** MessageSchemaTimeConfigAddDTO */
export interface IMessageSchemaTimeConfigAddDTO {
    /** 时间模式 */
    timeMode?: EMessageSchemaTimeConfigAddDTO_timeMode;
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: EMessageSchemaTimeConfigAddDTO_monthCalcTimeMode;
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: EMessageSchemaTimeConfigAddDTO_quarterCalcTimeMode;
    /** 每天第几天 */
    month?: number;
    /** 时间 */
    time?: string;
    /** 每半年计算模式 */
    halfYearCalcTimeMode?: EMessageSchemaTimeConfigAddDTO_halfYearCalcTimeMode;
}
/** FormConfigAddDTO */
export interface IFormConfigAddDTO {
    /** 应用编码 */
    applicationCode?: string;
    /** 详细流程字段编码 */
    detailTableFieldCode?: string;
    /** 详细流程字段ID */
    detailTableFieldId?: string;
    /** 详细流程字段序列号 */
    detailTableFieldSerialNo?: string;
    /** 是否详细流程表 */
    isDetailFlowTable?: EFormConfigAddDTO_isDetailFlowTable;
    /** 是否动态表单 */
    isDynamicForm?: EFormConfigAddDTO_isDynamicForm;
    /** 表 - 编码 */
    tableCode?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EMessageSchemaAddDTO_selectedTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EMessageSchemaAddDTO_isRepeatSending {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSchemaAddDTO_intervalTimeType {
    /** 小时 */
    HOUR = "HOUR",
    /** 天 */
    DAY = "DAY"
}

export enum EMessageSchemaAddDTO_messageType {
    /** 条件触发 */
    CONDITION_TRIGGER = "CONDITION_TRIGGER",
    /** 定时发送 */
    SCHEDULED_SENDING = "SCHEDULED_SENDING"
}

export enum EMessageSendingContentTemplateAddDTO_sendingMode {
    /** 系统消息 */
    SYSTEM = "SYSTEM",
    /** 短信 */
    SMS = "SMS",
    /** 邮件 */
    EMAIL = "EMAIL"
}

export enum EMessageSendingContentTemplateAddDTO_isUseSmsTemplate {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSendingContentTemplateAddDTO_isUseConfig {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageSendingContentTemplateAddDTO_messageLink {
    /** 应用新增页面链接 */
    ADD_PAGE = "ADD_PAGE",
    /** 应用列表页面链接 */
    LINK_PAGE = "LINK_PAGE"
}

export enum EMessageRecipientAddDTO_recipientType {
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

export enum EMessageTriggerNodeAddDTO_nodeType {
    /** 逻辑运算符 */
    LOGICAL_OPERATOR = "LOGICAL_OPERATOR",
    /** 条件表达式 */
    CONDITIONAL_EXPRESSION = "CONDITIONAL_EXPRESSION",
    /** 条件组 */
    CONDITION_GROUP = "CONDITION_GROUP"
}

export enum EMessageTriggerNodeAddDTO_logicalType {
    /** 且 */
    AND = "AND",
    /** 或 */
    OR = "OR"
}

export enum EMessageTriggerConditionAddDTO_triggerMode {
    /** 业务发生增减变动 */
    BUSINESS_EVENT = "BUSINESS_EVENT",
    /** 满足公式时 */
    MEET_FORMULA = "MEET_FORMULA"
}

export enum EMessageTriggerConditionAddDTO_triggerAction {
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

export enum EMessageTriggerConditionAddDTO_expressionType {
    /** 无表达式，就是有且唯一字段 */
    NONE = "NONE",
    /** 日期函数表达式，即有NOW(), TODAY() */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 聚合函数表达式，即有SUM/MAX/MIN/AVG/COUNT/+,-,*,/ */
    MATH_FUNCTION = "MATH_FUNCTION"
}

export enum EMessageTriggerConditionAddDTO_judgeExpression {
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

export enum EMessageSchemaTimeConfigAddDTO_timeMode {
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

export enum EMessageSchemaTimeConfigAddDTO_monthCalcTimeMode {
    /** 从月初开始计算 */
    FROM_BEGINNING_OF_MONTH = "FROM_BEGINNING_OF_MONTH",
    /** 从月末开始 */
    FROM_END_OF_MONTH = "FROM_END_OF_MONTH"
}

export enum EMessageSchemaTimeConfigAddDTO_quarterCalcTimeMode {
    /** 从季度初第 */
    FROM_BEGINNING_OF_QUARTER = "FROM_BEGINNING_OF_QUARTER",
    /** 从月末倒数第 */
    FROM_END_OF_QUARTER = "FROM_END_OF_QUARTER"
}

export enum EMessageSchemaTimeConfigAddDTO_halfYearCalcTimeMode {
    /** 从半年初第 */
    FROM_BEGINNING_OF_HALF_YEAR = "FROM_BEGINNING_OF_HALF_YEAR",
    /** 从半年末倒数第 */
    FROM_END_OF_HALF_YEAR = "FROM_END_OF_HALF_YEAR"
}

export enum EFormConfigAddDTO_isDetailFlowTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFormConfigAddDTO_isDynamicForm {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
