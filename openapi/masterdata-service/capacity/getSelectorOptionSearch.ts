import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/产能相关/getSelectorOptionSearchUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityDropDownListToSearchForDtos }, extraOptions?: any) {
    return http<IJSONResultListCapacityDropDownSelectAListToSearchForResponseObjects>(
        {
            url: "/masterdata-service/capacity/getSelectorOptionSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产能下拉选择列表搜索DTO */
export interface ICapacityDropDownListToSearchForDtos {
    /** 产能名称 */
    capacityName?: string;
    /** 物料id */
    materialId?: string;
    /** 工序id */
    processId?: string;
}
/** JSONResult«List«产能下拉选择列表搜索响应对象»» */
export interface IJSONResultListCapacityDropDownSelectAListToSearchForResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheCapacityDropDownSelectionListSearchesForResponseObjects[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产能下拉选择列表搜索响应对象 */
export interface ITheCapacityDropDownSelectionListSearchesForResponseObjects {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
