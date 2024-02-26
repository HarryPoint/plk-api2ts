import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/表单数据分组规则相关/deleteGroupingUsingPOST
*/
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/formDataGroupingRule/delete",
            method: "post",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
