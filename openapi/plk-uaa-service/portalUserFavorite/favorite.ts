import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/门户用户收藏功能相关/favoriteUsingPOST_1
export default function fetchMethod(data: IPortalUserFavoriteRequestDTO) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/portalUserFavorite/favorite",
      data,
    });
}
// PortalUserFavoriteRequestDTO
export interface IPortalUserFavoriteRequestDTO {
    // Qms门户id
    qmsPortalId: number;
    // Hse门户id
    hsePortalId: number;
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
