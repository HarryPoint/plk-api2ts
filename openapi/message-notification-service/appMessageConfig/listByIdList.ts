import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/应用消息配置相关/listByIdListUsingPOST
*/
export default function fetchMethod(options: { data: IAppMessageConfigBatchQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListAppMessageConfigDTO>(
        {
            url: "/message-notification-service/appMessageConfig/listByIdList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** AppMessageConfigBatchQueryRequestDTO */
export interface IAppMessageConfigBatchQueryRequestDTO {
    /** 应用消息配置ID列表 */
    idList?: number[];
}
/** JSONResult«List«AppMessageConfigDTO»» */
export interface IJSONResultListAppMessageConfigDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAppMessageConfigDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** AppMessageConfigDTO */
export interface IAppMessageConfigDTO {
    /** 消息配置ID */
    id?: number;
    /** 标题 */
    title?: string;
    /** 应用编码 */
    applicationCode?: string;
    /** 详细表格字段序列号 */
    detailTableFieldSerialNo?: string;
    /** 详细表格字段编码 */
    detailTableFieldCode?: string;
    /** 是否明细表, Y - 主表， N - 明细表 */
    isDetailFlowTable?: EAppMessageConfigDTO_isDetailFlowTable;
    /** 表格编码 */
    tableCode?: string;
    /** 发送内容配置列表 */
    sentContentConfigList?: IAppMessageSentContentTemplateDTO[];
    /** 接受人列表 */
    recipientList?: IAppMessageRecipientDTO[];
    /** undefined */
    applicationId?: number;
}
/** AppMessageSentContentTemplateDTO */
export interface IAppMessageSentContentTemplateDTO {
    /** 消息发送内容模板ID */
    id?: number;
    /** 消息发送模式 */
    sendingMode?: EAppMessageSentContentTemplateDTO_sendingMode;
    /** 消息内容  模板内容。  销售订单为:${SSALESORDERCODENS},这个订单有问题 */
    messageContent?: string;
    /** undefined */
    fieldSerialNoList?: Record<string, any>[];
    /** 字段元数据 */
    fieldMetaList?: IMessageContentFieldMetaDTO[];
    /** 是否使用配置 */
    isUseConfig?: EAppMessageSentContentTemplateDTO_isUseConfig;
    /** html 内容 */
    htmlContent?: string;
    /** 邮件主题 */
    emailSubject?: string;
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
/** AppMessageRecipientDTO */
export interface IAppMessageRecipientDTO {
    /** 消息接收人ID */
    id?: number;
    /** 接收人类型 */
    recipientType?: EAppMessageRecipientDTO_recipientType;
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
    /** 节点接受人类型 */
    nodeRecipientTypeList?: Record<string, any>[];
    /** 部门列表 */
    departmentList?: IDepartmentResponseObject1[];
    /** 班组列表 */
    classGroupList?: IDepartmentResponseObject[];
    /** 用户列表 */
    userList?: IPersonnelResponseObject[];
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

export enum EAppMessageConfigDTO_isDetailFlowTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAppMessageSentContentTemplateDTO_sendingMode {
    /** 系统消息 */
    SYSTEM = "SYSTEM",
    /** 短信 */
    SMS = "SMS",
    /** 邮件 */
    EMAIL = "EMAIL"
}

export enum EAppMessageSentContentTemplateDTO_isUseConfig {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAppMessageRecipientDTO_recipientType {
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
