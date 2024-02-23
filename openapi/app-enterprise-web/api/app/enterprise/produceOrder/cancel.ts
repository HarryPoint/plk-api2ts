import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产订单相关/cancelUsingPOST_1
export default function fetchMethod(data: IIdInformation) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/produceOrder/cancel",
        method: "post",
        data,
    });
}
// id信息
export interface IIdInformation {
    // id
    id: number;
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