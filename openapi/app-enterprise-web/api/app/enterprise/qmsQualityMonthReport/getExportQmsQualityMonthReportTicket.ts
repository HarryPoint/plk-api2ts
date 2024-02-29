import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/质量月报报表相关/getExportQmsQualityMonthReportTicketUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qmsQualityMonthReport/getExportQmsQualityMonthReportTicket",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出ticket信息» */
export interface IJSONResultExportedTicketInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportingTicketInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出ticket信息 */
export interface IExportingTicketInformation {
    /** 导出凭证ticket */
    ticket?: string;
}
