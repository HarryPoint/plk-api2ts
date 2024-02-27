import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/表单数据分组规则相关/editUsingPOST_4
*/
export default function fetchMethod(options: { data: IFormDataGroupingSettingsAreRelated }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/formDataGroupingRule/{id}/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 表单数据分组设置相关 */
export interface IFormDataGroupingSettingsAreRelated {
    /** ID */
    id?: string;
    /** 应用ID */
    flowPathId?: string;
    /** 分组字段序列号 */
    groupingFieldSerialNo?: Record<string, any>[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
