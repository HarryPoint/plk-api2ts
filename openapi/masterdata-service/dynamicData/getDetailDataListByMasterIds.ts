import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getDetailDataListByMasterIdsUsingPOST
export default function fetchMethod(data: ISubtableDataQueryVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getDetailDataListByMasterIds",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 子表数据查询VO
export interface ISubtableDataQueryVO {
    // 流程编码
    flowPathCode: string;
    // 表格编码
    tableCode: string;
    // 主数据ids
    masterDataIdList: number[];
    // 过滤字段序列号
    filterFieldCode: string;
    // 过滤字段值
    filterFieldValue: Record<string, any>;
}
// JSONResult«List«JSONObject»»
export interface IJSONResultListJSONObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IJSONObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// JSONObject
export interface IJSONObject {
}
