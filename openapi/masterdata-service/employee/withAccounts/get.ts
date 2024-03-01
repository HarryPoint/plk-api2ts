import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/getUsersWithAccountsUsingPOST
*/
export default function fetchMethod(options: { data: ISearchVOWithTheHomeOwnerDataSelectionList }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/employee/withAccounts/get",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 用户主数据选择列表搜索VO */
export interface ISearchVOWithTheHomeOwnerDataSelectionList {
    /** 员工ID列表 */
    idList?: string[];
    /** 用户名称/编号 */
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
