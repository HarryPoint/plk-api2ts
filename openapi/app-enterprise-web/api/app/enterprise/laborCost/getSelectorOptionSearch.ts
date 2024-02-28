import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/工费相关/getSelectorOptionSearchUsingPOST_2
*/
export default function fetchMethod(options: { data: ITheLaborCostDropDownListIsUsedToSearchForDtos }, extraOptions?: any) {
    return http<IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/laborCost/getSelectorOptionSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工费下拉选择列表搜索DTO */
export interface ITheLaborCostDropDownListIsUsedToSearchForDtos {
    /** 物料id */
    materialId?: string;
    /** 工序id */
    processId?: string;
    /** 工费名称 */
    laborCostName?: string;
}
/** JSONResult«List«工费下拉选择列表搜索响应DTO»» */
export interface IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPayDropDownSelectListToSearchResponseDtos[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工费下拉选择列表搜索响应DTO */
export interface IPayDropDownSelectListToSearchResponseDtos {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}
