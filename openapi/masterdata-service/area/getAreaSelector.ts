import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/区域相关/getAreaSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IRegionalMasterDataSelectionListSearchVO }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/area/getAreaSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 区域主数据选择列表搜索VO */
export interface IRegionalMasterDataSelectionListSearchVO {
    /** 名称/编号 */
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
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
