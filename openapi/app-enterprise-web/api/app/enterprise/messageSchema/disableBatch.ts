import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/消息方案相关/disableBatchUsingPOST_2
export default function fetchMethod(data: IMessageSchemaBatchDisableRequestDTO) {
    return http<IJSONResultstring>({
        url: "/app-enterprise-web/api/app/enterprise/messageSchema/disableBatch",
        method: "post",
        data,
    });
}
// MessageSchemaBatchDisableRequestDTO
export interface IMessageSchemaBatchDisableRequestDTO {
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
