import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/removeByIdUsingGET
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/removeById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«boolean» */
export interface IJSONResultboolean {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: boolean;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
