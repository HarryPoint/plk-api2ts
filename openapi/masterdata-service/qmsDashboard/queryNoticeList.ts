import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryNoticeListUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListNotificationField>(
        {
            url: "/masterdata-service/qmsDashboard/queryNoticeList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«通告栏»» */
export interface IJSONResultListNotificationField {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: INoticeBoard[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 通告栏 */
export interface INoticeBoard {
    /** ID */
    id?: number;
    /** 通知内容 */
    content?: string;
}
