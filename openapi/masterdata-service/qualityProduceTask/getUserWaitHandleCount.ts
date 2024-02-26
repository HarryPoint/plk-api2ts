import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产质检管理/getUserWaitHandleCountUsingGET_1
*/
export default function fetchMethod(params: { enterpriseId?: number; userId?: number }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/qualityProduceTask/getUserWaitHandleCount",
            method: "get",
            params,
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
