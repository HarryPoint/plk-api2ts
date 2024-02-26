import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/getByIdUsingGET_21
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultMessageSchemaQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingMessageTask/getById",
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
    ts?: number;
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
    id?: number;
    /** 编码 */
    code?: string;
    /** 标题 */
    title?: string;
    /** 发送内容状态 */
    sendingContentStatus?: ('NORMAL' | 'ABNORMAL');
    /** 异常原因 */
    exceptionalReason?: string;
    /** 已选择的时间类型 */
    selectedTimeType?: ('SECOND' | 'MIN' | 'HOUR');
    /** 已选择的时间类型 */
    isRepeatSending?: ('Y' | 'N');
    /** 间隔时间 */
    intervalTime?: number;
    /** 间隔时间类型 */
    intervalTimeType?: ('HOUR' | 'DAY');
    /** 消息发送内容模板列表 */
    messageSendingContentTemplateList?: IMessageSendingContentTemplateDTO[];
    /** 消息接受人列表 */
    recipientList?: IMessageRecipientDTO[];
    /** 过滤条件列表 */
    filterConditionList?: IOriginalDataFilterConditionDTO[];
    /** 消息触发节点列表 */
    messageTriggerNodeList?: IMessageTriggerNodeDTO[];
    /** 消息类型 */
    messageType?: ('CONDITION_TRIGGER' | 'SCHEDULED_SENDING');
    /** 时间配置 */
    timeConfig?: IMessageSchemaTimeConfigDTO;
}
/** MessageSendingContentTemplateDTO */
export interface IMessageSendingContentTemplateDTO {
    /** ID */
    id?: number;
    /** 消息方案ID */
    messageSchemaId?: number;
    /** 消息发送模式 */
    sendingMode?: ('SYSTEM' | 'SMS' | 'EMAIL');
    /** 是否使用消息模板 */
    isUseSmsTemplate?: ('Y' | 'N');
    /** 消息模板ID */
    smsTemplateId?: number;
    /** 消息内容  模板内容。  销售订单为:${SSALESORDERCODENS},这个订单有问题 */
    messageContent?: string;
    /** 字段序列号列表 */
    fieldSerialNoList?: Record<string, any>[];
    /** 字段元数据 */
    fieldMetaList?: IMessageContentFieldMetaDTO[];
    /** 是否使用配置 */
    isUseConfig?: ('Y' | 'N');
    /** html 内容 */
    htmlContent?: string;
    /** 邮件主题 */
    emailSubject?: string;
    /** 消息链接 */
    messageLink?: ('ADD_PAGE' | 'LINK_PAGE');
}
/** MessageContentFieldMetaDTO */
export interface IMessageContentFieldMetaDTO {
    /** ID */
    id?: number;
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
    refMessageTemplateId?: number;
}
/** MessageRecipientDTO */
export interface IMessageRecipientDTO {
    /** ID */
    id?: number;
    /** 消息方案ID */
    messageSchemaId?: number;
    /** 接收人类型 */
    recipientType?: ('USER' | 'CLASS_GROUP' | 'DEPARTMENT' | 'EMAIL' | 'BUSINESS');
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
    id: number;
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
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 班组id */
    classGroupId?: number;
    /** 邮箱 */
    email?: string;
}
/** 部门响应对象 */
export interface IDepartmentResponseObject {
    /** id */
    id: number;
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
    id?: number;
    /** 消息方案ID */
    messageSchemaId?: number;
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
    id?: number;
    /** 消息方案ID */
    messageSchemaId?: number;
    /** 节点类型 */
    nodeType?: ('LOGICAL_OPERATOR' | 'CONDITIONAL_EXPRESSION' | 'CONDITION_GROUP');
    /** 逻辑运算符类型 */
    logicalType?: ('AND' | 'OR');
    /** 当前触发节点条件ID */
    currentTriggerConditionId?: number;
    /** 上级触发节点ID */
    parentTriggerNodeId?: number;
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
    id?: number;
    /** 消息方案ID */
    messageSchemaId?: number;
    /** 触发模式 */
    triggerMode?: ('BUSINESS_EVENT' | 'MEET_FORMULA');
    /** 消息触发动作 */
    triggerAction?: ('ADD' | 'REMOVE' | 'ENABLE' | 'DISABLE' | 'FLOW_COMPLETE' | 'RE_SUBMIT');
    /** 消息表达式类型 */
    expressionType?: ('NONE' | 'TIME_FUNCTION' | 'MATH_FUNCTION');
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
    judgeExpression?: ('EQ' | 'GT' | 'GE' | 'LT' | 'LE');
    /** 条件值 */
    value?: string;
    /** html 内容 */
    htmlContent?: string;
}
/** MessageSchemaTimeConfigDTO */
export interface IMessageSchemaTimeConfigDTO {
    /** ID */
    id?: number;
    /** 时间模式 */
    timeMode?: ('DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR');
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: ('FROM_BEGINNING_OF_MONTH' | 'FROM_END_OF_MONTH');
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: ('FROM_BEGINNING_OF_QUARTER' | 'FROM_END_OF_QUARTER');
    /** 每天第几天 */
    month?: number;
    /** 时间 */
    time?: string;
    /** 每半年计算模式 */
    halfYearCalcTimeMode?: ('FROM_BEGINNING_OF_HALF_YEAR' | 'FROM_END_OF_HALF_YEAR');
    /** 消息方案ID */
    messageSchemaId?: number;
}
/** FormConfigDTO */
export interface IFormConfigDTO {
    /** ID */
    id?: number;
    /** 应用编码 */
    applicationCode?: string;
    /** 详细流程字段编码 */
    detailTableFieldCode?: string;
    /** 详细流程字段ID */
    detailTableFieldId?: number;
    /** 详细流程字段序列号 */
    detailTableFieldSerialNo?: string;
    /** 是否详细流程表 */
    isDetailFlowTable?: ('Y' | 'N');
    /** 是否动态表单 */
    isDynamicForm?: ('Y' | 'N');
    /** 表 - 编码 */
    tableCode?: string;
}
