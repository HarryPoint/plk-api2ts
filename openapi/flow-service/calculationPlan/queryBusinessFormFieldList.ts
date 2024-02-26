import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/queryBusinessFormFieldListUsingPOST
*/
export default function fetchMethod(options: { data: IFormFieldQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListFormFieldQueryResponseDTO>(
        {
            url: "/flow-service/calculationPlan/queryBusinessFormFieldList",
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
    isDetailFlow?: string;
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
    formFieldType?: string;
}
