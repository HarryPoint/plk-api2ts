import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/updateDynamicFormDataUsingPOST
export default function fetchMethod(data: IDynamicFormDataUpdateRequestDTO[]) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/dynamicData/updateDynamicFormData",
      data,
    });
}
// DynamicFormDataUpdateRequestDTO
export interface IDynamicFormDataUpdateRequestDTO {
    // undefined
    tableRecordIdList: number[];
    // undefined
    appCode: string;
    // undefined
    detailTableCode: string;
    // undefined
    tableColumnSerialToValueListMap: Record<string, string[]>;
    // undefined
    idFieldSerialNoToValueListMap: Record<string, string[]>;
    // undefined
    isUpdateDetailTable: string;
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
