import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/DataEase菜单相关/pageUsingPOST
*/
export default function fetchMethod(options: { data: IDataEaseMenuPagesQueryObjects }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDataEaseMenuPagingResponseObject>(
        {
            url: "/plk-uaa-service/dataEaseMenu/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** DataEase菜单分页查询对象 */
export interface IDataEaseMenuPagesQueryObjects {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 企业ids */
    enterpriseIds?: number[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 创建人ids */
    createUserIds?: number[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 菜单名称 */
    name?: string;
    /** 电脑端 -- 传Y */
    isPcTerminal?: ('Y' | 'N');
    /** 移动端 -- 传Y */
    isMobileTerminal?: ('Y' | 'N');
    /** 创建时间 -- 开始 */
    beginCreateTime?: string;
    /** 创建时间 -- 结束 */
    endCreateTime?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«DataEase菜单分页响应对象»» */
export interface IJSONResultPagingInformationDataEaseMenuPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationDataEaseMenuPagingResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«DataEase菜单分页响应对象» */
export interface IPagingInformationDataEaseMenuPagingResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IDataEaseMenuPagingResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** DataEase菜单分页响应对象 */
export interface IDataEaseMenuPagingResponseObject {
    /** 创建人id */
    createUserId?: number;
    /** 创建人名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateUserId?: number;
    /** 更新人名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 菜单名称 */
    name?: string;
    /** 链接地址 */
    originalLinkUrl?: string;
    /** 是否在PC端发布 */
    isPcTerminal?: ('Y' | 'N');
    /** 是否在移动端发布 */
    isMobileTerminal?: ('Y' | 'N');
    /** 状态 */
    dataStatus?: number;
}
