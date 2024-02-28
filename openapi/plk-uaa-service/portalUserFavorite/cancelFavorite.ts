import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:18100/doc.html#/default/门户用户收藏功能相关/cancelFavoriteUsingPOST_1
*/
export default function fetchMethod(options: { data: IEnterpriseRouteCollectionCancelRequestDTO1 }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/portalUserFavorite/cancelFavorite",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由收藏取消请求 DTO_1 */
export interface IEnterpriseRouteCollectionCancelRequestDTO1 {
    /** 路由id */
    routerId?: string;
    /** 客户端组编码 */
    clientGroupCode: string;
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
    ts?: string;
}
