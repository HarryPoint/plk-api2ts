import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/queryFormRecordDetailListUsingPOST
*/
export default function fetchMethod(options: { data: IBatchQueryFormDataRequests }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/queryFormRecordList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批量查询表单数据请求 */
export interface IBatchQueryFormDataRequests {
    /** 应用ID */
    flowPathId?: string;
    /** 表单记录ID列表 */
    formRecordIdList?: string[];
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
