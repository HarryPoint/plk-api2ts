import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/服务Api相关/editBatchUsingPOST
export default function fetchMethod(data: IServeauthrequestdto) {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/serveApi/editBatch",
        method: "post",
        data,
    });
}
// ServeAuthRequestDTO
export interface IServeauthrequestdto {
    // undefined
    serveCode: string;
    // undefined
    serveApis: IRequestdto[];
}
// ServeApiRequestDTO
export interface IRequestdto {
    // undefined
    api: string;
    // undefined
    isLogin: string;
    // undefined
    checkMode: string;
    // undefined
    permissionCode: string;
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
