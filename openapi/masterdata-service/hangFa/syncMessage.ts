import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/航发相关/syncMessageUsingPOST
export function fetchMethod(data: IKingdeeMessageSendRequest) {
    return post({
      url: "/masterdata-service/hangFa/syncMessage",
      data,
    });
}
// 金蝶消息发送请求
export interface IKingdeeMessageSendRequest {
    // 消息id
    id: string;
    // 标题
    title: string;
    // 消息内容
    content: string;
    // 消息发送人
    sendEmployeeId: number;
    // 消息接收人
    receiveEmployeeIds: number[];
    // 跳转完整url
    url: string;
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
