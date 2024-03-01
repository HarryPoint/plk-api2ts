import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/关键参数相关/getSelectorOptionSearchUsingPOST_1
*/
export default function fetchMethod(options: { data: ISelectTheKeyParameterDropDownListToSearchForDtos }, extraOptions?: any) {
    return http<IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/masterdata-service/keyparameter/getSelectorOptionSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 关键参数下拉选择列表搜索DTO */
export interface ISelectTheKeyParameterDropDownListToSearchForDtos {
    /** 关键参数名称 */
    keyParameterName?: string;
    /** 物料id */
    materialId?: string;
    /** 工序id */
    processId?: string;
}
/** JSONResult«List«关键参数下拉选择列表搜索响应DTO»» */
export interface IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IKeyParameterDropDownSelectAListToSearchForResponseDtos[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 关键参数下拉选择列表搜索响应DTO */
export interface IKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
