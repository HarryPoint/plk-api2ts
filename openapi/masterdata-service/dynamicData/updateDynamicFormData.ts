import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/updateDynamicFormDataUsingPOST
*/
export default function fetchMethod(options: { data: IDynamicFormDataUpdateRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/dynamicData/updateDynamicFormData",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** DynamicFormDataUpdateRequestDTO */
export interface IDynamicFormDataUpdateRequestDTO {
    /** undefined */
    tableRecordIdList?: string[];
    /** undefined */
    appCode?: string;
    /** undefined */
    detailTableCode?: string;
    /** undefined */
    tableColumnSerialToValueListMap?: Record<string, string[]>;
    /** undefined */
    idFieldSerialNoToValueListMap?: Record<string, string[]>;
    /** undefined */
    isUpdateDetailTable?: EDynamicFormDataUpdateRequestDTO_isUpdateDetailTable;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EDynamicFormDataUpdateRequestDTO_isUpdateDetailTable {
    Y = "Y",
    N = "N"
}
