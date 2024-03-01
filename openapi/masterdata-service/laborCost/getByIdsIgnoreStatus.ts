import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工费相关/getByIdsIgnoreStatusUsingPOST_2
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/masterdata-service/laborCost/getByIdsIgnoreStatus",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«工费下拉选择列表搜索响应DTO»» */
export interface IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPayDropDownSelectListToSearchResponseDtos[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工费下拉选择列表搜索响应DTO */
export interface IPayDropDownSelectListToSearchResponseDtos {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
