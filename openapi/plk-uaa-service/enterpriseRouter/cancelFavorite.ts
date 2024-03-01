import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业路由相关/cancelFavoriteUsingPOST
*/
export default function fetchMethod(options: { data: ITheEnterpriseRoutingCollectionCancelsTheRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/cancelFavorite",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由收藏取消请求 DTO */
export interface ITheEnterpriseRoutingCollectionCancelsTheRequestDTO {
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 路由id */
    id?: string;
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
