import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/公共相关/getUserScanProcessUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultUserScanProcessVO>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getUserScanProcess",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«UserScanProcessVO» */
export interface IJSONResultUserScanProcessVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserScanProcessVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** UserScanProcessVO */
export interface IUserScanProcessVO {
    /** undefined */
    id?: number;
    /** undefined */
    enterpriseId?: number;
    /** undefined */
    userId?: number;
    /** undefined */
    processId?: number;
}
