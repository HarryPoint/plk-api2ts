import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/消息相关/changeReadQhseUsingPOST
export default function fetchMethod(data: IMessageChangeReadDTO) {
    return http<IJSONResultobject>({
        url: "/message-notification-service/message/changeReadQhse",
        method: "post",
        data,
    });
}
// 消息变更已读DTO
export interface IMessageChangeReadDTO {
    // 是否全部标记已读
    isAll: string;
    // 单个标记id，isAll=N时必传
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