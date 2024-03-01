import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:18100/doc.html#/default/门户用户收藏功能相关/removeByIdUsingPOST
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/portalUserFavorite/removeById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
