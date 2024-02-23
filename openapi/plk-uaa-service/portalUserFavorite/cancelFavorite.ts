import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/门户用户收藏功能相关/cancelFavoriteUsingPOST_1
export default function fetchMethod(data: IEnterpriseRouteCollectionCancelRequestDTO1) {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/portalUserFavorite/cancelFavorite",
        method: "post",
        data,
    });
}
// 企业路由收藏取消请求 DTO_1
export interface IEnterpriseRouteCollectionCancelRequestDTO1 {
    // 路由id
    routerId: number;
    // 客户端组编码
    clientGroupCode: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
