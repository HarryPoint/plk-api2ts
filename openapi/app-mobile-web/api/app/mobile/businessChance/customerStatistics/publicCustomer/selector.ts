import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/CRM-客户统计报表相关/searchPublicCustomerSelectorDataListUsingPOST
*/
export default function fetchMethod(options: { data: IPaging }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/app-mobile-web/api/app/mobile/businessChance/customerStatistics/publicCustomer/selector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页 */
export interface IPaging {
    /** ID 列表 */
    customerIdList?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 客户名称，模糊匹配 */
    name?: string;
    /** 客户名称或Code，模糊匹配 */
    nameOrCode?: string;
    /** 是否包含销售用户，默认为 不包含(N) */
    isContainSalesUser?: EPaging_isContainSalesUser;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}

export enum EPaging_isContainSalesUser {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
