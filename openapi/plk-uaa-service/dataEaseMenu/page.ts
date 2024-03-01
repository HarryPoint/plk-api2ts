import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/DataEase菜单相关/pageUsingPOST
*/
export default function fetchMethod(options: { data: IDataEaseMenuPagesQueryObjects }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDataEaseMenuPagingResponseObject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单分页查询对象 */
export interface IDataEaseMenuPagesQueryObjects {
    /** 创建时间 -- 开始 */
    beginCreateTime?: number;
    /** 创建人ids */
    createUserIds?: string[];
    /** 创建时间 -- 结束 */
    endCreateTime?: number;
    /** 企业ids */
    enterpriseIds?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 移动端 -- 传Y */
    isMobileTerminal?: EDataEaseMenuPagesQueryObjects_isMobileTerminal;
    /** 电脑端 -- 传Y */
    isPcTerminal?: EDataEaseMenuPagesQueryObjects_isPcTerminal;
    /** 菜单名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«DataEase菜单分页响应对象»» */
export interface IJSONResultPagingInformationDataEaseMenuPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationDataEaseMenuPagingResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«DataEase菜单分页响应对象» */
export interface IPagingInformationDataEaseMenuPagingResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationDataEaseMenuPagingResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationDataEaseMenuPagingResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IDataEaseMenuPagingResponseObject[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** DataEase菜单分页响应对象 */
export interface IDataEaseMenuPagingResponseObject {
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** 企业id */
    enterpriseId?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** id */
    id?: string;
    /** 是否在移动端发布 */
    isMobileTerminal?: EDataEaseMenuPagingResponseObject_isMobileTerminal;
    /** 是否在PC端发布 */
    isPcTerminal?: EDataEaseMenuPagingResponseObject_isPcTerminal;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum EDataEaseMenuPagesQueryObjects_isMobileTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataEaseMenuPagesQueryObjects_isPcTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationDataEaseMenuPagingResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationDataEaseMenuPagingResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataEaseMenuPagingResponseObject_isMobileTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataEaseMenuPagingResponseObject_isPcTerminal {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
