import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检分类/getPageUsingPOST_21
*/
export default function fetchMethod(options: { data: IInspectionCategorySearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultThePageInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/qualityInspectionCategory/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检分类搜索VO */
export interface IInspectionCategorySearchVO {
    /** 编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
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
    /** 响应结果 */
    data?: IPagingInformationInspectionClassificationReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检分类返回VO» */
export interface IPagingInformationInspectionClassificationReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationInspectionClassificationReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationInspectionClassificationReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheInspectionClassificationReturnsVO[];
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
/** 质检分类返回VO */
export interface ITheInspectionClassificationReturnsVO {
    /** 质检分类编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 质检分类名称 */
    name?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationInspectionClassificationReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationInspectionClassificationReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
