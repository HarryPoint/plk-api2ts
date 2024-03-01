import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺相关/getPageUsingPOST_30
*/
export default function fetchMethod(options: { data: IStandardProcessPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationStandardProcessPagingResponseObject>(
        {
            url: "/masterdata-service/standardTechnology/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分页查询对象 */
export interface IStandardProcessPagingQueryObject {
    /** 标准工艺名称 -- 模糊查询 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 标准工艺分类id */
    standardTechnologyCategoryIds?: string[];
    /** 标准工艺状态列表 */
    statusList?: EStandardProcessPagingQueryObject_statusList_items[];
    /** 未分类 -- Y 就是查未分类，为空或者N 不起作用 */
    unCategory?: EStandardProcessPagingQueryObject_unCategory;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«标准工艺分页响应对象»» */
export interface IJSONResultPagingInformationStandardProcessPagingResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationStandardProcessPageResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«标准工艺分页响应对象» */
export interface IPageInformationStandardProcessPageResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationStandardProcessPageResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationStandardProcessPageResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IStandardProcessPagingResponseObject[];
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
/** 标准工艺分页响应对象 */
export interface IStandardProcessPagingResponseObject {
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 所属分类id */
    standardTechnologyCategoryId?: string;
    /** 所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 状态 */
    status?: EStandardProcessPagingResponseObject_status;
    /** 缩略图 */
    thumbnail?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}

export enum EStandardProcessPagingQueryObject_statusList_items {
    DRAFT = "DRAFT",
    VALID = "VALID",
    INVALID = "INVALID"
}

export enum EStandardProcessPagingQueryObject_unCategory {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationStandardProcessPageResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationStandardProcessPageResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EStandardProcessPagingResponseObject_status {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 已启用 */
    VALID = "VALID",
    /** 已停用 */
    INVALID = "INVALID"
}
