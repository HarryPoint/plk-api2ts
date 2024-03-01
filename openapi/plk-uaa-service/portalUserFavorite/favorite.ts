import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:18100/doc.html#/default/门户用户收藏功能相关/favoriteUsingPOST_1
*/
export default function fetchMethod(options: { data: IPortalUserFavoriteRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/portalUserFavorite/favorite",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** PortalUserFavoriteRequestDTO */
export interface IPortalUserFavoriteRequestDTO {
    /** 客户端组编码 */
    clientGroupCode: string;
    /** Hse门户id */
    hsePortalId: string;
    /** Qms门户id */
    qmsPortalId: string;
    /** 路由id */
    routerId: string;
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
