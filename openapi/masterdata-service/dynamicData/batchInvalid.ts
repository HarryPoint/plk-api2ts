import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/batchInvalidUsingPOST
export default function fetchMethod(data: IDynamicFormDisabledRequestDTO, params: { flowPathId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/dynamicData/batchInvalid",
      data,
      params,
    });
}
// DynamicFormDisabledRequestDTO
export interface IDynamicFormDisabledRequestDTO {
    // ID列表
    ids: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
