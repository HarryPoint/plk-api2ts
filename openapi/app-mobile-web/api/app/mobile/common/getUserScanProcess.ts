import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/公共相关/getUserScanProcessUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultUserScanProcessVO>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getUserScanProcess",
            method: "GET",
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
    ts?: string;
}
/** UserScanProcessVO */
export interface IUserScanProcessVO {
    /** undefined */
    id?: string;
    /** undefined */
    enterpriseId?: string;
    /** undefined */
    userId?: string;
    /** undefined */
    processId?: string;
}
