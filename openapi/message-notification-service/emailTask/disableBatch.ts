import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/邮件任务/disableBatchUsingPOST
export default function fetchMethod(data: IEmailTaskDisableRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailTask/disableBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// EmailTaskDisableRequestDTO
export interface IEmailTaskDisableRequestDTO {
    // undefined
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
