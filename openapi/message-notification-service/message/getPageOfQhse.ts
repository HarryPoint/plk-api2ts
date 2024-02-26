import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/消息相关/getPageOfQhseUsingPOST
*/
export default function fetchMethod(options: { data: IMessageSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMessageReturnsVO>(
        {
            url: "/message-notification-service/message/getPageOfQhse",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 消息搜索VO */
export interface IMessageSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 消息标题/内容 */
    searchData?: string;
    /** 消息类型 */
    type?: EMessageSearchVO_type;
    /** 时间开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 时间结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 忽略应用编码列表 */
    ignoreAppCodeList?: string[];
    /** 是否已读 */
    isRead?: EMessageSearchVO_isRead;
    /** 最新发布终端值合计 */
    sendTarget?: number;
    /** 应用编码列表 */
    appCodeList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«消息返回VO»» */
export interface IJSONResultPagingInformationMessageReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationMessageReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«消息返回VO» */
export interface IPagingInformationMessageReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMessageReturnVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationMessageReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationMessageReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 消息返回VO */
export interface IMessageReturnVO {
    /** id */
    id?: number;
    /** 消息类型 */
    type?: EMessageReturnVO_type;
    /** 消息类型描述 */
    typeDesc?: string;
    /** 消息标题 */
    title?: string;
    /** 消息摘要 */
    digest?: string;
    /** 是否已读 */
    isRead?: EMessageReturnVO_isRead;
    /** pc端跳转路径 */
    webPath?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 创建时间 */
    createTime?: string;
    /** 消息跳转类型 */
    pathType?: EMessageReturnVO_pathType;
    /** 消息跳转类型描述 */
    pathTypeDesc?: string;
    /** 最新发布终端值合计 */
    sendTarget?: number;
}

export enum EMessageSearchVO_type {
    /** 业务通知 */
    BUSINESS_NOTIFICATION = "BUSINESS_NOTIFICATION",
    /** 业务预警 */
    BUSINESS_EARLY_WARNING = "BUSINESS_EARLY_WARNING",
    /** 系统消息 */
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION"
}

export enum EMessageSearchVO_isRead {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationMessageReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationMessageReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageReturnVO_type {
    /** 业务通知 */
    BUSINESS_NOTIFICATION = "BUSINESS_NOTIFICATION",
    /** 业务预警 */
    BUSINESS_EARLY_WARNING = "BUSINESS_EARLY_WARNING",
    /** 系统消息 */
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION"
}

export enum EMessageReturnVO_isRead {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageReturnVO_pathType {
    /** 无操作 */
    NONE = "NONE",
    /** 跳转 */
    JUMP = "JUMP",
    /** 下载 */
    DOWNLOAD = "DOWNLOAD",
    /** 重新导出 */
    REEXPORT = "REEXPORT",
    /** 代办 */
    TODO = "TODO",
    /** 应用新增页面链接 */
    APP_ADD_PAGE_LINK = "APP_ADD_PAGE_LINK",
    /** 应用详细页面链接 */
    APP_LIST_PAGE_LINK = "APP_LIST_PAGE_LINK"
}
