import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务自定义卡片样式相关/getUsingGET_3
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListProductionTaskCustomCardStyleResponseObjectDTO>(
        {
            url: "/masterdata-service/produceTaskCustomCardStyle/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产任务自定义卡片样式响应对象DTO»» */
export interface IJSONResultListProductionTaskCustomCardStyleResponseObjectDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskCustomCardStyleResponseObjectDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产任务自定义卡片样式响应对象DTO */
export interface IProductionTaskCustomCardStyleResponseObjectDTO {
    /** id */
    id?: number;
    /** 字段名称 */
    formFieldName?: string;
    /** 字段code */
    formFieldCode?: string;
    /** 字段类型 */
    formFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 字段表 */
    formFieldTable?: ('PRODUCE_ORDER' | 'PRODUCE_TASK');
    /** 显示位置 */
    displayPosition?: string;
    /** 扩展元数据 */
    metaData?: string;
}
