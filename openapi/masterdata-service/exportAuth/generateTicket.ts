import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/导出相关/generateTicketUsingPOST
export default function fetchMethod(params: { enterpriseCode: string; enterpriseId: number; searchJson: string; type: string; userId: number }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/masterdata-service/exportAuth/generateTicket",
            method: "post",
            params,
        },
        extraOptions,
    );
}
// JSONResult«导出ticket信息»
export interface IJSONResultExportedTicketInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportingTicketInformation;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出ticket信息
export interface IExportingTicketInformation {
    // 导出凭证ticket
    ticket: string;
}
