import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17600/doc.html#/default/短信模板/getPageUsingPOST_3
*/
export default function fetchMethod(options: { data: IQueryDtosUsingSMSTemplates }, extraOptions?: any) {
    return http<IJSONResultSpecifiesTheResponseDTOToQueryPagingInformationShortMessageTemplate>(
        {
            url: "/message-notification-service/smsTemplate/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 短信模板查询DTO */
export interface IQueryDtosUsingSMSTemplates {
    /** 模板名称 */
    templateName?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 创建员工 */
    createUserIdList?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 创建时间开始时间 */
    createBeginTime?: number;
    /** 审核状态 */
    auditStatusList?: EQueryDtosUsingSMSTemplates_auditStatusList_items[];
    /** 创建时间结束时间 */
    createEndTime?: number;
}
/** JSONResult«分页信息«短信模板查询响应DTO»» */
export interface IJSONResultSpecifiesTheResponseDTOToQueryPagingInformationShortMessageTemplate {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationSMSTemplateQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«短信模板查询响应DTO» */
export interface IPageInformationSMSTemplateQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ISMSTemplateQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSMSTemplateQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSMSTemplateQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 短信模板查询响应DTO */
export interface ISMSTemplateQueryResponseDTO {
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
    /** 消息方案id */
    messageSchemaId?: string;
    /** 模板名称 */
    templateName?: string;
    /** 短信内容 */
    messageContent?: string;
    /** 审核状态 */
    auditStatus?: ESMSTemplateQueryResponseDTO_auditStatus;
    /** 失败原因 */
    failReason?: string;
    /** 显示信息内容 */
    showMessageContent?: string;
    /** 字段序列号 */
    fieldSerialNoList?: Record<string, any>[];
}

export enum EQueryDtosUsingSMSTemplates_auditStatusList_items {
    NONE = "NONE",
    AUDIT_STATE_INIT = "AUDIT_STATE_INIT",
    AUDIT_STATE_PASS = "AUDIT_STATE_PASS",
    AUDIT_STATE_NOT_PASS = "AUDIT_STATE_NOT_PASS"
}

export enum EPageInformationSMSTemplateQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSMSTemplateQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESMSTemplateQueryResponseDTO_auditStatus {
    /** 未审核 */
    NONE = "NONE",
    /** 审核中 */
    AUDIT_STATE_INIT = "AUDIT_STATE_INIT",
    /** 通过 */
    AUDIT_STATE_PASS = "AUDIT_STATE_PASS",
    /** 未通过 */
    AUDIT_STATE_NOT_PASS = "AUDIT_STATE_NOT_PASS"
}
