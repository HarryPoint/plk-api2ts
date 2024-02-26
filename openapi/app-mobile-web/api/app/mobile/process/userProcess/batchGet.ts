import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/工序相关/batchGetUserProcessUsingPOST
*/
export default function fetchMethod(options: { data: number[] }, extraOptions?: any) {
    return http<IJSONResultListUserProcessVo>(
        {
            url: "/app-mobile-web/api/app/mobile/process/userProcess/batchGet",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«UserProcessVo»» */
export interface IJSONResultListUserProcessVo {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserProcessVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** UserProcessVo */
export interface IUserProcessVo {
    /** undefined */
    id?: number;
    /** undefined */
    processId?: number;
    /** undefined */
    executorType?: ('USER' | 'ROLE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'SYS_CONTROL');
    /** undefined */
    refId?: number;
    /** undefined */
    type?: ('PRODUCE' | 'QUALITY');
    /** undefined */
    refName?: string;
}
