import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/getPageUsingPOST_31
*/
export default function fetchMethod(options: { data: IMessageQueuePagingQueryRequest }, extraOptions?: any) {
    return http<IJSONResultPagingMessageQueuePagingResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingMessageTask/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 消息队列分页查询请求 */
export interface IMessageQueuePagingQueryRequest {
    /** 消息发送方式 */
    sendingModeList?: EMessageQueuePagingQueryRequest_sendingModeList_items[];
    /** 发送状态 */
    executionStatusList?: EMessageQueuePagingQueryRequest_executionStatusList_items[];
    /** 当前页面 */
    pageNo?: number;
    /** 所属方案 */
    messageSchemaIdList?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 触发时间开始时间 */
    createTimeBegin?: number;
    /** 触发时间结束时间 */
    createTimeEnd?: number;
}
/** JSONResult«分页信息«消息队列分页响应对象»» */
export interface IJSONResultPagingMessageQueuePagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMessageQueuePageResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«消息队列分页响应对象» */
export interface IPageInformationMessageQueuePageResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IMessageQueuePagingResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMessageQueuePageResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMessageQueuePageResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 消息队列分页响应对象 */
export interface IMessageQueuePagingResponseObject {
    /** id */
    id?: string;
    /** 下次发送时间 */
    nextSendingTime?: number;
    /** 消息触发时间/创建时间 */
    createTime?: number;
    /** 消息方案ID */
    messageSchemaId?: string;
    /** 消息方案编号 */
    messageSchemaCode?: string;
    /** 消息标题 */
    messageTitle?: string;
    /** 发送内容 */
    messageContent?: string;
    /** 发送模式 */
    sendingMode?: EMessageQueuePagingResponseObject_sendingMode;
    /** 发送状态 */
    executionStatus?: EMessageQueuePagingResponseObject_executionStatus;
    /** 消息数量 */
    messageCount?: number;
    /** 是否用户确认 */
    isUserConfirm?: EMessageQueuePagingResponseObject_isUserConfirm;
    /** 失败原因 */
    failReason?: string;
    /** 发送模式描述 */
    sendingModeDesc?: string;
    /** 发送状态描述 */
    executionStatusDesc?: string;
}

export enum EMessageQueuePagingQueryRequest_sendingModeList_items {
    SYSTEM = "SYSTEM",
    SMS = "SMS",
    EMAIL = "EMAIL"
}

export enum EMessageQueuePagingQueryRequest_executionStatusList_items {
    NOT = "NOT",
    EXECUTED = "EXECUTED"
}

export enum EPageInformationMessageQueuePageResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMessageQueuePageResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageQueuePagingResponseObject_sendingMode {
    /** 系统消息 */
    SYSTEM = "SYSTEM",
    /** 短信 */
    SMS = "SMS",
    /** 邮件 */
    EMAIL = "EMAIL"
}

export enum EMessageQueuePagingResponseObject_executionStatus {
    /** 未执行 */
    NOT = "NOT",
    /** 已执行 */
    EXECUTED = "EXECUTED"
}

export enum EMessageQueuePagingResponseObject_isUserConfirm {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
