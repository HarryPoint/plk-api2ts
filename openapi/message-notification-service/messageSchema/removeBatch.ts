import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/消息方案/removeBatchUsingPOST_2
export default function fetchMethod(data: IMessageSchemaBatchRemoveRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/message-notification-service/messageSchema/removeBatch",
      data,
    });
}
// MessageSchemaBatchRemoveRequestDTO
export interface IMessageSchemaBatchRemoveRequestDTO {
    // ID 列表
    idList: number[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
