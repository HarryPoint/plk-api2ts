import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/客户相关/searchPublicCustomerSelectorDataListUsingPOST
*/
export default function fetchMethod(options: { data: IPaging1 }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/customer/publicCustomer/selector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_1 */
export interface IPaging1 {
    /** ID 列表 */
    customerIdList?: string[];
    /** 是否包含销售用户，默认为 不包含(N) */
    isContainSalesUser?: EPaging1_isContainSalesUser;
    /** 客户名称，模糊匹配 */
    name?: string;
    /** 客户名称或Code，模糊匹配 */
    nameOrCode?: string;
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
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}

export enum EPaging1_isContainSalesUser {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
