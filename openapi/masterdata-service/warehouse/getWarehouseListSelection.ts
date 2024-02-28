import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/仓位相关/getWarehouseListSelectionUsingPOST
*/
export default function fetchMethod(options: { data: IPositionTreeReturnsVO1 }, extraOptions?: any) {
    return http<IJSONResultDTOForPagingInformationLocationQuery>(
        {
            url: "/masterdata-service/warehouse/getWarehouseListSelection",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓位树返回VO_1 */
export interface IPositionTreeReturnsVO1 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** undefined */
    nameOrCodeMatch?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«仓位查询DTO»» */
export interface IJSONResultDTOForPagingInformationLocationQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationLocationQueryDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓位查询DTO» */
export interface IPageInformationLocationQueryDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IPositionQueryDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationLocationQueryDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationLocationQueryDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 仓位查询DTO */
export interface IPositionQueryDTO {
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 区域编号 */
    areaCode?: string;
    /** 库存数量 */
    quantity?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationLocationQueryDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationLocationQueryDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
