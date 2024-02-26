import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表单字段编码相关/getNumberRuleIdByBusinessTypeUsingGET
*/
export default function fetchMethod(options: { params: { businessType?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/flow-service/flowPathFormFieldCodeNumberRule/getNumberRuleIdByBusinessType",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
