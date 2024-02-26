import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/短信内容相关/getPageUsingPOST_31
*/
export default function fetchMethod(options: { data: IQueryDtosUsingSMSTemplates }, extraOptions?: any) {
    return http<IJSONResultSpecifiesTheResponseDTOToQueryPagingInformationShortMessageTemplate>(
        {
            url: "/app-enterprise-web/api/app/enterprise/smsTemplate/getPage",
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
    createUserIdList?: number[];
    /** 分页大小 */
    pageSize?: number;
    /** 创建时间开始时间 */
    createBeginTime?: string;
    /** 审核状态 */
    auditStatusList?: string[];
    /** 创建时间结束时间 */
    createEndTime?: string;
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
    ts?: number;
}
/** 分页信息«短信模板查询响应DTO» */
export interface IPageInformationSMSTemplateQueryResponseDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISMSTemplateQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 短信模板查询响应DTO */
export interface ISMSTemplateQueryResponseDTO {
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
    /** 消息方案id */
    messageSchemaId?: number;
    /** 模板名称 */
    templateName?: string;
    /** 短信内容 */
    messageContent?: string;
    /** 审核状态 */
    auditStatus?: string;
    /** 失败原因 */
    failReason?: string;
    /** 显示信息内容 */
    showMessageContent?: string;
    /** 字段序列号 */
    fieldSerialNoList?: Record<string, any>[];
}
