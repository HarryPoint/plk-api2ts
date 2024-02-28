import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:17600/doc.html#/default/应用消息配置相关/addUsingPOST
*/
export default function fetchMethod(options: { data: IAppMessageConfigAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/message-notification-service/appMessageConfig/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** AppMessageConfigAddRequestDTO */
export interface IAppMessageConfigAddRequestDTO {
    /** 标题 */
    title?: string;
    /** 应用编码 */
    applicationCode?: string;
    /** 详细表格字段序列号 */
    detailTableFieldSerialNo?: string;
    /** 详细表格字段编码 */
    detailTableFieldCode?: string;
    /** 是否明细表, Y - 主表， N - 明细表 */
    isDetailFlowTable?: EAppMessageConfigAddRequestDTO_isDetailFlowTable;
    /** 表格编码 */
    tableCode?: string;
    /** 发送内容配置列表 */
    sentContentConfigList?: IAppMessageSentContentTemplateAddRequestDTO[];
    /** 接受人列表 */
    recipientList?: IAppMessageRecipientAddRequestDTO[];
}
/** AppMessageSentContentTemplateAddRequestDTO */
export interface IAppMessageSentContentTemplateAddRequestDTO {
    /** 消息发送模式 */
    sendingMode?: EAppMessageSentContentTemplateAddRequestDTO_sendingMode;
    /** 消息内容  模板内容。  销售订单为:${SSALESORDERCODENS},这个订单有问题 */
    messageContent?: string;
    /** undefined */
    fieldSerialNoList?: Record<string, any>[];
    /** 字段元数据 */
    fieldMetaList?: IMessageContentFieldMetaAddDTO[];
    /** 是否使用配置 */
    isUseConfig?: EAppMessageSentContentTemplateAddRequestDTO_isUseConfig;
    /** html 内容 */
    htmlContent?: string;
    /** 邮件主题 */
    emailSubject?: string;
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
/** AppMessageRecipientAddRequestDTO */
export interface IAppMessageRecipientAddRequestDTO {
    /** 接收人类型 */
    recipientType?: EAppMessageRecipientAddRequestDTO_recipientType;
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

export enum EAppMessageConfigAddRequestDTO_isDetailFlowTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAppMessageSentContentTemplateAddRequestDTO_sendingMode {
    /** 系统消息 */
    SYSTEM = "SYSTEM",
    /** 短信 */
    SMS = "SMS",
    /** 邮件 */
    EMAIL = "EMAIL"
}

export enum EAppMessageSentContentTemplateAddRequestDTO_isUseConfig {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAppMessageRecipientAddRequestDTO_recipientType {
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
