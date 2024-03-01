import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryNoticeListUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListNotificationField>(
        {
            url: "/masterdata-service/qmsDashboard/queryNoticeList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«通告栏»» */
export interface IJSONResultListNotificationField {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: INoticeBoard[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 通告栏 */
export interface INoticeBoard {
    /** 通知内容 */
    content?: string;
    /** ID */
    id?: string;
}
