import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/calcFormFillValueUsingPOST
export default function fetchMethod(data: IFormFillRequest, params: { enterpriseId: number }) {
    return post<IJSONResultListJSONObject['data']>({
      url: "/masterdata-service/dynamicData/formFillValue/calc",
      data,
      params,
    });
}
// 表单填充请求
export interface IFormFillRequest {
    // 关联字段ID
    associatedFieldId: number;
    // 填充数据项
    itemList: IFormFillItemSubscript[];
    // undefined
    formRecord: Record<string, Record<string, any>>;
}
// 表单填充项下标
export interface IFormFillItemSubscript {
    // 源数据ID列表
    sourceDataIdList: number[];
    // 明细行下标, 从 0 开始。
    detailRowIndex: number;
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
