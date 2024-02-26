import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/客户相关/getCustomerSelectorUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerSelectionListSearch }, extraOptions?: any) {
    return http<IJSONResultPagingInformationIdCodeNameCommonTransmissionObject>(
        {
            url: "/masterdata-service/customer/getCustomerSelector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 客户选择列表搜索 */
export interface ICustomerSelectionListSearch {
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
    /** 客户名称/编号 */
    nameOrCode?: string;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationIdCodeNameCommonTransportObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«Id Code Name 通用传输对象» */
export interface IPagingInformationIdCodeNameCommonTransportObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IIdCodeNameGenericTransportObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationIdCodeNameCommonTransportObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationIdCodeNameCommonTransportObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
}

export enum EPagingSort_isAsc {
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

export enum EPagingInformationIdCodeNameCommonTransportObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
