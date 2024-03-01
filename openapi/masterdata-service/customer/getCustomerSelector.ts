import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/客户相关/getCustomerSelectorUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerSelectionListSearch }, extraOptions?: any) {
    return http<IJSONResultPagingInformationIdCodeNameCommonTransmissionObject>(
        {
            url: "/masterdata-service/customer/getCustomerSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户选择列表搜索 */
export interface ICustomerSelectionListSearch {
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 客户名称/编号 */
    nameOrCode?: string;
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
/** JSONResult«分页信息«Id Code Name 通用传输对象»» */
export interface IJSONResultPagingInformationIdCodeNameCommonTransmissionObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationIdCodeNameCommonTransportObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«Id Code Name 通用传输对象» */
export interface IPagingInformationIdCodeNameCommonTransportObject {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationIdCodeNameCommonTransportObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationIdCodeNameCommonTransportObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IIdCodeNameGenericTransportObject[];
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
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationIdCodeNameCommonTransportObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationIdCodeNameCommonTransportObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
