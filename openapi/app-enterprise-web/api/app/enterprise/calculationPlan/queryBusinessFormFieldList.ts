import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/计算方案相关/queryBusinessFormFieldListUsingPOST
*/
export default function fetchMethod(options: { data: IFormFieldQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListFormFieldQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calculationPlan/queryBusinessFormFieldList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FormFieldQueryRequestDTO */
export interface IFormFieldQueryRequestDTO {
    /** 应用ID */
    appId?: number;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: ('Y' | 'N');
}
/** JSONResult«List«FormFieldQueryResponseDTO»» */
export interface IJSONResultListFormFieldQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormFieldQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FormFieldQueryResponseDTO */
export interface IFormFieldQueryResponseDTO {
    /** ID */
    id?: number;
    /** 编码 */
    code?: string;
    /** 序列号 */
    serialNo?: string;
    /** 名称 */
    name?: string;
    /** 表单字段类型 */
    formFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
}
