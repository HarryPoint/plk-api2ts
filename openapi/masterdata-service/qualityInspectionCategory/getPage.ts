import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检分类/getPageUsingPOST_20
*/
export default function fetchMethod(options: { data: IInspectionCategorySearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultThePageInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/qualityInspectionCategory/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检分类搜索VO */
export interface IInspectionCategorySearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«质检分类返回VO»» */
export interface IJSONResultThePageInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationInspectionClassificationReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«质检分类返回VO» */
export interface IPagingInformationInspectionClassificationReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheInspectionClassificationReturnsVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationInspectionClassificationReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationInspectionClassificationReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 质检分类返回VO */
export interface ITheInspectionClassificationReturnsVO {
    /** id */
    id?: number;
    /** 质检分类名称 */
    name?: string;
    /** 质检分类编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationInspectionClassificationReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationInspectionClassificationReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
