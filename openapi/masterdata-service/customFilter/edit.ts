import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/自定义筛选项相关/editUsingPOST_2
*/
export default function fetchMethod(options: { data: ICustomFiltersEditTheListObjectDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/customFilter/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 自定义筛选项编辑list对象DTO */
export interface ICustomFiltersEditTheListObjectDTO {
    /** undefined */
    customFilterList?: ICustomFilterEditObjectDTO[];
}
/** 自定义筛选项编辑对象DTO */
export interface ICustomFilterEditObjectDTO {
    /** 筛选应用code */
    filterApplicationCode?: string;
    /** 字段code */
    formFieldCode?: string;
    /** 字段名称 */
    formFieldName?: string;
    /** 字段序列号 */
    formFieldSerialNo?: string;
    /** 是否动态表字段 */
    isDynamicFormField?: ECustomFilterEditObjectDTO_isDynamicFormField;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ECustomFilterEditObjectDTO_isDynamicFormField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
