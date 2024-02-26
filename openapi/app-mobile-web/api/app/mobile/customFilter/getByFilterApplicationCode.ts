import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/自定义筛选项相关/getByFilterApplicationCodeUsingGET
*/
export default function fetchMethod(params: { filterApplicationCode?: string }, extraOptions?: any) {
    return http<IJSONResultListReturnObjectDTOForAUserDefinedFilter>(
        {
            url: "/app-mobile-web/api/app/mobile/customFilter/getByFilterApplicationCode",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«自定义筛选项返回对象DTO»» */
export interface IJSONResultListReturnObjectDTOForAUserDefinedFilter {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICustomFiltersReturnObjectDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 自定义筛选项返回对象DTO */
export interface ICustomFiltersReturnObjectDTO {
    /** id */
    id?: number;
    /** 筛选应用code */
    filterApplicationCode?: string;
    /** 字段名称 */
    formFieldName?: string;
    /** 字段code */
    formFieldCode?: string;
    /** 字段序列号 */
    formFieldSerialNo?: string;
    /** 是否动态表字段 */
    isDynamicFormField?: string;
}
