import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/编码同步任务相关/applyCodeExceptionUsingPOST
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/masterdata-service/codeSyncTask/applyCodeException",
            method: "post",
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
