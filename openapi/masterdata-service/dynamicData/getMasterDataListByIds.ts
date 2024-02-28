import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getMasterDataListByIdsUsingPOST
*/
export default function fetchMethod(options: { data: IMasterDataQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getMasterDataListByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** MasterDataQueryVO */
export interface IMasterDataQueryVO {
    /** 流程编码 */
    flowPathCode?: string;
    /** 主数据ids */
    ids?: string[];
}
/** JSONResult«List«JSONObject»» */
export interface IJSONResultListJSONObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IJSONObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** JSONObject */
export interface IJSONObject {
}
