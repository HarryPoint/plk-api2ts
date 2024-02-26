import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/表单数据分组规则相关/getByFlowPathIdUsingGET_2
*/
export default function fetchMethod(options: { params: { flowPathId?: number } }, extraOptions?: any) {
    return http<IJSONResultFormDataGroupingSettingsAreRelated>(
        {
            url: "/flow-service/formDataGroupingRule/byFlowPath/get",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«表单数据分组设置相关» */
export interface IJSONResultFormDataGroupingSettingsAreRelated {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormDataGroupingSettingsAreRelated;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 表单数据分组设置相关 */
export interface IFormDataGroupingSettingsAreRelated {
    /** ID */
    id?: number;
    /** 应用ID */
    flowPathId?: number;
    /** 分组字段序列号 */
    groupingFieldSerialNo?: Record<string, any>[];
}
