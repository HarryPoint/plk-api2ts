import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getExportAuthInfoAndUpdateByTicketUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportedTicketInformation1>(
        {
            url: "/masterdata-service/exportAuth/getExportAuthInfoAndUpdateByTicket",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出ticket信息»_1 */
export interface IJSONResultExportedTicketInformation1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportTicketInformation1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出ticket信息_1 */
export interface IExportTicketInformation1 {
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属企业编码 */
    enterpriseCode?: string;
    /** 所属企业编码 */
    searchInfo?: string;
}
