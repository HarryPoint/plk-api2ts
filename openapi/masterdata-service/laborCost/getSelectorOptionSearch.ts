import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工费相关/getSelectorOptionSearchUsingPOST_2
*/
export default function fetchMethod(data: ITheLaborCostDropDownListIsUsedToSearchForDtos, extraOptions?: any) {
    return http<IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/masterdata-service/laborCost/getSelectorOptionSearch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 工费下拉选择列表搜索DTO */
export interface ITheLaborCostDropDownListIsUsedToSearchForDtos {
    /** 物料id */
    materialId?: number;
    /** 工序id */
    processId?: number;
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
    ts?: number;
}
/** 工费下拉选择列表搜索响应DTO */
export interface IPayDropDownSelectListToSearchResponseDtos {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}
