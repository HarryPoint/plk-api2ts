import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料模具相关/pageMoveInDeviceUsingPOST_1
*/
export default function fetchMethod(options: { data: IFeedMoldPagingQueryObject }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFeedMoldRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutMold/pageMoveInDevice",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料模具分页查询对象 */
export interface IFeedMoldPagingQueryObject {
    /** 生产任务ids */
    produceTaskIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 名称或者编号 */
    nameOrCode?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«进料模具响应DTO»» */
export interface IJSONResultPagingInformationFeedMoldRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationFeedMoldRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«进料模具响应DTO» */
export interface IPagingInformationFeedMoldRespondsToDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IFeedMoldRespondsToDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationFeedMoldRespondsToDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationFeedMoldRespondsToDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 进料模具响应DTO */
export interface IFeedMoldRespondsToDTO {
    /** 模具id */
    id?: string;
    /** 模具名称 */
    name?: string;
    /** 模具编号 */
    code?: string;
    /** 生产工艺模具id */
    produceTechnologyMoldId?: string[];
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedMoldRespondsToDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedMoldRespondsToDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
