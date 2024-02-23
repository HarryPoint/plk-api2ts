import { get } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/迁移脚本相关/addDefaultPortalUserFavoriteUsingGET
export default function fetchMethod(data: number) {
    return get<IJSONResultobject['data']>({
      url: "/plk-uaa-service/script/addDefaultPortalUserFavorite",
      data,
    });
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
