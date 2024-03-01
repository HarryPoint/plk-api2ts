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
    /** undefined */
    nameOrCodeMatch?: string;
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
/** JSONResult«分页信息«仓位查询DTO»» */
export interface IJSONResultDTOForPagingInformationLocationQuery {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationLocationQueryDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«仓位查询DTO» */
export interface IPageInformationLocationQueryDTO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationLocationQueryDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationLocationQueryDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IPositionQueryDTO[];
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
/** 仓位查询DTO */
export interface IPositionQueryDTO {
    /** 区域编号 */
    areaCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 仓位编号 */
    code?: string;
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 库存数量 */
    quantity?: number;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationLocationQueryDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationLocationQueryDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
