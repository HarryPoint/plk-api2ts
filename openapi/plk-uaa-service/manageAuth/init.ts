import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/运营管理端授权相关/initUsingPOST
export default function fetchMethod() {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/manageAuth/init",
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
