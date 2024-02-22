import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getMasterDataEchoListByIdsUsingPOST
export function fetchMethod(data: number[], params: { enterpriseId: number; flowPathId: number }) {
    return post({
      url: "/masterdata-service/dynamicData/getMasterDataEchoListByIds",
      data,
      params,
    });
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
