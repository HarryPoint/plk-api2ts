import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/getPageUsingPOST_11
*/
export default function fetchMethod(options: { data: IMessageSchemeQueryRequest }, extraOptions?: any) {
    return http<IJSONResultPageInformationPageQueryResponse>(
        {
            url: "/app-enterprise-web/api/app/enterprise/messageSchema/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 消息方案查询请求 */
export interface IMessageSchemeQueryRequest {
    /** 当前页面 */
    pageNo?: number;
    /** 消息发送方式 */
    sendingModeList?: EMessageSchemeQueryRequest_sendingModeList_items[];
    /** 分页大小 */
    pageSize?: number;
    /** 发送状态 */
    sendingContentStatusList?: EMessageSchemeQueryRequest_sendingContentStatusList_items[];
    /** 消息标题 */
    messageSchemaTitle?: string;
    /** 创建员工 */
    createUserIdList?: string[];
    /** 创建时间开始时间 */
    createBeginTime?: number;
    /** 创建时间结束时间 */
    createEndTime?: number;
    /** 方案状态 */
    dataStatusList?: number[];
    /** 标题和编码模糊匹配 */
    titleOrCodeMatch?: string;
    /** 业务 */
    applicationName?: string;
}
/** JSONResult«分页信息«分页查询响应»» */
export interface IJSONResultPageInformationPageQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationPageQueryResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«分页查询响应» */
export interface IPageInformationPageQueryResponse {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IPagingQueryResponse[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationPageQueryResponse_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationPageQueryResponse_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 分页查询响应 */
export interface IPagingQueryResponse {
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
    /** 发送状态 */
    sendingContentStatus?: EPagingQueryResponse_sendingContentStatus;
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
    /** 消息方案id */
    id?: string;
    /** 方案编号 */
    code?: string;
    /** 消息标题 */
    title?: string;
    /** 消息发送方式 */
    sendingModeList?: string;
    /** 消息发送方式描述集合 */
    sendingModeDescList?: string[];
    /** 发送状态描述集合 */
    sendingContentStatusDesc?: string;
    /** 方案状态 */
    dataStatus?: number;
    /** 异常原因 */
    exceptionalReason?: string;
    /** 业务 */
    applicationName?: string;
    /** 表单配置ID */
    formConfigId?: string;
}

export enum EMessageSchemeQueryRequest_sendingModeList_items {
    SYSTEM = "SYSTEM",
    SMS = "SMS",
    EMAIL = "EMAIL"
}

export enum EMessageSchemeQueryRequest_sendingContentStatusList_items {
    NORMAL = "NORMAL",
    ABNORMAL = "ABNORMAL"
}

export enum EPageInformationPageQueryResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationPageQueryResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingQueryResponse_sendingContentStatus {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 异常 */
    ABNORMAL = "ABNORMAL"
}
