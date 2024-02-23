import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/自定义应用相关/batchInvalidByFlowPathIdUsingPOST
export default function fetchMethod(data: IIdCollectionInformation, params: { flowPathId: number }) {
    return http<IJSONResultobject>({
        url: "/app-mobile-web/api/app/mobile/customApplication/batchInvalid",
        method: "post",
        data,
        params,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
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
