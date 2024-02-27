import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/流程数据相关/getFromDataGroupingUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultListFormDataGroupingDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathData/getFormDataGrouping",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«表单数据分组DTO»» */
export interface IJSONResultListFormDataGroupingDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormDataGroupingDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: EFormDataGroupingDTO_cascadeFormData;
    /** 多级基础数据上级ID */
    treeDataParentId?: string;
}

export enum EFormDataGroupingDTO_cascadeFormData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
