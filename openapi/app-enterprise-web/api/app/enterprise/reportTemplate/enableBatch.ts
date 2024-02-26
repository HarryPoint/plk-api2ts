import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/报表模板/enableBatchUsingPOST_4
*/
export default function fetchMethod(options: { data: IReportTemplateEnableRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reportTemplate/enableBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ReportTemplateEnableRequestDTO */
export interface IReportTemplateEnableRequestDTO {
    /** ID列表 */
    idList?: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
