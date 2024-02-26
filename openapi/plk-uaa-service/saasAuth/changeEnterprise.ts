import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/changeEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation1 }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/saasAuth/changeEnterprise",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** Id 信息_1 */
export interface IIdInformation1 {
    /** id */
    id: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
