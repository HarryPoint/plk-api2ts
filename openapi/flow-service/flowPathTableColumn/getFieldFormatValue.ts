import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表格相关/getFieldFormatValueUsingPOST
*/
export default function fetchMethod(options: { data: IFormatTheValueOfTheFlowTableColumnToQueryTheDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/flow-service/flowPathTableColumn/getFieldFormatValue",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程表格列对应的值格式化查询DTO */
export interface IFormatTheValueOfTheFlowTableColumnToQueryTheDTO {
    /** 流程表单code */
    flowPathCode?: string;
    /** 流程表单字段序列值 */
    flowPathFormFiledSerialNo?: string;
    /** 流程表单字段序列值 */
    flowPathFormFiledCode?: string;
    /** 格式化前的值 */
    fieldValue?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
