import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/自定义筛选项相关/editUsingPOST_2
*/
export default function fetchMethod(data: ICustomFiltersEditTheListObjectDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/customFilter/edit",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 自定义筛选项编辑list对象DTO */
export interface ICustomFiltersEditTheListObjectDTO {
    /** undefined */
    customFilterList: ICustomFilterEditObjectDTO[];
}
/** 自定义筛选项编辑对象DTO */
export interface ICustomFilterEditObjectDTO {
    /** 筛选应用code */
    filterApplicationCode: string;
    /** 字段名称 */
    formFieldName: string;
    /** 字段code */
    formFieldCode: string;
    /** 字段序列号 */
    formFieldSerialNo: string;
    /** 是否动态表字段 */
    isDynamicFormField: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
