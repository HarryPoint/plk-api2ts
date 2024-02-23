import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/权限码脚本相关/uploadPermissionCodeUsingPOST
export default function fetchMethod() {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/scriptPermissionCode/uploadPermissionCode",
        method: "post",
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
